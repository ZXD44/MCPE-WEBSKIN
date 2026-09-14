/**
 * Utilities for Minecraft Bedrock Skin Project
 */
import {
  validateSkinDimensions,
  convert64x32To64x64,
  detectSkinModelFromPixels
} from '../core/skin/skinProcessor.js';
import { AppError } from '../core/errors/AppError.js';

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
 * Process skin resolution: supports standard and HD skins (512, 1024, 2048, 4096)
 * Preserves original resolution and converts legacy 64x32 skins to 64x64 with complete UV mirroring.
 */
export function processSkinResolution(img) {
  return new Promise((resolve, reject) => {
    try {
      const { isLegacy } = validateSkinDimensions(img.width, img.height);

      if (isLegacy) {
        const upgradedCanvas = convert64x32To64x64(img);
        const upgraded = new Image();
        upgraded.onload = () => resolve(upgraded);
        upgraded.onerror = () => reject(new Error("ไม่สามารถประมวลผลไฟล์สกินได้"));
        upgraded.src = upgradedCanvas.toDataURL("image/png");
        return;
      }

      // Preserve full HD resolution directly
      resolve(img);
    } catch (err) {
      reject(err instanceof AppError ? new Error(err.userMessage) : err);
    }
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

    const pixelData = ctx.getImageData(0, 0, img.width, img.height).data;
    const model = detectSkinModelFromPixels(pixelData, img.width, img.height);
    return model === 'alex';
  } catch (_) {
    return false;
  }
}
