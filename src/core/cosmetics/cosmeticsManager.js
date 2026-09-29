/**
 * 3D Cosmetics & Blockbench Manager Core
 * Pure in-memory Bedrock 1.21.10+ Geometry compiler & Three.js 3D viewer integration
 */
import * as THREE from 'three';
import { AppError, ErrorCode } from '../errors/AppError.js';

export const COSMETIC_PRESETS = {
  none: {
    id: 'none',
    name: 'ไม่มี (สกินปกติ)',
    icon: '❌',
    bone: null,
    recommendedSlot: 'head',
    defaultColor: '#ffffff'
  },
  cat_ears: {
    id: 'cat_ears',
    name: 'หูแมว 3D',
    icon: '🐱',
    bone: 'head',
    recommendedSlot: 'head',
    defaultColor: '#ff758c'
  },
  dragon_wings: {
    id: 'dragon_wings',
    name: 'ปีกมังกร',
    icon: '🐉',
    bone: 'body',
    recommendedSlot: 'suit',
    defaultColor: '#8b0000'
  },
  fox_tail: {
    id: 'fox_tail',
    name: 'หางจิ้งจอก',
    icon: '🦊',
    bone: 'body',
    recommendedSlot: 'legs',
    defaultColor: '#e67e22'
  },
  crown: {
    id: 'crown',
    name: 'มงกุฎ 3D',
    icon: '👑',
    bone: 'head',
    recommendedSlot: 'head',
    defaultColor: '#f1c40f'
  },
  backpack: {
    id: 'backpack',
    name: 'กระเป๋าเป้',
    icon: '🎒',
    bone: 'body',
    recommendedSlot: 'suit',
    defaultColor: '#6c5ce7'
  },
  custom: {
    id: 'custom',
    name: 'Blockbench',
    icon: '📁',
    bone: 'custom',
    recommendedSlot: 'head',
    defaultColor: '#38bdf8'
  }
};

/**
 * Standard Minecraft Bedrock Humanoid Bone Definitions
 */
function getBaseHumanoidBones(isSlim = false) {
  const armWidth = isSlim ? 3 : 4;
  const armOffset = isSlim ? 5.5 : 6;

  return [
    { name: 'root', pivot: [0, 0, 0] },
    { name: 'waist', parent: 'root', pivot: [0, 12, 0] },
    {
      name: 'body',
      parent: 'waist',
      pivot: [0, 24, 0],
      cubes: [
        { origin: [-4, 12, -2], size: [8, 12, 4], uv: [16, 16] },
        { origin: [-4, 12, -2], size: [8, 12, 4], inflate: 0.25, uv: [16, 32] }
      ]
    },
    {
      name: 'head',
      parent: 'body',
      pivot: [0, 24, 0],
      cubes: [
        { origin: [-4, 24, -4], size: [8, 8, 8], uv: [0, 0] }
      ]
    },
    {
      name: 'hat',
      parent: 'head',
      pivot: [0, 24, 0],
      cubes: [
        { origin: [-4, 24, -4], size: [8, 8, 8], inflate: 0.5, uv: [32, 0] }
      ]
    },
    {
      name: 'rightArm',
      parent: 'body',
      pivot: [-5, 22, 0],
      cubes: [
        { origin: [-armOffset - armWidth / 2, 12, -2], size: [armWidth, 12, 4], uv: [40, 16] },
        { origin: [-armOffset - armWidth / 2, 12, -2], size: [armWidth, 12, 4], inflate: 0.25, uv: [40, 32] }
      ]
    },
    {
      name: 'leftArm',
      parent: 'body',
      pivot: [5, 22, 0],
      cubes: [
        { origin: [armOffset - armWidth / 2, 12, -2], size: [armWidth, 12, 4], uv: [32, 48] },
        { origin: [armOffset - armWidth / 2, 12, -2], size: [armWidth, 12, 4], inflate: 0.25, uv: [48, 48] }
      ]
    },
    {
      name: 'rightLeg',
      parent: 'root',
      pivot: [-1.9, 12, 0],
      cubes: [
        { origin: [-3.9, 0, -2], size: [4, 12, 4], uv: [0, 16] },
        { origin: [-3.9, 0, -2], size: [4, 12, 4], inflate: 0.25, uv: [0, 32] }
      ]
    },
    {
      name: 'leftLeg',
      parent: 'root',
      pivot: [1.9, 12, 0],
      cubes: [
        { origin: [-0.1, 0, -2], size: [4, 12, 4], uv: [16, 48] },
        { origin: [-0.1, 0, -2], size: [4, 12, 4], inflate: 0.25, uv: [0, 48] }
      ]
    }
  ];
}

