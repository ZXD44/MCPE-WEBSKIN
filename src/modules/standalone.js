/**
 * Standalone Skin Item Addon Generator (แอดออนสกินแบบไอเทม)
 */
import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import { generateUUID, generateRandomId, processSkinResolution, detectSlimModel, showToast } from './utils.js';
import { isZipArchive, extractSkinFromArchive } from './zip.js';
import { sfx } from './sfx.js';
import { createStandaloneSkinAddon } from '../core/addon/addonGenerator.js';
import { validateAddonPackage } from '../core/validator/addonValidator.js';
import { getPartUVRectangles, applyPartClippingToContext } from '../core/skin/skinProcessor.js';
import { createHeadIconBlob, createSuitIconBlob, generateSlotItemIconDataUrl, generateSlotItemIconBlob } from '../core/skin/iconGenerator.js';
import * as skinview3d from 'skinview3d';

export class StandaloneAddonGenerator {
  constructor() {
    this.addonVersion = [1, 0, 0];
    this.addonName = '';
    this.itemName = '';
    this.itemIconDataUrl = null;
    this.hasCustomUploadedIcon = false;

    this.skinImg = new Image();
    this.skinResolution = 64;
    this.processedSkinBlob = null;

    this.modelType = 1; // 1: Steve, 2: Alex, 3: Custom Geometry
    this.customGeometryJson = null;

    this.itemSlotType = 'head'; // 'head', 'suit', 'legs', 'feet', 'both'

    // Default to head + body hair so long hair is preserved out of the box
    this.parts = {
      head: true,
      body: true,
      arms: false,
      legs: false
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
        this.hasCustomUploadedIcon = false;
        document.getElementById('standalone-icon-preview').style.display = 'none';
        document.getElementById('standalone-icon-dropzone').style.display = 'flex';
        removeIconBtn.style.display = 'none';
        this.updateDynamicItemIcon();
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
          this.updateDynamicItemIcon();
          this.renderSkin();
        });
      }
    });

    // Quick Presets for Standalone (Independent part toggle)
    document.querySelectorAll('.standalone-preset-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.standalone-preset-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        sfx.playClick();
        const preset = btn.dataset.preset;
        if (preset === 'all') {
          this.parts = { head: true, body: true, arms: true, legs: true };
        } else if (preset === 'head-hair') {
          this.parts = { head: true, body: true, arms: false, legs: false };
        } else if (preset === 'head-only') {
          this.parts = { head: true, body: false, arms: false, legs: false };
        } else if (preset === 'suit-only') {
          this.parts = { head: false, body: true, arms: true, legs: true };
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

    // Item Slot Type buttons - Free & Decoupled from parts!
    document.querySelectorAll('.slot-select-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.slot-select-btn').forEach(b => b.classList.remove('active', 'mc-btn-primary'));
        btn.classList.add('active', 'mc-btn-primary');
        this.itemSlotType = btn.dataset.slot || 'head';
        sfx.playClick();

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
        this.hasCustomUploadedIcon = true;

        const preview = document.getElementById('standalone-icon-preview');
        if (preview) {
          preview.src = this.itemIconDataUrl;
          preview.style.display = 'block';
        }
        const dropzone = document.getElementById('standalone-icon-dropzone');
        if (dropzone) dropzone.style.display = 'none';
        const removeBtn = document.getElementById('standalone-remove-icon-btn');
        if (removeBtn) removeBtn.style.display = 'inline-flex';
        this.updateDynamicItemIcon();
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
      this.hasCustomUploadedIcon = false;

      this.canvas.width = this.skinResolution;
      this.canvas.height = this.skinResolution;

      // Update resolution badge in DOM
      const resBadge = document.getElementById('standalone-res-badge');
      if (resBadge) {
        resBadge.textContent = this.skinResolution > 64 ? `${this.skinResolution}x${this.skinResolution} HD` : '64x64 Standard';
        resBadge.style.display = 'inline-flex';
      }

      // Auto-detect Alex (slim 3px) vs Steve (default 4px) to prevent reversed/inverted limb bugs
      const isSlim = detectSlimModel(processedImg);
      this.modelType = isSlim ? 2 : 1;
      document.querySelectorAll('.model-select-btn').forEach(btn => {
        const m = parseInt(btn.dataset.model);
        btn.classList.toggle('active', m === this.modelType);
        btn.classList.toggle('mc-btn-primary', m === this.modelType);
      });
      if (this.viewer) {
        this.viewer.playerObject.skin.modelType = isSlim ? 'slim' : 'default';
      }

      // Keep checkboxes synced with this.parts
      ['head', 'body', 'arms', 'legs'].forEach(part => {
        const cb = document.getElementById(`standalone-part-${part}`);
        if (cb) cb.checked = this.parts[part];
        const parent = cb?.closest('.part-toggle-item');
        if (parent) parent.classList.toggle('checked', this.parts[part]);
      });

      // Auto-generate 16x16 icon directly from uploaded skin
      this.updateDynamicItemIcon();

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
    return getPartUVRectangles(this.skinResolution);
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

    applyPartClippingToContext(tctx, this.skinResolution, partsToKeep);
    return new Promise(resolve => tempCanvas.toBlob(resolve, 'image/png'));
  }

  updateDynamicItemIcon() {
    if (!this.skinImg || !this.skinImg.src) return;
    if (!this.hasCustomUploadedIcon) {
      this.itemIconDataUrl = generateSlotItemIconDataUrl(this.skinImg, this.skinResolution, this.parts, this.itemSlotType);
    }

    const slotImg = document.getElementById('standalone-slot-icon-img');
    const slotEmpty = document.getElementById('standalone-slot-icon-empty');
    const slotStatus = document.getElementById('standalone-icon-status');

    if (slotImg && slotEmpty) {
      if (this.itemIconDataUrl) {
        slotImg.src = this.itemIconDataUrl;
        slotImg.style.display = 'block';
        slotEmpty.style.display = 'none';
        if (slotStatus) slotStatus.textContent = `มีรูปไอเทม (${this.itemSlotType.toUpperCase()})`;
      } else {
        slotImg.style.display = 'none';
        slotEmpty.style.display = 'block';
        if (slotStatus) slotStatus.textContent = 'ไม่มีรูปไอเทม (โปร่งใส)';
      }
    }

    const preview = document.getElementById('standalone-icon-preview');
    if (preview) {
      preview.src = this.itemIconDataUrl || '';
      preview.style.display = this.itemIconDataUrl ? 'block' : 'none';
    }
  }

  createHeadIconBlob() {
    return generateSlotItemIconBlob(this.skinImg, this.skinResolution, { head: true, body: this.parts.body }, 'head');
  }

  createSuitIconBlob() {
    return generateSlotItemIconBlob(this.skinImg, this.skinResolution, { body: true, arms: true }, 'suit');
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
      showToast('กำลังตรวจสอบและสร้างแอดออน...', 'info');

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

      // Build item configurations
      let items = [];
      const slotMap = {
        head: { slot: 'slot.armor.head', group: 'itemGroup.name.helmet' },
        suit: { slot: 'slot.armor.chest', group: 'itemGroup.name.chestplate' },
        legs: { slot: 'slot.armor.legs', group: 'itemGroup.name.leggings' },
        feet: { slot: 'slot.armor.feet', group: 'itemGroup.name.boots' }
      };

      if (this.itemSlotType === 'both') {
        const headSkinBlob = await this.createSpecificSkinBlob({ head: true, body: this.parts.body, arms: false, legs: false });
        const headIconBlob = await generateSlotItemIconBlob(this.skinImg, this.skinResolution, { head: true, body: this.parts.body }, 'head');
        items.push({
          id: `${baseItemId}_head`,
          name: `${this.itemName} (หัว)`,
          slot: 'slot.armor.head',
          group: 'itemGroup.name.helmet',
          skinData: headSkinBlob,
          iconData: headIconBlob,
          isHead: true
        });

        const suitSkinBlob = await this.createSpecificSkinBlob({ head: false, body: true, arms: this.parts.arms, legs: this.parts.legs });
        let suitIconBlob;
        if (this.hasCustomUploadedIcon && this.itemIconDataUrl) {
          suitIconBlob = await (await fetch(this.itemIconDataUrl)).blob();
        } else {
          suitIconBlob = await generateSlotItemIconBlob(this.skinImg, this.skinResolution, { head: false, body: true, arms: this.parts.arms, legs: this.parts.legs }, 'suit');
        }
        items.push({
          id: `${baseItemId}_suit`,
          name: `${this.itemName} (ชุด)`,
          slot: 'slot.armor.chest',
          group: 'itemGroup.name.chestplate',
          skinData: suitSkinBlob,
          iconData: suitIconBlob,
          isHead: false
        });
      } else {
        const currentSlot = slotMap[this.itemSlotType] || slotMap.head;
        const skinBlob = await this.createSpecificSkinBlob(this.parts);
        let iconBlob;
        if (this.hasCustomUploadedIcon && this.itemIconDataUrl) {
          iconBlob = await (await fetch(this.itemIconDataUrl)).blob();
        } else {
          iconBlob = await generateSlotItemIconBlob(this.skinImg, this.skinResolution, this.parts, this.itemSlotType);
        }

        items.push({
          id: `${baseItemId}_${this.itemSlotType}`,
          name: this.itemName,
          slot: currentSlot.slot,
          group: currentSlot.group,
          skinData: skinBlob,
          iconData: iconBlob,
          isHead: this.itemSlotType === 'head'
        });
      }

      // Fetch pack icon if available
      let packIconData = null;
      try {
        packIconData = await (await fetch(`${import.meta.env.BASE_URL}templates/packicon.png`)).blob();
      } catch (_) {}

      // 1. Generate In-Memory Addon via Headless Core Generator (CORE-001)
      const generated = await createStandaloneSkinAddon({
        addonName: this.addonName,
        itemName: this.itemName,
        addonVersion: this.addonVersion,
        itemSlotType: this.itemSlotType,
        modelType: this.modelType,
        customGeometryJson: this.customGeometryJson,
        items,
        packIconData
      });

      // 2. Pre-Export Validation (CORE-002)
      const validationReport = await validateAddonPackage(generated.zip);

      if (!validationReport.valid) {
        console.error('Validation failed:', validationReport.errors);
        showToast(`ตรวจสอบพบข้อผิดพลาด: ${validationReport.errors[0]}`, 'error');
        return;
      }

      // 3. Serializer & Download
      const mcaddonBlob = await generated.zip.generateAsync({ type: 'blob' });
      saveAs(mcaddonBlob, `${this.addonName}_v${this.addonVersion.join('_')}.mcaddon`);

      sfx.playLevelUp();
      showToast('✓ ตรวจสอบความถูกต้องผ่าน ดาวน์โหลดสำเร็จ!', 'success');
    } catch (err) {
      console.error(err);
      showToast(err.userMessage || err.message || 'เกิดข้อผิดพลาดในการสร้างแอดออน', 'error');
    }
  }
}
