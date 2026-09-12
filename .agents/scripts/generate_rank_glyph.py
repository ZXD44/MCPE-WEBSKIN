#!/usr/bin/env python3
"""
=============================================================================
Minecraft Bedrock Rank Glyph Sheet & Registry Generator (Complete 31 Ranks)
=============================================================================
Generates unified glyph sheet (glyph_E8.png) combining Dimension icons & all 31 Rank badges,
exports type-safe rankRegistry.js into Moblie - BP, and bumps RP version automatically.
=============================================================================
"""

import os
import sys
import json
import argparse
from PIL import Image

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
PROJECT_ROOT = os.path.abspath(os.path.join(SCRIPT_DIR, "..", ".."))

RP_FONT_DIR = os.path.join(PROJECT_ROOT, "development_resource_packs", "Moblie - RP", "font")
BP_SYSTEMS_DIR = os.path.join(PROJECT_ROOT, "development_behavior_packs", "Moblie - BP", "scripts", "systems", "rank")
RP_MANIFEST = os.path.join(PROJECT_ROOT, "development_resource_packs", "Moblie - RP", "manifest.json")
WORLD_RP = os.path.join(PROJECT_ROOT, "worlds", "TEST", "world_resource_packs.json")

SAMPLE_E2_PATH = os.path.join(PROJECT_ROOT, "ตัวอย่างระบบต่างๆ", "BetterChatRanks (v26.40)", "BetterChatRanksRP", "font", "glyph_E2.png")
SAMPLE_E8_PATH = os.path.join(PROJECT_ROOT, "ตัวอย่างระบบต่างๆ", "BetterChatRanks (v26.40)", "BetterChatRanksRP", "font", "glyph_E8.png")

# Unicode page configuration: E8 (0xE800 - 0xE8FF)
UNICODE_PAGE = "E8"

# Complete 31 Ranks Definition matching exact visual badges from sample:
# (target_index, id, name_th, color_code, tag_color, priority, source_sample_idx)
# Row 1: 0x10 to 0x1F (Badges 00 to 15)
# Row 2: 0x20 to 0x2E (Badges 16 to 30)
RANKS_DEF = [
    # Row 1: Badges 00 - 15
    (0x10, "admin",       "แอดมิน",         "§c", "§6", 90,  0),   # 00: ADMIN
    (0x11, "dev",         "นักพัฒนา",        "§d", "§5", 88,  1),   # 01: DEV
    (0x12, "member",      "ประชาชน",        "§f", "§7", 10,  2),   # 02: MEMBER
    (0x13, "mod",         "ผู้ดูแล",          "§9", "§b", 85,  3),   # 03: MOD
    (0x14, "owner",       "เจ้าของ",         "§4", "§c", 100, 4),   # 04: OWNER
    (0x15, "copper",      "ทองแดง",         "§6", "§e", 30,  5),   # 05: COPPER
    (0x16, "diamond",     "เพชร",           "§b", "§3", 38,  6),   # 06: DIAMOND
    (0x17, "gold",        "ทองคำ",          "§e", "§6", 35,  7),   # 07: GOLD
    (0x18, "iron",        "เหล็ก",           "§f", "§7", 32,  8),   # 08: IRON
    (0x19, "netherite",   "เนเธอร์ไรต์",      "§5", "§d", 42,  9),   # 09: NETHERITE
    (0x1A, "stone",       "หินผา",          "§7", "§8", 18,  10),  # 10: STONE
    (0x1B, "builder",     "นักสร้าง",        "§e", "§6", 70,  11),  # 11: BUILDER
    (0x1C, "donator",     "ผู้สนับสนุน",      "§d", "§5", 65,  12),  # 12: DONATOR
    (0x1D, "explorer",    "นักสำรวจ",        "§3", "§b", 22,  13),  # 13: EXPLORER
    (0x1E, "farmer",      "เกษตรกร",        "§a", "§2", 21,  14),  # 14: FARMER
    (0x1F, "helper",      "ผู้ช่วย",          "§a", "§2", 75,  15),  # 15: HELPER

    # Row 2: Badges 16 - 30
    (0x20, "miner",       "คนเหมือง",        "§b", "§3", 23,  16),  # 16: MINER
    (0x21, "warrior",     "นักรบ",          "§c", "§4", 28,  17),  # 17: WARRIOR
    (0x22, "danger",      "ตัวอันตราย",      "§c", "§4", 24,  18),  # 18: DANGER
    (0x23, "dead",        "ผู้ดับสูญ",        "§8", "§7", 15,  19),  # 19: DEAD
    (0x24, "elite",       "ชนชั้นนำ",        "§f", "§e", 60,  20),  # 20: ELITE
    (0x25, "fire",        "เปลวเพลิง",       "§6", "§c", 27,  21),  # 21: FIRE
    (0x26, "hacker",      "แฮกเกอร์",        "§a", "§2", 45,  22),  # 22: HACKER
    (0x27, "toxic",       "สารพิษ",         "§a", "§2", 25,  23),  # 23: TOXIC
    (0x28, "water",       "สายน้ำ",          "§9", "§b", 26,  24),  # 24: WATER
    (0x29, "tiktok",      "ติ๊กต็อก",         "§b", "§d", 48,  25),  # 25: TIKTOK
    (0x2A, "twitch",      "ทวิช",           "§d", "§5", 49,  26),  # 26: TWITCH
    (0x2B, "youtube",     "ยูทูบ",          "§c", "§4", 50,  27),  # 27: YOUTUBE
    (0x2C, "mvp",         "MVP",            "§6", "§e", 58,  28),  # 28: MVP
    (0x2D, "vip",         "VIP",            "§e", "§6", 52,  29),  # 29: VIP
    (0x2E, "vip_plus",    "VIP+",           "§6", "§e", 55,  30),  # 30: VIP+
    (0x2F, "doctor",      "หมอ",            "§c", "§c", 36,  None),# 31: DOCTOR
    (0x30, "police",      "ตำรวจ",          "§9", "§b", 38,  None),# 32: POLICE
]

