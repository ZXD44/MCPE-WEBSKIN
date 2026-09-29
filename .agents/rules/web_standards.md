# 🌐 มาตรฐานการพัฒนาเว็บแอปพลิเคชัน (MCPE-WEBSKIN Web Standards)

> เอกสารกำหนดมาตรฐานการออกแบบ UI, UX, สถาปัตยกรรม Client-Side, เอนจิน 3D และ Web Audio สำหรับเว็บแอปพลิเคชัน ZirconX Skin Project

---

## 1. 🛡️ สถาปัตยกรรม Client-Side 100% (Zero Server Overhead)
- **ห้ามส่งไฟล์สกินหรือข้อมูลขึ้นเซิร์ฟเวอร์**: การประมวลผลทั้งหมดต้องทำบนเบราว์เซอร์ของผู้ใช้ (In-Memory Processing) ผ่าน HTML5 Canvas API, WebGL, และ `JSZip`
- **Privacy First**: ข้อมูลสกิน รูปลักษณ์ และการปรับแต่งทั้งหมดเป็นความลับของผู้ใช้ ไม่มีการเก็บ Log หรือ Cache ภายนอก
- **รองรับ Offline / PWA-Ready**: โค้ดทุกโมดูลต้องสามารถทำงานได้โดยไม่ต้องพึ่งพา Backend API หรือ Database ภายนอก

---

## 2. 🎨 ดีไซน์และธีม (Dragon Crimson Theme & Aesthetics)
- **Palette หลัก**:
  - สีพื้นหลังหลัก: Dark Slate / Deep Black (`#0a0d14`, `#10141e`)
  - สี Accent & Neon: Crimson Dragon Red (`#ff3355`, `#e61e43`), Flame Amber (`#ff9f1c`), Emerald Green (`#2ec4b6`)
  - การ์ดและคอนเทนเนอร์: Glassmorphism กึ่งโปร่งแสง พร้อมเส้นขอบคมชัดบาง 1px (`rgba(255, 255, 255, 0.08)`)
- **Typography**:
  - ใช้ฟอนต์มาตรฐานที่ทันสมัย คมชัด โหลดเร็ว (เช่น Prompt, Kanit, Inter)
  - ไม่ใช้ฟอนต์เบราว์เซอร์ดั้งเดิมที่ไม่เข้ากับธีมเกม
- **Micro-Animations & Visual Polish**:
  - ปุ่มกดและแท็บต้องมี Hover Effect และ Active Feedback ชัดเจน
  - มีอนุภาคสะเก็ดไฟ Minecraft Motes (`mcfire.js`) ลอยอย่างเป็นธรรมชาติบนปุ่มแบรนด์
  - จอโหลดเริ่มต้นและรีเฟรช (Dragon Crimson Loader) ต้องแสดงผลทันทีและหายไปอย่างนุ่มนวล (Fade-out 450ms) ป้องกันอาการกระพริบ FOUC

---

## 3. 🧊 Interactive 3D Skin Viewer (`skinview3d`)
- **การจัดการ Canvas**:
  - ต้องผูกกับขนาด Container แบบ Dynamic Resize เมื่อสลับแท็บหรือปรับขนาดหน้าจอ
  - รองรับการสลับโมเดล `Steve` (default, แขน 4px) และ `Alex` (slim, แขน 3px)
  - รองรับอนิเมชัน: เดิน (Walk speed 0.6), วิ่ง (Run speed 0.8), และหยุดนิ่ง (Idle)
- **Transparent Rendering**:
  - เมื่อมีการซ่อนชิ้นส่วนสกิน ต้องแปลง Canvas ที่ลบชิ้นส่วนเป็น Blob URL สด และส่งเข้า `viewer.loadSkin()` ทันทีเพื่อแสดงความโปร่งใสแบบ Real-time
- **Battery & Performance Optimization**:
  - ต้องมี `IntersectionObserver` คอยหยุด Loop เรนเดอร์เมื่อ Canvas เลื่อนหลุดจากหน้าจอ ช่วยประหยัดแบตเตอรี่และลดความร้อนบนมือถือ

---

## 4. 🎧 เอนจินเสียงสังเคราะห์ (Minecraft Synthesized Web Audio API)
- **Zero External Assets**: ห้ามดาวน์โหลดไฟล์เสียง `.mp3` หรือ `.ogg` ภายนอก เพื่อลดขนาดเว็บและป้องกันปัญหา 404
- **เสียงที่รองรับ**:
  - `UI Click`: คลื่น Triangle Wave กวาดความถี่สูงลงต่ำ
  - `Item Pop / Equip`: คลื่น Sine Wave กวาดความถี่ขึ้น
  - `Level Up / Addon Ready`: ฮาร์มอนิก 4 โน้ต (C5, E5, G5, C6) กังวาน
- **การควบคุมเสียง**:
  - ต้องมีสวิตช์ Toggle ปิด/เปิดเสียงที่ Header และบันทึกสถานะลง `localStorage('mc_sfx_muted')`

---

## 5. ⌨️ มาตรฐาน UX และการป้อนข้อมูล (Input UX)
- **Universal Input**:
  - แตะปุ่มเลือกไฟล์ปกติ
  - ลากและวางไฟล์ลงพื้นที่เฉพาะ หรือโยนลงบนหน้าต่างเบราว์เซอร์ได้ทุกจุด (Global Drag & Drop)
  - คีย์ลัด **Ctrl + V**: วางภาพสกินจาก Clipboard ได้ทันที
- **Archive Auto-Detection**:
  - เมื่อโยนไฟล์ `.zip`, `.mcpack`, `.mcaddon` ระบบต้องคลายไฟล์ในหน่วยความจำและสแกนหาภาพสกินและอ่านชื่อจาก `manifest.json` มากรอกให้อัตโนมัติ
- **Toast Notifications**:
  - ทุกการกระทำสำคัญ (โหลดสกินสำเร็จ, บันทึกสำเร็จ, เกิดข้อผิดพลาด) ต้องแจ้งเตือนผ่าน Toast ลอยด้านล่างหน้าจอ พร้อมไอคอนและสีที่สื่อความหมายชัดเจน
