/**
 * Standalone Skin Item Addon Generator (แอดออนสกินแบบไอเทม)
 */
import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import { generateUUID, generateRandomId, processSkinResolution, showToast } from './utils.js';
import * as skinview3d from 'skinview3d';

export class StandaloneAddonGenerator {
  constructor() {
    this.addonVersion = [1, 0, 0];
    this.addonName = '';
    this.itemName = '';
    this.itemIconDataUrl = null;

    this.skinImg = new Image();
    this.skinResolution = 64;
    this.processedSkinBlob = null;

    this.modelType = 1; // 1: Steve (Classic), 2: Alex (Slim), 3: Custom Geometry
    this.customGeometryJson = null;

    this.parts = {
      head: true,
      body: true,
      arms: true,
      legs: true
    };

    this.canvas = document.getElementById('standalone-canvas');
    this.ctx = this.canvas ? this.canvas.getContext('2d') : null;
    this.viewer = null;

    this.init();
  }

  init() {
    // 3D Viewer setup
    const container = document.getElementById('standalone-3d-container');
    if (container) {
      this.viewer = new skinview3d.SkinViewer({
        canvas: document.getElementById('standalone-3d-canvas'),
        width: container.clientWidth || 300,
        height: 320
      });
      this.viewer.camera.position.z = 70;
      this.viewer.animation = new skinview3d.WalkingAnimation();
      this.viewer.animation.speed = 0.6;
    }

    // Version inputs
    ['major', 'minor', 'patch'].forEach((v, index) => {
      const input = document.getElementById(`standalone-v-${v}`);
      if (input) {
        input.addEventListener('input', (e) => {
          let val = parseInt(e.target.value);
          if (isNaN(val) || val < 0) val = 0;
          if (val > 99) val = 99;
          this.addonVersion[index] = val;
          e.target.value = val;
        });
      }
    });

    // Addon Name & Item Name
    const nameInput = document.getElementById('standalone-addon-name');
    if (nameInput) {
      nameInput.addEventListener('input', (e) => this.addonName = e.target.value.trim());
    }

    const itemInput = document.getElementById('standalone-item-name');
    if (itemInput) {
      itemInput.addEventListener('input', (e) => this.itemName = e.target.value.trim());
    }

    // Item Icon Input
    const iconInput = document.getElementById('standalone-icon-input');
    if (iconInput) {
      iconInput.addEventListener('change', (e) => this.handleIconUpload(e));
    }

    const removeIconBtn = document.getElementById('standalone-remove-icon-btn');
    if (removeIconBtn) {
      removeIconBtn.addEventListener('click', () => {
        this.itemIconDataUrl = null;
        document.getElementById('standalone-icon-preview').style.display = 'none';
        document.getElementById('standalone-icon-dropzone').style.display = 'flex';
        removeIconBtn.style.display = 'none';
      });
    }

    // Skin upload input
    const skinInput = document.getElementById('standalone-skin-input');
    if (skinInput) {
      skinInput.addEventListener('change', (e) => this.handleSkinUpload(e));
    }

    // Part checkboxes
    ['head', 'body', 'arms', 'legs'].forEach(part => {
      const checkbox = document.getElementById(`standalone-part-${part}`);
      if (checkbox) {
        checkbox.addEventListener('change', (e) => {
          this.parts[part] = e.target.checked;
          const parent = checkbox.closest('.part-toggle-item');
          if (parent) {
            parent.classList.toggle('checked', e.target.checked);
          }
          this.renderSkin();
        });
      }
    });

    // Model selection buttons
    document.querySelectorAll('.model-select-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.model-select-btn').forEach(b => b.classList.remove('active', 'mc-btn-primary'));
        btn.classList.add('active', 'mc-btn-primary');
        this.modelType = parseInt(btn.dataset.model);

        const customUploadArea = document.getElementById('standalone-custom-model-area');
        if (customUploadArea) {
          customUploadArea.style.display = this.modelType === 3 ? 'block' : 'none';
        }

        if (this.viewer) {
          this.viewer.playerObject.skin.modelType = this.modelType === 2 ? 'slim' : 'default';
        }
      });
    });

    // Custom geometry upload
    const customGeoInput = document.getElementById('standalone-custom-geo-input');
    if (customGeoInput) {
      customGeoInput.addEventListener('change', (e) => this.handleCustomGeometryUpload(e));
    }

    // Download Button
    const downloadBtn = document.getElementById('standalone-download-btn');
    if (downloadBtn) {
      downloadBtn.addEventListener('click', () => this.generateAddon());
    }
  }

  handleIconUpload(e) {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new Image();
      img.onload = () => {
        // Resize to 16x16 pixel icon
        const canvas = document.createElement('canvas');
        canvas.width = 16;
        canvas.height = 16;
        const ctx = canvas.getContext('2d');
        ctx.imageSmoothingEnabled = false;
        ctx.drawImage(img, 0, 0, 16, 16);
        this.itemIconDataUrl = canvas.toDataURL('image/png');

        const preview = document.getElementById('standalone-icon-preview');
        preview.src = this.itemIconDataUrl;
        preview.style.display = 'block';
        document.getElementById('standalone-icon-dropzone').style.display = 'none';
        document.getElementById('standalone-remove-icon-btn').style.display = 'inline-flex';
        showToast('อัพโหลดไอคอนไอเทมสำเร็จ (16x16)', 'success');
      };
      img.src = event.target.result;
    };
    reader.readAsDataURL(file);
  }

  async handleSkinUpload(e) {
    const file = e.target.files[0];
    if (!file) return;

    // Smart autofill: Extract filename without extension
    const baseName = file.name.replace(/\.[^/.]+$/, '').replace(/[^a-zA-Z0-9_\s]/g, '');
    const addonInput = document.getElementById('standalone-addon-name');
    const itemInput = document.getElementById('standalone-item-name');

    if (addonInput && !addonInput.value.trim()) {
      this.addonName = baseName.replace(/\s+/g, '');
      addonInput.value = this.addonName;
    }
    if (itemInput && !itemInput.value.trim()) {
      this.itemName = baseName;
      itemInput.value = this.itemName;
    }

    try {
      const reader = new FileReader();
      reader.onload = async (event) => {
        const rawImg = new Image();
        rawImg.onload = async () => {
          try {
            const processedImg = await processSkinResolution(rawImg);
            this.skinImg = processedImg;
            this.skinResolution = processedImg.width;

            this.canvas.width = this.skinResolution;
            this.canvas.height = this.skinResolution;

            // Auto-generate 16x16 icon from head if no icon was uploaded
            if (!this.itemIconDataUrl) {
              const iconCanvas = document.createElement('canvas');
              iconCanvas.width = 16;
              iconCanvas.height = 16;
              const ictx = iconCanvas.getContext('2d');
              ictx.imageSmoothingEnabled = false;
              // Crop face from skin (head front is 8x8 at x=8, y=8 for 64x64)
              const t = this.skinResolution / 64;
              ictx.drawImage(processedImg, 8 * t, 8 * t, 8 * t, 8 * t, 0, 0, 16, 16);
              // Also layer hat front if present (x=40, y=8)
              ictx.drawImage(processedImg, 40 * t, 8 * t, 8 * t, 8 * t, 0, 0, 16, 16);
              this.itemIconDataUrl = iconCanvas.toDataURL('image/png');

              const preview = document.getElementById('standalone-icon-preview');
              if (preview) {
                preview.src = this.itemIconDataUrl;
                preview.style.display = 'block';
                document.getElementById('standalone-icon-dropzone').style.display = 'none';
                document.getElementById('standalone-remove-icon-btn').style.display = 'inline-flex';
              }
            }

            // Reset checkboxes
            ['head', 'body', 'arms', 'legs'].forEach(part => {
              this.parts[part] = true;
              const cb = document.getElementById(`standalone-part-${part}`);
              if (cb) cb.checked = true;
              const parent = cb?.closest('.part-toggle-item');
              if (parent) parent.classList.add('checked');
            });

            document.getElementById('standalone-skin-workarea').style.display = 'block';
            this.renderSkin();
            showToast('อัพโหลดสกินและตั้งชื่ออัตโนมัติสำเร็จ!', 'success');
          } catch (err) {
            showToast(err.message, 'error');
          }
        };
        rawImg.src = event.target.result;
      };
      reader.readAsDataURL(file);
    } catch (err) {
      showToast('ไม่สามารถอ่านไฟล์ได้', 'error');
    }
  }

  handleCustomGeometryUpload(e) {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const json = JSON.parse(event.target.result);
        if (json.format_version && json['minecraft:geometry']) {
          this.customGeometryJson = json;
          const geoId = json['minecraft:geometry'][0]?.description?.identifier || 'custom';
          showToast(`โหลดโมเดล Geometry: ${geoId}`, 'success');
        } else {
          showToast('รูปแบบไฟล์ Geometry JSON ไม่ถูกต้อง', 'error');
          this.customGeometryJson = null;
        }
      } catch (err) {
        showToast('ไฟล์ JSON เสียหายหรือไม่ถูกต้อง', 'error');
        this.customGeometryJson = null;
      }
    };
    reader.readAsText(file);
  }

  renderSkin() {
    if (!this.skinImg.src) return;

    this.ctx.clearRect(0, 0, this.skinResolution, this.skinResolution);
    this.ctx.imageSmoothingEnabled = false;
    this.ctx.drawImage(this.skinImg, 0, 0, this.skinResolution, this.skinResolution);

    const t = this.skinResolution / 64;
    const rects = {
      head: [{ x: 0 * t, y: 0 * t, w: 32 * t, h: 16 * t }, { x: 32 * t, y: 0 * t, w: 32 * t, h: 16 * t }],
      body: [{ x: 16 * t, y: 16 * t, w: 24 * t, h: 16 * t }, { x: 16 * t, y: 32 * t, w: 24 * t, h: 16 * t }],
      arms: [
        { x: 40 * t, y: 16 * t, w: 16 * t, h: 16 * t }, { x: 40 * t, y: 32 * t, w: 16 * t, h: 16 * t },
        { x: 32 * t, y: 48 * t, w: 16 * t, h: 16 * t }, { x: 48 * t, y: 48 * t, w: 16 * t, h: 16 * t }
      ],
      legs: [
        { x: 0 * t, y: 16 * t, w: 16 * t, h: 16 * t }, { x: 0 * t, y: 32 * t, w: 16 * t, h: 16 * t },
        { x: 16 * t, y: 48 * t, w: 16 * t, h: 16 * t }, { x: 0 * t, y: 48 * t, w: 16 * t, h: 16 * t }
      ]
    };

    if (!this.parts.head) rects.head.forEach(r => this.ctx.clearRect(r.x, r.y, r.w, r.h));
    if (!this.parts.body) rects.body.forEach(r => this.ctx.clearRect(r.x, r.y, r.w, r.h));
    if (!this.parts.arms) rects.arms.forEach(r => this.ctx.clearRect(r.x, r.y, r.w, r.h));
    if (!this.parts.legs) rects.legs.forEach(r => this.ctx.clearRect(r.x, r.y, r.w, r.h));

    this.canvas.toBlob(blob => {
      this.processedSkinBlob = blob;
      if (this.viewer && blob) {
        const url = URL.createObjectURL(blob);
        this.viewer.loadSkin(url);
      }
    }, 'image/png');
  }

  async generateAddon() {
    if (!this.addonName || !this.itemName) {
      showToast('กรุณากรอกชื่อแอดออน และชื่อไอเทมให้ครบถ้วน', 'error');
      return;
    }
    if (!this.processedSkinBlob) {
      showToast('กรุณาอัพโหลดสกินก่อนดาวน์โหลด', 'error');
      return;
    }
    if (this.modelType === 3 && !this.customGeometryJson) {
      showToast('กรุณาอัพโหลดไฟล์โมเดล Geometry JSON', 'error');
      return;
    }

    try {
      showToast('กำลังสร้างแอดออน...', 'info');
      const zip = new JSZip();
      const itemId = `skin_${generateRandomId(10)}`;
      const bpUuid = generateUUID();
      const rpUuid = generateUUID();

      // Geometry identifier selection
      let geometryIdentifier = 'geometry.humanoid.customSlim';
      if (this.modelType === 1) geometryIdentifier = 'geometry.humanoid.custom';
      if (this.modelType === 3 && this.customGeometryJson) {
        geometryIdentifier = this.customGeometryJson['minecraft:geometry'][0].description.identifier;
      }

      // 1. Behavior Pack
      const bpFolder = `${this.addonName}_ZirconX-SKIN_BP`;
      const itemJson = {
        format_version: "1.21.10",
        "minecraft:item": {
          description: {
            identifier: `magicskin:${itemId}`,
            menu_category: {
              category: "equipment",
              group: "itemGroup.name.leggings"
            }
          },
          components: {
            "minecraft:icon": itemId,
            "minecraft:max_stack_size": 1,
            "minecraft:wearable": {
              slot: "slot.armor.legs"
            },
            "minecraft:render_offsets": {
              main_hand: { third_person: { scale: [1e-5, 1e-5, 1e-5] }, first_person: { scale: [1e-5, 1e-5, 1e-5] } },
              off_hand: { third_person: { scale: [1e-5, 1e-5, 1e-5] }, first_person: { scale: [1e-5, 1e-5, 1e-5] } }
            },
            "minecraft:display_name": {
              value: this.itemName
            }
          }
        }
      };

      const bpManifest = {
        format_version: 2,
        header: {
          name: `${this.addonName} | Skin Item ${this.addonVersion.join(".")}`,
          description: `Custom wearable skin item addon generated by MCPE Skin Studio`,
          min_engine_version: [1, 21, 60],
          uuid: bpUuid,
          version: this.addonVersion
        },
        modules: [{
          type: "data",
          uuid: generateUUID(),
          version: this.addonVersion
        }],
        dependencies: [{
          uuid: rpUuid,
          version: this.addonVersion
        }]
      };

      zip.file(`${bpFolder}/items/${itemId}.json`, JSON.stringify(itemJson, null, 2));
      zip.file(`${bpFolder}/manifest.json`, JSON.stringify(bpManifest, null, 2));

      // 2. Resource Pack
      const rpFolder = `${this.addonName}_ZirconX-SKIN_RP`;
      const attachableJson = {
        format_version: "1.8.0",
        "minecraft:attachable": {
          description: {
            identifier: `magicskin:${itemId}`,
            materials: {
              default: "armor",
              enchanted: "armor_enchanted"
            },
            textures: {
              default: `textures/skin/${itemId}`,
              enchanted: "textures/misc/enchanted_item_glint"
            },
            geometry: {
              default: geometryIdentifier
            },
            scripts: {
              parent_setup: "variable.leg_layer_visible = 0.0;"
            },
            render_controllers: ["controller.render.armor"]
          }
        }
      };

      const itemTextureJson = {
        resource_pack_name: itemId,
        texture_name: "atlas.items",
        texture_data: {
          [itemId]: {
            textures: [`textures/items/magiclab/${itemId}`]
          }
        }
      };

      const rpManifest = {
        format_version: 2,
        header: {
          name: `${this.addonName} | Skin Item ${this.addonVersion.join(".")}`,
          description: `Custom wearable skin item addon generated by MCPE Skin Studio`,
          min_engine_version: [1, 21, 60],
          uuid: rpUuid,
          version: this.addonVersion
        },
        modules: [{
          type: "resources",
          uuid: generateUUID(),
          version: this.addonVersion
        }],
        dependencies: [{
          uuid: bpUuid,
          version: this.addonVersion
        }]
      };

      zip.file(`${rpFolder}/attachables/${itemId}.json`, JSON.stringify(attachableJson, null, 2));
      zip.file(`${rpFolder}/textures/item_texture.json`, JSON.stringify(itemTextureJson, null, 2));
      zip.file(`${rpFolder}/manifest.json`, JSON.stringify(rpManifest, null, 2));

      // Custom geometry if selected
      if (this.modelType === 3 && this.customGeometryJson) {
        const geoFileName = geometryIdentifier.replace('geometry.', '') + '.json';
        zip.file(`${rpFolder}/models/entity/${geoFileName}`, JSON.stringify(this.customGeometryJson, null, 2));
      }

      // Add skin texture
      zip.file(`${rpFolder}/textures/skin/${itemId}.png`, this.processedSkinBlob);

      // Add item icon
      if (this.itemIconDataUrl) {
        const iconBlob = await (await fetch(this.itemIconDataUrl)).blob();
        zip.file(`${rpFolder}/textures/items/magiclab/${itemId}.png`, iconBlob);
      } else {
        // Fallback default icon
        try {
          const defaultIcon = await (await fetch('/templates/ZirconX-SKIN_RP/textures/items/skin_item.png')).blob();
          zip.file(`${rpFolder}/textures/items/magiclab/${itemId}.png`, defaultIcon);
        } catch (_) {}
      }

      // Add pack icon
      try {
        const packIcon = await (await fetch('/templates/packicon.png')).blob();
        zip.file(`${bpFolder}/pack_icon.png`, packIcon);
        zip.file(`${rpFolder}/pack_icon.png`, packIcon);
      } catch (_) {}

      // Generate & download .mcaddon
      const mcaddonBlob = await zip.generateAsync({ type: "blob" });
      saveAs(mcaddonBlob, `${this.addonName}_v${this.addonVersion.join("_")}.mcaddon`);
      showToast('สร้างและดาวน์โหลดแอดออนสำเร็จ (.mcaddon)', 'success');
    } catch (err) {
      console.error(err);
      showToast('เกิดข้อผิดพลาดในการสร้างแอดออน', 'error');
    }
  }
}
