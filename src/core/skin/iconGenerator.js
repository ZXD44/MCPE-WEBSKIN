/**
 * Minecraft Skin 16x16 Pixel Art Icon Generator
 * Pure mathematical pixel art rendering for Bedrock Addon Inventory Icons
 * Accurately renders icon based on selected equipment slot and enabled skin parts:
 * - Head Slot: Head icon ONLY (+ bangs if torso hair enabled)
 * - Suit Slot: Chestplate/Torso + Arms icon ONLY
 * - Legs Slot: Leggings/Pants icon ONLY
 * - Feet Slot: Boots/Shoes icon ONLY
 * If the corresponding part has no pixels or is disabled: returns transparent icon (no item icon).
 */

/**
 * Check if canvas contains any visible (non-transparent) pixels
 * @param {CanvasRenderingContext2D} ctx
 * @param {number} width
 * @param {number} height
 * @returns {boolean}
 */
export function hasVisiblePixels(ctx, width = 16, height = 16) {
  try {
    const imgData = ctx.getImageData(0, 0, width, height).data;
    let visibleCount = 0;
    for (let i = 3; i < imgData.length; i += 4) {
      if (imgData[i] > 15) {
        visibleCount++;
        if (visibleCount >= 3) return true;
      }
    }
  } catch (_) {}
  return false;
}

/**
 * Generate 16x16 Inventory Item Icon Canvas based on Slot & Parts
 * @param {HTMLImageElement|ImageBitmap} skinImg
 * @param {number} resolution - Base skin resolution (64, 128, etc.)
 * @param {Object} parts - { head, body, arms, legs }
 * @param {string} itemSlotType - 'head' | 'suit' | 'legs' | 'feet' | 'both'
 * @returns {HTMLCanvasElement}
 */
export function renderSlotItemIconCanvas(skinImg, resolution = 64, parts = {}, itemSlotType = 'head') {
  const canvas = document.createElement('canvas');
  canvas.width = 16;
  canvas.height = 16;
  const ctx = canvas.getContext('2d');
  if (!ctx || !skinImg) return canvas;

  ctx.imageSmoothingEnabled = false;
  const t = (resolution || 64) / 64;

  const hasHead = parts.head !== false;
  const hasBody = parts.body !== false;
  const hasArms = parts.arms !== false;
  const hasLegs = parts.legs !== false;

  if (itemSlotType === 'head') {
    // ONLY render if Head is enabled
    if (hasHead) {
      if (hasBody) {
        // Head face + Outer Hat
        ctx.drawImage(skinImg, Math.round(8 * t), Math.round(8 * t), Math.round(8 * t), Math.round(8 * t), 2, 0, 12, 12);
        ctx.drawImage(skinImg, Math.round(40 * t), Math.round(8 * t), Math.round(8 * t), Math.round(8 * t), 2, 0, 12, 12);
        // Torso bangs/hair + Outer jacket bangs
        ctx.drawImage(skinImg, Math.round(20 * t), Math.round(20 * t), Math.round(8 * t), Math.round(4 * t), 2, 12, 12, 4);
        ctx.drawImage(skinImg, Math.round(20 * t), Math.round(36 * t), Math.round(8 * t), Math.round(4 * t), 2, 12, 12, 4);
      } else {
        // Head face only (centered 16x16)
        ctx.drawImage(skinImg, Math.round(8 * t), Math.round(8 * t), Math.round(8 * t), Math.round(8 * t), 1, 1, 14, 14);
        ctx.drawImage(skinImg, Math.round(40 * t), Math.round(8 * t), Math.round(8 * t), Math.round(8 * t), 1, 1, 14, 14);
      }
    }
  } else if (itemSlotType === 'legs') {
    // ONLY render if Legs is enabled (Leggings / Pants icon ONLY)
    if (hasLegs) {
      // Right leg front (base + outer)
      ctx.drawImage(skinImg, Math.round(4 * t), Math.round(20 * t), Math.round(4 * t), Math.round(10 * t), 3, 3, 4, 11);
      ctx.drawImage(skinImg, Math.round(4 * t), Math.round(36 * t), Math.round(4 * t), Math.round(10 * t), 3, 3, 4, 11);
      // Left leg front (base + outer)
      ctx.drawImage(skinImg, Math.round(20 * t), Math.round(52 * t), Math.round(4 * t), Math.round(10 * t), 9, 3, 4, 11);
      ctx.drawImage(skinImg, Math.round(4 * t), Math.round(52 * t), Math.round(4 * t), Math.round(10 * t), 9, 3, 4, 11);
      // Waist bridge (top of pants)
      ctx.drawImage(skinImg, Math.round(4 * t), Math.round(20 * t), Math.round(4 * t), Math.round(3 * t), 3, 2, 10, 3);
      ctx.drawImage(skinImg, Math.round(4 * t), Math.round(36 * t), Math.round(4 * t), Math.round(3 * t), 3, 2, 10, 3);
    }
  } else if (itemSlotType === 'feet') {
    // ONLY render if Legs is enabled (Boots / Shoes icon ONLY)
    if (hasLegs) {
      // Right boot lower leg (base + outer)
      ctx.drawImage(skinImg, Math.round(4 * t), Math.round(26 * t), Math.round(4 * t), Math.round(6 * t), 2, 7, 5, 7);
      ctx.drawImage(skinImg, Math.round(4 * t), Math.round(42 * t), Math.round(4 * t), Math.round(6 * t), 2, 7, 5, 7);
      // Left boot lower leg (base + outer)
      ctx.drawImage(skinImg, Math.round(20 * t), Math.round(58 * t), Math.round(4 * t), Math.round(6 * t), 9, 7, 5, 7);
      ctx.drawImage(skinImg, Math.round(4 * t), Math.round(58 * t), Math.round(4 * t), Math.round(6 * t), 9, 7, 5, 7);
    }
  } else {
    // Suit (Chestplate: Torso + Arms ONLY, NO head, NO legs)
    if (hasBody) {
      ctx.drawImage(skinImg, Math.round(20 * t), Math.round(20 * t), Math.round(8 * t), Math.round(12 * t), 4, 2, 8, 12);
      ctx.drawImage(skinImg, Math.round(20 * t), Math.round(36 * t), Math.round(8 * t), Math.round(12 * t), 4, 2, 8, 12);
    }
    if (hasArms) {
      // Right arm
      ctx.drawImage(skinImg, Math.round(44 * t), Math.round(20 * t), Math.round(4 * t), Math.round(12 * t), 0, 2, 4, 12);
      ctx.drawImage(skinImg, Math.round(44 * t), Math.round(36 * t), Math.round(4 * t), Math.round(12 * t), 0, 2, 4, 12);
      // Left arm
      ctx.drawImage(skinImg, Math.round(36 * t), Math.round(52 * t), Math.round(4 * t), Math.round(12 * t), 12, 2, 4, 12);
      ctx.drawImage(skinImg, Math.round(52 * t), Math.round(52 * t), Math.round(4 * t), Math.round(12 * t), 12, 2, 4, 12);
    }
  }

  // If the drawn canvas has no visible pixels (transparent skin part): clear completely
  if (!hasVisiblePixels(ctx, 16, 16)) {
    ctx.clearRect(0, 0, 16, 16);
  }

  return canvas;
}

