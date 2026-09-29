/**
 * Utilities for Minecraft Bedrock Skin Project
 */
import {
  validateSkinDimensions,
  convert64x32To64x64,
  detectSkinModelFromPixels
} from '../core/skin/skinProcessor.js';
import { AppError } from '../core/errors/AppError.js';
import { saveAs } from 'file-saver';

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
      const dim = validateSkinDimensions(img.width, img.height);

      if (dim.isLegacy) {
        const upgradedCanvas = convert64x32To64x64(img);
        const upgraded = new Image();
        upgraded.onload = () => {
          upgraded._wasResized = true;
          upgraded._origW = img.width;
          upgraded._origH = img.height;
          resolve(upgraded);
        };
        upgraded.onerror = () => reject(new Error("ไม่สามารถประมวลผลไฟล์สกินได้"));
        upgraded.src = upgradedCanvas.toDataURL("image/png");
        return;
      }

      if (dim.needsResize) {
        const resizeCanvas = document.createElement("canvas");
        resizeCanvas.width = dim.targetResolution;
        resizeCanvas.height = dim.targetResolution;
        const rCtx = resizeCanvas.getContext("2d");
        if (!rCtx) {
          throw new Error("Canvas context unavailable");
        }
        rCtx.imageSmoothingEnabled = false;
        rCtx.drawImage(img, 0, 0, dim.targetResolution, dim.targetResolution);

        const resized = new Image();
        resized.onload = () => {
          resized._wasResized = true;
          resized._origW = img.width;
          resized._origH = img.height;
          resolve(resized);
        };
        resized.onerror = () => reject(new Error("ไม่สามารถปรับขนาดภาพสกินได้"));
        resized.src = resizeCanvas.toDataURL("image/png");
        return;
      }

      // Preserve native resolution directly
      img._wasResized = false;
      img._origW = img.width;
      img._origH = img.height;
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

/**
 * Export and trigger download of .mcaddon package without browser appending .zip
 * Forces application/octet-stream and clean .mcaddon extension.
 * @param {import('jszip')} zip
 * @param {string} rawFilename
 */
export async function downloadMcaddonFile(zip, rawFilename) {
  const cleanName = (rawFilename || 'addon')
    .trim()
    .replace(/\.zip$/i, '')
    .replace(/\.mcaddon$/i, '');

  const fileName = `${cleanName}.mcaddon`;

  // Explicitly set mimeType to 'application/octet-stream' so Chrome, Edge, and mobile browsers
  // do not treat the blob as application/zip and force-append .zip to the extension.
  const blob = await zip.generateAsync({
    type: 'blob',
    mimeType: 'application/octet-stream',
    compression: 'DEFLATE',
    compressionOptions: { level: 6 }
  });

  let fileToSave;
  try {
    fileToSave = new File([blob], fileName, { type: 'application/octet-stream' });
  } catch (_) {
    fileToSave = new Blob([blob], { type: 'application/octet-stream' });
  }

  saveAs(fileToSave, fileName);
}

/**
 * Export and trigger download of .mcpack package without browser appending .zip
 * Forces application/octet-stream and clean .mcpack extension.
 * @param {import('jszip')} zip
 * @param {string} rawFilename
 */
export async function downloadMcpackFile(zip, rawFilename) {
  const cleanName = (rawFilename || 'skin_pack')
    .trim()
    .replace(/\.zip$/i, '')
    .replace(/\.mcpack$/i, '')
    .replace(/\.mcaddon$/i, '');

  const fileName = `${cleanName}.mcpack`;

  const blob = await zip.generateAsync({
    type: 'blob',
    mimeType: 'application/octet-stream',
    compression: 'DEFLATE',
    compressionOptions: { level: 6 }
  });

  let fileToSave;
  try {
    fileToSave = new File([blob], fileName, { type: 'application/octet-stream' });
  } catch (_) {
    fileToSave = new Blob([blob], { type: 'application/octet-stream' });
  }

  saveAs(fileToSave, fileName);
}

/**
 * Convert any image (PNG, JPG, WebP, etc.) to a genuine PNG Blob via offscreen canvas
 * @param {HTMLImageElement|HTMLCanvasElement|ImageBitmap} img
 * @returns {Promise<Blob>}
 */
export function convertImageToPngBlob(img) {
  return new Promise((resolve, reject) => {
    try {
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');
      if (!ctx) {
        throw new Error('Canvas 2D context not available');
      }
      ctx.imageSmoothingEnabled = false;
      ctx.drawImage(img, 0, 0);
      canvas.toBlob(blob => {
        if (blob) {
          resolve(blob);
        } else {
          reject(new Error('Failed to convert image to PNG blob'));
        }
      }, 'image/png');
    } catch (err) {
      reject(err);
    }
  });
}



