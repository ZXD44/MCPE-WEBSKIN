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

  // Reject out of bounds (security & memory limit)
  if (width > 4096 || height > 4096 || width < 32 || height < 32) {
    throw new AppError(ErrorCode.SKIN_INVALID_DIMENSIONS, { width, height });
  }

  // Legacy 64x32
  if (width === 64 && height === 32) {
    return { isLegacy: true, needsResize: false, resolution: 64, targetResolution: 64 };
  }

  if (width !== height) {
    throw new AppError(ErrorCode.SKIN_NON_SQUARE, { width, height });
  }

  const isExactStandard =
    VALID_EXPLICIT_RESOLUTIONS.includes(width) ||
    (width % 64 === 0 && width <= 4096);

  if (isExactStandard) {
    return { isLegacy: false, needsResize: false, resolution: width, targetResolution: width };
  }

  // Arbitrary square dimensions (e.g. 1452x1452, 1254x1254, 800x800, etc.)
  // Automatically normalize to standard 64x64
  return {
    isLegacy: false,
    needsResize: true,
    resolution: 64,
    targetResolution: 64,
    originalWidth: width,
    originalHeight: height
  };
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

/**
 * Calculate UV bounds for Minecraft Outer (Overlay) layers
 * @param {number} resolution
 */
export function getOuterLayerUVRectangles(resolution) {
  const t = resolution / 64;
  const r = (x, y, w, h) => ({
    x: Math.round(x * t),
    y: Math.round(y * t),
    w: Math.round(w * t),
    h: Math.round(h * t)
  });

  return [
    r(32, 0, 32, 16),  // Head Hat (Outer Layer)
    r(16, 32, 24, 16), // Body Jacket (Outer Layer)
    r(40, 32, 16, 16), // Right Arm Sleeve (Outer Layer)
    r(48, 48, 16, 16), // Left Arm Sleeve (Outer Layer)
    r(0, 32, 16, 16),  // Right Leg Pants (Outer Layer)
    r(0, 48, 16, 16)   // Left Leg Pants (Outer Layer)
  ];
}

/**
 * Calculate UV bounds for naturally unused void regions in Minecraft skins
 * @param {number} resolution
 */
export function getVoidUVRectangles(resolution) {
  const t = resolution / 64;
  const r = (x, y, w, h) => ({
    x: Math.round(x * t),
    y: Math.round(y * t),
    w: Math.round(w * t),
    h: Math.round(h * t)
  });

  return [
    r(0, 0, 8, 8),     // Head Base top-left void
    r(24, 0, 8, 8),    // Head Base top-right void
    r(32, 0, 8, 8),    // Hat top-left void
    r(56, 0, 8, 8),    // Hat top-right void
    r(56, 16, 8, 32),  // 8x32 natural unused strip on right
    r(0, 16, 4, 4),    // Right leg unused top-left
    r(12, 16, 4, 4),   // Right leg unused top-right
    r(40, 16, 4, 4),   // Right arm unused top-left
    r(52, 16, 4, 4),   // Right arm unused top-right
    r(0, 32, 4, 4),    // Right pants unused
    r(12, 32, 4, 4),   // Right pants unused
    r(40, 32, 4, 4),   // Right sleeve unused
    r(52, 32, 4, 4),   // Right sleeve unused
    r(0, 48, 4, 4),    // Left pants unused
    r(12, 48, 4, 4),   // Left pants unused
    r(16, 48, 4, 4),   // Left leg unused
    r(28, 48, 4, 4),   // Left leg unused
    r(32, 48, 4, 4),   // Left arm unused
    r(44, 48, 4, 4),   // Left arm unused
    r(48, 48, 4, 4),   // Left sleeve unused
    r(60, 48, 4, 4)    // Left sleeve unused
  ];
}

/**
 * Detect if skin has a solid background (e.g. from JPG or non-transparent PNG)
 * by sampling naturally empty void regions.
 * @param {Uint8ClampedArray|Uint8Array} data
 * @param {number} width
 * @param {number} height
 * @returns {{ isSolid: boolean, bgColor: [number, number, number]|null, confidence: number }}
 */
