/**
 * Hide Part Editor (ระบบสร้างสกินล่องหน)
 * Supports 3D Real-time Preview, Steve/Alex Models, One-Click Presets, Direct PNG Download & ZIP/MCPACK Extraction
 */
import { processSkinResolution, detectSlimModel, showToast } from './utils.js';
import { isZipArchive, extractSkinFromArchive } from './ziphandler.js';
import { sfx } from './sfx.js';
import * as skinview3d from 'skinview3d';

export class HidePartEditor {
  constructor() {
    this.canvas = document.getElementById('hidepart-canvas');
    this.ctx = this.canvas ? this.canvas.getContext('2d') : null;
    this.originalImg = new Image();
    this.currentSkinBlobUrl = null;
    this.resolution = 64;
    this.modelType = 'steve'; // 'steve' (default 4px) or 'alex' (slim 3px)
    this.animMode = 'walk'; // 'walk', 'run', 'idle'

    this.parts = {
      head: true,
      body: true,
      arms: true,
      legs: true
    };

    this.viewer = null;
    this.init();
  }

  init() {
    // 1. Setup 3D viewer with performance optimization
    const container = document.getElementById('hidepart-3d-container');
    const canvasEl = document.getElementById('hidepart-3d-canvas');

    if (container && canvasEl) {
      this.viewer = new skinview3d.SkinViewer({
        canvas: canvasEl,
        width: container.clientWidth || 320,
        height: 300
      });

      if (this.viewer.renderer) {
        this.viewer.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      }
      this.viewer.camera.position.set(0, 0, 70);
      this.setAnimation('walk');

      // Pause rendering when hidden to save battery & maintain 60fps
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

    // 2. Bind file upload input (PNG / ZIP / MCPACK / MCADDON)
    const fileInput = document.getElementById('hidepart-file-input');
    if (fileInput) {
      fileInput.addEventListener('change', (e) => this.handleFileUpload(e));
    }

    // 3. Bind 4-Part checkboxes
    ['head', 'body', 'arms', 'legs'].forEach(part => {
      const checkbox = document.getElementById(`hidepart-${part}`);
      if (checkbox) {
        checkbox.addEventListener('change', (e) => {
          sfx.playClick();
          this.parts[part] = e.target.checked;
          const parent = checkbox.closest('.part-toggle-item');
          if (parent) {
            parent.classList.toggle('checked', e.target.checked);
          }
          this.render();
        });
      }
    });

    // 4. Bind Quick Presets
    document.querySelectorAll('.hidepart-preset-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        sfx.playClick();
        const preset = btn.dataset.preset;
        this.applyPreset(preset);
      });
    });

    // 5. 3D Model Switcher (Steve / Alex)
    document.querySelectorAll('.hidepart-model-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        sfx.playClick();
        const model = btn.dataset.model; // 'steve' or 'alex'
        this.setModel(model);
      });
    });

    // 6. 3D Animation Switcher (Walk, Run, Idle)
    document.querySelectorAll('.hidepart-anim-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        sfx.playClick();
        const anim = btn.dataset.anim;
        this.setAnimation(anim);
      });
    });

    // 7. Reset Camera
    const resetCam = document.getElementById('hidepart-cam-reset');
    if (resetCam) {
      resetCam.addEventListener('click', () => {
        sfx.playClick();
        if (this.viewer) {
          this.viewer.camera.position.set(0, 0, 70);
          this.viewer.camera.lookAt(0, 0, 0);
        }
      });
    }

    // 8. Download Skin PNG
    const downloadPngBtn = document.getElementById('hidepart-download-png-btn');
    if (downloadPngBtn) {
      downloadPngBtn.addEventListener('click', () => this.downloadSkinPng());
    }

    // Fallback legacy download btn
    const downloadBtn = document.getElementById('hidepart-download-btn');
    if (downloadBtn && !downloadPngBtn) {
      downloadBtn.addEventListener('click', () => this.downloadSkinPng());
    }
  }

  setModel(model) {
    this.modelType = model;
    document.querySelectorAll('.hidepart-model-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.model === model);
    });

    if (this.viewer && this.currentSkinBlobUrl) {
      this.viewer.loadSkin(this.currentSkinBlobUrl, {
        model: this.modelType === 'alex' ? 'slim' : 'default'
      });
    }
    showToast(`สลับโมเดลเป็น ${model === 'alex' ? 'Alex (แขน 3px)' : 'Steve (แขน 4px)'}`, 'info');
  }

  setAnimation(anim) {
    this.animMode = anim;
    document.querySelectorAll('.hidepart-anim-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.anim === anim);
    });

    if (!this.viewer) return;

    if (anim === 'walk') {
      this.viewer.animation = new skinview3d.WalkingAnimation();
      this.viewer.animation.speed = 0.6;
    } else if (anim === 'run') {
      this.viewer.animation = new skinview3d.RunningAnimation();
      this.viewer.animation.speed = 0.8;
    } else {
      this.viewer.animation = null;
    }
  }

  getPartRectangles() {
    const t = this.resolution / 64;
    const r = (x, y, w, h) => ({
      x: Math.round(x * t),
      y: Math.round(y * t),
      w: Math.round(w * t),
      h: Math.round(h * t)
    });

    return {
      head: [
        r(0, 0, 32, 16),   // inner head
        r(32, 0, 32, 16)   // outer hat
      ],
      body: [
        r(16, 16, 24, 16), // inner torso
        r(16, 32, 24, 16)  // outer jacket
      ],
      arms: [
        r(40, 16, 16, 16), // right arm inner
        r(40, 32, 16, 16), // right arm outer
        r(32, 48, 16, 16), // left arm inner
        r(48, 48, 16, 16)  // left arm outer
      ],
      legs: [
        r(0, 16, 16, 16),  // right leg inner
        r(0, 32, 16, 16),  // right leg outer
        r(16, 48, 16, 16), // left leg inner
        r(0, 48, 16, 16)   // left leg outer
      ]
    };
  }

  applyPreset(preset) {
    if (!this.originalImg.src) {
      showToast('กรุณาอัปโหลดสกินก่อนเลือกพรีเซ็ต', 'info');
      return;
    }

    switch (preset) {
      case 'all':
        this.parts = { head: true, body: true, arms: true, legs: true };
        break;
      case 'head-only':
        // หัวลอย (Floating Head)
        this.parts = { head: true, body: false, arms: false, legs: false };
        break;
      case 'hide-all':
        // ล่องหน 100% (Invisible All)
        this.parts = { head: false, body: false, arms: false, legs: false };
        break;
      case 'hide-arms-legs':
        // ถอดแขนขา (Armless & Legless)
        this.parts = { head: true, body: true, arms: false, legs: false };
        break;
      case 'body-only':
        this.parts = { head: false, body: true, arms: false, legs: false };
        break;
      case 'hide-head':
        this.parts = { head: false, body: true, arms: true, legs: true };
        break;
      case 'hide-body':
        this.parts = { head: true, body: false, arms: true, legs: true };
        break;
    }

    // Sync Checkboxes
    ['head', 'body', 'arms', 'legs'].forEach(p => {
      const cb = document.getElementById(`hidepart-${p}`);
      if (cb) cb.checked = this.parts[p];
      const parent = cb?.closest('.part-toggle-item');
      if (parent) parent.classList.toggle('checked', this.parts[p]);
    });

    this.render();
    showToast('ปรับแต่งตามพรีเซ็ตเรียบร้อย', 'success');
  }

  async handleFileUpload(e) {
    const file = e.target ? e.target.files[0] : e;
    if (!file) return;
    await this.loadFile(file);
  }

  async loadFile(file) {
    try {
      // Check if uploaded file is a ZIP / MCPACK / MCADDON
      if (await isZipArchive(file)) {
        showToast('กำลังแตกไฟล์ ZIP / แอดออน...', 'info');
        const extracted = await extractSkinFromArchive(file);
        await this.loadSkinFromImage(extracted.image, `[ZIP] ${extracted.fileName}`);
        return;
      }

      // Standard PNG file
      const reader = new FileReader();
      reader.onload = async (event) => {
        const rawImg = new Image();
        rawImg.onload = async () => {
          await this.loadSkinFromImage(rawImg, file.name);
        };
        rawImg.onerror = () => {
          showToast('ไฟล์ภาพไม่ถูกต้อง', 'error');
        };
        rawImg.src = event.target.result;
      };
      reader.readAsDataURL(file);
    } catch (err) {
      showToast(err.message || 'ไม่สามารถอ่านไฟล์ได้', 'error');
    }
  }

  async loadSkinFromImage(rawImg, displayName = '') {
    try {
      const processedImg = await processSkinResolution(rawImg);
      this.originalImg = processedImg;
      this.resolution = processedImg.width;

      this.canvas.width = this.resolution;
      this.canvas.height = this.resolution;

      // Update resolution badge in DOM
      const resBadge = document.getElementById('hidepart-res-badge');
      if (resBadge) {
        resBadge.textContent = this.resolution > 64 ? `${this.resolution}x${this.resolution} HD` : '64x64 Standard';
        resBadge.style.display = 'inline-flex';
      }

      // Auto-detect Alex (slim 3px) vs Steve (default 4px)
      const isSlim = detectSlimModel(processedImg);
      this.modelType = isSlim ? 'alex' : 'steve';
      document.querySelectorAll('.hidepart-model-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.model === this.modelType);
      });

      // Reset parts to visible
      ['head', 'body', 'arms', 'legs'].forEach(part => {
        this.parts[part] = true;
        const cb = document.getElementById(`hidepart-${part}`);
        if (cb) cb.checked = true;
        const parent = cb?.closest('.part-toggle-item');
        if (parent) parent.classList.add('checked');
      });

      // Show work area
      const workArea = document.getElementById('hidepart-workarea');
      if (workArea) {
        workArea.style.display = 'block';
      }

      // Auto-resize 3D viewer
      const container = document.getElementById('hidepart-3d-container');
      if (this.viewer && container) {
        this.viewer.width = container.clientWidth || 320;
      }

      this.render();
      sfx.playPop();
      showToast(displayName ? `โหลดสกิน ${displayName} เรียบร้อย` : 'อัปโหลดสกินเรียบร้อย', 'success');
    } catch (err) {
      showToast(err.message || 'ประมวลผลสกินล้มเหลว', 'error');
    }
  }

  render() {
    if (!this.originalImg.src) return;

    this.ctx.clearRect(0, 0, this.resolution, this.resolution);
    this.ctx.imageSmoothingEnabled = false;
    this.ctx.drawImage(this.originalImg, 0, 0, this.resolution, this.resolution);

    const rects = this.getPartRectangles();

    // Erase unchecked parts completely
    if (!this.parts.head) rects.head.forEach(r => this.ctx.clearRect(r.x, r.y, r.w, r.h));
    if (!this.parts.body) rects.body.forEach(r => this.ctx.clearRect(r.x, r.y, r.w, r.h));
    if (!this.parts.arms) rects.arms.forEach(r => this.ctx.clearRect(r.x, r.y, r.w, r.h));
    if (!this.parts.legs) rects.legs.forEach(r => this.ctx.clearRect(r.x, r.y, r.w, r.h));

    // Update 3D viewer & Blob URL with transparent cutouts
    this.canvas.toBlob(blob => {
      if (!blob) return;
      if (this.currentSkinBlobUrl) URL.revokeObjectURL(this.currentSkinBlobUrl);
      this.currentSkinBlobUrl = URL.createObjectURL(blob);

      if (this.viewer) {
        this.viewer.loadSkin(this.currentSkinBlobUrl, {
          model: this.modelType === 'alex' ? 'slim' : 'default'
        });
      }
    }, 'image/png');
  }

  downloadSkinPng() {
    if (!this.currentSkinBlobUrl) {
      showToast('กรุณาอัปโหลดสกินก่อนดาวน์โหลด', 'error');
      return;
    }

    const a = document.createElement('a');
    a.href = this.currentSkinBlobUrl;
    a.download = 'zxskin_custompart.png';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    sfx.playLevelUp();
    showToast('ดาวน์โหลดไฟล์สกิน (.png) เรียบร้อยแล้ว', 'success');
  }
}