/**
 * Get cosmetic extra cubes for Bedrock geometry
 */
export function getCosmeticCubesForBedrock(cosmeticId) {
  switch (cosmeticId) {
    case 'cat_ears':
      return {
        boneName: 'head',
        cubes: [
          // Left Ear
          { origin: [1.5, 32, -1], size: [2.5, 3, 2], uv: [54, 0] },
          // Right Ear
          { origin: [-4.0, 32, -1], size: [2.5, 3, 2], uv: [54, 0] },
          // Inner Ear Details
          { origin: [1.9, 32.4, -1.2], size: [1.7, 2.2, 0.4], uv: [58, 0] },
          { origin: [-3.6, 32.4, -1.2], size: [1.7, 2.2, 0.4], uv: [58, 0] }
        ]
      };
    case 'dragon_wings':
      return {
        boneName: 'body',
        cubes: [
          // Left Wing (X: 3.5 to 11.5, Y: 15 to 25, Z: 2.2 to 3.2)
          { origin: [3.0, 15, 2.2], size: [8, 8, 0.8], uv: [48, 16] },
          { origin: [6.5, 22, 2.4], size: [5, 5, 0.6], uv: [48, 26] },
          // Right Wing (X: -11.5 to -3.5, Y: 15 to 25, Z: 2.2 to 3.2)
          { origin: [-11.0, 15, 2.2], size: [8, 8, 0.8], uv: [48, 16] },
          { origin: [-11.5, 22, 2.4], size: [5, 5, 0.6], uv: [48, 26] }
        ]
      };
    case 'fox_tail':
      return {
        boneName: 'body',
        cubes: [
          // Segment 1 (Base, angled down)
          { origin: [-1.5, 10, 2.2], size: [3, 4, 3], uv: [0, 48] },
          // Segment 2 (Middle thick)
          { origin: [-2.0, 6, 4.5], size: [4, 5, 4], uv: [12, 48] },
          // Segment 3 (Curving up)
          { origin: [-1.5, 3, 7.0], size: [3, 4, 3], uv: [28, 48] },
          // Segment 4 (Fluffy Tip)
          { origin: [-1.0, 1, 8.5], size: [2, 3, 2], uv: [40, 48] }
        ]
      };
    case 'crown':
      return {
        boneName: 'head',
        cubes: [
          // Crown Base Rim
          { origin: [-4.5, 32.2, -4.5], size: [9, 1.5, 9], uv: [0, 32] },
          // Front Center Spike
          { origin: [-0.75, 33.7, -4.6], size: [1.5, 2.2, 1.5], uv: [42, 32] },
          // Corner Spikes
          { origin: [-4.5, 33.7, -4.5], size: [1.5, 1.5, 1.5], uv: [36, 32] },
          { origin: [3.0, 33.7, -4.5], size: [1.5, 1.5, 1.5], uv: [36, 32] },
          { origin: [-4.5, 33.7, 3.0], size: [1.5, 1.5, 1.5], uv: [36, 32] },
          { origin: [3.0, 33.7, 3.0], size: [1.5, 1.5, 1.5], uv: [36, 32] }
        ]
      };
    case 'backpack':
      return {
        boneName: 'body',
        cubes: [
          // Main Compartment
          { origin: [-3.5, 13, 2.2], size: [7, 9, 3.5], uv: [0, 40] },
          // Front Outer Pocket
          { origin: [-2.5, 14, 5.7], size: [5, 5, 1.2], uv: [22, 40] },
          // Sleeping Bag Roll on Top
          { origin: [-4.0, 22.2, 2.5], size: [8, 2.4, 2.5], uv: [36, 40] }
        ]
      };
    default:
      return null;
  }
}

/**
 * Generate Bedrock Geometry JSON for the Addon package
 */
