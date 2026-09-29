import { describe, it, expect } from 'vitest';
import { validateSkinDimensions } from '../../src/core/skin/skinProcessor.js';

describe('Error Skins Handling (s1.jpg & s2.png)', () => {
  it('correctly handles s1.jpg dimension (1452x1452)', () => {
    const dim = validateSkinDimensions(1452, 1452);
    expect(dim.isLegacy).toBe(false);
    expect(dim.needsResize).toBe(true);
    expect(dim.targetResolution).toBe(64);
  });

  it('correctly handles s2.png dimension (1254x1254)', () => {
    const dim = validateSkinDimensions(1254, 1254);
    expect(dim.isLegacy).toBe(false);
    expect(dim.needsResize).toBe(true);
    expect(dim.targetResolution).toBe(64);
  });
});