# Dimensions: (col_index, dim_id, name, source_e2_idx)
DIMS_DEF = [
    (0x00, "minecraft:overworld", "โลกหลัก (Overworld)", 0),  # E800
    (0x01, "minecraft:nether",    "เนเธอร์ (Nether)",    1),  # E801
    (0x02, "minecraft:the_end",   "ดิเอนด์ (The End)",  2),  # E802
]

def create_custom_dev_badge():
    """
    Renders a pixel-perfect, high-contrast DEV badge matching ADMIN badge dimensions.
    Features:
    - Left circle emblem: Coding bracket </> with neon cyan slash
    - Right capsule: Rich magenta fill, dark purple border, crisp white DEV lettering
    """
    w, h = 35, 10
    img = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    p = img.load()

    c_dark = (70, 8, 80, 255)       # Dark Purple/Magenta border
    c_bevel = (160, 20, 175, 255)    # Medium Magenta bevel
    c_fill = (215, 35, 210, 255)     # Bright Magenta fill
    c_white = (255, 255, 255, 255)   # White
    c_cyan = (80, 250, 255, 255)     # Neon Cyan accent

    # Emblem 10x10 circle
    for y in range(h):
        for x in range(10):
            is_b = False
            is_in = False
            if (y == 0 or y == 9) and (2 <= x <= 7): is_b = True
            elif (y == 1 or y == 8) and (x == 1 or x == 8): is_b = True
            elif (2 <= y <= 7) and (x == 0 or x == 9): is_b = True
            elif (1 <= y <= 8) and (1 <= x <= 8): is_in = True

            if is_b: p[x, y] = c_dark
            elif is_in: p[x, y] = c_bevel if y >= 7 else c_fill

    # Connector between emblem and pill
    p[9, 3] = c_dark; p[10, 3] = c_dark
    p[9, 4] = c_fill; p[10, 4] = c_fill
    p[9, 5] = c_fill; p[10, 5] = c_fill
    p[9, 6] = c_dark; p[10, 6] = c_dark

    # Pill from x=11 to x=34 (24px)
    for y in range(h):
        for x in range(11, w):
            is_b = False
            is_in = False
            if (y == 0 or y == 9) and (13 <= x <= w - 3): is_b = True
            elif (y == 1 or y == 8) and (x == 12 or x == w - 2): is_b = True
            elif (2 <= y <= 7) and (x == 11 or x == w - 1): is_b = True
            elif (1 <= y <= 8) and (12 <= x <= w - 2): is_in = True

            if is_b: p[x, y] = c_dark
            elif is_in: p[x, y] = c_bevel if y >= 7 else c_fill

    # Emblem icon: Console Prompt >_ (Cyan '>' & Crisp White '_')
    p[2, 2] = c_cyan
    p[3, 3] = c_cyan
    p[4, 4] = c_cyan
    p[3, 5] = c_cyan
    p[2, 6] = c_cyan
    p[5, 6] = c_white
    p[6, 6] = c_white
    p[7, 6] = c_white

    # Letters DEV
    # D at x=14
    for dy in range(5): p[14, 2 + dy] = c_white
    p[15, 2] = c_white; p[16, 2] = c_white; p[17, 3] = c_white
    p[17, 4] = c_white; p[17, 5] = c_white
    p[15, 6] = c_white; p[16, 6] = c_white

    # E at x=19
    for dy in range(5): p[19, 2 + dy] = c_white
    p[20, 2] = c_white; p[21, 2] = c_white; p[22, 2] = c_white
    p[20, 4] = c_white; p[21, 4] = c_white
    p[20, 6] = c_white; p[21, 6] = c_white; p[22, 6] = c_white

    # V at x=24
    p[24, 2] = c_white; p[24, 3] = c_white; p[24, 4] = c_white
    p[25, 5] = c_white
    p[26, 6] = c_white
    p[27, 5] = c_white
    p[28, 2] = c_white; p[28, 3] = c_white; p[28, 4] = c_white

    return img

