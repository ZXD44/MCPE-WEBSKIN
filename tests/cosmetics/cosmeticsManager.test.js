import { describe, it, expect } from 'vitest';
import {
  COSMETIC_PRESETS,
  getCosmeticCubesForBedrock,
  generateBedrockCosmeticGeometry,
  parseBlockbenchGeoJson,
  attachCosmeticToViewer,
  removeCosmeticFromViewer
} from '../../src/core/cosmetics/cosmeticsManager.js';
import * as THREE from 'three';

describe('3D Cosmetics & Blockbench Manager Core', () => {
  it('defines all required 3D cosmetic presets', () => {
    expect(COSMETIC_PRESETS.none).toBeDefined();
    expect(COSMETIC_PRESETS.cat_ears).toBeDefined();
    expect(COSMETIC_PRESETS.dragon_wings).toBeDefined();
    expect(COSMETIC_PRESETS.fox_tail).toBeDefined();
    expect(COSMETIC_PRESETS.crown).toBeDefined();
    expect(COSMETIC_PRESETS.backpack).toBeDefined();
    expect(COSMETIC_PRESETS.custom).toBeDefined();
  });

  it('generates valid Bedrock geometry for Cat Ears attached to head', () => {
    const geo = generateBedrockCosmeticGeometry('cat_ears', false);
    expect(geo.format_version).toBe('1.12.0');
    expect(geo['minecraft:geometry']).toBeDefined();

    const def = geo['minecraft:geometry'][0];
    expect(def.description.identifier).toBe('geometry.zirconx_cat_ears');

    const headBone = def.bones.find(b => b.name === 'head');
    expect(headBone).toBeDefined();
    // Default head cube + cosmetic cubes
    expect(headBone.cubes.length).toBeGreaterThan(1);
  });

  it('generates valid Bedrock geometry for Dragon Wings attached to body on Alex slim model', () => {
    const geo = generateBedrockCosmeticGeometry('dragon_wings', true);
    const def = geo['minecraft:geometry'][0];
    expect(def.description.identifier).toBe('geometry.zirconx_dragon_wings');

    const bodyBone = def.bones.find(b => b.name === 'body');
    expect(bodyBone).toBeDefined();
    expect(bodyBone.cubes.length).toBeGreaterThan(2);

    const rightArm = def.bones.find(b => b.name === 'rightArm');
    // Alex slim arm width is 3
    expect(rightArm.cubes[0].size[0]).toBe(3);
  });

  it('parses and validates standard Blockbench .geo.json files', () => {
    const fakeBlockbenchJson = {
      format_version: '1.12.0',
      'minecraft:geometry': [
        {
          description: {
            identifier: 'geometry.test_sword',
            texture_width: 64,
            texture_height: 64
          },
          bones: [
            {
              name: 'body',
              pivot: [0, 24, 0],
              cubes: [
                { origin: [-1, 10, 2], size: [2, 14, 1], uv: [0, 0] }
              ]
            }
          ]
        }
      ]
    };

    const parsed = parseBlockbenchGeoJson(JSON.stringify(fakeBlockbenchJson));
    expect(parsed.identifier).toBe('geometry.test_sword');
    expect(parsed.bonesCount).toBe(1);
    expect(parsed.cubeCount).toBe(1);
  });

  it('rejects invalid or corrupted Blockbench JSON with clear AppError', () => {
    expect(() => parseBlockbenchGeoJson('{ invalid json')).toThrow();
    expect(() => parseBlockbenchGeoJson(JSON.stringify({ not_minecraft: true }))).toThrow();
  });

  it('attaches and cleanly removes Three.js meshes on mock viewer', () => {
    const mockViewer = {
      playerObject: {
        skin: {
          head: new THREE.Group(),
          body: new THREE.Group(),
          rightArm: new THREE.Group(),
          leftArm: new THREE.Group(),
          rightLeg: new THREE.Group(),
          leftLeg: new THREE.Group()
        }
      }
    };

    // Attach Cat Ears
    attachCosmeticToViewer(mockViewer, 'cat_ears', { color: '#ff90b3' });
    expect(mockViewer.playerObject.skin.head.children.length).toBeGreaterThan(0);

    // Remove cosmetic
    removeCosmeticFromViewer(mockViewer);
    expect(mockViewer.playerObject.skin.head.children.length).toBe(0);
  });
});