export function generateBedrockCosmeticGeometry(cosmeticId, isSlim = false, customJson = null) {
  if (cosmeticId === 'custom' && customJson) {
    return customJson;
  }

  const identifier = cosmeticId && cosmeticId !== 'none'
    ? `geometry.zirconx_${cosmeticId}`
    : (isSlim ? 'geometry.humanoid.customSlim' : 'geometry.humanoid.custom');

  const bones = getBaseHumanoidBones(isSlim);

  // If a preset cosmetic is active, merge its cubes into the target bone
  const cosmeticInfo = getCosmeticCubesForBedrock(cosmeticId);
  if (cosmeticInfo) {
    const targetBone = bones.find(b => b.name === cosmeticInfo.boneName);
    if (targetBone) {
      if (!targetBone.cubes) targetBone.cubes = [];
      targetBone.cubes.push(...cosmeticInfo.cubes);
    }
  }

  return {
    format_version: '1.12.0',
    'minecraft:geometry': [
      {
        description: {
          identifier,
          texture_width: 64,
          texture_height: 64,
          visible_bounds_width: 3,
          visible_bounds_height: 3.5,
          visible_bounds_offset: [0, 1.5, 0]
        },
        bones
      }
    ]
  };
}

/**
 * Parse & Validate custom Blockbench .geo.json
 */
export function parseBlockbenchGeoJson(content) {
  let json;
  try {
    json = typeof content === 'string' ? JSON.parse(content) : content;
  } catch (err) {
    throw new AppError(ErrorCode.GENERATOR_INVALID_FILE, 'ไฟล์ JSON เสียหายหรือไม่ถูกต้อง');
  }

  if (!json || (!json['minecraft:geometry'] && !json.geometry)) {
    throw new AppError(ErrorCode.GENERATOR_INVALID_FILE, 'ไม่พบโครงสร้าง "minecraft:geometry" ในไฟล์');
  }

  const geometries = json['minecraft:geometry'] || json.geometry;
  if (!Array.isArray(geometries) || geometries.length === 0) {
    throw new AppError(ErrorCode.GENERATOR_INVALID_FILE, 'โครงสร้าง Geometry ว่างเปล่า');
  }

  const geo = geometries[0];
  const identifier = geo.description?.identifier || 'geometry.custom';
  const bones = geo.bones || [];

  let cubeCount = 0;
  bones.forEach(b => {
    if (Array.isArray(b.cubes)) {
      cubeCount += b.cubes.length;
    }
  });

  return {
    json,
    identifier,
    bonesCount: bones.length,
    cubeCount,
    texWidth: geo.description?.texture_width || 64,
    texHeight: geo.description?.texture_height || 64
  };
}

/**
 * Remove any cosmetic meshes previously attached to viewer
 */
export function removeCosmeticFromViewer(viewer) {
  if (!viewer || !viewer.playerObject || !viewer.playerObject.skin) return;

  const skin = viewer.playerObject.skin;
  const groupsToClean = [skin.head, skin.body, skin.rightArm, skin.leftArm, skin.rightLeg, skin.leftLeg];

  groupsToClean.forEach(group => {
    if (!group) return;
    const toRemove = [];
    group.children.forEach(child => {
      if (child.userData && child.userData.isCosmetic) {
        toRemove.push(child);
      }
    });

    toRemove.forEach(child => {
      group.remove(child);
      child.traverse(obj => {
        if (obj.geometry) obj.geometry.dispose();
        if (obj.material) {
          if (Array.isArray(obj.material)) obj.material.forEach(m => m.dispose());
          else obj.material.dispose();
        }
      });
    });
  });
}

/**
 * Attach a 3D cosmetic to skinview3d viewer in real time
 */
