/**
 * Wardrobe Addon Archive Parser
 * Extracts wardrobe configuration, players, outfits, and textures from .mcaddon
 */
import { loadSafeArchive } from '../security/safeZip.js';
import { AppError } from '../errors/AppError.js';

/**
 * Parse an imported .mcaddon archive into Wardrobe data structures
 * @param {Blob|File|ArrayBuffer} fileOrBuffer
 * @returns {Promise<{ wardrobes: Array, addonVersion: Array<number>, authors: Array<string> }>}
 */
export async function parseWardrobeArchive(fileOrBuffer) {
  let content;
  try {
    content = await loadSafeArchive(fileOrBuffer);
  } catch (err) {
    throw new AppError('CORRUPTED_ARCHIVE', 'ไฟล์ไม่ถูกต้องหรือชำรุด ไม่สามารถเปิดได้');
  }

  let addonVersion = [1, 0, 0];
  let authors = ['ServerTeam', 'SkinProject'];
  let wardrobes = [];

  // 1. Read BP manifest
  const bpManifestFile = content.file(/.*(ZirconX-SKIN|ZXD44-SKIN)_BP\/manifest\.json$/i)[0] ||
    content.file('ZirconX-SKIN_BP/manifest.json') ||
    content.file('ZXD44-SKIN_BP/manifest.json');

  if (bpManifestFile) {
    try {
      const bpData = JSON.parse(await bpManifestFile.async('text'));
      if (Array.isArray(bpData.header?.version)) addonVersion = bpData.header.version;
      if (Array.isArray(bpData.metadata?.authors)) authors = bpData.metadata.authors;
    } catch (_) {}
  }

  // 2. Read main.js and extract playerData
  const scriptFile = content.file(/.*(ZirconX-SKIN|ZXD44-SKIN)_BP\/scripts\/main\.js$/i)[0] ||
    content.file('ZirconX-SKIN_BP/scripts/main.js') ||
    content.file('ZXD44-SKIN_BP/scripts/main.js');

  if (scriptFile) {
    const scriptText = await scriptFile.async('text');
    let match = scriptText.match(/let\s+playerData\s*=\s*(\[[\s\S]*?\]);/);
    if (!match) {
      match = scriptText.match(/\[\s*(\{[\s\S]*\})\s*\]/);
    }
    if (match) {
      try {
        const rawData = JSON.parse(match[1] || match[0]);
        wardrobes = rawData.map(w => ({
          uniq: w.uniq || (Date.now() + Math.random() * 1000).toString(32),
          name: w.name || 'ตู้เสื้อผ้า',
          allowUsername: Array.isArray(w.allowUsername) ? w.allowUsername : [],
          skinlist: (w.skinlist || []).map(s => ({
            name: s.name || 'ชุด',
            action: s.action,
            skinURL: '',
            blob: null
          }))
        }));
      } catch (e) {
        console.error('Failed to parse playerData JSON:', e);
      }
    }
  }

  // 3. Match Skin Textures
  const skinFiles = content.file(/(ZirconX-SKIN|ZXD44-SKIN)_RP\/textures\/skin\/.*\.(png|jpg)$/i);
  for (const sf of skinFiles) {
    const filename = sf.name.split('/').pop().replace(/\.(png|jpg)$/i, '');
    const blob = new Blob([await sf.async('arraybuffer')], { type: 'image/png' });
    const url = typeof URL !== 'undefined' && URL.createObjectURL ? URL.createObjectURL(blob) : '';

    wardrobes.forEach(w => {
      (w.skinlist || []).forEach(s => {
        if (s.action === filename) {
          s.skinURL = url;
          s.blob = blob;
        }
      });
    });
  }

  return {
    wardrobes,
    addonVersion,
    authors
  };
}
