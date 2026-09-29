/**
 * ZIP / MCPACK / MCADDON Archive Handler
 * Extracts skin textures and manifest details safely using the safeZip security layer
 */
import { loadSafeArchive } from '../core/security/safeZip.js';
import { AppError, ErrorCode } from '../core/errors/AppError.js';

export async function isZipArchive(file) {
  if (!file) return false;
  const name = file.name.toLowerCase();
  return name.endsWith('.zip') || name.endsWith('.mcpack') || name.endsWith('.mcaddon');
}

export async function extractSkinFromArchive(file) {
  // Use safeZip loader to inspect and protect against zip bombs, path traversal & oversized files
  const zip = await loadSafeArchive(file);

  let skinBlob = null;
  let skinFileName = '';
  let addonName = '';

  // 1. Look for manifest.json
  const manifestFile = zip.file(/manifest\.json$/i)[0];
  if (manifestFile) {
    try {
      const manifestText = await manifestFile.async('string');
      const manifest = JSON.parse(manifestText);
      if (manifest.header && manifest.header.name) {
        addonName = manifest.header.name;
      }
    } catch (e) {
      console.warn('Could not parse manifest.json from archive', e);
    }
  }

  // 2. Scan for PNG and JPG files inside the archive
  const imageFiles = zip.file(/\.(png|jpe?g)$/i);
  if (imageFiles.length === 0) {
    throw new AppError(ErrorCode.IMPORT_NO_SKIN_FOUND);
  }

  // Prioritize typical Minecraft skin paths
  const priorityPatterns = [
    /textures\/entity\/.*skin.*\.(png|jpe?g)$/i,
    /textures\/entity\/.*steve.*\.(png|jpe?g)$/i,
    /textures\/entity\/.*alex.*\.(png|jpe?g)$/i,
    /.*skin.*\.(png|jpe?g)$/i,
    /textures\/items\/.*\.(png|jpe?g)$/i
  ];

  let selectedFile = null;
  for (const pattern of priorityPatterns) {
    selectedFile = imageFiles.find(f => pattern.test(f.name));
    if (selectedFile) break;
  }

  // Fallback to first valid candidate
  if (!selectedFile) {
    selectedFile = imageFiles[0];
  }

  skinFileName = selectedFile.name.split('/').pop().replace(/\.(png|jpe?g)$/i, '');
  const rawBlob = await selectedFile.async('blob');

  // Validate that it's a valid image
  const skinImg = await new Promise((resolve, reject) => {
    const img = new Image();
    const url = URL.createObjectURL(rawBlob);
    img.onload = () => {
      URL.revokeObjectURL(url);
      resolve(img);
    };
    img.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new AppError(ErrorCode.IMPORT_INVALID_IMAGE));
    };
    img.src = url;
  });

  // Convert to pure PNG Blob via Canvas
  const canvas = document.createElement('canvas');
  canvas.width = skinImg.width;
  canvas.height = skinImg.height;
  const ctx = canvas.getContext('2d');
  ctx.drawImage(skinImg, 0, 0);
  skinBlob = await new Promise(resolve => canvas.toBlob(resolve, 'image/png'));

  return {
    blob: skinBlob,
    image: skinImg,
    fileName: skinFileName,
    addonName: addonName || skinFileName
  };
}
