import { describe, it, expect } from 'vitest';
import { AppError, ErrorCode } from '../../src/core/errors/AppError.js';

describe('AppError System', () => {
  it('creates an AppError with code, default user message, and details', () => {
    const err = new AppError(ErrorCode.IMPORT_FILE_TOO_LARGE, { size: 30000000 });
    expect(err.name).toBe('AppError');
    expect(err.code).toBe(ErrorCode.IMPORT_FILE_TOO_LARGE);
    expect(err.userMessage).toContain('ขนาดไฟล์บีบอัดเกินขีดจำกัดความปลอดภัย');
    expect(err.details.size).toBe(30000000);
  });

  it('supports custom messages overriding default', () => {
    const err = new AppError(ErrorCode.VALIDATION_MISSING_TEXTURE, null, 'Custom error texture missing');
    expect(err.message).toBe('Custom error texture missing');
    expect(err.userMessage).toBe('Custom error texture missing');
  });

  it('serializes to JSON with all metadata', () => {
    const err = new AppError(ErrorCode.SKIN_NON_SQUARE, { width: 64, height: 32 });
    const json = err.toJSON();
    expect(json.code).toBe(ErrorCode.SKIN_NON_SQUARE);
    expect(json.details.width).toBe(64);
    expect(json.timestamp).toBeGreaterThan(0);
  });
});
