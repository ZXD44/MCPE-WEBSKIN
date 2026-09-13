/**
 * Utilities for Minecraft Bedrock Skin Project
 */

export function generateUUID() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0;
    const v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

export function generateRandomId(length = 10) {
  const letters = "abcdefghijklmnopqrstuvwxyz";
  const alphanum = "abcdefghijklmnopqrstuvwxyz0123456789";
  let result = letters.charAt(Math.floor(Math.random() * letters.length));
  for (let i = 1; i < length; i++) {
    result += alphanum.charAt(Math.floor(Math.random() * alphanum.length));
  }
  return result;
}

export function showToast(message, type = "info") {
  let container = document.getElementById("toast-container");
  if (!container) {
    container = document.createElement("div");
    container.id = "toast-container";
    container.className = "toast-container";
    document.body.appendChild(container);
  }

  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  toast.innerHTML = `<span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateX(100%)";
    toast.style.transition = "all 0.3s ease";
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

/**
 * Process skin resolution: supports standard and HD skins (512, 1024, 1048, 2048, 4096)
 * Preserves original resolution and converts legacy 64x32 skins to 64x64 with complete UV mirroring.
 */
export function processSkinResolution(img) {
  return new Promise((resolve, reject) => {
    // Legacy 64x32 skin: upgrade to 64x64 square with proper limb mirroring
    if (img.width === 64 && img.height === 32) {
      const canvas = document.createElement("canvas");
      canvas.width = 64;
      canvas.height = 64;
      const ctx = canvas.getContext("2d");
      ctx.imageSmoothingEnabled = false;

      // 1. Draw top half (64x32) directly
      ctx.drawImage(img, 0, 0);

      // Temporary canvas to read source slices without canvas self-read conflicts
      const srcCanvas = document.createElement("canvas");
      srcCanvas.width = 64;
      srcCanvas.height = 32;
      const sctx = srcCanvas.getContext("2d");
      sctx.imageSmoothingEnabled = false;
      sctx.drawImage(img, 0, 0);

      const copyFlipped = (sx, sy, w, h, dx, dy) => {
        ctx.save();
        ctx.translate(dx + w, dy);
        ctx.scale(-1, 1);
        ctx.drawImage(srcCanvas, sx, sy, w, h, 0, 0, w, h);
        ctx.restore();
      };

      // 2. Mirror Right Leg (0, 16, 16, 16) -> Left Leg (16, 48, 16, 16)
      // Top: (4, 16, 4, 4) -> (20, 48)
      copyFlipped(4, 16, 4, 4, 20, 48);
      // Bottom: (8, 16, 4, 4) -> (24, 48)
      copyFlipped(8, 16, 4, 4, 24, 48);
      // Right Leg Outside (0, 20, 4, 12) -> Left Leg Inside (24, 52)
      copyFlipped(0, 20, 4, 12, 24, 52);
      // Right Leg Front (4, 20, 4, 12) -> Left Leg Front (20, 52)
      copyFlipped(4, 20, 4, 12, 20, 52);
      // Right Leg Inside (8, 20, 4, 12) -> Left Leg Outside (16, 52)
      copyFlipped(8, 20, 4, 12, 16, 52);
      // Right Leg Back (12, 20, 4, 12) -> Left Leg Back (28, 52)
      copyFlipped(12, 20, 4, 12, 28, 52);

      // 3. Mirror Right Arm (40, 16, 16, 16) -> Left Arm (32, 48, 16, 16)
      // Top: (44, 16, 4, 4) -> (36, 48)
      copyFlipped(44, 16, 4, 4, 36, 48);
      // Bottom: (48, 16, 4, 4) -> (40, 48)
      copyFlipped(48, 16, 4, 4, 40, 48);
      // Right Arm Outside (40, 20, 4, 12) -> Left Arm Inside (40, 52)
      copyFlipped(40, 20, 4, 12, 40, 52);
      // Right Arm Front (44, 20, 4, 12) -> Left Arm Front (36, 52)
      copyFlipped(44, 20, 4, 12, 36, 52);
      // Right Arm Inside (48, 20, 4, 12) -> Left Arm Outside (32, 52)
      copyFlipped(48, 20, 4, 12, 32, 52);
      // Right Arm Back (52, 20, 4, 12) -> Left Arm Back (44, 52)
      copyFlipped(52, 20, 4, 12, 44, 52);

      const upgraded = new Image();
      upgraded.onload = () => resolve(upgraded);
      upgraded.onerror = () => reject(new Error("ไม่สามารถประมวลผลไฟล์สกินได้"));
      upgraded.src = canvas.toDataURL("image/png");
      return;
    }

    const validExplicitSizes = [64, 128, 192, 256, 320, 384, 448, 512, 1024, 1048, 2048, 4096];
    const isSquare = img.width === img.height;
    const isValidSize = validExplicitSizes.includes(img.width) || (isSquare && img.width % 64 === 0 && img.width <= 4096);

    if (!isSquare || !isValidSize) {
      reject(new Error("กรุณาอัพโหลดสกินรูปสี่เหลี่ยมจัตุรัส (เช่น 64, 128, 512, 1024, 1048, 2048, 4096)"));
      return;
    }

    // Preserve full HD resolution directly (no downscaling)
    resolve(img);
  });
}

/**
 * Detect whether skin uses Alex (slim 3px arm) or Steve (default 4px arm).
 * Analyzes alpha channel of the 2-pixel column in the right arm area.
 */
export function detectSlimModel(img) {
  try {
    const canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;
    const ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);

    const scale = img.width / 64;
    // Check right arm unused column in 3px slim model (x: 54..56, y: 20..32 in 64px scale)
    const checkX = Math.round(55 * scale);
    const startY = Math.round(20 * scale);
    const endY = Math.round(32 * scale);

    const pixelData = ctx.getImageData(checkX, startY, 1, endY - startY).data;
    let allTransparent = true;
    for (let i = 3; i < pixelData.length; i += 4) {
      if (pixelData[i] > 10) {
        allTransparent = false;
        break;
      }
    }
    return allTransparent; // true = Alex (slim), false = Steve (default)
  } catch (_) {
    return false;
  }
}