/**
 * Generate 16x16 Inventory Item Icon Blob based on Slot & Parts
 * @param {HTMLImageElement|ImageBitmap} skinImg
 * @param {number} resolution
 * @param {Object} parts
 * @param {string} itemSlotType
 * @returns {Promise<Blob>}
 */
export function generateSlotItemIconBlob(skinImg, resolution = 64, parts = {}, itemSlotType = 'head') {
  const canvas = renderSlotItemIconCanvas(skinImg, resolution, parts, itemSlotType);
  return new Promise(resolve => canvas.toBlob(resolve, 'image/png'));
}

/**
 * Generate 16x16 Inventory Item Icon Data URL based on Slot & Parts
 * @param {HTMLImageElement|ImageBitmap} skinImg
 * @param {number} resolution
 * @param {Object} parts
 * @param {string} itemSlotType
 * @returns {string} Data URL (empty or image/png)
 */
export function generateSlotItemIconDataUrl(skinImg, resolution = 64, parts = {}, itemSlotType = 'head') {
  const canvas = renderSlotItemIconCanvas(skinImg, resolution, parts, itemSlotType);
  const ctx = canvas.getContext('2d');
  if (!ctx || !hasVisiblePixels(ctx, 16, 16)) {
    return '';
  }
  return canvas.toDataURL('image/png');
}

/**
 * Generate 16x16 Head Icon Blob
 * @param {HTMLImageElement|ImageBitmap} skinImg
 * @param {number} resolution
 * @param {boolean} includeTorsoHair
 * @returns {Promise<Blob>}
 */
export function createHeadIconBlob(skinImg, resolution = 64, includeTorsoHair = true) {
  return generateSlotItemIconBlob(skinImg, resolution, { head: true, body: includeTorsoHair }, 'head');
}

/**
 * Generate 16x16 Suit Icon Blob (Torso + Arms)
 * @param {HTMLImageElement|ImageBitmap} skinImg
 * @param {number} resolution
 * @returns {Promise<Blob>}
 */
export function createSuitIconBlob(skinImg, resolution = 64) {
  return generateSlotItemIconBlob(skinImg, resolution, { body: true, arms: true }, 'suit');
}
