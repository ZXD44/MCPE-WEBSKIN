import { describe, it, expect } from 'vitest';
import {
  validateSkinDimensions,
  detectSkinModelFromPixels,
  getPartUVRectangles
} from '../../src/core/skin/skinProcessor.js';
import { ErrorCode } from '../../src/core/errors/AppError.js';

describe('Skin Processor Core', () => {
  describe('Dimension Validation', () => {
    it('accepts standard 64x64 skin', () => {
      const result = validateSkinDimensions(64, 64);
      expect(result.isLegacy).toBe(false);
      expect(result.resolution).toBe(64);
    });

    it('identifies legacy 64x32 skin', () => {
      const result = validateSkinDimensions(64, 32);
      expect(result.isLegacy).toBe(true);
      expect(result.resolution).toBe(64);
    });

    it('accepts HD skins (128, 256, 512, 1024, 2048, 4096)', () => {
      [128, 256, 512, 1024, 2048, 4096].forEach(res => {
        const result = validateSkinDimensions(res, res);
        expect(result.isLegacy).toBe(false);
        expect(result.resolution).toBe(res);
      });
    });

    it('rejects non-square skins other than 64x32', () => {
      expect(() => validateSkinDimensions(128, 64)).toThrowError();
    });

    it('rejects invalid or arbitrary dimensions', () => {
      expect(() => validateSkinDimensions(100, 100)).toThrowError();
      expect(() => validateSkinDimensions(5000, 5000)).toThrowError();
    });
  });

  describe('Alex vs Steve Model Detection', () => {
    it('detects Alex when arm column is transparent', () => {
      const width = 64;
      const height = 64;
      const data = new Uint8ClampedArray(width * height * 4); // all 0 (transparent)

      const model = detectSkinModelFromPixels(data, width, height);
      expect(model).toBe('alex');
    });

    it('detects Steve when arm column has opaque pixels', () => {
      const width = 64;
      const height = 64;
      const data = new Uint8ClampedArray(width * height * 4);

      // Set pixel at x=55, y=25 to opaque
      const idx = (25 * width + 55) * 4;
      data[idx] = 255;     // R
      data[idx + 1] = 128; // G
      data[idx + 2] = 64;  // B
      data[idx + 3] = 255; // A (opaque)

      const model = detectSkinModelFromPixels(data, width, height);
      expect(model).toBe('steve');
    });
  });

  describe('UV Bounds Dynamic Calculation', () => {
    it('calculates exact 64x64 part rectangles', () => {
      const rects = getPartUVRectangles(64);
      expect(rects.head).toEqual([
        { x: 0, y: 0, w: 32, h: 16 },
        { x: 32, y: 0, w: 32, h: 16 }
      ]);
      expect(rects.body).toEqual([
        { x: 16, y: 16, w: 24, h: 16 },
        { x: 16, y: 32, w: 24, h: 16 }
      ]);
    });

    it('scales proportionally for HD 128x128 skin', () => {
      const rects = getPartUVRectangles(128);
      expect(rects.head).toEqual([
        { x: 0, y: 0, w: 64, h: 32 },
        { x: 64, y: 0, w: 64, h: 32 }
      ]);
    });
  });
});
