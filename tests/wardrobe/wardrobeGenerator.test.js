import { describe, it, expect } from 'vitest';
import { createWardrobeAddon } from '../../src/core/wardrobe/wardrobeGenerator.js';
import { validateAddonPackage } from '../../src/core/validator/addonValidator.js';
import { parseWardrobeArchive } from '../../src/core/wardrobe/wardrobeParser.js';

describe('Wardrobe Addon Generator & Parser Module', () => {
  it('throws AppError if wardrobes array is empty', async () => {
    await expect(createWardrobeAddon({ wardrobes: [] }))
      .rejects
      .toThrow('กรุณาสร้างตู้เสื้อผ้าอย่างน้อย 1 ตู้ก่อนส่งออก');
  });

  it('generates valid wardrobe .mcaddon package matching Bedrock specifications', async () => {
    // 1x1 transparent png in base64
    const samplePngBase64 = 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==';

    const testWardrobes = [
      {
        uniq: 'wardrobe_vip',
        name: 'VIP Wardrobe',
        allowUsername: ['PlayerOne', 'AdminZircon'],
        skinlist: [
          {
            name: 'Dragon Warrior',
            action: 'dragon_warrior',
            base64: samplePngBase64
          }
        ]
      }
    ];

    const result = await createWardrobeAddon({
      wardrobes: testWardrobes,
      addonVersion: [2, 1, 0],
      authors: ['ZirconTeam']
    });

    expect(result.zip).toBeDefined();
    expect(result.outfitCount).toBe(1);

    // Verify BP & RP manifests
    const bpManifest = JSON.parse(await result.zip.file('ZirconX-SKIN_BP/manifest.json').async('text'));
    const rpManifest = JSON.parse(await result.zip.file('ZirconX-SKIN_RP/manifest.json').async('text'));

    expect(bpManifest.header.version).toEqual([2, 1, 0]);
    expect(rpManifest.header.version).toEqual([2, 1, 0]);
    expect(bpManifest.metadata.authors).toContain('ZirconTeam');

    // Verify Script API main.js
    const scriptContent = await result.zip.file('ZirconX-SKIN_BP/scripts/main.js').async('text');
    expect(scriptContent).toContain('let playerData =');
    expect(scriptContent).toContain('VIP Wardrobe');
    expect(scriptContent).toContain('PlayerOne');

    // Verify Render Controller & Entities
    expect(result.zip.file('ZirconX-SKIN_RP/render_controllers/player.render_controller.json')).not.toBeNull();
    expect(result.zip.file('ZirconX-SKIN_RP/entity/player.entity.json')).not.toBeNull();
    expect(result.zip.file('ZirconX-SKIN_BP/entities/player.json')).not.toBeNull();
    expect(result.zip.file('ZirconX-SKIN_RP/textures/skin/dragon_warrior.png')).not.toBeNull();

    // Verify Languages
    expect(result.zip.file('ZirconX-SKIN_RP/texts/th_TH.lang')).not.toBeNull();
    expect(result.zip.file('ZirconX-SKIN_RP/texts/en_US.lang')).not.toBeNull();
    expect(result.zip.file('ZirconX-SKIN_RP/texts/languages.json')).not.toBeNull();

    // Verify pre-export validation passes
    const validation = await validateAddonPackage(result.zip);
    expect(validation.valid).toBe(true);
    expect(validation.errors).toHaveLength(0);
  });

  it('correctly parses an exported wardrobe archive back to state', async () => {
    const samplePngBase64 = 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==';
    const testWardrobes = [
      {
        uniq: 'closet_1',
        name: 'Guard Closet',
        allowUsername: ['KnightUser'],
        skinlist: [
          {
            name: 'Iron Guard',
            action: 'iron_guard',
            base64: samplePngBase64
          }
        ]
      }
    ];

    const generated = await createWardrobeAddon({
      wardrobes: testWardrobes,
      addonVersion: [1, 2, 3],
      authors: ['GuardGuild']
    });

    const zipBuffer = await generated.zip.generateAsync({ type: 'nodebuffer' });
    const parsed = await parseWardrobeArchive(zipBuffer);

    expect(parsed.addonVersion).toEqual([1, 2, 3]);
    expect(parsed.authors).toEqual(['GuardGuild']);
    expect(parsed.wardrobes).toHaveLength(1);
    expect(parsed.wardrobes[0].name).toBe('Guard Closet');
    expect(parsed.wardrobes[0].allowUsername).toContain('KnightUser');
    expect(parsed.wardrobes[0].skinlist[0].action).toBe('iron_guard');
  });
});
