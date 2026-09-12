# 🎨 MCPE Skin Studio (ZirconX-SKIN)

> **เว็บแอปพลิเคชันเครื่องมือสร้างและจัดการสกิน Minecraft Bedrock Edition ครบวงจร**  
> ใช้งานง่ายบนมือถือ (Mobile-First) พรีวิว 3 มิติแบบเรียลไทม์ และส่งออกเป็นไฟล์ `.mcaddon` นำเข้าเกมได้ทันที

🔗 **เข้าใช้งานออนไลน์ได้ที่**: [https://zxd44.github.io/MCPE-WEBSKIN/](https://zxd44.github.io/MCPE-WEBSKIN/)

---

## 🌟 ฟีเจอร์เด่น (Key Features)

### 1. 🎭 ทำสกินล่องหน (Hide Part Editor)
- **ลบส่วนของสกินตามต้องการ**: เลือกซ่อนหรือแสดงผลส่วนหัว, ลำตัว, แขน, หรือขา (คำนวณครอบคลุมทั้ง Inner Layer และ Outer Layer/Hat/Jacket)
- **1-Tap Quick Presets**: มีปุ่มพรีเซ็ตด่วนแตะครั้งเดียว เช่น `เหลือแค่หัว`, `เหลือแค่ตัว`, `ซ่อนหัว`, `ซ่อนตัว`, `ซ่อนแขน`, `ซ่อนขา`
- **Interactive 3D Preview**: แสดงผลตัวละคร 3 มิติขยับได้ หมุนได้ 360 องศา ผ่าน WebGL Three.js (`skinview3d`)
- **Pixel-Perfect Auto Resizer**: รองรับขนาดสกินตั้งแต่ 64x64 จนถึง 4096px และลดขนาดเป็น 128x128 ด้วย Nearest-Neighbor เพื่อรักษาความคมชัดระดับพิกเซล

### 2. 🦺 แอดออนสกินแบบไอเทม (Standalone Addon Generator)
- **แปลงสกินเป็นชุดเกราะไอเทม**: สวมใส่ในช่องกางเกง (`slot.armor.legs`) เพื่อเปลี่ยนโมเดลตัวละครได้ทันทีในเกม
- **ซ่อนไอเทมในมือ (In-Hand Scale Trick)**: ปรับสเกลขณะถือในมือเป็น `1e-5` ทำให้มองไม่เห็นไอเทมลอยในมือ
- **Smart Autofill**: ดึงชื่อไฟล์สกินมาตั้งเป็นชื่อแอดออนและชื่อไอเทมในเกมให้อัตโนมัติ
- **Auto Icon Generator**: ครอปใบหน้าตัวละครจากสกินมาทำเป็นไอคอน 16x16 พิกเซลให้อัตโนมัติทันที
- **รองรับโมเดล 3 รูปแบบ**:
  - Steve (Classic แขนใหญ่: `geometry.humanoid.custom`)
  - Alex (Slim แขนเล็ก: `geometry.humanoid.customSlim`)
  - Custom Blockbench Geometry (`minecraft:geometry` JSON)

### 3. 🚪 ระบบตู้เสื้อผ้าเซิร์ฟเวอร์ (Wardrobe Multi-Skin Addon)
- **ปลดล็อกใช้งานฟรี 100%**: ไม่มีระบบล็อกรหัสผ่าน Hash SHA-256
- **Batch Upload**: เลือกและอัพโหลดไฟล์สกินพร้อมกันหลายไฟล์ในครั้งเดียว ระบบจะดึงชื่อไฟล์มาตั้งเป็นชื่อชุดให้อัตโนมัติ
- **Xbox Gamertags Access Control**: กำหนดรายชื่อผู้เล่นที่มีสิทธิ์เปิดแต่ละตู้ได้ ด้วยระบบใส่ชื่อแบบ Chips (พิมพ์ชื่อแล้วกด Enter หรือเครื่องหมายจุลภาค)
- **Two-Way .mcaddon Compatibility**:
  - **นำเข้า (Import)**: นำไฟล์ `.mcaddon` เดิมมาเปิดบนเว็บเพื่อแก้ไขตู้และชุดต่อได้ตลอดเวลา
  - **ส่งออก (Export)**: สร้างแพ็กเกจ `.mcaddon` ที่มีสคริปต์ Bedrock Script API (`@minecraft/server 2.1.0` และ `@minecraft/server-ui 2.0.0`) และ Render Controllers สมบูรณ์แบบ

---

## 📱 ออกแบบมาเพื่อมือถือ (Mobile-First UX)

- **Mobile Bottom Navigation Bar**: แถบนำทางด้านล่างสลับหน้าง่ายด้วยนิ้วโป้งมือเดียว
- **Touch-Friendly Targets**: ปุ่มกดและช่องกรอกทั้งหมดมีขนาดไม่ต่ำกว่า 44px ตามมาตรฐาน Touch Guidelines
- **Responsive 3D Canvas**: หมุนและซูมดูโมเดล 3D บนหน้าจอมือถือได้อย่างลื่นไหล

---

## 🎮 วิธีนำเข้าสู่เกม Minecraft Bedrock

1. ดาวน์โหลดไฟล์ `.mcaddon` จากบนเว็บ
2. **บนโทรศัพท์มือถือ (iOS / Android)**:
   - แตะเปิดไฟล์ `.mcaddon` แล้วเลือกเปิดด้วย **Minecraft** ตัวเกมจะ Import ทั้ง Resource Pack และ Behavior Pack ให้อัตโนมัติ
3. **บนคอมพิวเตอร์ (Windows 10/11)**:
   - ดับเบิ้ลคลิกที่ไฟล์ `.mcaddon`
4. **เปิดใช้งานในโลก (World Settings)**:
   - เข้าไปที่ **Resource Packs** ➔ Active แอดออน
   - เข้าไปที่ **Behavior Packs** ➔ Active แอดออน
   - ในหัวข้อ **Experiments** ➔ เปิดใช้งาน **Beta APIs** (จำเป็นสำหรับระบบตู้เสื้อผ้า)

---

## 💻 วิธีรันโปรเจกต์บนเครื่องของคุณ (Local Development)

### ข้อกำหนด:
- Node.js (v18 ขึ้นไป)
- npm

### ขั้นตอน:
```bash
# 1. ติดตั้ง Dependencies
npm install

# 2. รันเซิร์ฟเวอร์ทดสอบ
npm run dev

# 3. สั่ง Build สำหรับ Production
npm run build
```

---

## 📁 โครงสร้างโปรเจกต์ (Project Structure)

```
MCPE-WEBSKIN/
├── .github/workflows/deploy.yml # GitHub Actions อัปเดต GitHub Pages อัตโนมัติ
├── public/
│   └── templates/               # ไฟล์ต้นฉบับ Minecraft Bedrock Addon (BP/RP/Textures)
├── src/
│   ├── modules/
│   │   ├── hidepart.js          # ระบบสกินล่องหน + UV Canvas + 3D Viewer
│   │   ├── standalone.js        # ตัวสร้างแอดออนสกินไอเทมเดี่ยว
│   │   ├── multieditor.js       # ระบบตู้เสื้อผ้าเซิร์ฟเวอร์ + Script API
│   │   └── utils.js             # ฟังก์ชันช่วย (UUID, Toast, Scale)
│   ├── main.js                  # ตัวควบคุม Router และสลับแท็บ
│   └── style.css                # ดีไซน์ระบบแบบ Mobile-First
├── index.html                   # โครงสร้างหน้าเว็บทั้งหมด
├── vite.config.js               # การตั้งค่า Vite Base สำหรับ GitHub Pages
├── package.json
└── README.md
```

---

## 📄 ลิขสิทธิ์และการพัฒนา
พัฒนาขึ้นเพื่อคอมมูนิตี้ Minecraft Bedrock สำหรับเซิร์ฟเวอร์ Roleplay และผู้เล่นทั่วไป
