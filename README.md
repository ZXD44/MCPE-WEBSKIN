# ⛏️ ZirconX Skin Studio (Minecraft Bedrock Edition)

> **เว็บแอปพลิเคชันเครื่องมือสร้างและจัดการสกิน Minecraft Bedrock Edition ครบวงจร**  
> ดีไซน์ธีม Minecraft UI แท้ รองรับมือถือเต็มรูปแบบ (Mobile-First) พรีวิว 3 มิติสด และประมวลผลบนเครื่อง 100% (Pure Client-Side In-Memory)

🔗 **ใช้งานออนไลน์ (GitHub Pages)**: [https://zxd44.github.io/MCPE-WEBSKIN/](https://zxd44.github.io/MCPE-WEBSKIN/)  
📦 **Repository**: [https://github.com/ZXD44/MCPE-WEBSKIN](https://github.com/ZXD44/MCPE-WEBSKIN)

---

## ⚡ 3 เครื่องมือหลัก (The Three Artifacts)

1. **🎭 สกินล่องหน (Hide Part Editor)**:
   - เลือกลบชิ้นส่วนสกินให้โปร่งใสระดับพิกเซล ครอบคลุมทั้งเลเยอร์ในและเลเยอร์นอก (Inner Base + Outer Hat/Jacket/Sleeves/Pants)
   - พรีเซ็ตด่วน 1 คลิก: `หัวลอย`, `ล่องหน 100%`, `ถอดแขนขา`, `แค่ตัว`, `ซ่อนหัว`, `ซ่อนตัว`
   - พรีวิว 3 มิติเรียลไทม์ และดาวน์โหลดไฟล์ภาพ `.png` นำไปใส่ในเกมได้ทันที

2. **🦺 แอดออนสกิน (Standalone Addon Generator)**:
   - แปลงสกินเป็นชุดเกราะสวมใส่ในเกม (ช่องหัว, ช่องตัว, ช่องขา, ช่องเท้า, หรือแยก 2 ชิ้น)
   - **ระบบเจนไอคอนไอเทมตามรูปลักษณ์ช่องสวมใส่จริง (Slot-Based Item Icon)**:
     - ช่องหัว (`slot.armor.head`): เจนไอคอนเฉพาะส่วนหัว (+ ปอยผม/ลำตัวถ้าเปิดเรนเดอร์)
     - ช่องตัว (`slot.armor.chest`): เจนไอคอนเฉพาะเสื้อและแขน
     - ช่องกางเกง (`slot.armor.legs`): เจนไอคอนเฉพาะช่วงกางเกง/เอว
     - ช่องรองเท้า (`slot.armor.feet`): เจนไอคอนเฉพาะรองเท้าบูท
     - หากสกินไม่มีพิกเซลในช่องที่เลือก ตัวไอคอนจะโปร่งใสอัตโนมัติ ไม่แสดงผิดส่วน
   - รองรับวิกผมยาว/ปอยผมพาดลำตัว โดยใช้ Custom Render Controller (`controller.render.zirconx_skin`)
   - ซ่อนโมเดลขณะถือในมือด้วยสเกล `1e-5` ใน attachable
   - แปลงสกินเก่า 64x32 เป็น 64x64 พร้อม UV Mirroring อัตโนมัติ

3. **🚪 ตู้เสื้อผ้า (Wardrobe Multi-Skin Addon)**:
   - รวมหลายสกินในแพ็กเกจเดียว สลับชุดในเกมได้ทันทีผ่าน Script API
   - คุมสิทธิ์เปิดตู้ด้วย Xbox Gamertags
   - นำเข้าและแก้ไขไฟล์ `.mcaddon` เดิมได้แบบ Two-Way Editing

---

## 🛡️ จุดเด่นด้านสถาปัตยกรรม (Architecture Highlights)

- **Pure Client-Side**: ปลอดภัย ไร้เซิร์ฟเวอร์ ไม่ส่งภาพสกินออกภายนอก ประมวลผล ZIP ผ่าน `JSZip` ในหน่วยความจำทั้งหมด
- **SafeZip Protection**: ระบบความปลอดภัยป้องกัน Zip Bomb และ Path Traversal
- **3D Preview Engine**: เรนเดอร์โมเดล 3D แบบเรียลไทม์ด้วย `skinview3d` (Steve/Alex, Walk/Run/Idle) พร้อมระบบหยุดเรนเดอร์เมื่อเลื่อนพ้นจอเพื่อประหยัดแบตเตอรี่
- **Slot-Based Item Icon Generator**: อัลกอริทึมจำแนก UV สกินตามสัดส่วนช่องสวมใส่ Minecraft แท้ 16x16 พิกเซล พร้อมระบบตรวจสอบ Visible Pixels
- **Authentic Minecraft UI & Sound**: สไตล์ Minecraft UI (Deepslate, Beveled Buttons, Hotbar Mobile Dock, Silkscreen Typography) และเสียง SFX สังเคราะห์ผ่าน Web Audio API
- **Universal Input**: ลากวางไฟล์บนจอได้ทุกที่ (Global Drag & Drop) และกด **Ctrl + V** เพื่อแปะภาพจาก Clipboard ได้ทันที

---

## 📁 โครงสร้างไฟล์ในโปรเจกต์ (Clean Modular Layout)

```
MCPE-WEBSKIN/
├── public/
│   ├── templates/            # แม่แบบ Minecraft Bedrock Addon (BP/RP)
│   └── favicon.ico           # ไอคอนเว็บ
├── src/
│   ├── core/                 # Headless Core Engine (Pure In-Memory, Zero DOM)
│   │   ├── addon/            # ตัวสร้างแอดออนสกินสวมใส่ 1.21.10+
│   │   ├── wardrobe/         # ตัวสร้างและแยกแพ็กเกจตู้เสื้อผ้า
│   │   ├── skin/             # UV Coordinates, Steve/Alex, Slot Icon Generator
│   │   ├── validator/        # ตรวจสอบ Manifest, UUID, Textures
│   │   ├── security/         # ระบบป้องกัน Zip Bomb & Traversal
│   │   └── errors/           # ระบบ Error รวมศูนย์มาตรฐาน
│   ├── modules/              # UI Controllers
│   │   ├── hidepart.js       # ตัวควบคุมหน้าสกินล่องหน + 3D Canvas
│   │   ├── standalone.js     # ตัวควบคุมหน้าแอดออนสกิน + Live Slot Icon Preview
│   │   ├── wardrobe.js       # ตัวควบคุมหน้าตู้เสื้อผ้าเซิร์ฟเวอร์
│   │   ├── zip.js            # ตัวแตกและอ่านไฟล์ ZIP/MCPACK/MCADDON
│   │   ├── sfx.js            # ระบบเสียงสังเคราะห์ Minecraft (Web Audio API)
│   │   ├── mcfire.js         # สะเก็ดไฟละอองพิกเซล Minecraft
│   │   └── utils.js          # ฟังก์ชันช่วย (UUID, Toast, Resolution)
│   ├── styles/               # Modular CSS Design System (Minecraft Theme)
│   │   ├── variables.css     # Tokens, Palette, Reset, Scrollbars
│   │   ├── header.css        # Minecraft Header, Logo, SFX Toggle
│   │   ├── layout.css        # Layout, Section Transitions & Headings
│   │   ├── hero.css          # Minecraft Dashboard & 4 Tool Slabs
│   │   ├── toolcards.css     # Tool Cards, Fire Badge, Creator Tag
│   │   ├── components.css    # Hopper Dropzone, 3D Pedestal, Beveled Buttons
│   │   ├── editor.css        # Presets, Part Toggles, Slot Pickers
│   │   ├── forms.css         # Inputs, Gamertags, Outfit Cards
│   │   └── dock.css          # Minecraft Hotbar Mobile Dock & Toasts
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
พัฒนาและออกแบบโดย **ZirconX**
