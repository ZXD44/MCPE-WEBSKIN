#!/usr/bin/env python3
"""
=============================================================================
Minecraft Bedrock Smartphone Icon Generator & RP Sync Utility
=============================================================================
Generates 16x16 pixel-art icons adhering to the Smartphone Pixel Master Standard (Type 3 PLTE, 4-bit)
Pure Python - Zero external dependencies (no PIL required).
=============================================================================
"""

import os
import sys
import json
import zlib
import struct
import argparse

FRAME_COLOR = "070b13"  # Standard dark outer border

def normalize_hex(h):
    h = h.strip().lstrip("#")
    if len(h) == 3:
        h = "".join(c * 2 for c in h)
    return h

def encode_png_plte_4bit(palette_hex, rows):
    """
    Encode 16x16 pixel grid to 4-bit indexed PNG (Type 3) with PLTE chunk.
    Exactly mirrors settings.png master specification.
    """
    if len(palette_hex) < 7:
        raise ValueError(f"Palette must contain at least 7 colors, got {len(palette_hex)}")
    if len(rows) != 16:
        raise ValueError(f"Rows must be exactly 16 rows, got {len(rows)}")

    plte_data = b"".join(bytes.fromhex(normalize_hex(h)) for h in palette_hex[:16])

    raw_data = bytearray()
    for r_idx, row in enumerate(rows):
        if len(row) != 16:
            raise ValueError(f"Row {r_idx} must have exactly 16 pixels, got {len(row)}")
        raw_data.append(0)  # Filter type 0 (None)
        for i in range(0, 16, 2):
            b = ((row[i] & 0x0F) << 4) | (row[i + 1] & 0x0F)
            raw_data.append(b)

    ihdr = struct.pack(">IIBBBBB", 16, 16, 4, 3, 0, 0, 0)
    idat = zlib.compress(bytes(raw_data), 9)

    def chunk(tag, data):
        crc = zlib.crc32(tag + data) & 0xFFFFFFFF
        return struct.pack(">I", len(data)) + tag + data + struct.pack(">I", crc)

    png = b"\x89PNG\r\n\x1a\n"
    png += chunk(b"IHDR", ihdr)
    png += chunk(b"PLTE", plte_data)
    png += chunk(b"IDAT", idat)
    png += chunk(b"IEND", b"")
    return png

def check_centering(rows):
    """
    Validates horizontal centering of the symbol (colors != 0, 1, 2)
    Returns: min_x, max_x, left_m, right_m, diff, is_centered
    """
    min_x = 16
    max_x = -1
    for r in range(16):
        for c in range(16):
            if rows[r][c] not in (0, 1, 2):
                min_x = min(min_x, c)
                max_x = max(max_x, c)

    if min_x == 16:
        return 0, 0, 0, 0, 0, True

    left_m = min_x - 1
    right_m = 14 - max_x
    diff = left_m - right_m
    is_centered = (diff == 0)
    return min_x, max_x, left_m, right_m, diff, is_centered

def parse_ascii_grid(ascii_str):
    """
    Converts 16 lines of 16 characters string to rows array.
    Supports '.' for 0, or digits '0'..'6'.
    """
    lines = [line.strip() for line in ascii_str.strip().splitlines() if line.strip()]
    if len(lines) != 16:
        raise ValueError(f"ASCII grid must have 16 lines, got {len(lines)}")
    rows = []
    for line in lines:
        if len(line) != 16:
            raise ValueError(f"Line '{line}' must be 16 chars, got {len(line)}")
        row = [0 if c == '.' else int(c) for c in line]
        rows.append(row)
    return rows

def save_icon(palette_hex, rows, output_path, register_texture=True):
    """
    Generate and save icon to disk, validating centering and registering in textures_list.json
    """
    # Check centering
    min_x, max_x, left_m, right_m, diff, centered = check_centering(rows)
    if not centered:
        print(f"⚠️ [WARNING] Icon '{output_path}' NOT CENTERED! min_x={min_x}, max_x={max_x}, left_margin={left_m}, right_margin={right_m} (diff={diff})")
    else:
        print(f"✔ [OK] Icon '{output_path}' perfectly centered (left_m={left_m}, right_m={right_m})")

    png_bytes = encode_png_plte_4bit(palette_hex, rows)
    os.makedirs(os.path.dirname(os.path.abspath(output_path)), exist_ok=True)
    with open(output_path, "wb") as f:
        f.write(png_bytes)
    print(f"Saved PNG to {output_path} ({len(png_bytes)} bytes)")

    if register_texture:
        register_in_texture_list(output_path)

def register_in_texture_list(file_path):
    """
    Automatically registers icon path in textures/textures_list.json
    """
    # Resolve relative path inside RP textures/
    norm_path = file_path.replace("\\", "/")
    marker = "development_resource_packs/Moblie - RP/textures/"
    if marker in norm_path:
        rel = norm_path.split(marker)[1]
        if rel.endswith(".png"):
            rel = rel[:-4]
        tex_path = f"textures/{rel}"

        tex_list_file = os.path.join(norm_path.split(marker)[0], marker, "textures_list.json")
        if os.path.exists(tex_list_file):
            try:
                with open(tex_list_file, "r", encoding="utf-8") as f:
                    data = json.load(f)
                if tex_path not in data:
                    data.append(tex_path)
                    data.sort()
                    with open(tex_list_file, "w", encoding="utf-8") as f:
                        json.dump(data, f, indent=2, ensure_ascii=False)
                    print(f"Registered '{tex_path}' in textures_list.json")
            except Exception as e:
                print(f"Failed to update textures_list.json: {e}")

def bump_rp_version(root_dir=None):
    """
    Bump patch version in Moblie - RP/manifest.json and sync with worlds/TEST/world_resource_packs.json
    """
    if not root_dir:
        # Defaults to workspace root
        root_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", ".."))

    manifest_path = os.path.join(root_dir, "development_resource_packs", "Moblie - RP", "manifest.json")
    world_rp_path = os.path.join(root_dir, "worlds", "TEST", "world_resource_packs.json")

    if not os.path.exists(manifest_path):
        print(f"RP manifest not found at: {manifest_path}")
        return

    with open(manifest_path, "r", encoding="utf-8") as f:
        manifest = json.load(f)

    current_ver = manifest["header"]["version"]
    new_ver = [current_ver[0], current_ver[1], current_ver[2] + 1]
    manifest["header"]["version"] = new_ver
    for mod in manifest.get("modules", []):
        mod["version"] = new_ver

    with open(manifest_path, "w", encoding="utf-8") as f:
        json.dump(manifest, f, indent=4)
    print(f"✔ Bumped RP manifest to {new_ver}")

    if os.path.exists(world_rp_path):
        with open(world_rp_path, "r", encoding="utf-8-sig") as f:
            world_rp = json.load(f)
        for item in world_rp:
            if item.get("pack_id") == manifest["header"]["uuid"]:
                item["version"] = new_ver
        with open(world_rp_path, "w", encoding="utf-8") as f:
            json.dump(world_rp, f, indent=2)
        print(f"✔ Synced world_resource_packs.json to {new_ver}")

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Bedrock Smartphone Icon Generator")
    parser.add_argument("--bump", action="store_true", help="Bump RP version and sync with world")
    args = parser.parse_args()

    if args.bump:
        bump_rp_version()
    else:
        print("Run with --bump to bump version, or import as module in python.")
