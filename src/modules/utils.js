/**
 * Utilities for Minecraft Bedrock Skin Studio
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
 * Downscale image if size > 128 using nearest neighbor (crisp pixel art)
 */
export function processSkinResolution(img) {
  return new Promise((resolve) => {
    const validSizes = [64, 128, 192, 256, 320, 384, 448, 512, 1024, 2048, 4096];
    if (!validSizes.includes(img.width) || img.width !== img.height) {
      throw new Error("กรุณาอัพโหลดสกินรูปสี่เหลี่ยมจัตุรัสที่มีขนาดมาตรฐาน เช่น 64x64 หรือ 128x128");
    }

    if (img.width > 128) {
      const canvas = document.createElement("canvas");
      canvas.width = 128;
      canvas.height = 128;
      const ctx = canvas.getContext("2d");
      ctx.imageSmoothingEnabled = false;
      ctx.drawImage(img, 0, 0, 128, 128);
      
      const downscaled = new Image();
      downscaled.onload = () => resolve(downscaled);
      downscaled.src = canvas.toDataURL("image/png");
    } else {
      resolve(img);
    }
  });
}
