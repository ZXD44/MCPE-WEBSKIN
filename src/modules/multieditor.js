/**
 * Wardrobe Multi-Skin Addon System (แอดออนสกินสำหรับเซิร์ฟเวอร์ใหญ่)
 */
import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import { generateUUID, generateRandomId, showToast } from './utils.js';

export class WardrobeMultiEditor {
  constructor() {
    this.wardrobes = [];
    this.activeWardrobeUniq = null;
    this.addonVersion = [1, 0, 0];
    this.authors = ['ServerTeam', 'SkinStudio'];
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
          ยังไม่มีตู้เสื้อผ้า หรือไม่พบข้อมูลตามคำค้นหา กดปุ่ม <b>"เพิ่มตู้เสื้อผ้า"</b> เพื่อเริ่มต้น
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
          <div class="wardrobe-card-count">จำนวนเสื้อผ้า: ${w.skinlist.length} ชุด</div>
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
      showToast('กำลังแยกไฟล์ .mcaddon...', 'info');
      const zip = new JSZip();
      const content = await zip.loadAsync(await file.arrayBuffer());

      // 1. Read BP manifest
      const bpManifestFile = content.file(/.*(ZirconX-SKIN|MagicSkin)_BP\/manifest\.json$/i)[0] || content.file('ZirconX-SKIN_BP/manifest.json') || content.file('MagicSkin_BP/manifest.json');
      if (bpManifestFile) {
        try {
          const bpData = JSON.parse(await bpManifestFile.async('text'));
          if (bpData.header?.version) this.addonVersion = bpData.header.version;
          if (bpData.metadata?.authors) this.authors = bpData.metadata.authors;
        } catch (_) {}
      }

      // 2. Read main.js and extract playerData
      const scriptFile = content.file(/.*(ZirconX-SKIN|MagicSkin)_BP\/scripts\/main\.js$/i)[0] || content.file('ZirconX-SKIN_BP/scripts/main.js') || content.file('MagicSkin_BP/scripts/main.js');
      if (scriptFile) {
        const scriptText = await scriptFile.async('text');
        let match = scriptText.match(/let\s+playerData\s*=\s*(\[[\s\S]*?\]);/);
        if (!match) {
          match = scriptText.match(/\[\s*(\{[\s\S]*\})\s*\]/);
        }
        if (match) {
          try {
            const rawData = JSON.parse(match[1] || match[0]);
            this.wardrobes = rawData.map(w => ({
              uniq: w.uniq || (Date.now() + Math.random() * 1000).toString(32),
              name: w.name,
              allowUsername: w.allowUsername || [],
              skinlist: (w.skinlist || []).map(s => ({
                name: s.name,
                action: s.action,
                skinURL: '',
                blob: null
              }))
            }));
          } catch (e) {
            console.error('Failed to parse playerData JSON:', e);
          }
        }
      }

      // 3. Match Skin Textures
      const skinFiles = content.file(/(ZirconX-SKIN|MagicSkin)_RP\/textures\/skin\/.*\.(png|jpg)$/i);
      for (const sf of skinFiles) {
        const filename = sf.name.split('/').pop().replace(/\.(png|jpg)$/i, '');
        const blob = new Blob([await sf.async('arraybuffer')], { type: 'image/png' });
        const url = URL.createObjectURL(blob);

        this.wardrobes.forEach(w => {
          w.skinlist.forEach(s => {
            if (s.action === filename) {
              s.skinURL = url;
              s.blob = blob;
            }
          });
        });
      }

      this.renderWardrobeList();
      this.renderAuthors();
      showToast(`โหลดสำเร็จ! พบตู้เสื้อผ้า ${this.wardrobes.length} ตู้`, 'success');
    } catch (err) {
      console.error(err);
      showToast('ไม่สามารถนำเข้าไฟล์ .mcaddon ได้', 'error');
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
      const zip = new JSZip();
      const namespace = generateRandomId(10);
      const bpUuid = generateUUID();
      const rpUuid = generateUUID();

      // Load base templates from /templates/
      const templateFiles = [
        'ZirconX-SKIN_BP/items/zxskin.json',
        'ZirconX-SKIN_RP/attachables/zxskin.json',
        'ZirconX-SKIN_RP/materials/entity.material',
        'ZirconX-SKIN_RP/textures/items/skin_item.png',
        'ZirconX-SKIN_RP/textures/item_texture.json',
        'packicon.png'
      ];

      for (const tPath of templateFiles) {
        try {
          const resp = await fetch(`${import.meta.env.BASE_URL}templates/${tPath}`);
          const blob = await resp.blob();
          if (tPath === 'packicon.png') {
            zip.file('ZirconX-SKIN_BP/pack_icon.png', blob);
            zip.file('ZirconX-SKIN_RP/pack_icon.png', blob);
          } else {
            zip.file(tPath, blob);
          }
        } catch (_) {}
      }

      // 1. Generate Script API main.js
      const sanitizedPlayerData = this.wardrobes.map(w => ({
        uniq: w.uniq,
        name: w.name,
        allowUsername: w.allowUsername,
        skinlist: w.skinlist.map(s => ({
          name: s.name,
          action: s.action
        }))
      }));

      const scriptContent = `/**
 * Minecraft Bedrock Server Wardrobe System
 * Generated by MCPE Skin Studio
 */
import { world, system } from '@minecraft/server';
import { ActionFormData, MessageFormData } from '@minecraft/server-ui';

let playerData = ${JSON.stringify(sanitizedPlayerData, null, 2)};

world.beforeEvents.itemUse.subscribe(event => {
    let source = event.source;
    if (event.itemStack.typeId === "zxskin:skin" || event.itemStack.typeId === "zirconx:skin" || event.itemStack.typeId === "magiclab:skin") {
        system.run(() => titleScreen(source));
    }

    function titleScreen(player) {
        const wardrobeData = playerData.filter(e => e.allowUsername.includes(player.name));
        const form = new MessageFormData()
            .title("ZXSkin")
            .body("ระบบเปลี่ยนเสื้อผ้ารูปแบบใหม่ใน §l§aMinecraft Bedrock§r รองรับเวอร์ชันล่าสุด")
            .button1(wardrobeData.length > 0 ? "เลือกตู้เสื้อผ้า" : "§4ไม่พบตู้เสื้อผ้าของคุณในระบบ")
            .button2("เสื้อผ้าเริ่มต้น");

        form.show(player).then(choice => {
            if (choice.selection === 0) {
                if (wardrobeData.length > 0) wardrobeSelection(player, wardrobeData);
                else player.runCommand("title @s actionbar เสื้อผ้าของคุณไม่มีในระบบ");
            } else {
                if (choice.canceled) return;
                player.runCommand("title @s actionbar ใช้เสื้อผ้าเริ่มต้นของระบบ!");
                return player.runCommand('event entity @s ${namespace}:humanoid');
            }
        });
    }

    function wardrobeSelection(player, wardrobe) {
        const form = new ActionFormData()
            .title('เลือกตู้เสื้อผ้าของคุณ')
            .body('สวัสดี ' + player.name + ' นี่คือตู้เสื้อผ้าที่คุณมีสิทธิ์เข้าถึง');

        wardrobe.forEach(data => {
            form.button(data.name);
        });

        form.show(player).then(choice => {
            if (choice.canceled) return;
            return skinSelection(player, wardrobe[choice.selection].skinlist, wardrobe);
        });
    }

    function skinSelection(player, skinlist, wardrobe) {
        const form = new ActionFormData()
            .title('เลือกเสื้อผ้าของคุณ')
            .body('นี่คือรายการเสื้อผ้าที่มีในตู้นี้');

        skinlist.forEach(skindata => {
            form.button(skindata.name);
        });

        form.show(player).then(choice => {
            if (choice.canceled) return wardrobeSelection(player, wardrobe);
            player.runCommand('title @s actionbar เปลี่ยนเป็น "' + skinlist[choice.selection].name + '" เรียบร้อยแล้ว');
            player.runCommand('event entity @s ${namespace}:' + skinlist[choice.selection].action);
        });
    }
});
`;

      zip.file('ZirconX-SKIN_BP/scripts/main.js', scriptContent);

      // 2. Manifests
      const bpManifest = {
        format_version: 2,
        metadata: {
          authors: this.authors,
          generated_with: { "ZirconX_Studio": ["2.0.0"] }
        },
        header: {
          name: `ZirconX-SKIN Wardrobe ${this.addonVersion.join(".")}`,
          description: "Server Wardrobe Skinchanger Addon for Minecraft Bedrock by ZirconX",
          min_engine_version: [1, 21, 60],
          uuid: bpUuid,
          version: this.addonVersion
        },
        modules: [
          { type: "data", uuid: generateUUID(), version: this.addonVersion },
          { type: "script", language: "javascript", uuid: generateUUID(), entry: "scripts/main.js", version: this.addonVersion }
        ],
        dependencies: [
          { uuid: rpUuid, version: this.addonVersion },
          { module_name: "@minecraft/server", version: "2.1.0" },
          { module_name: "@minecraft/server-ui", version: "2.0.0" }
        ]
      };

      const rpManifest = {
        format_version: 2,
        metadata: {
          authors: this.authors,
          generated_with: { "ZirconX_Studio": ["2.0.0"] }
        },
        header: {
          name: `ZirconX-SKIN Wardrobe ${this.addonVersion.join(".")}`,
          description: "Server Wardrobe Skinchanger Addon for Minecraft Bedrock by ZirconX",
          min_engine_version: [1, 21, 60],
          uuid: rpUuid,
          version: this.addonVersion
        },
        modules: [
          { type: "resources", uuid: generateUUID(), version: this.addonVersion }
        ],
        dependencies: [
          { uuid: bpUuid, version: this.addonVersion }
        ]
      };

      zip.file('ZirconX-SKIN_BP/manifest.json', JSON.stringify(bpManifest, null, 2));
      zip.file('ZirconX-SKIN_RP/manifest.json', JSON.stringify(rpManifest, null, 2));

      // 3. Render Controller & Player Entities
      const allOutfits = [];
      this.wardrobes.forEach(w => {
        w.skinlist.forEach(s => allOutfits.push(s));
      });

      const renderControllerJson = {
        format_version: "1.10.0",
        render_controllers: {
          "controller.render.player.1st_person": {
            arrays: {
              textures: {
                "array.skins": ["Texture.default", ...allOutfits.map(o => `Texture.${o.action}`)]
              }
            },
            geometry: "Geometry.default",
            materials: [{ "*": "Material.default" }],
            textures: ["array.skins[query.mark_variant]"],
            part_visibility: [
              { "*": false },
              { rightArm: "query.get_equipped_item_name == ''" },
              { rightSleeve: "query.get_equipped_item_name == ''" }
            ]
          },
          "controller.render.skinpack": {
            geometry: "geometry.default",
            materials: [{ "*": "Material.default" }],
            textures: ["array.skins[query.mark_variant]"],
            part_visibility: [{ "*": true }, { head: true }],
            arrays: {
              textures: {
                "array.skins": ["Texture.default", ...allOutfits.map(o => `Texture.${o.action}`)]
              },
              geometries: { "array.geo": ["Geometry.default"] }
            }
          },
          "controller.render.player.spectator": {
            geometry: "'array.geo[query.mark_variant != undefined ? query.mark_variant : 0]'",
            materials: [{ "*": "Material.spectator" }],
            textures: ["array.skins[query.mark_variant]"],
            part_visibility: [{ "*": false }, { head: true }],
            ignore_lighting: true,
            light_color_multiplier: 2.5,
            overlay_color: { r: 0, g: 0.2, b: 0.5, a: 0.8 },
            color: { r: 0.7, g: 0.9, b: 1, a: 0.5 }
          }
        }
      };

      const playerEntityRpJson = {
        format_version: "1.10.0",
        "minecraft:client_entity": {
          description: {
            identifier: "minecraft:player",
            materials: {
              default: "entity_alphatest",
              solid: "entity_alphatest",
              spectator: "player_spectator"
            },
            textures: {
              default: "textures/entity/alex"
            },
            geometry: {
              default: "geometry.humanoid",
              cape: "geometry.cape"
            },
            render_controllers: [
              { "controller.render.player.1st_person": "variable.is_first_person && !q.is_spectator" },
              { "controller.render.skinpack": "!variable.is_first_person && !variable.map_face_icon && !q.is_spectator" },
              { "controller.render.player.spectator": "q.is_spectator" }
            ],
            enable_attachables: true
          }
        }
      };

      const playerEntityBpJson = {
        format_version: "1.21.60",
        "minecraft:entity": {
          description: {
            identifier: "minecraft:player",
            is_spawnable: false,
            is_summonable: false,
            is_experimental: false
          },
          component_groups: {
            [`${namespace}:humanoid`]: {
              "minecraft:mark_variant": { value: 0 }
            }
          },
          components: {
            "minecraft:type_family": { family: ["player"] }
          },
          events: {
            [`${namespace}:humanoid`]: {
              add: { component_groups: [`${namespace}:humanoid`] }
            }
          }
        }
      };

      // Populate variants in RP & BP
      allOutfits.forEach((outfit, idx) => {
        const markVal = idx + 1;
        playerEntityRpJson["minecraft:client_entity"].description.textures[outfit.action] = `textures/skin/${outfit.action}`;

        playerEntityBpJson["minecraft:entity"].component_groups[`${namespace}:${outfit.action}`] = {
          "minecraft:mark_variant": { value: markVal }
        };
        playerEntityBpJson["minecraft:entity"].events[`${namespace}:${outfit.action}`] = {
          add: { component_groups: [`${namespace}:${outfit.action}`] }
        };

        // Add skin image file
        if (outfit.blob) {
          zip.file(`ZirconX-SKIN_RP/textures/skin/${outfit.action}.png`, outfit.blob);
        } else if (outfit.skinURL) {
          zip.file(`ZirconX-SKIN_RP/textures/skin/${outfit.action}.png`, fetch(outfit.skinURL).then(r => r.blob()));
        }
      });

      zip.file('ZirconX-SKIN_RP/render_controllers/player.render_controller.json', JSON.stringify(renderControllerJson, null, 2));
      zip.file('ZirconX-SKIN_RP/entity/player.entity.json', JSON.stringify(playerEntityRpJson, null, 2));
      zip.file('ZirconX-SKIN_BP/entities/player.json', JSON.stringify(playerEntityBpJson, null, 2));

      // Generate & save
      const blob = await zip.generateAsync({ type: 'blob' });
      saveAs(blob, `zxskin_server_wardrobe_${Date.now()}.mcaddon`);
      showToast('สร้างและดาวน์โหลดแอดออนเซิร์ฟเวอร์สำเร็จ (.mcaddon)', 'success');
    } catch (err) {
      console.error(err);
      showToast('เกิดข้อผิดพลาดในการแพ็กเกจแอดออน', 'error');
    }
  }
}
