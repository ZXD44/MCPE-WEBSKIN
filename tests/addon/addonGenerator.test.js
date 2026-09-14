import { describe, it, expect } from 'vitest';
import { createStandaloneSkinAddon } from '../../src/core/addon/addonGenerator.js';
import { validateAddonPackage } from '../../src/core/validator/addonValidator.js';

describe('Addon Generator Core (Headless)', () => {
  it('generates a complete valid Standalone Addon package without DOM', async () => {
    const fakePngData = new Uint8Array([137, 80, 78, 71, 13, 10, 26, 10]); // PNG magic bytes

    const result = await createStandaloneSkinAddon({
      addonName: 'DragonWarrior',
      itemName: 'Dragon Armor',
      addonVersion: [1, 2, 0],
      itemSlotType: 'head',
      modelType: 1, // Steve
      items: [
        {
          id: 'skin_dragon_armor_001',
          name: 'Dragon Armor',
          slot: 'slot.armor.head',
          group: 'itemGroup.name.helmet',
          skinData: fakePngData,
          iconData: fakePngData,
          isHead: true
        }
      ]
    });

    expect(result.zip).toBeDefined();
    expect(result.bpFolder).toBe('DragonWarrior_ZirconX-SKIN_BP');
    expect(result.rpFolder).toBe('DragonWarrior_ZirconX-SKIN_RP');

    // 1. Inspect generated files
    const bpManifest = result.zip.file(`${result.bpFolder}/manifest.json`);
    const rpManifest = result.zip.file(`${result.rpFolder}/manifest.json`);
    const bpItem = result.zip.file(`${result.bpFolder}/items/skin_dragon_armor_001.json`);
    const rpAttachable = result.zip.file(`${result.rpFolder}/attachables/skin_dragon_armor_001.json`);
    const rpRenderCtrl = result.zip.file(`${result.rpFolder}/render_controllers/zirconx_skin.json`);
    const rpSkinPng = result.zip.file(`${result.rpFolder}/textures/skin/skin_dragon_armor_001.png`);
    const rpLangTh = result.zip.file(`${result.rpFolder}/texts/th_TH.lang`);
    const rpLangEn = result.zip.file(`${result.rpFolder}/texts/en_US.lang`);

    expect(bpManifest).not.toBeNull();
    expect(rpManifest).not.toBeNull();
    expect(bpItem).not.toBeNull();
    expect(rpAttachable).not.toBeNull();
    expect(rpRenderCtrl).not.toBeNull();
    expect(rpSkinPng).not.toBeNull();
    expect(rpLangTh).not.toBeNull();
    expect(rpLangEn).not.toBeNull();

    // 2. Validate wearable configuration in item JSON
    const itemData = JSON.parse(await bpItem.async('string'));
    expect(itemData['minecraft:item'].components['minecraft:wearable'].slot).toBe('slot.armor.head');
    expect(itemData['minecraft:item'].components['minecraft:wearable'].protection).toBe(0);

    // Validate in-hand 1e-5 scale in attachable
    const attachableData = JSON.parse(await rpAttachable.async('string'));
    expect(attachableData['minecraft:attachable'].description.item_display_transforms.thirdperson_righthand.scale).toEqual([1e-5, 1e-5, 1e-5]);

    // 3. Pipe directly into Addon Validator
    const validationReport = await validateAddonPackage(result.zip);
    expect(validationReport.valid).toBe(true);
    expect(validationReport.errors).toHaveLength(0);
    expect(validationReport.checks.every(c => c.passed)).toBe(true);
  });

  it('generates head and suit pieces when slot is "both"', async () => {
    const fakePng = new Uint8Array([1, 2, 3, 4]);

    const result = await createStandaloneSkinAddon({
      addonName: 'CosplaySuit',
      itemName: 'Hatsune Miku',
      items: [
        {
          id: 'skin_miku_head',
          name: 'Hatsune Miku (หัว)',
          slot: 'slot.armor.head',
          group: 'itemGroup.name.helmet',
          skinData: fakePng,
          iconData: fakePng,
          isHead: true
        },
        {
          id: 'skin_miku_suit',
          name: 'Hatsune Miku (ชุด)',
          slot: 'slot.armor.chest',
          group: 'itemGroup.name.chestplate',
          skinData: fakePng,
          iconData: fakePng,
          isHead: false
        }
      ]
    });

    const headItem = result.zip.file(`${result.bpFolder}/items/skin_miku_head.json`);
    const suitItem = result.zip.file(`${result.bpFolder}/items/skin_miku_suit.json`);
    expect(headItem).not.toBeNull();
    expect(suitItem).not.toBeNull();

    const report = await validateAddonPackage(result.zip);
    expect(report.valid).toBe(true);
  });
});
