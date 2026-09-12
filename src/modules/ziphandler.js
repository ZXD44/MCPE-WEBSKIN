/**
 * ZIP / MCPACK / MCADDON Archive Handler
 * Extracts skin textures and manifest details from compressed Minecraft packages
 */
import JSZip from 'jszip';

export async function isZipArchive(file) {
  if (!file) return false;
  const name = file.name.toLowerCase();
  return name.endsWith('.zip') || name.endsWith('.mcpack') || name.endsWith('.mcaddon');
}

export async function extractSkinFromArchive(file) {
  const arrayBuffer = await file.arrayBuffer();
  const zip = await JSZip.loadAsync(arrayBuffer);

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

  // 2. Scan for PNG files inside the archive
  const pngFiles = zip.file(/\.png$/i);
  if (pngFiles.length === 0) {
    throw new Error('ไม่พบไฟล์สกิน (.png) ภายในไฟล์ ZIP/แอดออนนี้');
  }

  // Prioritize typical Minecraft skin paths
  const priorityPatterns = [
    /textures\/entity\/.*skin.*\.png$/i,
    /textures\/entity\/.*steve.*\.png$/i,
    /textures\/entity\/.*alex.*\.png$/i,
    /.*skin.*\.png$/i,
    /textures\/items\/.*\.png$/i
  ];

  let selectedFile = null;
  for (const pattern of priorityPatterns) {
    selectedFile = pngFiles.find(f => pattern.test(f.name));
    if (selectedFile) break;
  }

  // Fallback to first valid skin candidate
  if (!selectedFile) {
    selectedFile = pngFiles[0];
  }

  skinFileName = selectedFile.name.split('/').pop().replace(/\.png$/i, '');
  const rawBlob = await selectedFile.async('blob');
  skinBlob = new Blob([rawBlob], { type: 'image/png' });

  // Validate that it's a valid image
  const skinImg = await new Promise((resolve, reject) => {
    const img = new Image();
    const url = URL.createObjectURL(skinBlob);
    img.onload = () => {
      URL.revokeObjectURL(url);
      resolve(img);
    };
    img.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error('ไฟล์ภาพภายใน ZIP ไม่ถูกต้อง'));
    };
    img.src = url;
  });

  return {
    blob: skinBlob,
    image: skinImg,
    fileName: skinFileName,
    addonName: addonName || skinFileName
  };
}
