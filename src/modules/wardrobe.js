/**
 * Minecraft Bedrock Skin Pack Generator (.mcpack)
 * Pure Client-Side Generator for Minecraft Bedrock Dressing Room / Classic Skins
 */
import { generateRandomId, showToast, downloadMcpackFile, processSkinResolution, detectSlimModel, convertImageToPngBlob } from './utils.js';
import { createSkinPack } from '../core/wardrobe/wardrobeGenerator.js';
import { parseSkinPackArchive } from '../core/wardrobe/wardrobeParser.js';
import { validateAddonPackage } from '../core/validator/addonValidator.js';
import { sfx } from './sfx.js';

/**
 * Extract 16x16 pixel face avatar from skin image for UI preview
 */
function extractFaceDataUrl(img) {
  try {
    const canvas = document.createElement('canvas');
    canvas.width = 16;
    canvas.height = 16;
    const ctx = canvas.getContext('2d');
    if (!ctx) return '';
    ctx.imageSmoothingEnabled = false;
    const t = (img.width || 64) / 64;
    // Base Face (8, 8, 8, 8) -> (1, 1, 14, 14)
    ctx.drawImage(img, Math.round(8 * t), Math.round(8 * t), Math.round(8 * t), Math.round(8 * t), 1, 1, 14, 14);
    // Outer Hat (40, 8, 8, 8) -> (1, 1, 14, 14)
    ctx.drawImage(img, Math.round(40 * t), Math.round(8 * t), Math.round(8 * t), Math.round(8 * t), 1, 1, 14, 14);
    return canvas.toDataURL('image/png');
  } catch (_) {
    return '';
  }
}

export class WardrobeMultiEditor {
  constructor() {
    this.packName = 'ชุดสกินของฉัน';
    this.version = [1, 0, 0];
    this.skins = [];
    this.inspectIndex = -1;
    this.inspectViewer = null;

    this.init();
  }

