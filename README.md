# ⛏️ ZirconX Skin Studio (Minecraft Bedrock Edition)

> **เว็บแอปพลิเคชันเครื่องมือสร้างและจัดการสกิน Minecraft Bedrock Edition ครบวงจร**  
> ดีไซน์ธีม Minecraft UI แท้ รองรับมือถือเต็มรูปแบบ (Mobile-First) พรีวิว 3 มิติสด และประมวลผลบนเครื่อง 100% (Pure Client-Side In-Memory)

🔗 **ใช้งานออนไลน์ (Vercel)**: [https://mcpe-webskin.vercel.app/](https://mcpe-webskin.vercel.app/)  
🔗 **ใช้งานออนไลน์ (GitHub Pages)**: [https://zxd44.github.io/MCPE-WEBSKIN/](https://zxd44.github.io/MCPE-WEBSKIN/)  
📦 **Repository**: [https://github.com/ZXD44/MCPE-WEBSKIN](https://github.com/ZXD44/MCPE-WEBSKIN)

---

## ⚡ 4 เครื่องมือหลัก (The Studio Artifacts)

1. **🎭 สกินล่องหน (Hide Part Editor)**:
   - เลือกลบชิ้นส่วนสกินให้โปร่งใสระดับพิกเซล ครอบคลุมทั้งเลเยอร์ในและเลเยอร์นอก (Inner Base + Outer Hat/Jacket/Sleeves/Pants)
   - พรีเซ็ตด่วน 1 คลิก: `หัวลอย`, `ล่องหน 100%`, `ถอดแขนขา`, `แค่ตัว`, `ซ่อนหัว`, `ซ่อนตัว`
   - พรีวิว 3 มิติเรียลไทม์ และดาวน์โหลดไฟล์ภาพ `.png` นำไปใส่ในเกมได้ทันที

2. **🦺 แอดออนสกินไอเทม (Standalone Addon Generator)**:
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

3. **🚪 สกินแพ็กตู้เสื้อผ้า (Official Bedrock Skin Pack .mcpack)**:
   - รวมหลายสกินเป็นแพ็กเกจเดียว นำเข้า **ห้องแต่งตัว (Dressing Room &gt; Classic Skins)** ของเกมโดยตรง
   - **3D Live Inspect**: คลิกรูปหรือปุ่ม 3D เพื่อหมุนดูโมเดล 3D แบบเต็มตัว 360 องศา สลับแขน Steve/Alex และทดสอบท่าเดิน/วิ่งก่อนส่งออก
   - นำเข้าไฟล์ `.mcpack` หรือ `.zip` เดิมเข้ามาแก้ไข เปลี่ยนชื่อ และจัดเรียงสกินใหม่ได้ทันที

4. **📖 คู่มือและการใช้งาน (Interactive Guide)**:
   - แยกหมวดหมู่ 3 แท็บ: **วิธีติดตั้ง** (ขั้นตอนกระชับ 2 สเต็ป), **สกินตรงปก** (Do & Don't เปรียบเทียบภาพที่แนะนำและควรเลี่ยง), และ **ประวัติอัปเดต** (ไทม์ไลน์เวอร์ชันคลีนตา)

---

## 🛡️ จุดเด่นด้านสถาปัตยกรรม (Architecture Highlights)

- **Pure Client-Side 100%**: ปลอดภัย ไร้เซิร์ฟเวอร์ ไม่ส่งภาพสกินหรือโค้ดออกภายนอก จัดการไฟล์ ZIP ผ่าน `JSZip` ในหน่วยความจำทั้งหมด
- **Smart Alpha Inferrer & Outer Layer Masking**: ปลดล็อกแก้ปัญหาสกินไม่ตรงปกจากไฟล์ JPG หรือภาพแคปจอ โดยลบเฉพาะกล่องดำของเลเยอร์นอก (Hat, Jacket, Sleeves, Pants) ให้โปร่งใส และคงเลเยอร์ในไว้ครบถ้วน 100%
- **Dominant Cluster Sampling**: ตรวจจับสีพื้นหลังแบบกลุ่มสีหลัก ทนทานต่อภาพแฟนอาร์ตที่มีแสงเงา แสงนีออน หรือ Noise จากการบีบอัดภาพ
- **Universal Auto-Resampler**: ปรับขนาดสกินสี่เหลี่ยมจัตุรัสอิสระ (เช่น 1452x1452, 1254x1254, 800x800) ลงสู่ 64x64 มาตรฐาน Bedrock อัตโนมัติ
- **Full PWA Offline Support**: ติดตั้งเป็นแอปบนหน้าจอโฮมมือถือได้ทันที พร้อม Service Worker แคชไฟล์ในเครื่อง เปิดใช้งานได้แม้อยู่ในโหมดไม่มีเน็ต
- **SafeZip Protection**: ตรวจจับและบล็อกช่องโหว่ Zip Bomb และ Path Traversal (`../`)
- **3D Preview Engine**: เรนเดอร์โมเดล 3D แบบเรียลไทม์ด้วย `skinview3d` (Steve/Alex, Walk/Run/Idle) พร้อมระบบหยุดเรนเดอร์เมื่อเลื่อนพ้นจอเพื่อประหยัดแบตเตอรี่
- **Authentic Minecraft UI & Sound**: สไตล์ Minecraft UI (Deepslate, Beveled Buttons, Hotbar Mobile Dock, Silkscreen Typography) และเสียง SFX สังเคราะห์ผ่าน Web Audio API
- **Universal Input**: ลากวางไฟล์บนจอได้ทุกที่ (Global Drag & Drop) และกด **Ctrl + V** เพื่อแปะภาพจาก Clipboard ได้ทันที

---

## 📁 โครงสร้างไฟล์ในโปรเจกต์ (Clean Modular Layout)

```
MCPE-WEBSKIN/
├── public/
│   ├── manifest.webmanifest  # PWA Web App Manifest
│   ├── sw.js                 # PWA Service Worker (Offline Cache-First)
│   ├── templates/            # แม่แบบ Minecraft Bedrock Addon (BP/RP)
│   └── favicon.ico           # ไอคอนเว็บ
├── src/
│   ├── core/                 # Headless Core Engine (Pure In-Memory, Zero DOM)
│   │   ├── addon/            # ตัวสร้างแอดออนสกินสวมใส่ 1.21.10+
│   │   ├── wardrobe/         # ตัวสร้างและแยกแพ็กเกจสกินแพ็ก (.mcpack)
│   │   ├── skin/             # UV Coordinates, Smart Alpha Inferrer, Resampler
│   │   ├── validator/        # ตรวจสอบ Manifest, UUID, Textures
│   │   ├── security/         # ระบบป้องกัน Zip Bomb & Traversal (SafeZip)
│   │   └── errors/           # ระบบ Error รวมศูนย์มาตรฐาน
│   ├── modules/              # UI Controllers
│   │   ├── hidepart.js       # ตัวควบคุมหน้าสกินล่องหน + 3D Canvas
│   │   ├── standalone.js     # ตัวควบคุมหน้าแอดออนสกิน + Live Slot Icon Preview
│   │   ├── wardrobe.js       # ตัวควบคุมหน้าสกินแพ็ก + 3D Live Inspect Modal
│   │   ├── zip.js            # ตัวแตกและอ่านไฟล์ ZIP/MCPACK/MCADDON
│   │   ├── sfx.js            # ระบบเสียงสังเคราะห์ Minecraft (Web Audio API)
│   │   ├── mcfire.js         # สะเก็ดไฟละอองพิกเซล Minecraft
│   │   └── utils.js          # ฟังก์ชันช่วย (UUID, Toast, Resolution, Resampling)
│   ├── styles/               # Modular CSS Design System (Minecraft Theme)
│   ├── types/                # TypeScript Type Definitions
│   ├── main.js               # Router, Drag&Drop, Paste, PWA Lifecycle
│   └── style.css             # Main CSS Master Importer
├── tests/                    # Vitest Automated Test Suite (36 Tests / 8 Suites)
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

- **Branch `main`**: ซอร์สโค้ดหลักของโปรเจกต์ (Deploy อัตโนมัติบน Vercel)
- **Branch `gh-pages`**: ถูกบิลด์และ Deploy ขึ้น GitHub Pages อัตโนมัติผ่าน GitHub Actions (`.github/workflows/deploy.yml`)
- ส่งโค้ดขึ้น GitHub:
  ```bash
  git add .
  git commit -m "feat: your update message"
  git push origin main
  ```

---

## 📄 ลิขสิทธิ์และผู้พัฒนา
พัฒนาและออกแบบโดย **ZirconX** ([www.zirconx.xyz](https://www.zirconx.xyz))
