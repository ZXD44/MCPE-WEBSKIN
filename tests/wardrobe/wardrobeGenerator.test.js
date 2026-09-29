import { describe, it, expect } from 'vitest';
import { createSkinPack } from '../../src/core/wardrobe/wardrobeGenerator.js';
import { validateAddonPackage } from '../../src/core/validator/addonValidator.js';
import { parseSkinPackArchive } from '../../src/core/wardrobe/wardrobeParser.js';

describe('Minecraft Bedrock Skin Pack Generator (.mcpack) & Parser Module', () => {
  it('throws AppError if skins array is empty', async () => {
    await expect(createSkinPack({ skins: [] }))
      .rejects
      .toThrow('กรุณาเพิ่มสกินอย่างน้อย 1 ชุดก่อนส่งออก');
  });

  it('generates valid Minecraft Bedrock Skin Pack (.mcpack) matching official specifications', async () => {
    // 1x1 transparent png in base64
    const samplePngBase64 = 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==';

    const testSkins = [
      {
        id: 'dragon_warrior',
        name: 'Dragon Warrior',
        model: 'steve',
        base64: samplePngBase64
      },
      {
        id: 'cyber_miku',
        name: 'Cyber Miku',
        model: 'alex',
        base64: samplePngBase64
      }
    ];

    const result = await createSkinPack({
      packName: 'ZirconX Cosplay Pack',
      version: [1, 2, 0],
      skins: testSkins
    });

    expect(result.zip).toBeDefined();
    expect(result.skinCount).toBe(2);

    // 1. Verify manifest.json
    const manifestFile = result.zip.file('manifest.json');
    expect(manifestFile).not.toBeNull();
    const manifest = JSON.parse(await manifestFile.async('text'));
    expect(manifest.header.name).toBe('ZirconX Cosplay Pack');
    expect(manifest.header.version).toEqual([1, 2, 0]);
    expect(manifest.modules[0].type).toBe('skin_pack');

    // 2. Verify skins.json
    const skinsJsonFile = result.zip.file('skins.json');
    expect(skinsJsonFile).not.toBeNull();
    const skinsData = JSON.parse(await skinsJsonFile.async('text'));
    expect(skinsData.skins).toHaveLength(2);
    expect(skinsData.skins[0].localization_name).toBe('dragon_warrior');
    expect(skinsData.skins[0].geometry).toBe('geometry.humanoid.custom');
    expect(skinsData.skins[0].texture).toBe('dragon_warrior.png');
    expect(skinsData.skins[1].localization_name).toBe('cyber_miku');
    expect(skinsData.skins[1].geometry).toBe('geometry.humanoid.customSlim');
    expect(skinsData.skins[1].texture).toBe('cyber_miku.png');

    // 3. Verify texture image files
    expect(result.zip.file('dragon_warrior.png')).not.toBeNull();
    expect(result.zip.file('cyber_miku.png')).not.toBeNull();

    // 4. Verify Localization
    const langTh = result.zip.file('texts/th_TH.lang');
    const langEn = result.zip.file('texts/en_US.lang');
    const langsJson = result.zip.file('texts/languages.json');
    expect(langTh).not.toBeNull();
    expect(langEn).not.toBeNull();
    expect(langsJson).not.toBeNull();

    const enText = await langEn.async('text');
    expect(enText).toContain('Dragon Warrior');
    expect(enText).toContain('Cyber Miku');

    // 5. Pre-export validation passes
    const validation = await validateAddonPackage(result.zip);
    expect(validation.valid).toBe(true);
    expect(validation.errors).toHaveLength(0);
  });

  it('correctly parses an exported .mcpack archive back to skin state', async () => {
    const samplePngBase64 = 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==';
    const testSkins = [
      {
        id: 'iron_knight',
        name: 'Iron Knight',
        model: 'steve',
        base64: samplePngBase64
      },
      {
        id: 'stealth_ninja',
        name: 'Stealth Ninja',
        model: 'alex',
        base64: samplePngBase64
      }
    ];

    const generated = await createSkinPack({
      packName: 'Guard Pack',
      version: [2, 0, 0],
      skins: testSkins
    });

    const zipBuffer = await generated.zip.generateAsync({ type: 'nodebuffer' });
    const parsed = await parseSkinPackArchive(zipBuffer);

    expect(parsed.packName).toBe('Guard Pack');
    expect(parsed.version).toEqual([2, 0, 0]);
    expect(parsed.skins).toHaveLength(2);
    expect(parsed.skins[0].name).toBe('Iron Knight');
    expect(parsed.skins[0].model).toBe('steve');
    expect(parsed.skins[1].name).toBe('Stealth Ninja');
    expect(parsed.skins[1].model).toBe('alex');
  });
});
