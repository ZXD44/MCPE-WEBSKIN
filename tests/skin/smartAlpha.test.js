import { describe, it, expect } from 'vitest';
import {
  detectSolidBackground,
  smartAlphaInfer,
  getOuterLayerUVRectangles,
  getVoidUVRectangles
} from '../../src/core/skin/skinProcessor.js';

describe('Smart Alpha Inferrer', () => {
  it('detects transparent skin correctly and does not modify in auto mode', () => {
    const width = 64;
    const height = 64;
    const data = new Uint8ClampedArray(width * height * 4); // All zeros (transparent)

    const detection = detectSolidBackground(data, width, height);
    expect(detection.isSolid).toBe(false);

    const result = smartAlphaInfer(data, width, height);
    expect(result.modified).toBe(false);
    expect(result.clearedPixels).toBe(0);
  });

  it('detects solid black background and clears outer layer without touching inner base layer', () => {
    const width = 64;
    const height = 64;
    const data = new Uint8ClampedArray(width * height * 4);

    // Fill entirely with solid black (#020105, alpha=255) like JPG compression noise
    for (let i = 0; i < data.length; i += 4) {
      data[i] = 2;
      data[i + 1] = 1;
      data[i + 2] = 5;
      data[i + 3] = 255;
    }

    // Draw inner face at (8, 8) with black hair [2, 1, 5] and skin color [255, 200, 150]
    const innerFaceSkinIdx = (8 * 64 + 8) * 4;
    data[innerFaceSkinIdx] = 255;
    data[innerFaceSkinIdx + 1] = 200;
    data[innerFaceSkinIdx + 2] = 150;
    data[innerFaceSkinIdx + 3] = 255;

    const innerFaceBlackHairIdx = (8 * 64 + 9) * 4;
    // Black hair is on the inner base layer!
    data[innerFaceBlackHairIdx] = 2;
    data[innerFaceBlackHairIdx + 1] = 1;
    data[innerFaceBlackHairIdx + 2] = 5;
    data[innerFaceBlackHairIdx + 3] = 255;

    // Outer hat pixel at (40, 8) matching the solid black background
    const outerHatIdx = (8 * 64 + 40) * 4;
    data[outerHatIdx] = 2;
    data[outerHatIdx + 1] = 1;
    data[outerHatIdx + 2] = 5;
    data[outerHatIdx + 3] = 255;

    // Detect background
    const detection = detectSolidBackground(data, width, height);
    expect(detection.isSolid).toBe(true);
    expect(detection.bgColor).toEqual([2, 1, 5]);

    // Run smart inferrer
    const result = smartAlphaInfer(data, width, height, { tolerance: 28 });
    expect(result.modified).toBe(true);
    expect(result.clearedPixels).toBeGreaterThan(0);

    // CRITICAL VERIFICATION:
    // 1. Outer hat pixel matching black MUST be cleared (alpha = 0)
    expect(data[outerHatIdx + 3]).toBe(0);

    // 2. Inner face skin color MUST be preserved intact
    expect(data[innerFaceSkinIdx + 3]).toBe(255);
    expect(data[innerFaceSkinIdx]).toBe(255);

    // 3. Inner face black hair MUST be preserved intact even though it is the same color as the background!
    expect(data[innerFaceBlackHairIdx + 3]).toBe(255);
    expect(data[innerFaceBlackHairIdx]).toBe(2);
  });

  it('detects solid white background and clears outer overlay', () => {
    const width = 64;
    const height = 64;
    const data = new Uint8ClampedArray(width * height * 4);

    // Fill entirely with pure white (#ffffff, alpha=255)
    for (let i = 0; i < data.length; i += 4) {
      data[i] = 255;
      data[i + 1] = 255;
      data[i + 2] = 255;
      data[i + 3] = 255;
    }

    const detection = detectSolidBackground(data, width, height);
    expect(detection.isSolid).toBe(true);
    expect(detection.bgColor).toEqual([255, 255, 255]);

    const result = smartAlphaInfer(data, width, height);
    expect(result.modified).toBe(true);

    // Outer layer pixel at (40, 8) (Hat) should now be transparent
    const outerHatIdx = (8 * 64 + 40) * 4;
    expect(data[outerHatIdx + 3]).toBe(0);

    // Inner layer pixel at (16, 20) (Body base) MUST remain opaque 255
    const innerBodyIdx = (20 * 64 + 16) * 4;
    expect(data[innerBodyIdx + 3]).toBe(255);
  });
});
