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
 * Preserves original resolution and converts legacy 64x32 skins to 64x64.
 */
export function processSkinResolution(img) {
  return new Promise((resolve, reject) => {
    // Legacy 64x32 skin: upgrade to 64x64 square
    if (img.width === 64 && img.height === 32) {
      const canvas = document.createElement("canvas");
      canvas.width = 64;
      canvas.height = 64;
      const ctx = canvas.getContext("2d");
      ctx.imageSmoothingEnabled = false;
      ctx.drawImage(img, 0, 0);
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
