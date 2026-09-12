/**
 * Hide Part Editor (ระบบสร้างสกินล่องหน)
 */
import { processSkinResolution, showToast } from './utils.js';
import * as skinview3d from 'skinview3d';

export class HidePartEditor {
  constructor() {
    this.canvas = document.getElementById('hidepart-canvas');
    this.ctx = this.canvas ? this.canvas.getContext('2d') : null;
    this.originalImg = new Image();
    this.currentSkinBlobUrl = null;
    this.resolution = 64;

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
    // Setup 3D viewer
    const container = document.getElementById('hidepart-3d-container');
    if (container) {
      this.viewer = new skinview3d.SkinViewer({
        canvas: document.getElementById('hidepart-3d-canvas'),
        width: container.clientWidth || 300,
        height: 320
      });
      this.viewer.camera.position.z = 70;
      this.viewer.animation = new skinview3d.WalkingAnimation();
      this.viewer.animation.speed = 0.6;
    }

    // Bind file input
    const fileInput = document.getElementById('hidepart-file-input');
    if (fileInput) {
      fileInput.addEventListener('change', (e) => this.handleFileUpload(e));
    }

    // Bind checkboxes
    ['head', 'body', 'arms', 'legs'].forEach(part => {
      const checkbox = document.getElementById(`hidepart-${part}`);
      if (checkbox) {
        checkbox.addEventListener('change', (e) => {
          this.parts[part] = e.target.checked;
          const parent = checkbox.closest('.part-toggle-item');
          if (parent) {
            parent.classList.toggle('checked', e.target.checked);
          }
          this.render();
        });
      }
    });

    // Bind download button
    const downloadBtn = document.getElementById('hidepart-download-btn');
    if (downloadBtn) {
      downloadBtn.addEventListener('click', () => this.downloadSkin());
    }

    // Quick Presets (1-tap setup)
    document.querySelectorAll('.hidepart-preset-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const preset = btn.dataset.preset;
        this.applyPreset(preset);
      });
    });

    // 3D control buttons
    const animToggle = document.getElementById('hidepart-anim-toggle');
    if (animToggle) {
      animToggle.addEventListener('click', () => {
        if (this.viewer) {
          this.viewer.animation.paused = !this.viewer.animation.paused;
          animToggle.classList.toggle('active', !this.viewer.animation.paused);
        }
      });
    }

    const resetCam = document.getElementById('hidepart-cam-reset');
    if (resetCam) {
      resetCam.addEventListener('click', () => {
        if (this.viewer) {
          this.viewer.camera.position.set(0, 0, 70);
          this.viewer.camera.lookAt(0, 0, 0);
        }
      });
    }
  }

  getPartRectangles() {
    const t = this.resolution / 64;
    return {
      head: [
        { x: 0 * t, y: 0 * t, w: 32 * t, h: 16 * t },   // inner head
        { x: 32 * t, y: 0 * t, w: 32 * t, h: 16 * t }   // outer hat
      ],
      body: [
        { x: 16 * t, y: 16 * t, w: 24 * t, h: 16 * t }, // inner torso
        { x: 16 * t, y: 32 * t, w: 24 * t, h: 16 * t }  // outer jacket
      ],
      arms: [
        { x: 40 * t, y: 16 * t, w: 16 * t, h: 16 * t }, // right arm inner
        { x: 40 * t, y: 32 * t, w: 16 * t, h: 16 * t }, // right arm outer
        { x: 32 * t, y: 48 * t, w: 16 * t, h: 16 * t }, // left arm inner
        { x: 48 * t, y: 48 * t, w: 16 * t, h: 16 * t }  // left arm outer
      ],
      legs: [
        { x: 0 * t, y: 16 * t, w: 16 * t, h: 16 * t },  // right leg inner
        { x: 0 * t, y: 32 * t, w: 16 * t, h: 16 * t },  // right leg outer
        { x: 16 * t, y: 48 * t, w: 16 * t, h: 16 * t }, // left leg inner
        { x: 0 * t, y: 48 * t, w: 16 * t, h: 16 * t }   // left leg outer
      ]
    };
  }

  applyPreset(preset) {
    if (!this.originalImg.src) {
      showToast('กรุณาอัพโหลดสกินก่อนเลือกพรีเซ็ต', 'info');
      return;
    }

    switch (preset) {
      case 'all':
        this.parts = { head: true, body: true, arms: true, legs: true };
        break;
      case 'head-only':
        this.parts = { head: true, body: false, arms: false, legs: false };
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
      case 'hide-arms':
        this.parts = { head: true, body: true, arms: false, legs: true };
        break;
      case 'hide-legs':
        this.parts = { head: true, body: true, arms: true, legs: false };
        break;
    }

    // Sync checkboxes
    ['head', 'body', 'arms', 'legs'].forEach(p => {
      const cb = document.getElementById(`hidepart-${p}`);
      if (cb) cb.checked = this.parts[p];
      const parent = cb?.closest('.part-toggle-item');
      if (parent) parent.classList.toggle('checked', this.parts[p]);
    });

    this.render();
    showToast('ปรับแต่งตามพรีเซ็ตเรียบร้อย', 'info');
  }

  async handleFileUpload(e) {
    const file = e.target.files[0];
    if (!file) return;

    try {
      const reader = new FileReader();
      reader.onload = async (event) => {
        const rawImg = new Image();
        rawImg.onload = async () => {
          try {
            const processedImg = await processSkinResolution(rawImg);
            this.originalImg = processedImg;
            this.resolution = processedImg.width;

            this.canvas.width = this.resolution;
            this.canvas.height = this.resolution;

            // Reset toggles to true
            ['head', 'body', 'arms', 'legs'].forEach(part => {
              this.parts[part] = true;
              const cb = document.getElementById(`hidepart-${part}`);
              if (cb) cb.checked = true;
              const parent = cb?.closest('.part-toggle-item');
              if (parent) parent.classList.add('checked');
            });

            // Show work panel
            document.getElementById('hidepart-workarea').style.display = 'grid';
            this.render();
            showToast('อัพโหลดสกินสำเร็จ!', 'success');
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

  render() {
    if (!this.originalImg.src) return;

    this.ctx.clearRect(0, 0, this.resolution, this.resolution);
    this.ctx.imageSmoothingEnabled = false;
    this.ctx.drawImage(this.originalImg, 0, 0, this.resolution, this.resolution);

    const rects = this.getPartRectangles();

    // Erase unchecked parts
    if (!this.parts.head) rects.head.forEach(r => this.ctx.clearRect(r.x, r.y, r.w, r.h));
    if (!this.parts.body) rects.body.forEach(r => this.ctx.clearRect(r.x, r.y, r.w, r.h));
    if (!this.parts.arms) rects.arms.forEach(r => this.ctx.clearRect(r.x, r.y, r.w, r.h));
    if (!this.parts.legs) rects.legs.forEach(r => this.ctx.clearRect(r.x, r.y, r.w, r.h));

    // Update 3D viewer & Blob URL
    this.canvas.toBlob(blob => {
      if (!blob) return;
      if (this.currentSkinBlobUrl) URL.revokeObjectURL(this.currentSkinBlobUrl);
      this.currentSkinBlobUrl = URL.createObjectURL(blob);

      if (this.viewer) {
        this.viewer.loadSkin(this.currentSkinBlobUrl);
      }
    }, 'image/png');
  }

  downloadSkin() {
    if (!this.currentSkinBlobUrl) {
      showToast('กรุณาอัพโหลดสกินก่อนดาวน์โหลด', 'error');
      return;
    }

    const a = document.createElement('a');
    a.href = this.currentSkinBlobUrl;
    a.download = 'magicskin_custompart.png';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    showToast('ดาวน์โหลดสกินสำเร็จ!', 'success');
  }
}
