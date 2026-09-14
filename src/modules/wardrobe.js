/**
 * Wardrobe Multi-Skin Addon System (แอดออนสกินสำหรับเซิร์ฟเวอร์ใหญ่)
 */
import { saveAs } from 'file-saver';
import { generateRandomId, showToast } from './utils.js';
import { createWardrobeAddon } from '../core/wardrobe/wardrobeGenerator.js';
import { parseWardrobeArchive } from '../core/wardrobe/wardrobeParser.js';
import { validateAddonPackage } from '../core/validator/addonValidator.js';

export class WardrobeMultiEditor {
  constructor() {
    this.wardrobes = [];
    this.activeWardrobeUniq = null;
    this.addonVersion = [1, 0, 0];
    this.authors = ['ServerTeam', 'SkinProject'];
    this.searchQuery = '';

    this.init();
  }

  init() {
    // Search input
    const searchInput = document.getElementById('wardrobe-search-input');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        this.searchQuery = e.target.value.toLowerCase().trim();
        this.renderWardrobeList();
      });
    }

    const clearSearch = document.getElementById('wardrobe-clear-search');
    if (clearSearch) {
      clearSearch.addEventListener('click', () => {
        if (searchInput) searchInput.value = '';
        this.searchQuery = '';
        this.renderWardrobeList();
      });
    }

    // Add Wardrobe button
    const addWardrobeBtn = document.getElementById('wardrobe-add-btn');
    if (addWardrobeBtn) {
      addWardrobeBtn.addEventListener('click', () => this.addWardrobe());
    }

    // Import .mcaddon
    const importInput = document.getElementById('wardrobe-import-input');
    if (importInput) {
      importInput.addEventListener('change', (e) => this.handleImportMcaddon(e));
    }

    // Export .mcaddon
    const exportBtn = document.getElementById('wardrobe-export-btn');
    if (exportBtn) {
      exportBtn.addEventListener('click', () => this.exportMcaddon());
    }

    // Close Wardrobe Detail / Back
    const backBtn = document.getElementById('wardrobe-detail-back-btn');
    if (backBtn) {
      backBtn.addEventListener('click', () => {
        this.activeWardrobeUniq = null;
        document.getElementById('wardrobe-detail-panel').style.display = 'none';
        document.getElementById('wardrobe-list-panel').style.display = 'block';
        this.renderWardrobeList();
      });
    }

    // Add Xbox Gamertag button
    const addGamertagBtn = document.getElementById('wardrobe-add-gamertag-btn');
    if (addGamertagBtn) {
      addGamertagBtn.addEventListener('click', () => this.addGamertag());
    }

    // Add Skin / Outfit input in Wardrobe Detail
    const addOutfitInput = document.getElementById('wardrobe-add-outfit-input');
    if (addOutfitInput) {
      addOutfitInput.addEventListener('change', (e) => this.handleAddOutfit(e));
    }

    // Addon Metadata Toggles
    const toggleMetaBtn = document.getElementById('wardrobe-toggle-meta-btn');
    const metaBox = document.getElementById('wardrobe-meta-box');
    if (toggleMetaBtn && metaBox) {
      toggleMetaBtn.addEventListener('click', () => {
        const isHidden = metaBox.style.display === 'none';
        metaBox.style.display = isHidden ? 'block' : 'none';
        toggleMetaBtn.textContent = isHidden ? 'ซ่อนการตั้งค่า' : 'ตั้งค่าเวอร์ชั่น & เครดิต';
      });
    }

    // Version inputs
    ['major', 'minor', 'patch'].forEach((v, index) => {
      const input = document.getElementById(`wardrobe-v-${v}`);
      if (input) {
        input.addEventListener('input', (e) => {
          let val = parseInt(e.target.value);
          if (isNaN(val) || val < 0) val = 0;
          this.addonVersion[index] = val;
        });
      }
    });

    // Add author button
    const addAuthorBtn = document.getElementById('wardrobe-add-author-btn');
    if (addAuthorBtn) {
      addAuthorBtn.addEventListener('click', () => {
        this.authors.push(`Author_${this.authors.length + 1}`);
        this.renderAuthors();
      });
    }

    this.renderWardrobeList();
    this.renderAuthors();
  }

  addWardrobe() {
    const num = this.wardrobes.length + 1;
    const newWardrobe = {
      uniq: (Date.now() + Math.random() * 1000).toString(32),
      name: `ตู้เสื้อผ้าที่ ${num}`,
      allowUsername: [],
      skinlist: []
    };
    this.wardrobes.push(newWardrobe);
    this.renderWardrobeList();
    showToast(`เพิ่ม ${newWardrobe.name} เรียบร้อย`, 'success');
  }

  deleteWardrobe(uniq) {
    this.wardrobes = this.wardrobes.filter(w => w.uniq !== uniq);
    this.renderWardrobeList();
    showToast('ลบตู้เสื้อผ้าเรียบร้อย', 'info');
  }

  openWardrobeDetail(uniq) {
    this.activeWardrobeUniq = uniq;
    const w = this.wardrobes.find(item => item.uniq === uniq);
    if (!w) return;

    document.getElementById('wardrobe-list-panel').style.display = 'none';
    document.getElementById('wardrobe-detail-panel').style.display = 'block';

    const nameInput = document.getElementById('wardrobe-detail-name');
    if (nameInput) {
      nameInput.value = w.name;
      nameInput.oninput = (e) => {
        w.name = e.target.value;
      };
    }

    this.renderGamertags();
    this.renderOutfits();
  }

  addGamertag(tagName) {
    const w = this.wardrobes.find(item => item.uniq === this.activeWardrobeUniq);
    if (!w) return;
    const name = tagName ? tagName.trim() : 'PlayerName';
    if (name && !w.allowUsername.includes(name)) {
      w.allowUsername.push(name);
      this.renderGamertags();
    }
  }

  renderGamertags() {
    const w = this.wardrobes.find(item => item.uniq === this.activeWardrobeUniq);
    const container = document.getElementById('wardrobe-gamertag-chips');
    if (!w || !container) return;

    container.innerHTML = '';
    w.allowUsername.forEach((tag, index) => {
      const chip = document.createElement('span');
      chip.className = 'chip';
      chip.innerHTML = `
        <span>${tag}</span>
        <span class="chip-close" data-remove="${index}">&times;</span>
      `;
      chip.querySelector('[data-remove]').onclick = () => {
        w.allowUsername.splice(index, 1);
        this.renderGamertags();
      };
      container.appendChild(chip);
    });

    // Input inside chip container
    const input = document.createElement('input');
    input.type = 'text';
    input.className = 'chip-input';
    input.placeholder = '+ พิมพ์ชื่อ Gamertag แล้วกด Enter...';
    input.onkeydown = (e) => {
      if (e.key === 'Enter' || e.key === ',') {
        e.preventDefault();
        const val = input.value.replace(',', '').trim();
        if (val) {
          this.addGamertag(val);
          input.value = '';
        }
      }
    };
    container.appendChild(input);
  }

  handleAddOutfit(e) {
    const files = Array.from(e.target.files || []);
    if (files.length === 0) return;

    const w = this.wardrobes.find(item => item.uniq === this.activeWardrobeUniq);
    if (!w) return;

    let loadedCount = 0;
    files.forEach(file => {
      const reader = new FileReader();
      reader.onload = (event) => {
        const skinURL = event.target.result;
        const action = generateRandomId(20);
        const outfitName = file.name.replace(/\.[^/.]+$/, '').replace(/[_\-]/g, ' ');
        w.skinlist.push({
          name: outfitName || `ชุดที่ ${w.skinlist.length + 1}`,
          action: action,
          skinURL: skinURL,
          blob: file
        });
        loadedCount++;
        if (loadedCount === files.length) {
          this.renderOutfits();
          showToast(`เพิ่มสกินทั้งหมด ${loadedCount} ชุดเรียบร้อย!`, 'success');
        }
      };
      reader.readAsDataURL(file);
    });
    e.target.value = '';
  }

  renderOutfits() {
    const w = this.wardrobes.find(item => item.uniq === this.activeWardrobeUniq);
    const container = document.getElementById('wardrobe-outfit-list');
    if (!w || !container) return;

    container.innerHTML = '';
    w.skinlist.forEach((outfit, index) => {
      const card = document.createElement('div');
      card.className = 'outfit-card';

      const img = document.createElement('img');
      img.className = 'outfit-thumbnail';
      img.src = outfit.skinURL;

      const nameInput = document.createElement('input');
      nameInput.type = 'text';
      nameInput.className = 'mc-input outfit-name-input';
      nameInput.value = outfit.name;
      nameInput.oninput = (e) => {
        outfit.name = e.target.value;
      };

      const delBtn = document.createElement('button');
      delBtn.className = 'mc-btn mc-btn-danger';
      delBtn.style.fontSize = '0.75rem';
      delBtn.style.padding = '0.2rem 0.5rem';
      delBtn.style.width = '100%';
      delBtn.textContent = 'ลบชุดนี้';
      delBtn.onclick = () => {
        w.skinlist.splice(index, 1);
        this.renderOutfits();
      };

      card.appendChild(img);
      card.appendChild(nameInput);
      card.appendChild(delBtn);
      container.appendChild(card);
    });
  }

  renderWardrobeList() {
    const container = document.getElementById('wardrobe-grid-container');
    if (!container) return;

    const filtered = this.searchQuery
      ? this.wardrobes.filter(w => w.name.toLowerCase().includes(this.searchQuery))
      : this.wardrobes;

    container.innerHTML = '';

    if (filtered.length === 0) {
      container.innerHTML = `
        <div style="grid-column: 1/-1; text-align: center; padding: 2.5rem 1rem; color: var(--text-muted);">
          ยังไม่มีข้อมูลตู้เสื้อผ้า กดปุ่ม <b>"+ เพิ่มตู้"</b> เพื่อเริ่มต้น
        </div>
      `;
      return;
    }

    filtered.forEach(w => {
      const card = document.createElement('div');
      card.className = 'wardrobe-card';

      card.innerHTML = `
        <div>
          <div class="wardrobe-card-title">${w.name}</div>
          <div class="wardrobe-card-count">จำนวนชุด: ${w.skinlist.length} ชุด</div>
          <div style="font-size: 0.75rem; color: var(--text-muted); margin-top: 0.2rem;">
            ผู้มีสิทธิ์เข้าถึง: ${w.allowUsername.length} คน
          </div>
        </div>
        <div class="wardrobe-card-actions">
          <button class="mc-btn mc-btn-primary" style="flex: 1;" data-edit="${w.uniq}">จัดการตู้</button>
          <button class="mc-btn mc-btn-danger" data-delete="${w.uniq}">ลบ</button>
        </div>
      `;

      card.querySelector(`[data-edit="${w.uniq}"]`).onclick = () => this.openWardrobeDetail(w.uniq);
      card.querySelector(`[data-delete="${w.uniq}"]`).onclick = () => this.deleteWardrobe(w.uniq);

      container.appendChild(card);
    });
  }

  renderAuthors() {
    const container = document.getElementById('wardrobe-author-list');
    if (!container) return;

    container.innerHTML = '';
    this.authors.forEach((author, index) => {
      const row = document.createElement('div');
      row.style.display = 'flex';
      row.style.gap = '0.5rem';
      row.style.marginBottom = '0.4rem';

      const input = document.createElement('input');
      input.type = 'text';
      input.className = 'mc-input';
      input.value = author;
      input.oninput = (e) => this.authors[index] = e.target.value;

      const delBtn = document.createElement('button');
      delBtn.className = 'mc-btn mc-btn-danger';
      delBtn.textContent = 'ลบ';
      delBtn.onclick = () => {
        this.authors.splice(index, 1);
        this.renderAuthors();
      };

      row.appendChild(input);
      row.appendChild(delBtn);
      container.appendChild(row);
    });
  }

  /**
   * Import existing .mcaddon and reconstruct entire state
   */
  async handleImportMcaddon(e) {
    const file = e.target.files[0];
    if (!file) return;

    try {
      showToast('กำลังตรวจสอบและแยกไฟล์ .mcaddon...', 'info');
      const parsed = await parseWardrobeArchive(file);
      this.wardrobes = parsed.wardrobes;
      this.addonVersion = parsed.addonVersion;
      this.authors = parsed.authors;

      this.renderWardrobeList();
      this.renderAuthors();
      showToast(`โหลดสำเร็จ! พบตู้เสื้อผ้า ${this.wardrobes.length} ตู้`, 'success');
    } catch (err) {
      console.error(err);
      showToast(err.userMessage || err.message || 'ไม่สามารถนำเข้าไฟล์ .mcaddon ได้', 'error');
    }
    e.target.value = '';
  }

  /**
   * Export fully working .mcaddon with Script API
   */
  async exportMcaddon() {
    if (this.wardrobes.length === 0) {
      showToast('กรุณาสร้างตู้เสื้อผ้าอย่างน้อย 1 ตู้ก่อนส่งออก', 'error');
      return;
    }

    try {
      showToast('กำลังแพ็กเกจ .mcaddon...', 'info');
      const generated = await createWardrobeAddon({
        wardrobes: this.wardrobes,
        addonVersion: this.addonVersion,
        authors: this.authors
      });

      // Validate package before saving
      const validationReport = await validateAddonPackage(generated.zip);
      if (!validationReport.valid) {
        console.error('Wardrobe validation failed:', validationReport.errors);
        showToast(`ตรวจสอบพบข้อผิดพลาด: ${validationReport.errors[0]}`, 'error');
        return;
      }

      // Generate & save
      const blob = await generated.zip.generateAsync({ type: 'blob' });
      saveAs(blob, `zxskin_server_wardrobe_${Date.now()}.mcaddon`);
      showToast('✓ ตรวจสอบผ่าน ดาวน์โหลดแอดออนเรียบร้อย', 'success');
    } catch (err) {
      console.error(err);
      showToast(err.userMessage || err.message || 'เกิดข้อผิดพลาดในการแพ็กเกจแอดออน', 'error');
    }
  }
}
