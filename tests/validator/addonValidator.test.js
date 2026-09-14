import { describe, it, expect } from 'vitest';
import JSZip from 'jszip';
import { isValidUUID, validateAddonPackage } from '../../src/core/validator/addonValidator.js';

describe('Addon Validator Engine', () => {
  describe('UUID RFC4122 Validation', () => {
    it('validates RFC4122 v4 UUIDs', () => {
      expect(isValidUUID('c9a646d3-9c61-4cd9-bc19-4704279b6307')).toBe(true);
      expect(isValidUUID('C9A646D3-9C61-4CD9-BC19-4704279B6307')).toBe(true);
    });

    it('rejects invalid UUID strings', () => {
      expect(isValidUUID('invalid-uuid')).toBe(false);
      expect(isValidUUID('c9a646d3-9c61-6cd9-bc19-4704279b6307')).toBe(false); // v6 not standard v4
      expect(isValidUUID('')).toBe(false);
      expect(isValidUUID(null)).toBe(false);
    });
  });

  describe('Package Validation', () => {
    it('detects missing manifest.json', async () => {
      const zip = new JSZip();
      zip.file('dummy.txt', 'hello');

      const report = await validateAddonPackage(zip);
      expect(report.valid).toBe(false);
      expect(report.errors.some(e => e.includes('manifest.json'))).toBe(true);
    });

    it('detects duplicate UUIDs across manifests', async () => {
      const zip = new JSZip();
      const sharedUuid = '11111111-2222-4333-8444-555555555555';

      const bpManifest = {
        format_version: 2,
        header: { name: 'BP Pack', uuid: sharedUuid, version: [1, 0, 0] },
        modules: [{ type: 'data', uuid: '22222222-3333-4444-8555-666666666666', version: [1, 0, 0] }]
      };

      const rpManifest = {
        format_version: 2,
        header: { name: 'RP Pack', uuid: sharedUuid, version: [1, 0, 0] },
        modules: [{ type: 'resources', uuid: '33333333-4444-4555-8666-777777777777', version: [1, 0, 0] }]
      };

      zip.file('BP/manifest.json', JSON.stringify(bpManifest));
      zip.file('RP/manifest.json', JSON.stringify(rpManifest));

      const report = await validateAddonPackage(zip);
      expect(report.valid).toBe(false);
      expect(report.errors.some(e => e.includes('ซ้ำกัน'))).toBe(true);
    });

    it('detects missing textures referenced in attachables', async () => {
      const zip = new JSZip();
      const bpManifest = {
        format_version: 2,
        header: { name: 'BP', uuid: '11111111-2222-4333-8444-555555555555', version: [1, 0, 0] },
        modules: [{ type: 'data', uuid: '22222222-3333-4444-8555-666666666666', version: [1, 0, 0] }]
      };
      zip.file('BP/manifest.json', JSON.stringify(bpManifest));

      const attachable = {
        format_version: '1.10.0',
        'minecraft:attachable': {
          description: {
            identifier: 'zirconx:hat',
            textures: { default: 'textures/skin/missing_skin' }
          }
        }
      };
      zip.file('RP/attachables/hat.json', JSON.stringify(attachable));

      const report = await validateAddonPackage(zip);
      expect(report.valid).toBe(false);
      expect(report.errors.some(e => e.includes('missing_skin'))).toBe(true);
    });
  });
});
