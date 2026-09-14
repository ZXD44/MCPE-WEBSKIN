/**
 * Core Skin Processor
 * Pure math & pixel-manipulation logic independent of DOM/Browser UI
 */
import { AppError, ErrorCode } from '../errors/AppError.js';

export const VALID_EXPLICIT_RESOLUTIONS = [
  64, 128, 192, 256, 320, 384, 448, 512, 1024, 2048, 4096
];

/**
 * Validate image dimensions
 * @returns {{ isLegacy: boolean, resolution: number }}
 */
export function validateSkinDimensions(width, height) {
  if (!width || !height) {
    throw new AppError(ErrorCode.SKIN_INVALID_DIMENSIONS, { width, height });
  }

  // Legacy 64x32
  if (width === 64 && height === 32) {
    return { isLegacy: true, resolution: 64 };
  }

  if (width !== height) {
    throw new AppError(ErrorCode.SKIN_NON_SQUARE, { width, height });
  }

  const isValid =
    VALID_EXPLICIT_RESOLUTIONS.includes(width) ||
    (width % 64 === 0 && width <= 4096);

  if (!isValid) {
    throw new AppError(ErrorCode.SKIN_INVALID_DIMENSIONS, { width, height });
  }

  return { isLegacy: false, resolution: width };
}

/**
 * Detect Alex (slim 3px) vs Steve (classic 4px) from pixel array
 * @param {Uint8ClampedArray|Uint8Array} data RGBA pixel buffer
 * @param {number} width
 * @param {number} height
 * @returns {'alex'|'steve'}
 */
export function detectSkinModelFromPixels(data, width, height) {
  const scale = width / 64;
  // Inspect the right arm unused column in 3px slim model (x: 55, y: 20..31 in 64px scale)
  const checkX = Math.round(55 * scale);
  const startY = Math.round(20 * scale);
  const endY = Math.round(32 * scale);

  let allTransparent = true;
  for (let y = startY; y < endY; y++) {
    const idx = (y * width + checkX) * 4 + 3; // Alpha channel
    if (data[idx] > 10) {
      allTransparent = false;
      break;
    }
  }

  return allTransparent ? 'alex' : 'steve';
}

/**
 * Calculate UV bounds for inner and outer layers of Minecraft skin parts
 * Supports 64x64 up to 4096x4096 HD resolutions dynamically.
 * @param {number} resolution
 */
export function getPartUVRectangles(resolution) {
  const t = resolution / 64;
  const r = (x, y, w, h) => ({
    x: Math.round(x * t),
    y: Math.round(y * t),
    w: Math.round(w * t),
    h: Math.round(h * t)
  });

  return {
    head: [
      r(0, 0, 32, 16),   // Head Base (Inner)
      r(32, 0, 32, 16)   // Head Hat (Outer Layer)
    ],
    body: [
      r(16, 16, 24, 16), // Body Base (Inner)
      r(16, 32, 24, 16)  // Body Jacket (Outer Layer)
    ],
    arms: [
      r(40, 16, 16, 16), // Right Arm Base
      r(40, 32, 16, 16), // Right Arm Sleeve (Outer)
      r(32, 48, 16, 16), // Left Arm Base
      r(48, 48, 16, 16)  // Left Arm Sleeve (Outer)
    ],
    legs: [
      r(0, 16, 16, 16),  // Right Leg Base
      r(0, 32, 16, 16),  // Right Leg Pants (Outer)
      r(16, 48, 16, 16), // Left Leg Base
      r(0, 48, 16, 16)   // Left Leg Pants (Outer)
    ]
  };
}

/**
 * Erase parts in-place on a 2D Canvas context or pixel data
 * @param {CanvasRenderingContext2D} ctx
 * @param {number} resolution
 * @param {{ head: boolean, body: boolean, arms: boolean, legs: boolean }} partsToKeep
 */
export function applyPartClippingToContext(ctx, resolution, partsToKeep) {
  const rects = getPartUVRectangles(resolution);

  if (!partsToKeep.head) {
    rects.head.forEach(box => ctx.clearRect(box.x, box.y, box.w, box.h));
  }
  if (!partsToKeep.body) {
    rects.body.forEach(box => ctx.clearRect(box.x, box.y, box.w, box.h));
  }
  if (!partsToKeep.arms) {
    rects.arms.forEach(box => ctx.clearRect(box.x, box.y, box.w, box.h));
  }
  if (!partsToKeep.legs) {
    rects.legs.forEach(box => ctx.clearRect(box.x, box.y, box.w, box.h));
  }
}

/**
 * Convert legacy 64x32 skin canvas to 64x64 square canvas with complete UV limb mirroring
 * @param {CanvasImageSource} sourceImg
 * @param {HTMLCanvasElement} [targetCanvas]
 * @returns {HTMLCanvasElement}
 */
export function convert64x32To64x64(sourceImg, targetCanvas = null) {
  const canvas = targetCanvas || (typeof document !== 'undefined' ? document.createElement('canvas') : null);
  if (!canvas) {
    throw new AppError(ErrorCode.SKIN_CONVERT_FAILED, null, 'Canvas API not available');
  }

  canvas.width = 64;
  canvas.height = 64;
  const ctx = canvas.getContext('2d');
  ctx.imageSmoothingEnabled = false;

  // 1. Draw top half (64x32) directly
  ctx.drawImage(sourceImg, 0, 0);

  // Read source using offscreen scratch canvas
  const srcCanvas = typeof document !== 'undefined' ? document.createElement('canvas') : new OffscreenCanvas(64, 32);
  srcCanvas.width = 64;
  srcCanvas.height = 32;
  const sctx = srcCanvas.getContext('2d');
  sctx.imageSmoothingEnabled = false;
  sctx.drawImage(sourceImg, 0, 0);

  const copyFlipped = (sx, sy, w, h, dx, dy) => {
    ctx.save();
    ctx.translate(dx + w, dy);
    ctx.scale(-1, 1);
    ctx.drawImage(srcCanvas, sx, sy, w, h, 0, 0, w, h);
    ctx.restore();
  };

  // 2. Mirror Right Leg (0, 16, 16, 16) -> Left Leg (16, 48, 16, 16)
  copyFlipped(4, 16, 4, 4, 20, 48);  // Top
  copyFlipped(8, 16, 4, 4, 24, 48);  // Bottom
  copyFlipped(0, 20, 4, 12, 24, 52); // Outside -> Inside
  copyFlipped(4, 20, 4, 12, 20, 52); // Front -> Front
  copyFlipped(8, 20, 4, 12, 16, 52); // Inside -> Outside
  copyFlipped(12, 20, 4, 12, 28, 52);// Back -> Back

  // 3. Mirror Right Arm (40, 16, 16, 16) -> Left Arm (32, 48, 16, 16)
  copyFlipped(44, 16, 4, 4, 36, 48); // Top
  copyFlipped(48, 16, 4, 4, 40, 48); // Bottom
  copyFlipped(40, 20, 4, 12, 40, 52);// Outside -> Inside
  copyFlipped(44, 20, 4, 12, 36, 52);// Front -> Front
  copyFlipped(48, 20, 4, 12, 32, 52);// Inside -> Outside
  copyFlipped(52, 20, 4, 12, 44, 52);// Back -> Back

  return canvas;
}