def create_custom_doctor_badge():
    """
    Renders DOCTOR badge: Crimson Red pill with White Cross emblem and DOCTOR text.
    """
    w, h = 46, 10
    img = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    p = img.load()
    c_dark = (140, 15, 20, 255)
    c_bevel = (200, 30, 40, 255)
    c_fill = (245, 45, 55, 255)
    c_white = (255, 255, 255, 255)

    for y in range(h):
        for x in range(10):
            is_b = False; is_in = False
            if (y == 0 or y == 9) and (2 <= x <= 7): is_b = True
            elif (y == 1 or y == 8) and (x == 1 or x == 8): is_b = True
            elif (2 <= y <= 7) and (x == 0 or x == 9): is_b = True
            elif (1 <= y <= 8) and (1 <= x <= 8): is_in = True
            if is_b: p[x, y] = c_dark
            elif is_in: p[x, y] = c_bevel if y >= 7 else c_fill

    p[9, 3] = c_dark; p[10, 3] = c_dark
    p[9, 4] = c_fill; p[10, 4] = c_fill
    p[9, 5] = c_fill; p[10, 5] = c_fill
    p[9, 6] = c_dark; p[10, 6] = c_dark

    for y in range(h):
        for x in range(11, w):
            is_b = False; is_in = False
            if (y == 0 or y == 9) and (13 <= x <= w - 3): is_b = True
            elif (y == 1 or y == 8) and (x == 12 or x == w - 2): is_b = True
            elif (2 <= y <= 7) and (x == 11 or x == w - 1): is_b = True
            elif (1 <= y <= 8) and (12 <= x <= w - 2): is_in = True
            if is_b: p[x, y] = c_dark
            elif is_in: p[x, y] = c_bevel if y >= 7 else c_fill

    # Cross
    for x in range(2, 8): p[x, 4] = c_white; p[x, 5] = c_white
    for y in range(2, 8): p[4, y] = c_white; p[5, y] = c_white

    # D at x=14
    for dy in range(5): p[14, 2 + dy] = c_white
    p[15, 2] = c_white; p[16, 2] = c_white; p[17, 3] = c_white; p[17, 4] = c_white; p[17, 5] = c_white; p[15, 6] = c_white; p[16, 6] = c_white
    # O at x=19
    for dy in range(5): p[19, 2 + dy] = c_white; p[22, 2 + dy] = c_white
    p[20, 2] = c_white; p[21, 2] = c_white; p[20, 6] = c_white; p[21, 6] = c_white
    # C at x=24
    for dy in range(5): p[24, 2 + dy] = c_white
    p[25, 2] = c_white; p[26, 2] = c_white; p[27, 2] = c_white; p[25, 6] = c_white; p[26, 6] = c_white; p[27, 6] = c_white
    # T at x=29
    for x in range(29, 32): p[x, 2] = c_white
    for dy in range(1, 5): p[30, 2 + dy] = c_white
    # O at x=33
    for dy in range(5): p[33, 2 + dy] = c_white; p[36, 2 + dy] = c_white
    p[34, 2] = c_white; p[35, 2] = c_white; p[34, 6] = c_white; p[35, 6] = c_white
    # R at x=38
    for dy in range(5): p[38, 2 + dy] = c_white
    p[39, 2] = c_white; p[40, 2] = c_white; p[41, 3] = c_white; p[39, 4] = c_white; p[40, 4] = c_white; p[40, 5] = c_white; p[41, 6] = c_white

    return img