  init() {
    // 1. Pack Name input
    const nameInput = document.getElementById('wardrobe-pack-name') || document.getElementById('wardrobe-detail-name');
    if (nameInput) {
      nameInput.value = this.packName;
      nameInput.addEventListener('input', (e) => {
        this.packName = e.target.value.trim() || 'ZirconX Skin Pack';
      });
    }

    // 2. Add Skins Input (Multiple PNGs)
    const addOutfitInput = document.getElementById('wardrobe-add-outfit-input');
    if (addOutfitInput) {
      addOutfitInput.addEventListener('change', (e) => {
        const files = Array.from(e.target.files || []);
        if (files.length > 0) {
          this.handleFiles(files);
        }
        e.target.value = '';
      });
    }

    // 3. Dropzone
    const dropzone = document.getElementById('wardrobe-dropzone');
    if (dropzone) {
      dropzone.addEventListener('click', () => {
        if (addOutfitInput) addOutfitInput.click();
      });

      ['dragenter', 'dragover'].forEach(name => {
        dropzone.addEventListener(name, (e) => {
          e.preventDefault();
          e.stopPropagation();
          dropzone.classList.add('drag-over');
        });
      });

      ['dragleave', 'drop'].forEach(name => {
        dropzone.addEventListener(name, (e) => {
          e.preventDefault();
          e.stopPropagation();
          dropzone.classList.remove('drag-over');
        });
      });

      dropzone.addEventListener('drop', (e) => {
        const files = Array.from(e.dataTransfer?.files || []);
        if (files.length > 0) {
          this.handleFiles(files);
        }
      });
    }

    // 4. Import .mcpack / .zip Input
    const importInput = document.getElementById('wardrobe-import-input');
    if (importInput) {
      importInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
          this.handleImportMcpack(file);
        }
        e.target.value = '';
      });
    }

    // 5. Clear All Button
    const clearBtn = document.getElementById('wardrobe-clear-btn');
    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        if (this.skins.length === 0) return;
        this.skins = [];
        this.renderSkinList();
        showToast('ล้างรายการสกินเรียบร้อย', 'info');
      });
    }

    // 6. Export Button
    const exportBtn = document.getElementById('wardrobe-export-btn');
    if (exportBtn) {
      exportBtn.addEventListener('click', () => this.exportMcpack());
    }

    // 7. Wardrobe 3D Inspect Modal bindings
    const modalEl = document.getElementById('wardrobe-inspect-modal');
    const closeBtn = document.getElementById('wardrobe-inspect-close-btn');
    const saveBtn = document.getElementById('wardrobe-inspect-save-btn');
    const deleteBtn = document.getElementById('wardrobe-inspect-delete-btn');
    const nameInputModal = document.getElementById('wardrobe-inspect-name-input');
    const camResetBtn = document.getElementById('wardrobe-inspect-cam-reset');

    if (closeBtn) closeBtn.addEventListener('click', () => this.closeInspectModal());
    if (saveBtn) saveBtn.addEventListener('click', () => this.closeInspectModal());
    if (deleteBtn) {
      deleteBtn.addEventListener('click', () => {
        if (this.inspectIndex >= 0 && this.inspectIndex < this.skins.length) {
          sfx.playClick();
          this.skins.splice(this.inspectIndex, 1);
          this.closeInspectModal();
          showToast('ลบสกินเรียบร้อย', 'info');
        }
      });
    }

    if (modalEl) {
      modalEl.addEventListener('click', (e) => {
        if (e.target === modalEl) this.closeInspectModal();
      });
    }

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modalEl && modalEl.style.display !== 'none') {
        this.closeInspectModal();
      }
    });

    if (nameInputModal) {
      nameInputModal.addEventListener('input', (e) => {
        if (this.inspectIndex >= 0 && this.inspectIndex < this.skins.length) {
          this.skins[this.inspectIndex].name = e.target.value.trim() || `Skin ${this.inspectIndex + 1}`;
        }
      });
    }

    // Modal Model Toggle (Steve/Alex)
    document.querySelectorAll('.wardrobe-inspect-model-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const m = btn.dataset.model;
        if (this.inspectIndex >= 0 && this.inspectIndex < this.skins.length) {
          this.skins[this.inspectIndex].model = m;
          document.querySelectorAll('.wardrobe-inspect-model-btn').forEach(b => b.classList.toggle('active', b.dataset.model === m));
          if (this.inspectViewer) {
            this.inspectViewer.loadSkin(this.skins[this.inspectIndex].skinURL, {
              model: m === 'alex' ? 'slim' : 'default'
            });
          }
          sfx.playClick();
        }
      });
    });

    // Modal Animation Toggle (Walk/Run/Idle)
    document.querySelectorAll('.wardrobe-inspect-anim-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const anim = btn.dataset.anim;
        document.querySelectorAll('.wardrobe-inspect-anim-btn').forEach(b => b.classList.toggle('active', b.dataset.anim === anim));
        if (this.inspectViewer) {
          if (anim === 'walk') {
            this.inspectViewer.animation = new skinview3d.WalkingAnimation();
            this.inspectViewer.animation.speed = 0.6;
          } else if (anim === 'run') {
            this.inspectViewer.animation = new skinview3d.RunningAnimation();
            this.inspectViewer.animation.speed = 0.8;
          } else {
            this.inspectViewer.animation = null;
          }
        }
        sfx.playClick();
      });
    });

    if (camResetBtn) {
      camResetBtn.addEventListener('click', () => {
        sfx.playClick();
        if (this.inspectViewer) {
          this.inspectViewer.camera.position.set(0, 0, 70);
          this.inspectViewer.camera.lookAt(0, 0, 0);
        }
      });
    }

    this.renderSkinList();
  }

  openInspectModal(index) {
    const skin = this.skins[index];
    if (!skin) return;

    this.inspectIndex = index;
    const modalEl = document.getElementById('wardrobe-inspect-modal');
    const titleEl = document.getElementById('wardrobe-inspect-title');
    const nameInput = document.getElementById('wardrobe-inspect-name-input');
    const container = document.getElementById('wardrobe-inspect-3d-container');
    const canvas = document.getElementById('wardrobe-inspect-3d-canvas');

    if (titleEl) titleEl.textContent = `ตรวจสอบ: ${skin.name}`;
    if (nameInput) nameInput.value = skin.name;

    // Sync Model buttons
    document.querySelectorAll('.wardrobe-inspect-model-btn').forEach(b => {
      b.classList.toggle('active', b.dataset.model === skin.model);
    });

    if (modalEl) modalEl.style.display = 'flex';

    // Init or update viewer
    setTimeout(() => {
      if (!this.inspectViewer && container && canvas) {
        this.inspectViewer = new skinview3d.SkinViewer({
          canvas,
          width: container.clientWidth || 360,
          height: 280
        });
        if (this.inspectViewer.renderer) {
          this.inspectViewer.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        }
        this.inspectViewer.camera.position.set(0, 0, 70);
        this.inspectViewer.animation = new skinview3d.WalkingAnimation();
        this.inspectViewer.animation.speed = 0.6;
      } else if (this.inspectViewer && container) {
        this.inspectViewer.width = container.clientWidth || 360;
      }

      if (this.inspectViewer) {
        if (this.inspectViewer.animation) {
          this.inspectViewer.animation.paused = false;
        }
        this.inspectViewer.loadSkin(skin.skinURL, {
          model: skin.model === 'alex' ? 'slim' : 'default'
        });
      }
    }, 50);

    sfx.playClick();
  }

  closeInspectModal() {
    const modalEl = document.getElementById('wardrobe-inspect-modal');
    if (modalEl) modalEl.style.display = 'none';
    if (this.inspectViewer && this.inspectViewer.animation) {
      this.inspectViewer.animation.paused = true;
    }
    this.inspectIndex = -1;
    this.renderSkinList();
  }

  async handleFiles(files) {
    // Check if user dropped a .mcpack or .zip file
    const archiveFile = files.find(f => {
      const n = f.name.toLowerCase();
      return n.endsWith('.mcpack') || n.endsWith('.zip') || n.endsWith('.mcaddon');
    });

    if (archiveFile && files.length === 1) {
      await this.handleImportMcpack(archiveFile);
      return;
    }

    const imageFiles = files.filter(f => {
      const n = f.name.toLowerCase();
      return n.endsWith('.png') || n.endsWith('.jpg') || n.endsWith('.jpeg') || f.type.startsWith('image/');
    });
    if (imageFiles.length === 0) {
      showToast('กรุณาเลือกไฟล์ภาพสกิน (.png, .jpg)', 'error');
      return;
    }

    let loaded = 0;
    const errors = [];
    for (const file of imageFiles) {
      try {
        const reader = new FileReader();
        const readPromise = new Promise((resolve, reject) => {
          reader.onload = (e) => resolve(e.target.result);
          reader.onerror = () => reject(new Error('ไม่สามารถอ่านไฟล์ได้'));
          reader.readAsDataURL(file);
        });

        const dataUrl = await readPromise;
        const img = new Image();
        await new Promise((resolve, reject) => {
          img.onload = resolve;
          img.onerror = () => reject(new Error('ไฟล์ภาพไม่ถูกต้องหรือชำรุด'));
          img.src = dataUrl;
        });

        const processedImg = await processSkinResolution(img);
        const isSlim = detectSlimModel(processedImg);
        const facePreviewUrl = extractFaceDataUrl(processedImg);

        // Convert any input image (PNG, JPG, WebP) to genuine PNG Blob
        const pngBlob = await convertImageToPngBlob(processedImg);
        const pngUrl = URL.createObjectURL(pngBlob);

        const cleanName = file.name
          .replace(/\.[^/.]+$/, '')
          .replace(/[_\-]+/g, ' ')
          .trim();

        const safeId = cleanName
          .toLowerCase()
          .replace(/[^a-z0-9]/g, '_')
          .slice(0, 16) || `skin_${generateRandomId(6)}`;

        this.skins.push({
          id: safeId,
          name: cleanName || `ชุดที่ ${this.skins.length + 1}`,
          model: isSlim ? 'alex' : 'steve',
          faceUrl: facePreviewUrl,
          skinURL: pngUrl,
          blob: pngBlob
        });

        loaded++;

        if (processedImg._wasResized) {
          showToast(`ปรับขนาด ${file.name} (${processedImg._origW}x${processedImg._origH} → ${processedImg.width}x${processedImg.height}) อัตโนมัติ`, 'info');
        }
        if (processedImg._wasAlphaInferred) {
          showToast(`ลบพื้นหลังทึบของ ${file.name} ให้ตรงปกอัตโนมัติ ✨`, 'success');
        }
      } catch (err) {
        console.warn(`Failed to process skin file ${file.name}:`, err);
        errors.push(`${file.name}: ${err.message || 'ประมวลผลล้มเหลว'}`);
      }
    }

    if (loaded > 0) {
      sfx.playPop();
      showToast(`เพิ่มสกินสำเร็จ ${loaded} ชุด!`, 'success');
      this.renderSkinList();
    }

    if (errors.length > 0) {
      showToast(`พบข้อผิดพลาด: ${errors[0]}`, 'error');
    }
  }

  renderSkinList() {
    const container = document.getElementById('wardrobe-outfit-list');
    const countBadge = document.getElementById('wardrobe-skin-count');
    const emptyState = document.getElementById('wardrobe-empty-state');
    const exportBtn = document.getElementById('wardrobe-export-btn');

    if (countBadge) {
      countBadge.textContent = `${this.skins.length} ชุด`;
    }

    if (exportBtn) {
      exportBtn.disabled = this.skins.length === 0;
      exportBtn.style.opacity = this.skins.length === 0 ? '0.5' : '1';
    }

    if (!container) return;

    if (this.skins.length === 0) {
      if (emptyState) emptyState.style.display = 'block';
      container.innerHTML = '';
      return;
    }

    if (emptyState) emptyState.style.display = 'none';
    container.innerHTML = '';

    this.skins.forEach((skin, index) => {
      const card = document.createElement('div');
      card.className = 'skinpack-card';

      card.innerHTML = `
        <div class="skinpack-card-avatar-wrap" title="คลิกเพื่อหมุนดูโมเดล 3D" data-inspect="${index}">
          <img src="${skin.faceUrl || skin.skinURL}" alt="${skin.name}" class="skinpack-card-avatar">
          <span class="skinpack-model-pill ${skin.model}">${skin.model === 'alex' ? 'Alex 3px' : 'Steve 4px'}</span>
        </div>
        <div class="skinpack-card-body">
          <input type="text" class="mc-input skinpack-name-input" value="${skin.name}" placeholder="ชื่อชุด...">
          <div class="skinpack-card-controls">
            <div class="skinpack-model-buttons">
              <button type="button" class="skinpack-model-toggle ${skin.model === 'steve' ? 'active' : ''}" data-model="steve">
                Steve (4px)
              </button>
              <button type="button" class="skinpack-model-toggle ${skin.model === 'alex' ? 'active' : ''}" data-model="alex">
                Alex (3px)
              </button>
            </div>
            <button type="button" class="skinpack-inspect-btn" title="หมุนดูโมเดล 3D" data-inspect="${index}">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
              <span>3D</span>
            </button>
            <button type="button" class="skinpack-del-btn" title="ลบชุดนี้" data-del="${index}">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
                <polyline points="3 6 5 6 21 6"></polyline>
                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
              </svg>
            </button>
          </div>
        </div>
      `;

      // 3D Inspect trigger (avatar & 3D button)
      card.querySelectorAll(`[data-inspect="${index}"]`).forEach(el => {
        el.addEventListener('click', (e) => {
          e.stopPropagation();
          this.openInspectModal(index);
        });
      });

      // Name change listener
      const nameInput = card.querySelector('.skinpack-name-input');
      if (nameInput) {
        nameInput.addEventListener('input', (e) => {
          skin.name = e.target.value.trim() || `Skin ${index + 1}`;
        });
      }

      // Model toggle listeners
      card.querySelectorAll('.skinpack-model-toggle').forEach(btn => {
        btn.addEventListener('click', () => {
          const m = btn.dataset.model;
          skin.model = m;
          sfx.playClick();
          this.renderSkinList();
        });
      });

      // Delete listener
      const delBtn = card.querySelector(`[data-del="${index}"]`);
      if (delBtn) {
        delBtn.addEventListener('click', () => {
          sfx.playClick();
          this.skins.splice(index, 1);
          this.renderSkinList();
          showToast('ลบสกินเรียบร้อย', 'info');
        });
      }

      container.appendChild(card);
    });
  }

  async handleImportMcpack(file) {
    try {
      showToast('กำลังแยกและอ่านไฟล์ .mcpack...', 'info');
      const parsed = await parseSkinPackArchive(file);

      if (parsed.packName) {
        this.packName = parsed.packName;
        const nameInput = document.getElementById('wardrobe-pack-name') || document.getElementById('wardrobe-detail-name');
        if (nameInput) nameInput.value = this.packName;
      }

      if (parsed.version) {
        this.version = parsed.version;
      }

      // Generate face avatars for imported skins
      for (const s of parsed.skins) {
        if (s.skinURL) {
          const img = new Image();
          await new Promise(res => {
            img.onload = res;
            img.onerror = res;
            img.src = s.skinURL;
          });
          s.faceUrl = extractFaceDataUrl(img);
        }
      }

      this.skins = parsed.skins;
      this.renderSkinList();
      sfx.playPop();
      showToast(`โหลดสกินแพ็กสำเร็จ! พบทั้งหมด ${this.skins.length} ชุด`, 'success');
    } catch (err) {
      console.error(err);
      showToast(err.userMessage || err.message || 'ไม่สามารถเปิดไฟล์ .mcpack ได้', 'error');
    }
  }

  async exportMcpack() {
    if (this.skins.length === 0) {
      showToast('กรุณาเพิ่มสกินอย่างน้อย 1 ชุดก่อนส่งออก', 'error');
      return;
    }

    try {
      showToast('กำลังสร้างสกินแพ็ก (.mcpack)...', 'info');

      // 1. Generate in-memory .mcpack package
      const generated = await createSkinPack({
        packName: this.packName || 'ZirconX Skin Pack',
        version: this.version || [1, 0, 0],
        skins: this.skins
      });

      // 2. Validate package
      const validation = await validateAddonPackage(generated.zip);
      if (!validation.valid) {
        console.error('Validation failed:', validation.errors);
        showToast(`ตรวจสอบพบข้อผิดพลาด: ${validation.errors[0]}`, 'error');
        return;
      }

      // 3. Serializer & Download clean .mcpack file
      await downloadMcpackFile(generated.zip, this.packName || 'ZirconX_SkinPack');

      sfx.playLevelUp();
      showToast('✓ ตรวจสอบผ่าน ดาวน์โหลดสกินแพ็ก (.mcpack) เรียบร้อย!', 'success');
    } catch (err) {
      console.error(err);
      showToast(err.userMessage || err.message || 'เกิดข้อผิดพลาดในการสร้างสกินแพ็ก', 'error');
    }
  }
}