export function attachCosmeticToViewer(viewer, cosmeticId, options = {}) {
  if (!viewer || !viewer.playerObject || !viewer.playerObject.skin) return;
  removeCosmeticFromViewer(viewer);

  if (!cosmeticId || cosmeticId === 'none') return;

  const colorHex = options.color || '#ff758c';
  const threeColor = new THREE.Color(colorHex);
  const material = new THREE.MeshStandardMaterial({
    color: threeColor,
    roughness: 0.75,
    metalness: 0.1
  });

  const skin = viewer.playerObject.skin;

  if (cosmeticId === 'cat_ears' && skin.head) {
    const earGroup = new THREE.Group();
    earGroup.userData.isCosmetic = true;

    const earOuterMat = material;
    const earInnerMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color('#ffb3c6'),
      roughness: 0.8
    });

    // Left Ear
    const lEarGeom = new THREE.BoxGeometry(2.5, 3.2, 2.0);
    const lEarMesh = new THREE.Mesh(lEarGeom, earOuterMat);
    lEarMesh.position.set(2.6, 9.4, 0.4);
    lEarMesh.rotation.z = -0.15;
    earGroup.add(lEarMesh);

    const lInnerGeom = new THREE.BoxGeometry(1.6, 2.2, 0.5);
    const lInnerMesh = new THREE.Mesh(lInnerGeom, earInnerMat);
    lInnerMesh.position.set(2.6, 9.2, 1.3);
    lInnerMesh.rotation.z = -0.15;
    earGroup.add(lInnerMesh);

    // Right Ear
    const rEarGeom = new THREE.BoxGeometry(2.5, 3.2, 2.0);
    const rEarMesh = new THREE.Mesh(rEarGeom, earOuterMat);
    rEarMesh.position.set(-2.6, 9.4, 0.4);
    rEarMesh.rotation.z = 0.15;
    earGroup.add(rEarMesh);

    const rInnerGeom = new THREE.BoxGeometry(1.6, 2.2, 0.5);
    const rInnerMesh = new THREE.Mesh(rInnerGeom, earInnerMat);
    rInnerMesh.position.set(-2.6, 9.2, 1.3);
    rInnerMesh.rotation.z = 0.15;
    earGroup.add(rInnerMesh);

    skin.head.add(earGroup);
  } else if (cosmeticId === 'dragon_wings' && skin.body) {
    const wingsGroup = new THREE.Group();
    wingsGroup.userData.isCosmetic = true;

    // Left Wing
    const lWingGeom = new THREE.BoxGeometry(8, 8, 0.8);
    const lWingMesh = new THREE.Mesh(lWingGeom, material);
    lWingMesh.position.set(6.8, 2.0, -2.6);
    lWingMesh.rotation.y = -0.4;
    lWingMesh.rotation.z = 0.18;
    wingsGroup.add(lWingMesh);

    // Right Wing
    const rWingGeom = new THREE.BoxGeometry(8, 8, 0.8);
    const rWingMesh = new THREE.Mesh(rWingGeom, material);
    rWingMesh.position.set(-6.8, 2.0, -2.6);
    rWingMesh.rotation.y = 0.4;
    rWingMesh.rotation.z = -0.18;
    wingsGroup.add(rWingMesh);

    skin.body.add(wingsGroup);
  } else if (cosmeticId === 'fox_tail' && skin.body) {
    const tailGroup = new THREE.Group();
    tailGroup.userData.isCosmetic = true;

    const tipMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color('#ffffff'),
      roughness: 0.8
    });

    // Base segment
    const seg1 = new THREE.Mesh(new THREE.BoxGeometry(3, 4, 3), material);
    seg1.position.set(0, -4.5, -2.6);
    seg1.rotation.x = -0.4;
    tailGroup.add(seg1);

    // Mid segment
    const seg2 = new THREE.Mesh(new THREE.BoxGeometry(4, 5, 4), material);
    seg2.position.set(0, -7.5, -4.8);
    seg2.rotation.x = -0.2;
    tailGroup.add(seg2);

    // Tip segment (white fluffy)
    const seg3 = new THREE.Mesh(new THREE.BoxGeometry(3, 4, 3), tipMat);
    seg3.position.set(0, -10.2, -6.6);
    seg3.rotation.x = 0.2;
    tailGroup.add(seg3);

    skin.body.add(tailGroup);
  } else if (cosmeticId === 'crown' && skin.head) {
    const crownGroup = new THREE.Group();
    crownGroup.userData.isCosmetic = true;

    const goldMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color('#f1c40f'),
      metalness: 0.6,
      roughness: 0.35
    });
    const gemMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color('#ef4444'),
      roughness: 0.2
    });

    // Rim
    const rim = new THREE.Mesh(new THREE.BoxGeometry(9.2, 1.4, 9.2), goldMat);
    rim.position.set(0, 8.7, 0);
    crownGroup.add(rim);

    // Spikes
    const positions = [
      [0, 9.8, 4.6],
      [-4.6, 9.8, -4.6],
      [4.6, 9.8, -4.6],
      [-4.6, 9.8, 4.6],
      [4.6, 9.8, 4.6]
    ];
    positions.forEach(pos => {
      const spike = new THREE.Mesh(new THREE.BoxGeometry(1.6, 1.6, 1.6), goldMat);
      spike.position.set(pos[0], pos[1], pos[2]);
      crownGroup.add(spike);
    });

    // Center Gem
    const gem = new THREE.Mesh(new THREE.BoxGeometry(1.0, 1.0, 0.4), gemMat);
    gem.position.set(0, 8.7, 4.8);
    crownGroup.add(gem);

    skin.head.add(crownGroup);
  } else if (cosmeticId === 'backpack' && skin.body) {
    const bagGroup = new THREE.Group();
    bagGroup.userData.isCosmetic = true;

    const bagMat = material;
    const pocketMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color('#2d3436'),
      roughness: 0.85
    });
    const rollMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color('#00b894'),
      roughness: 0.7
    });

    // Main backpack
    const mainBag = new THREE.Mesh(new THREE.BoxGeometry(7, 9, 3.5), bagMat);
    mainBag.position.set(0, 0, -3.8);
    bagGroup.add(mainBag);

    // Front pocket
    const pocket = new THREE.Mesh(new THREE.BoxGeometry(5, 4.5, 1.2), pocketMat);
    pocket.position.set(0, -1.2, -6.1);
    bagGroup.add(pocket);

    // Sleeping bag roll
    const roll = new THREE.Mesh(new THREE.BoxGeometry(8, 2.4, 2.5), rollMat);
    roll.position.set(0, 5.6, -3.8);
    bagGroup.add(roll);

    skin.body.add(bagGroup);
  } else if (cosmeticId === 'custom' && options.customJson) {
    // Parse Blockbench model and render boxes
    try {
      const geo = options.customJson['minecraft:geometry']?.[0] || options.customJson.geometry?.[0];
      if (geo && Array.isArray(geo.bones)) {
        geo.bones.forEach(b => {
          const boneName = b.name;
          const targetGroup = skin[boneName];
          if (!targetGroup || !Array.isArray(b.cubes)) return;

          const customBoneGroup = new THREE.Group();
          customBoneGroup.userData.isCosmetic = true;

          const pivot = b.pivot || [0, 0, 0];
          b.cubes.forEach(c => {
            const size = c.size || [1, 1, 1];
            const origin = c.origin || [0, 0, 0];

            // Calculate center relative to pivot in Three.js coords
            const sx = size[0];
            const sy = size[1];
            const sz = size[2];
            const cx = (origin[0] + sx / 2) - pivot[0];
            const cy = (origin[1] + sy / 2) - pivot[1];
            const cz = -((origin[2] + sz / 2) - pivot[2]);

            const geom = new THREE.BoxGeometry(sx, sy, sz);
            const mesh = new THREE.Mesh(geom, material);
            mesh.position.set(cx, cy, cz);
            customBoneGroup.add(mesh);
          });

          targetGroup.add(customBoneGroup);
        });
      }
    } catch (e) {
      console.warn('Failed to render custom Blockbench preview:', e);
    }
  }
}

/**
 * Sample dominant or average color from skin canvas for smart "Auto" tint
 */
export function sampleSkinColor(canvasOrImage, region = 'head') {
  try {
    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext('2d');
    if (!ctx) return '#ff758c';

    ctx.drawImage(canvasOrImage, 0, 0, 64, 64);

    let startX = 8, startY = 8, w = 8, h = 8;
    if (region === 'body') {
      startX = 20;
      startY = 20;
      w = 8;
      h = 8;
    }

    const imgData = ctx.getImageData(startX, startY, w, h);
    let r = 0, g = 0, b = 0, count = 0;

    for (let i = 0; i < imgData.data.length; i += 4) {
      const alpha = imgData.data[i + 3];
      if (alpha > 128) {
        r += imgData.data[i];
        g += imgData.data[i + 1];
        b += imgData.data[i + 2];
        count++;
      }
    }

    if (count === 0) return '#ff758c';

    r = Math.round(r / count);
    g = Math.round(g / count);
    b = Math.round(b / count);

    const toHex = c => c.toString(16).padStart(2, '0');
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
  } catch (e) {
    return '#ff758c';
  }
}