def create_custom_police_badge():
    """
    Renders POLICE badge: Navy Blue pill with Golden Star Shield emblem and POLICE text.
    """
    w, h = 43, 10
    img = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    p = img.load()
    c_dark = (10, 25, 65, 255)
    c_bevel = (20, 55, 130, 255)
    c_fill = (25, 80, 195, 255)
    c_white = (255, 255, 255, 255)
    c_gold = (255, 215, 0, 255)
    c_gold_d = (200, 160, 0, 255)

    for y in range(h):
        for x in range(10):
            is_b = False; is_in = False
            if (y == 0 or y == 9) and (2 <= x <= 7): is_b = True
            elif (y == 1 or y == 8) and (x == 1 or x == 8): is_b = True
            elif (2 <= y <= 7) and (x == 0 or x == 9): is_b = True
            elif (1 <= y <= 8) and (1 <= x <= 8): is_in = True
            if is_b: p[x, y] = c_dark
            elif is_in: p[x, y] = c_bevel if y >= 7 else c_fill

    p[9, 3] = c_dark; p[10, 3] = c_dark
    p[9, 4] = c_fill; p[10, 4] = c_fill
    p[9, 5] = c_fill; p[10, 5] = c_fill
    p[9, 6] = c_dark; p[10, 6] = c_dark

    for y in range(h):
        for x in range(11, w):
            is_b = False; is_in = False
            if (y == 0 or y == 9) and (13 <= x <= w - 3): is_b = True
            elif (y == 1 or y == 8) and (x == 12 or x == w - 2): is_b = True
            elif (2 <= y <= 7) and (x == 11 or x == w - 1): is_b = True
            elif (1 <= y <= 8) and (12 <= x <= w - 2): is_in = True
            if is_b: p[x, y] = c_dark
            elif is_in: p[x, y] = c_bevel if y >= 7 else c_fill

    # Shield with star
    p[4, 2] = c_gold; p[5, 2] = c_gold
    p[2, 3] = c_gold; p[3, 3] = c_gold; p[4, 3] = c_white; p[5, 3] = c_white; p[6, 3] = c_gold; p[7, 3] = c_gold
    p[2, 4] = c_gold; p[3, 4] = c_white; p[4, 4] = c_gold; p[5, 4] = c_gold; p[6, 4] = c_white; p[7, 4] = c_gold
    p[2, 5] = c_gold; p[3, 5] = c_gold; p[4, 5] = c_white; p[5, 5] = c_white; p[6, 5] = c_gold; p[7, 5] = c_gold
    p[3, 6] = c_gold; p[4, 6] = c_gold; p[5, 6] = c_gold; p[6, 6] = c_gold
    p[4, 7] = c_gold_d; p[5, 7] = c_gold_d

    # P at x=14
    for dy in range(5): p[14, 2 + dy] = c_white
    p[15, 2] = c_white; p[16, 2] = c_white; p[17, 3] = c_white; p[15, 4] = c_white; p[16, 4] = c_white; p[17, 4] = c_white
    # O at x=19
    for dy in range(5): p[19, 2 + dy] = c_white; p[22, 2 + dy] = c_white
    p[20, 2] = c_white; p[21, 2] = c_white; p[20, 6] = c_white; p[21, 6] = c_white
    # L at x=24
    for dy in range(5): p[24, 2 + dy] = c_white
    p[25, 6] = c_white; p[26, 6] = c_white
    # I at x=28
    for x in range(28, 31): p[x, 2] = c_white; p[x, 6] = c_white
    for dy in range(1, 4): p[29, 2 + dy] = c_white
    # C at x=32
    for dy in range(5): p[32, 2 + dy] = c_white
    p[33, 2] = c_white; p[34, 2] = c_white; p[35, 2] = c_white; p[33, 6] = c_white; p[34, 6] = c_white; p[35, 6] = c_white
    # E at x=37
    for dy in range(5): p[37, 2 + dy] = c_white
    p[38, 2] = c_white; p[39, 2] = c_white; p[40, 2] = c_white; p[38, 4] = c_white; p[39, 4] = c_white; p[38, 6] = c_white; p[39, 6] = c_white; p[40, 6] = c_white

    return img

