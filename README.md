# 🐉 ZirconX Skin Studio (Blood Dragon Edition)

> **เว็บแอปพลิเคชันเครื่องมือสร้างและจัดการสกิน Minecraft Bedrock Edition ครบวงจร**  
> สไตล์ Dark Fantasy + Luxury Gaming รองรับมือถือเป็นหลัก (Mobile-First) พรีวิว 3 มิติสด และประมวลผลบนเครื่อง 100% (Pure Client-Side In-Memory)

🔗 **ใช้งานออนไลน์**: [https://zxd44.github.io/MCPE-WEBSKIN/](https://zxd44.github.io/MCPE-WEBSKIN/)  
🌐 **เว็บไซต์ผู้พัฒนา**: [www.zirconx.xyz](https://www.zirconx.xyz)

---

## ⚡ 3 เครื่องมือหลัก (The Three Artifacts)

1. **🎭 สกินล่องหน (Hide Part Editor)**:
   - เลือกลบชิ้นส่วนสกินให้โปร่งใสระดับพิกเซล ครอบคลุมทั้งเลเยอร์ในและเลเยอร์นอก
   - พรีเซ็ตด่วน 1 คลิก: `หัวลอย`, `ล่องหน 100%`, `ถอดแขนขา`, `แค่ตัว`, `ซ่อนหัว`, `ซ่อนตัว`
   - ดาวน์โหลดไฟล์ภาพ `.png` นำไปใส่ในเกมได้ทันที

2. **🦺 แอดออนสกิน (Standalone Addon Generator)**:
   - แปลงสกินเป็นชุดเกราะสวมใส่ในเกม (ช่องหัว, ช่องตัว, ช่องขา, ช่องเท้า, หรือแยก 2 ชิ้น)
   - รองรับวิกผมยาว/ปอยผมพาดลำตัว โดยใช้ Custom Render Controller (`controller.render.zirconx_skin`)
   - ซ่อนโมเดลขณะถือในมือด้วยสเกล `1e-5` ใน attachable
   - เจนไอคอน 16x16 พิกเซลจากหน้าและปอยผมตัวละครอัตโนมัติ
   - แปลงสกินเก่า 64x32 เป็น 64x64 พร้อม UV Mirroring อัตโนมัติ

3. **🚪 ตู้เสื้อผ้า (Wardrobe Multi-Skin Addon)**:
   - รวมหลายสกินในแพ็กเกจเดียว สลับชุดในเกมได้ทันที
   - คุมสิทธิ์เปิดตู้ด้วย Xbox Gamertags
   - นำเข้าและแก้ไขไฟล์ `.mcaddon` เดิมได้แบบ Two-Way Editing

---

## 🛡️ จุดเด่นด้านสถาปัตยกรรม (Architecture Highlights)

- **Pure Client-Side**: ปลอดภัย ไร้เซิร์ฟเวอร์ ไม่ส่งภาพสกินออกภายนอก ประมวลผล ZIP ผ่าน `JSZip` ในหน่วยความจำ
- **SafeZip Protection**: ระบบความปลอดภัยป้องกัน Zip Bomb และ Path Traversal
- **3D Preview Engine**: เรนเดอร์โมเดล 3D แบบเรียลไทม์ด้วย `skinview3d` (Steve/Alex, Walk/Run/Idle) พร้อมระบบหยุดเรนเดอร์เมื่อเลื่อนพ้นจอเพื่อประหยัดแบตเตอรี่
- **Synthesized Web Audio**: เสียงเอฟเฟกต์สังเคราะห์ในตัวผ่าน Web Audio API ไม่พึ่งพาไฟล์เสียงภายนอก
- **Universal Input**: ลากวางไฟล์บนจอได้ทุกที่ (Global Drag & Drop) และกด **Ctrl + V** เพื่อแปะภาพได้ทันที

---

## 📁 โครงสร้างไฟล์ในโปรเจกต์ (Clean Directory Layout)

```
MCPE-WEBSKIN/
├── public/
│   ├── images/               # ภาพวิชวล (Blood Dragon Hero)
│   └── templates/            # แม่แบบ Minecraft Bedrock Addon (BP/RP)
├── src/
│   ├── core/                 # Headless Core Engine (Pure In-Memory, Zero DOM)
│   │   ├── addon/            # ตัวสร้างแอดออนสกินสวมใส่ 1.21.10+
│   │   ├── wardrobe/         # ตัวสร้างและแยกแพ็กเกจตู้เสื้อผ้า
│   │   ├── skin/             # UV Coordinates, Steve/Alex, Icon Generator
│   │   ├── validator/        # ตรวจสอบ Manifest, UUID, Textures
│   │   ├── security/         # ระบบป้องกัน Zip Bomb
│   │   └── errors/           # ระบบ Error รวมศูนย์มาตรฐาน
│   ├── modules/              # UI Controllers
│   │   ├── hidepart.js       # ตัวควบคุมหน้าสกินล่องหน
│   │   ├── standalone.js     # ตัวควบคุมหน้าแอดออนสกิน
│   │   ├── wardrobe.js       # ตัวควบคุมหน้าตู้เสื้อผ้า
│   │   ├── zip.js            # ตัวแตกไฟล์ ZIP/MCPACK/MCADDON
│   │   ├── sfx.js            # ระบบเสียงสังเคราะห์ Minecraft
│   │   ├── mcfire.js         # สะเก็ดไฟละอองพิกเซล
│   │   └── utils.js          # ฟังก์ชันช่วย (UUID, Toast, Resolution)
│   ├── styles/               # Modular CSS Design System (Blood Dragon)
│   │   ├── variables.css     # Tokens, Reset, Scrollbars, Container
│   │   ├── header.css        # App Header, Brand, Nav, SFX Toggle
│   │   ├── layout.css        # Section Transitions & Headings
│   │   ├── hero.css          # Blood Dragon Hero Stage & CTA
│   │   ├── toolcards.css     # Obsidian Metallic Tool Slabs
│   │   ├── components.css    # Dropzone, 3D Pedestal, Forge Buttons
│   │   ├── editor.css        # Presets, Part Toggles, Slot Pickers
│   │   ├── forms.css         # Inputs, Gamertags, Outfit Cards
│   │   └── dock.css          # Mobile Bottom Dock & Toasts
│   ├── types/                # TypeScript Type Definitions
│   ├── main.js               # Router, Drag&Drop, Paste, Lifecycle
│   └── style.css             # Main CSS Master Importer
├── tests/                    # Vitest Automated Test Suite (28 Tests)
├── index.html                # Main Application Shell
├── tsconfig.json             # TypeScript Compiler Options
├── vite.config.js            # Vite Configuration
└── README.md
```

---

## 💻 การพัฒนาและทดสอบ (Development & Testing)

```bash
# 1. ติดตั้ง Dependencies
npm install

# 2. รัน Dev Server
npm run dev

# 3. รัน Unit Tests (Vitest)
npm test

# 4. ตรวจสอบ TypeScript Types
npm run type-check

# 5. Build สำหรับ Production
npm run build
```

---

## 🚀 Git & Deployment Workflow

- **Branch `main`**: ซอร์สโค้ดหลักของโปรเจกต์
- **Branch `gh-pages`**: ถูกบิลด์และ Deploy ขึ้น GitHub Pages อัตโนมัติผ่าน GitHub Actions (`.github/workflows/deploy.yml`)
- ส่งโค้ดขึ้น GitHub:
  ```bash
  git add .
  git commit -m "feat: your update message"
  git push origin main
  ```

---

## 📄 ลิขสิทธิ์และผู้พัฒนา
พัฒนาและออกแบบโดย **ZirconX** • [www.zirconx.xyz](https://www.zirconx.xyz)
