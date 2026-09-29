/**
 * Bedrock Skin Pack (.mcpack) Archive Parser
 * Parses manifest.json, skins.json, lang files and textures from .mcpack or legacy .mcaddon
 */
import { loadSafeArchive } from '../security/safeZip.js';
import { AppError } from '../errors/AppError.js';

/**
 * Parse an imported .mcpack archive into Skin Pack data structures
 * @param {Blob|File|ArrayBuffer} fileOrBuffer
 * @returns {Promise<{ packName: string, version: Array<number>, skins: Array<{ id: string, name: string, model: 'steve'|'alex', skinURL: string, blob: Blob|null }> }>}
 */
export async function parseSkinPackArchive(fileOrBuffer) {
  let content;
  try {
    content = await loadSafeArchive(fileOrBuffer);
  } catch (err) {
    throw new AppError('CORRUPTED_ARCHIVE', 'ไฟล์ไม่ถูกต้องหรือชำรุด ไม่สามารถเปิดได้');
  }

  let packName = 'สกินแพ็ก';
  let version = [1, 0, 0];
  let skins = [];

  // 1. Read manifest.json
  const manifestFile = content.file(/manifest\.json$/i)[0];
  if (manifestFile) {
    try {
      const manifest = JSON.parse(await manifestFile.async('text'));
      if (manifest.header?.name) packName = manifest.header.name;
      if (Array.isArray(manifest.header?.version)) version = manifest.header.version;
    } catch (_) {}
  }

  // 2. Read language mapping
  const langMap = {};
  const langFile = content.file(/texts\/(en_US|th_TH)\.lang$/i)[0] || content.file(/\.lang$/i)[0];
  if (langFile) {
    try {
      const langText = await langFile.async('text');
      const lines = langText.split('\n');
      for (const line of lines) {
        const trimmed = line.trim();
        if (trimmed && !trimmed.startsWith('#')) {
          const eqIdx = trimmed.indexOf('=');
          if (eqIdx !== -1) {
            const key = trimmed.slice(0, eqIdx).trim();
            const val = trimmed.slice(eqIdx + 1).trim();
            langMap[key] = val;
            const parts = key.split('.');
            if (parts.length > 2) {
              langMap[parts.slice(2).join('.')] = val;
            }
          }
        }
      }
    } catch (_) {}
  }

  // 3. Read skins.json (Bedrock Skin Pack Standard)
  const skinsJsonFile = content.file(/skins\.json$/i)[0];
  if (skinsJsonFile) {
    try {
      const skinsData = JSON.parse(await skinsJsonFile.async('text'));
      const serializeName = skinsData.serialize_name || skinsData.localization_name || '';

      if (Array.isArray(skinsData.skins)) {
        for (let i = 0; i < skinsData.skins.length; i++) {
          const item = skinsData.skins[i];
          const rawTexture = item.texture || `skin_${i + 1}.png`;
          const cleanTexture = rawTexture.split('/').pop().replace(/\.png$/i, '');

          // Find texture file in archive
          const textureFile = content.file(new RegExp(`(^|/)${cleanTexture}\\.png$`, 'i'))[0] ||
                              content.file(new RegExp(`${rawTexture}$`, 'i'))[0];

          let blob = null;
          let skinURL = '';
          if (textureFile) {
            blob = new Blob([await textureFile.async('arraybuffer')], { type: 'image/png' });
            if (typeof URL !== 'undefined' && URL.createObjectURL) {
              skinURL = URL.createObjectURL(blob);
            }
          }

          const model = (item.geometry && item.geometry.toLowerCase().includes('slim')) ? 'alex' : 'steve';
          const locName = item.localization_name || cleanTexture;
          const displayName = langMap[`skin.${serializeName}.${locName}`] ||
                              langMap[locName] ||
                              cleanTexture.replace(/[_\-]/g, ' ') ||
                              `Skin ${i + 1}`;

          skins.push({
            id: locName,
            name: displayName,
            model,
            skinURL,
            blob
          });
        }
      }
    } catch (e) {
      console.warn('Could not parse skins.json', e);
    }
  } else {
    // Fallback: Check if it's a zip with skin textures
    const skinFiles = content.file(/\.png$/i).filter(f => !f.name.includes('pack_icon'));
    for (let i = 0; i < skinFiles.length; i++) {
      const sf = skinFiles[i];
      const filename = sf.name.split('/').pop().replace(/\.png$/i, '');
      const blob = new Blob([await sf.async('arraybuffer')], { type: 'image/png' });
      const url = typeof URL !== 'undefined' && URL.createObjectURL ? URL.createObjectURL(blob) : '';
      skins.push({
        id: `skin_${i + 1}`,
        name: filename.replace(/[_\-]/g, ' ') || `Skin ${i + 1}`,
        model: 'steve',
        skinURL: url,
        blob
      });
    }
  }

  return {
    packName,
    version,
    skins
  };
}

// Backward compatibility alias
export const parseWardrobeArchive = parseSkinPackArchive;