def build_glyph_sheet():
    """
    Composites Dimension icons and all 33 Rank badges into a single 2048x2048 glyph_E8.png
    """
    sheet_size = 2048
    cell_size = sheet_size // 16  # 128x128
    master_sheet = Image.new("RGBA", (sheet_size, sheet_size), (0, 0, 0, 0))

    # 1. Load dimension icons from sample E2
    if os.path.exists(SAMPLE_E2_PATH):
        src_e2 = Image.open(SAMPLE_E2_PATH).convert("RGBA")
        for col_idx, dim_id, name, src_idx in DIMS_DEF:
            src_c = src_idx % 16
            src_r = src_idx // 16
            box = (src_c * cell_size, src_r * cell_size, (src_c + 1) * cell_size, (src_r + 1) * cell_size)
            cell_crop = src_e2.crop(box)

            # Paste into row 0
            dest_box = (col_idx * cell_size, 0, (col_idx + 1) * cell_size, cell_size)
            master_sheet.paste(cell_crop, dest_box)
            print(f"✔ Placed Dimension '{name}' at \\u{UNICODE_PAGE}{col_idx:02X}")

    # 2. Load badges
    src_e8 = Image.open(SAMPLE_E8_PATH).convert("RGBA") if os.path.exists(SAMPLE_E8_PATH) else None
    for target_idx, rank_id, name_th, color, tag_color, priority, src_idx in RANKS_DEF:
        tgt_c = target_idx % 16
        tgt_r = target_idx // 16

        if rank_id == "dev":
            badge = create_custom_dev_badge()
            master_sheet.paste(badge, (tgt_c * cell_size, tgt_r * cell_size + 59), badge)
            print(f"✔ Placed Custom Rank '{name_th}' ({rank_id}) at \\u{UNICODE_PAGE}{target_idx:02X}")
        elif rank_id == "doctor":
            badge = create_custom_doctor_badge()
            master_sheet.paste(badge, (tgt_c * cell_size, tgt_r * cell_size + 59), badge)
            print(f"✔ Placed Custom Rank '{name_th}' ({rank_id}) at \\u{UNICODE_PAGE}{target_idx:02X}")
        elif rank_id == "police":
            badge = create_custom_police_badge()
            master_sheet.paste(badge, (tgt_c * cell_size, tgt_r * cell_size + 59), badge)
            print(f"✔ Placed Custom Rank '{name_th}' ({rank_id}) at \\u{UNICODE_PAGE}{target_idx:02X}")
        elif src_e8 and src_idx is not None:
            src_c = src_idx % 16
            src_r = src_idx // 16
            box = (src_c * cell_size, src_r * cell_size, (src_c + 1) * cell_size, (src_r + 1) * cell_size)
            cell_crop = src_e8.crop(box)

            dest_box = (tgt_c * cell_size, tgt_r * cell_size, (tgt_c + 1) * cell_size, (tgt_r + 1) * cell_size)
            master_sheet.paste(cell_crop, dest_box)
            print(f"✔ Placed Rank '{name_th}' ({rank_id}) at \\u{UNICODE_PAGE}{target_idx:02X}")

    # Save to Moblie - RP/font/glyph_E8.png
    os.makedirs(RP_FONT_DIR, exist_ok=True)
    out_png_path = os.path.join(RP_FONT_DIR, f"glyph_{UNICODE_PAGE}.png")
    master_sheet.save(out_png_path, "PNG", optimize=True)
    print(f"\n✔ Successfully generated unified glyph sheet: {out_png_path} ({os.path.getsize(out_png_path):,} bytes)")

