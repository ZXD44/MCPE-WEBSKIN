/**
 * Standalone Skin Item Addon Generator (แอดออนสกินแบบไอเทม)
 */
import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import { generateUUID, generateRandomId, processSkinResolution, showToast } from './utils.js';
import { isZipArchive, extractSkinFromArchive } from './ziphandler.js';
import { sfx } from './sfx.js';
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

    this.modelType = 1; // 1: Steve, 2: Alex, 3: Custom Geometry
    this.customGeometryJson = null;

    this.itemSlotType = 'suit'; // 'suit', 'head', 'legs', 'both'

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
        height: 260
      });
      if (this.viewer.renderer) {
        this.viewer.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      }
      this.viewer.camera.position.z = 70;
      this.viewer.animation = new skinview3d.WalkingAnimation();
      this.viewer.animation.speed = 0.5;

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (this.viewer && this.viewer.animation) {
            this.viewer.animation.paused = !entry.isIntersecting;
          }
        });
      }, { threshold: 0.1 });
      observer.observe(container);

      window.addEventListener('resize', () => {
        if (this.viewer && container.clientWidth) {
          this.viewer.width = container.clientWidth;
        }
      });
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

    // Item Slot Type buttons
    document.querySelectorAll('.slot-select-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.slot-select-btn').forEach(b => b.classList.remove('active', 'mc-btn-primary'));
        btn.classList.add('active', 'mc-btn-primary');
        this.itemSlotType = btn.dataset.slot || 'suit';

        // Auto sync part toggles for convenience
        if (this.itemSlotType === 'head') {
          this.parts = { head: true, body: false, arms: false, legs: false };
        } else if (this.itemSlotType === 'suit') {
          this.parts = { head: false, body: true, arms: true, legs: true };
        } else if (this.itemSlotType === 'legs') {
          this.parts = { head: false, body: false, arms: false, legs: true };
        } else if (this.itemSlotType === 'both') {
          this.parts = { head: true, body: true, arms: true, legs: true };
        }

        ['head', 'body', 'arms', 'legs'].forEach(part => {
          const cb = document.getElementById(`standalone-part-${part}`);
          if (cb) cb.checked = this.parts[part];
          const parent = cb?.closest('.part-toggle-item');
          if (parent) parent.classList.toggle('checked', this.parts[part]);
        });
        this.updateDynamicItemIcon();
        this.renderSkin();
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
        showToast('อัพโหลดไอคอนเรียบร้อย', 'success');
      };
      img.src = event.target.result;
    };
    reader.readAsDataURL(file);
  }

  async handleSkinUpload(e) {
    const file = e.target.files[0];
    if (!file) return;

    // Smart autofill: Extract clean filename without extension
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

    this.loadFile(file);
  }

  async loadFile(file) {
    try {
      if (await isZipArchive(file)) {
        showToast('กำลังแตกไฟล์ ZIP / แอดออน...', 'info');
        const extracted = await extractSkinFromArchive(file);
        
        // Autofill addon name if found in manifest
        if (extracted.addonName && !this.addonName) {
          this.addonName = extracted.addonName;
          const nameInput = document.getElementById('standalone-addon-name');
          if (nameInput) nameInput.value = this.addonName;
        }
        if (extracted.fileName && !this.itemName) {
          this.itemName = extracted.fileName;
          const itemInput = document.getElementById('standalone-item-name');
          if (itemInput) itemInput.value = this.itemName;
        }

        await this.loadSkinFromImage(extracted.image, `[ZIP] ${extracted.fileName}`);
        return;
      }

      const reader = new FileReader();
      reader.onload = async (event) => {
        const rawImg = new Image();
        rawImg.onload = async () => {
          await this.loadSkinFromImage(rawImg, file.name);
        };
        rawImg.onerror = () => showToast('ไฟล์ภาพไม่ถูกต้อง', 'error');
        rawImg.src = event.target.result;
      };
      reader.readAsDataURL(file);
    } catch (err) {
      showToast(err.message || 'ไม่สามารถอ่านไฟล์ได้', 'error');
    }
  }

  async loadSkinFromImage(rawImg, fileName = '') {
    try {
      const processedImg = await processSkinResolution(rawImg);
      this.skinImg = processedImg;
      this.skinResolution = processedImg.width;

      this.canvas.width = this.skinResolution;
      this.canvas.height = this.skinResolution;

      // Update resolution badge in DOM
      const resBadge = document.getElementById('standalone-res-badge');
      if (resBadge) {
        resBadge.textContent = this.skinResolution > 64 ? `${this.skinResolution}x${this.skinResolution} HD` : '64x64 Standard';
        resBadge.style.display = 'inline-flex';
      }

      // Auto-generate 16x16 icon directly from uploaded skin
      this.updateDynamicItemIcon();

      // Sync checkboxes with current slot type
      if (this.itemSlotType === 'head') {
        this.parts = { head: true, body: false, arms: false, legs: false };
      } else if (this.itemSlotType === 'suit') {
        this.parts = { head: false, body: true, arms: true, legs: true };
      } else if (this.itemSlotType === 'legs') {
        this.parts = { head: false, body: false, arms: false, legs: true };
      } else {
        this.parts = { head: true, body: true, arms: true, legs: true };
      }

      ['head', 'body', 'arms', 'legs'].forEach(part => {
        const cb = document.getElementById(`standalone-part-${part}`);
        if (cb) cb.checked = this.parts[part];
        const parent = cb?.closest('.part-toggle-item');
        if (parent) parent.classList.toggle('checked', this.parts[part]);
      });

      document.getElementById('standalone-skin-workarea').style.display = 'block';

      // Auto-resize 3D viewer
      const container = document.getElementById('standalone-3d-container');
      if (this.viewer && container) {
        this.viewer.width = container.clientWidth || 300;
      }

      this.renderSkin();
      sfx.playPop();
      showToast(fileName ? `โหลดสกิน ${fileName} เรียบร้อย` : 'อัปโหลดสกินเรียบร้อย', 'success');
    } catch (err) {
      showToast(err.message || 'ประมวลผลสกินล้มเหลว', 'error');
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
          showToast(`โหลดโมเดล: ${geoId}`, 'success');
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

  getPartRectangles() {
    const t = this.skinResolution / 64;
    const r = (x, y, w, h) => ({
      x: Math.round(x * t),
      y: Math.round(y * t),
      w: Math.round(w * t),
      h: Math.round(h * t)
    });

    return {
      head: [
        r(0, 0, 32, 16),
        r(32, 0, 32, 16)
      ],
      body: [
        r(16, 16, 24, 16),
        r(16, 32, 24, 16)
      ],
      arms: [
        r(40, 16, 16, 16),
        r(40, 32, 16, 16),
        r(32, 48, 16, 16),
        r(48, 48, 16, 16)
      ],
      legs: [
        r(0, 16, 16, 16),
        r(0, 32, 16, 16),
        r(16, 48, 16, 16),
        r(0, 48, 16, 16)
      ]
    };
  }

  renderSkin() {
    if (!this.skinImg.src) return;

    this.ctx.clearRect(0, 0, this.skinResolution, this.skinResolution);
    this.ctx.imageSmoothingEnabled = false;
    this.ctx.drawImage(this.skinImg, 0, 0, this.skinResolution, this.skinResolution);

    const rects = this.getPartRectangles();

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

  createSpecificSkinBlob(partsToKeep) {
    const tempCanvas = document.createElement('canvas');
    tempCanvas.width = this.skinResolution;
    tempCanvas.height = this.skinResolution;
    const tctx = tempCanvas.getContext('2d');
    tctx.imageSmoothingEnabled = false;
    tctx.drawImage(this.skinImg, 0, 0, this.skinResolution, this.skinResolution);

    const rects = this.getPartRectangles();
    if (!partsToKeep.head) rects.head.forEach(r => tctx.clearRect(r.x, r.y, r.w, r.h));
    if (!partsToKeep.body) rects.body.forEach(r => tctx.clearRect(r.x, r.y, r.w, r.h));
    if (!partsToKeep.arms) rects.arms.forEach(r => tctx.clearRect(r.x, r.y, r.w, r.h));
    if (!partsToKeep.legs) rects.legs.forEach(r => tctx.clearRect(r.x, r.y, r.w, r.h));

    return new Promise(resolve => tempCanvas.toBlob(resolve, 'image/png'));
  }

  updateDynamicItemIcon() {
    if (!this.skinImg || !this.skinImg.src) return;
    const canvas = document.createElement('canvas');
    canvas.width = 16;
    canvas.height = 16;
    const ctx = canvas.getContext('2d');
    ctx.imageSmoothingEnabled = false;
    const t = this.skinResolution / 64;

    if (this.itemSlotType === 'head') {
      // Head front (8x8 at x=8, y=8) + Hat layer (x=40, y=8)
      ctx.drawImage(this.skinImg, Math.round(8 * t), Math.round(8 * t), Math.round(8 * t), Math.round(8 * t), 0, 0, 16, 16);
      ctx.drawImage(this.skinImg, Math.round(40 * t), Math.round(8 * t), Math.round(8 * t), Math.round(8 * t), 0, 0, 16, 16);
    } else if (this.itemSlotType === 'legs') {
      // Leg front (4x12 at x=0, y=20) + Pant layer (x=0, y=36)
      ctx.drawImage(this.skinImg, Math.round(4 * t), Math.round(20 * t), Math.round(4 * t), Math.round(12 * t), 2, 2, 5, 12);
      ctx.drawImage(this.skinImg, Math.round(4 * t), Math.round(36 * t), Math.round(4 * t), Math.round(12 * t), 2, 2, 5, 12);
      ctx.drawImage(this.skinImg, Math.round(20 * t), Math.round(52 * t), Math.round(4 * t), Math.round(12 * t), 8, 2, 5, 12);
      ctx.drawImage(this.skinImg, Math.round(4 * t), Math.round(52 * t), Math.round(4 * t), Math.round(12 * t), 8, 2, 5, 12);
    } else {
      // Torso front (8x12 at x=20, y=20) + Jacket outer layer (x=20, y=36)
      ctx.drawImage(this.skinImg, Math.round(20 * t), Math.round(20 * t), Math.round(8 * t), Math.round(12 * t), 4, 2, 8, 12);
      ctx.drawImage(this.skinImg, Math.round(20 * t), Math.round(36 * t), Math.round(8 * t), Math.round(12 * t), 4, 2, 8, 12);
      // Right arm (4x12 at x=44, y=20) and Left arm (4x12 at x=36, y=52)
      ctx.drawImage(this.skinImg, Math.round(44 * t), Math.round(20 * t), Math.round(4 * t), Math.round(12 * t), 0, 2, 4, 12);
      ctx.drawImage(this.skinImg, Math.round(36 * t), Math.round(52 * t), Math.round(4 * t), Math.round(12 * t), 12, 2, 4, 12);
    }

    this.itemIconDataUrl = canvas.toDataURL('image/png');
    const preview = document.getElementById('standalone-icon-preview');
    if (preview) {
      preview.src = this.itemIconDataUrl;
      preview.style.display = 'block';
      const dropzone = document.getElementById('standalone-icon-dropzone');
      if (dropzone) dropzone.style.display = 'none';
      const removeBtn = document.getElementById('standalone-remove-icon-btn');
      if (removeBtn) removeBtn.style.display = 'inline-flex';
    }
  }

  createHeadIconBlob() {
    const canvas = document.createElement('canvas');
    canvas.width = 16;
    canvas.height = 16;
    const ctx = canvas.getContext('2d');
    ctx.imageSmoothingEnabled = false;
    const t = this.skinResolution / 64;
    ctx.drawImage(this.skinImg, Math.round(8 * t), Math.round(8 * t), Math.round(8 * t), Math.round(8 * t), 0, 0, 16, 16);
    ctx.drawImage(this.skinImg, Math.round(40 * t), Math.round(8 * t), Math.round(8 * t), Math.round(8 * t), 0, 0, 16, 16);
    return new Promise(resolve => canvas.toBlob(resolve, 'image/png'));
  }

  createSuitIconBlob() {
    const canvas = document.createElement('canvas');
    canvas.width = 16;
    canvas.height = 16;
    const ctx = canvas.getContext('2d');
    ctx.imageSmoothingEnabled = false;
    const t = this.skinResolution / 64;
    ctx.drawImage(this.skinImg, Math.round(20 * t), Math.round(20 * t), Math.round(8 * t), Math.round(12 * t), 4, 2, 8, 12);
    ctx.drawImage(this.skinImg, Math.round(20 * t), Math.round(36 * t), Math.round(8 * t), Math.round(12 * t), 4, 2, 8, 12);
    ctx.drawImage(this.skinImg, Math.round(44 * t), Math.round(20 * t), Math.round(4 * t), Math.round(12 * t), 0, 2, 4, 12);
    ctx.drawImage(this.skinImg, Math.round(36 * t), Math.round(52 * t), Math.round(4 * t), Math.round(12 * t), 12, 2, 4, 12);
    return new Promise(resolve => canvas.toBlob(resolve, 'image/png'));
  }

  async generateAddon() {
    if (!this.addonName || !this.itemName) {
      showToast('กรุณากรอกชื่อแอดออนและชื่อไอเทมให้ครบถ้วน', 'error');
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

      // Clean ID base with random suffix to prevent collisions
      const safeSlug = (this.itemName || '')
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9]/g, '_')
        .replace(/_+/g, '_')
        .replace(/^_+|_+$/g, '')
        .slice(0, 14);

      const uniqueSuffix = generateRandomId(6);
      const baseItemId = safeSlug ? `skin_${safeSlug}_${uniqueSuffix}` : `skin_${uniqueSuffix}`;
      const bpUuid = generateUUID();
      const rpUuid = generateUUID();

      // Geometry identifier selection
      let geometryIdentifier = 'geometry.humanoid.customSlim';
      if (this.modelType === 1) geometryIdentifier = 'geometry.humanoid.custom';
      if (this.modelType === 3 && this.customGeometryJson) {
        geometryIdentifier = this.customGeometryJson['minecraft:geometry'][0].description.identifier;
      }

      // Configure item configurations (support suit, head, legs, or both head & suit)
      let itemConfigs = [];
      if (this.itemSlotType === 'head') {
        itemConfigs.push({
          id: `${baseItemId}_head`,
          name: this.itemName,
          slot: 'slot.armor.head',
          group: 'itemGroup.name.helmet',
          parentSetup: 'variable.helmet_layer_visible = 0.0;',
          skinBlob: this.processedSkinBlob,
          isHead: true
        });
      } else if (this.itemSlotType === 'suit') {
        itemConfigs.push({
          id: `${baseItemId}_suit`,
          name: this.itemName,
          slot: 'slot.armor.chest',
          group: 'itemGroup.name.chestplate',
          parentSetup: 'variable.chest_layer_visible = 0.0;',
          skinBlob: this.processedSkinBlob,
          isHead: false
        });
      } else if (this.itemSlotType === 'legs') {
        itemConfigs.push({
          id: `${baseItemId}_legs`,
          name: this.itemName,
          slot: 'slot.armor.legs',
          group: 'itemGroup.name.leggings',
          parentSetup: 'variable.leg_layer_visible = 0.0;',
          skinBlob: this.processedSkinBlob,
          isHead: false
        });
      } else if (this.itemSlotType === 'both') {
        // Head piece
        const headSkinBlob = await this.createSpecificSkinBlob({ head: true, body: false, arms: false, legs: false });
        itemConfigs.push({
          id: `${baseItemId}_head`,
          name: `${this.itemName} (หัว)`,
          slot: 'slot.armor.head',
          group: 'itemGroup.name.helmet',
          parentSetup: 'variable.helmet_layer_visible = 0.0;',
          skinBlob: headSkinBlob,
          isHead: true
        });
        // Suit piece (body + arms + legs)
        const suitSkinBlob = await this.createSpecificSkinBlob({ head: false, body: true, arms: true, legs: true });
        itemConfigs.push({
          id: `${baseItemId}_suit`,
          name: `${this.itemName} (ชุด)`,
          slot: 'slot.armor.chest',
          group: 'itemGroup.name.chestplate',
          parentSetup: 'variable.chest_layer_visible = 0.0;',
          skinBlob: suitSkinBlob,
          isHead: false
        });
      }

      const bpFolder = `${this.addonName}_ZirconX-SKIN_BP`;
      const rpFolder = `${this.addonName}_ZirconX-SKIN_RP`;

      // 1. Behavior Pack Items (Unbreakable & Zero Protection)
      itemConfigs.forEach(item => {
        const itemJson = {
          format_version: "1.21.10",
          "minecraft:item": {
            description: {
              identifier: `zirconx:${item.id}`,
              menu_category: {
                category: "equipment",
                group: item.group
              }
            },
            components: {
              "minecraft:icon": item.id,
              "minecraft:max_stack_size": 1,
              "minecraft:wearable": {
                slot: item.slot,
                protection: 0
              },
              "minecraft:display_name": {
                value: item.name
              }
              // No minecraft:durability component = Unbreakable (ไม่มีวันพัง)
            }
          }
        };
        zip.file(`${bpFolder}/items/${item.id}.json`, JSON.stringify(itemJson, null, 2));
      });

      // Manifests
      const bpManifest = {
        format_version: 2,
        header: {
          name: `${this.addonName} | สกินไอเทม ${this.addonVersion.join(".")}`,
          description: "แอดออนสกินสวมใส่ สร้างโดย ZirconX Skin Project",
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
      zip.file(`${bpFolder}/manifest.json`, JSON.stringify(bpManifest, null, 2));

      // 2. Resource Pack Attachables & Textures
      const itemTextureJson = {
        resource_pack_name: this.addonName,
        texture_name: "atlas.items",
        texture_data: {}
      };

      for (const item of itemConfigs) {
        const attachableJson = {
          format_version: "1.8.0",
          "minecraft:attachable": {
            description: {
              identifier: `zirconx:${item.id}`,
              materials: {
                default: "armor",
                enchanted: "armor_enchanted"
              },
              textures: {
                default: `textures/skin/${item.id}`,
                enchanted: "textures/misc/enchanted_item_glint"
              },
              geometry: {
                default: geometryIdentifier
              },
              scripts: {
                parent_setup: item.parentSetup
              },
              render_controllers: ["controller.render.armor"]
            }
          }
        };
        zip.file(`${rpFolder}/attachables/${item.id}.json`, JSON.stringify(attachableJson, null, 2));

        // Texture data for atlas
        itemTextureJson.texture_data[item.id] = {
          textures: [`textures/items/zirconx/${item.id}`]
        };

        // Add skin texture
        zip.file(`${rpFolder}/textures/skin/${item.id}.png`, item.skinBlob);

        // Add item icon (100% derived from uploaded skin)
        if (this.itemIconDataUrl && !item.isHead && this.itemSlotType === 'both') {
          const suitIconBlob = await this.createSuitIconBlob();
          zip.file(`${rpFolder}/textures/items/zirconx/${item.id}.png`, suitIconBlob);
        } else if (this.itemIconDataUrl) {
          const iconBlob = await (await fetch(this.itemIconDataUrl)).blob();
          zip.file(`${rpFolder}/textures/items/zirconx/${item.id}.png`, iconBlob);
        } else if (item.isHead) {
          const headBlob = await this.createHeadIconBlob();
          zip.file(`${rpFolder}/textures/items/zirconx/${item.id}.png`, headBlob);
        } else {
          const suitBlob = await this.createSuitIconBlob();
          zip.file(`${rpFolder}/textures/items/zirconx/${item.id}.png`, suitBlob);
        }
      }

      zip.file(`${rpFolder}/textures/item_texture.json`, JSON.stringify(itemTextureJson, null, 2));

      const rpManifest = {
        format_version: 2,
        header: {
          name: `${this.addonName} | สกินไอเทม ${this.addonVersion.join(".")}`,
          description: "แอดออนสกินสวมใส่ สร้างโดย ZirconX Skin Project",
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
      zip.file(`${rpFolder}/manifest.json`, JSON.stringify(rpManifest, null, 2));

      // Custom geometry if selected
      if (this.modelType === 3 && this.customGeometryJson) {
        const geoFileName = geometryIdentifier.replace('geometry.', '') + '.json';
        zip.file(`${rpFolder}/models/entity/${geoFileName}`, JSON.stringify(this.customGeometryJson, null, 2));
      }

      // 3. Language & Localization (texts/) for Thai and English display names
      const langLines = [
        `## ZirconX Skin Project Item Localization`,
        `pack.name=${this.addonName} | สกินไอเทม ${this.addonVersion.join(".")}`,
        `pack.description=แอดออนสกินสวมใส่ สร้างโดย ZirconX Skin Project`
      ];

      for (const item of itemConfigs) {
        langLines.push(`item.zirconx:${item.id}.name=${item.name}`);
        langLines.push(`item.zirconx:${item.id}=${item.name}`);
      }

      const langContent = langLines.join('\n') + '\n';
      const languagesJson = JSON.stringify(['en_US', 'th_TH'], null, 2);

      // Add to Resource Pack
      zip.file(`${rpFolder}/texts/en_US.lang`, langContent);
      zip.file(`${rpFolder}/texts/th_TH.lang`, langContent);
      zip.file(`${rpFolder}/texts/languages.json`, languagesJson);

      // Add to Behavior Pack
      zip.file(`${bpFolder}/texts/en_US.lang`, langContent);
      zip.file(`${bpFolder}/texts/th_TH.lang`, langContent);
      zip.file(`${bpFolder}/texts/languages.json`, languagesJson);

      // Add pack icon
      try {
        const packIcon = await (await fetch(`${import.meta.env.BASE_URL}templates/packicon.png`)).blob();
        zip.file(`${bpFolder}/pack_icon.png`, packIcon);
        zip.file(`${rpFolder}/pack_icon.png`, packIcon);
      } catch (_) {}

      // Generate & download .mcaddon
      const mcaddonBlob = await zip.generateAsync({ type: "blob" });
      saveAs(mcaddonBlob, `${this.addonName}_v${this.addonVersion.join("_")}.mcaddon`);
      sfx.playLevelUp();
      showToast('ดาวน์โหลดแอดออนเรียบร้อย', 'success');
    } catch (err) {
      console.error(err);
      showToast('เกิดข้อผิดพลาดในการสร้างแอดออน', 'error');
    }
  }
}