export function detectSolidBackground(data, width, height) {
  const scale = width / 64;
  // Key guaranteed void coordinates in 64x64 grid
  const voidPoints = [
    [0, 0], [1, 0], [2, 1], [33, 1], [58, 1],
    [58, 20], [62, 25], [60, 40], [2, 18], [58, 45]
  ];

  let transparentCount = 0;
  const opaqueColors = [];

  for (const [gx, gy] of voidPoints) {
    const px = Math.min(width - 1, Math.floor(gx * scale));
    const py = Math.min(height - 1, Math.floor(gy * scale));
    const idx = (py * width + px) * 4;
    const a = data[idx + 3];

    if (a < 50) {
      transparentCount++;
    } else if (a >= 180) {
      opaqueColors.push([data[idx], data[idx + 1], data[idx + 2]]);
    }
  }

  // If even 20% of void pixels are transparent, native transparency is present
  if (transparentCount > voidPoints.length * 0.2 || opaqueColors.length === 0) {
    return { isSolid: false, bgColor: null, confidence: 0 };
  }

  // Find dominant color cluster among void sample points (robust against gradients/glows)
  let bestCluster = [];
  for (const pivot of opaqueColors) {
    const cluster = opaqueColors.filter(c => {
      const dist = Math.sqrt((c[0] - pivot[0]) ** 2 + (c[1] - pivot[1]) ** 2 + (c[2] - pivot[2]) ** 2);
      return dist <= 38;
    });
    if (cluster.length > bestCluster.length) {
      bestCluster = cluster;
    }
  }

  if (bestCluster.length < opaqueColors.length * 0.5) {
    return { isSolid: false, bgColor: null, confidence: 0 };
  }

  const avgR = Math.round(bestCluster.reduce((s, c) => s + c[0], 0) / bestCluster.length);
  const avgG = Math.round(bestCluster.reduce((s, c) => s + c[1], 0) / bestCluster.length);
  const avgB = Math.round(bestCluster.reduce((s, c) => s + c[2], 0) / bestCluster.length);
  const confidence = bestCluster.length / voidPoints.length;

  return {
    isSolid: confidence >= 0.6,
    bgColor: [avgR, avgG, avgB],
    confidence
  };
}

/**
 * Smart Alpha Inferrer: Clears solid background artifacts from Outer Layers and Void areas
 * without touching the Inner Base Layers (head, body, arms, legs).
 * @param {Uint8ClampedArray|Uint8Array} data
 * @param {number} width
 * @param {number} height
 * @param {{ tolerance?: number, bgColor?: [number, number, number], force?: boolean, cleanVoid?: boolean }} options
 * @returns {{ modified: boolean, clearedPixels: number, bgColor: [number, number, number]|null }}
 */
export function smartAlphaInfer(data, width, height, options = {}) {
  const tolerance = options.tolerance ?? 28;
  const cleanVoid = options.cleanVoid ?? true;

  let bgColor = options.bgColor;
  if (!bgColor) {
    const detection = detectSolidBackground(data, width, height);
    if (!detection.isSolid && !options.force) {
      return { modified: false, clearedPixels: 0, bgColor: null };
    }
    bgColor = detection.bgColor || [0, 0, 0];
  }

  const [bgR, bgG, bgB] = bgColor;
  let cleared = 0;

  const isMatchingBg = (r, g, b) => {
    return Math.sqrt((r - bgR) ** 2 + (g - bgG) ** 2 + (b - bgB) ** 2) <= tolerance;
  };

  // 1. Clean Outer Layers (Hat, Jacket, Sleeves, Pants)
  const outerBoxes = getOuterLayerUVRectangles(width);
  for (const box of outerBoxes) {
    const startX = Math.max(0, box.x);
    const endX = Math.min(width, box.x + box.w);
    const startY = Math.max(0, box.y);
    const endY = Math.min(height, box.y + box.h);

    for (let y = startY; y < endY; y++) {
      for (let x = startX; x < endX; x++) {
        const idx = (y * width + x) * 4;
        if (data[idx + 3] > 0) {
          if (isMatchingBg(data[idx], data[idx + 1], data[idx + 2])) {
            data[idx + 3] = 0; // Set transparent!
            cleared++;
          }
        }
      }
    }
  }

  // 2. Clean Natural Void areas
  if (cleanVoid) {
    const voidBoxes = getVoidUVRectangles(width);
    for (const box of voidBoxes) {
      const startX = Math.max(0, box.x);
      const endX = Math.min(width, box.x + box.w);
      const startY = Math.max(0, box.y);
      const endY = Math.min(height, box.y + box.h);

      for (let y = startY; y < endY; y++) {
        for (let x = startX; x < endX; x++) {
          const idx = (y * width + x) * 4;
          if (data[idx + 3] > 0) {
            if (isMatchingBg(data[idx], data[idx + 1], data[idx + 2])) {
              data[idx + 3] = 0;
              cleared++;
            }
          }
        }
      }
    }
  }

  return {
    modified: cleared > 0,
    clearedPixels: cleared,
    bgColor
  };
}

/**
 * Apply Smart Alpha Inferrer directly on a 2D Canvas context
 * @param {HTMLCanvasElement|OffscreenCanvas} canvas
 * @param {Object} [options]
 */
export function applySmartAlphaInferToCanvas(canvas, options = {}) {
  const ctx = canvas.getContext('2d');
  if (!ctx) return { modified: false, clearedPixels: 0, bgColor: null };
  const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const result = smartAlphaInfer(imgData.data, canvas.width, canvas.height, options);
  if (result.modified) {
    ctx.putImageData(imgData, 0, 0);
  }
  return result;
}