def generate_js_registry():
    """
    Exports rankRegistry.js into Moblie - BP/scripts/systems/
    """
    os.makedirs(BP_SYSTEMS_DIR, exist_ok=True)
    out_js_path = os.path.join(BP_SYSTEMS_DIR, "rankRegistry.js")

    js_code = """// =============================================================================
// AUTO-GENERATED BY .agents/scripts/generate_rank_glyph.py
// COMPLETE 31 RANKS + 3 DIMENSIONS
// DO NOT MODIFY UNICODE GLYPHS MANUALLY! RE-RUN SCRIPT TO REGENERATE.
// =============================================================================

/**
 * Dimension Indicator Glyphs (Row 0 of glyph_E8.png)
 */
export const DIMENSION_GLYPHS = {
"""
    for col_idx, dim_id, name, _ in DIMS_DEF:
        char_hex = f"\\u{UNICODE_PAGE}{col_idx:02X}"
        js_code += f'    "{dim_id}": "{char_hex}", // {name}\n'

    js_code += """};

/**
 * Rank Definitions (Registry) - 31 Distinct Ranks
 * @type {Record<string, { id: string, name: string, glyph: string, color: string, tagColor: string, priority: number }>}
 */
export const RANK_REGISTRY = {
"""
    for target_idx, rank_id, name_th, color, tag_color, priority, _ in RANKS_DEF:
        char_hex = f"\\u{UNICODE_PAGE}{target_idx:02X}"
        js_code += f"""    "{rank_id}": {{
        id: "{rank_id}",
        name: "{name_th}",
        glyph: "{char_hex}",
        color: "{color}",
        tagColor: "{tag_color}",
        priority: {priority}
    }},
"""

    js_code += """};

export const DEFAULT_RANK_ID = "member";

/**
 * Sorted list of ranks by priority descending
 */
export const RANK_LIST = Object.values(RANK_REGISTRY).sort((a, b) => b.priority - a.priority);
"""

    with open(out_js_path, "w", encoding="utf-8") as f:
        f.write(js_code)
    print(f"✔ Generated JavaScript registry: {out_js_path} ({len(RANKS_DEF)} ranks)")

def bump_rp_version():
    """
    Bumps RP manifest patch version and syncs world_resource_packs.json
    """
    if not os.path.exists(RP_MANIFEST):
        print(f"RP manifest not found at: {RP_MANIFEST}")
        return

    with open(RP_MANIFEST, "r", encoding="utf-8") as f:
        manifest = json.load(f)

    current_ver = manifest["header"]["version"]
    new_ver = [current_ver[0], current_ver[1], current_ver[2] + 1]
    manifest["header"]["version"] = new_ver
    for mod in manifest.get("modules", []):
        mod["version"] = new_ver

    with open(RP_MANIFEST, "w", encoding="utf-8") as f:
        json.dump(manifest, f, indent=4)
    print(f"✔ Bumped RP manifest version: {current_ver} -> {new_ver}")

    if os.path.exists(WORLD_RP):
        with open(WORLD_RP, "r", encoding="utf-8-sig") as f:
            world_rp = json.load(f)
        for item in world_rp:
            if item.get("pack_id") == manifest["header"]["uuid"]:
                item["version"] = new_ver
        with open(WORLD_RP, "w", encoding="utf-8") as f:
            json.dump(world_rp, f, indent=2)
        print(f"✔ Synced world_resource_packs.json to {new_ver}")

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Bedrock Rank Glyph Sheet & Registry Generator")
    parser.add_argument("--build", action="store_true", help="Build glyph sheet, export JS registry, and bump RP version")
    args = parser.parse_args()

    build_glyph_sheet()
    generate_js_registry()
    bump_rp_version()
    print(f"\n✨ All {len(RANKS_DEF)} ranks generated and synchronized successfully!")
