# 🎨 Workspace Rules for ZirconX Skin Project (MCPE-WEBSKIN)

> ระบบและกฎการพัฒนาเว็บแอปพลิเคชันเครื่องมือสร้างและจัดการสกิน Minecraft Bedrock Edition (ZirconX Skin Project)

---

## 📂 สารบัญเอกสารและกฎในโปรเจกต์:
- **สถาปัตยกรรมระบบฉบับสมบูรณ์**: [skin_studio_system.md](skin_studio_system.md)
- **มาตรฐานเว็บและ UI/UX**: [web_standards.md](rules/web_standards.md)
- **กฎการสร้างแอดออน Bedrock**: [addon_generation_rules.md](rules/addon_generation_rules.md)
- **โหมดกระชับรวดเร็ว (Caveman Mode)**: [caveman.md](rules/caveman.md)

---

## ⚠️ MANDATORY RULES (กฎเหล็กห้ามลืม)

1. **สถาปัตยกรรมประมวลผลบนเบราว์เซอร์ 100% (Pure Client-Side Architecture)**:
   - ห้ามส่งไฟล์ ภาพสกิน หรือโค้ดของผู้ใช้ขึ้น Server หรือภายนอกเด็ดขาด
   - การอ่านไฟล์ บีบอัด สร้าง และแตกไฟล์ `.zip`, `.mcpack`, `.mcaddon` ต้องผ่าน `JSZip` ในหน่วยความจำ (In-Memory)
   - ปลอดภัย เป็นส่วนตัว และไม่ต้องพึ่งพา Backend API

2. **ความถูกต้องของ UV Map และโมเดล 3D (3D & UV Integrity)**:
   - การซ่อนชิ้นส่วนสกินต้องคำนวณและลบทั้ง 2 เลเยอร์เสมอ (Inner Base + Outer Hat/Jacket/Sleeves/Pants)
   - รองรับทั้งสกิน 64x64 และสกิน HD (128px จนถึง 4096px) โดยคำนวณสัดส่วนพิกเซลแบบไดนามิก
   - สกิน 64x32 ต้องแปลงเป็น 64x64 อัตโนมัติ พร้อมกาง UV ซ้าย/ขวา
   - อัปเดต Blob URL สดเข้า `skinview3d` เพื่อแสดงผลโปร่งใสเรียลไทม์ทันที

3. **มาตรฐานแอดออนสกินสวมใส่ (Bedrock 1.21.10+ Standard)**:
   - ใช้ `minecraft:wearable` ตามช่องสวมใส่ (`slot.armor.chest`, `slot.armor.head`, `slot.armor.legs`, `slot.armor.feet`)
   - **ใช้ Custom Render Controller (`controller.render.zirconx_skin`)** แทน `controller.render.armor` เพื่อแก้ปัญหาชิ้นส่วนสกินนอกช่องถูกซ่อน และรองรับวิกผมยาว/ปอยผมพาดตัว
   - `protection: 0`, `max_stack_size: 1`, ไม่มี `minecraft:durability` (Unbreakable)
   - **ห้ามใช้คอมโพเนนต์เก่าที่ Deprecated** เช่น `minecraft:armor` และ `minecraft:render_offsets`
   - ซ่อนโมเดลขณะถือในมือด้วยสเกล `1e-5` ใน attachable
   - เจนไอคอน 16x16 จากใบหน้าตัวละครจริง (Base Face + Outer Hat) พร้อมดึงปอยผม/ลำตัวส่วนบนเมื่อเปิดเรนเดอร์ Torso
   - สร้างไฟล์แปลภาษาครบทั้ง `texts/th_TH.lang`, `texts/en_US.lang` และ `texts/languages.json` ป้องกันรหัสไอดีดิบแสดงบนจอ

4. **มาตรฐานตู้เสื้อผ้า / สกินแพ็ก (Bedrock Skin Pack .mcpack Standard)**:
   - ระบบตู้เสื้อผ้าต้องสร้างเป็น **Official Bedrock Skin Pack (`.mcpack`)** สำหรับนำเข้าสู่ **ห้องแต่งตัว (Dressing Room / Classic Skins)** ของเกมโดยตรง
   - ห้ามใช้ Script API หรือ Behavior Pack สิ้นเปลืองกับตู้เสื้อผ้า
   - โครงสร้างต้องประกอบด้วย `manifest.json` (โมดูล `type: "skin_pack"`), `skins.json` ที่แมปโมเดล Steve (`geometry.humanoid.custom` แขน 4px) หรือ Alex (`geometry.humanoid.customSlim` แขน 3px), ไฟล์แปลภาษา `texts/*.lang` และรูปภาพสกินนามสกุล `.png`
   - รองรับการนำเข้าไฟล์ `.mcpack` หรือ `.zip` เดิมเข้ามาแก้ไขรายชื่อและเปลี่ยนโมเดลได้ทันที

5. **การรองรับภาพและระบบ Auto-Resampling (Image Handling & Robustness)**:
   - รองรับไฟล์ภาพทั้ง `.png`, `.jpg`, `.jpeg` และไฟล์ Archive `.zip`/`.mcpack`/`.mcaddon`
   - ไฟล์ภาพ JPG หรือไฟล์ใดๆ ที่รับเข้ามา **ต้องแปลงเป็น PNG Blob (`image/png`) ผ่าน Canvas ก่อนนำไปแพ็กเป็นไฟล์แอดออน/สกินแพ็กเสมอ** ห้ามบันทึกข้อมูลไบนารี JPEG ลงในชื่อไฟล์ `.png`
   - **ระบบ Auto-Resampling**: สกินรูปสี่เหลี่ยมจัตุรัสที่มีขนาดพิกเซลอิสระจากการเรนเดอร์หรือแคปจอ (เช่น 1452x1452, 1254x1254, 800x800) ต้องถูกย่อและแมป UV ลงสู่ 64x64 มาตรฐาน Minecraft Bedrock อัตโนมัติ โดยไม่ปฏิเสธไฟล์
   - **แจ้งเตือนเสมอ (No Silent Failures)**: ห้ามกลืน Error เงียบๆ หรือใส่แค่ `console.warn` ทุกกรณีที่เกิด Error หรือมีการปรับขนาด ต้องแสดง Toast แจ้งเตือนผู้ใช้บนหน้าจอทันที

6. **ความปลอดภัยของไฟล์และนามสกุลดาวน์โหลด (Security & File Cleanliness)**:
   - ตรวจจับและบล็อกช่องโหว่ Zip Slip / Path Traversal (`../`) ใน [`safeZip.js`](../src/core/security/safeZip.js)
   - ป้องกันเบราว์เซอร์ Chromium / Android เติมนามสกุล `.zip` ต่อท้ายไฟล์ โดยบังคับ MIME Type เป็น `application/octet-stream` และตัดนามสกุลซ้ำซ้อนทิ้ง
   - ป้องกัน Vercel Preview Build Error บนกิ่ง `gh-pages` ด้วยการใส่ `public/vercel.json` (`ignoreCommand: exit 0`) เพื่อให้ Vercel ข้ามการ Build กิ่งสำเร็จรูป

7. **เสียงและแอนิเมชันสังเคราะห์ในตัว (Zero-Dependency Audio & FX)**:
   - เสียงเอฟเฟกต์ทั้งหมด (Click, Pop, LevelUp) ต้องสังเคราะห์ผ่าน Web Audio API (`sfx.js`) ห้ามโหลดไฟล์เสียง `.mp3` / `.ogg` จากภายนอก
   - ปุ่มเปิด/ปิดเสียงต้องจำสถานะผ่าน `localStorage`
   - จอโหลด (Dragon Crimson Loader) ต้องทำงานทันทีตอนโหลดและรีเฟรชหน้า ป้องกันภาพกระพริบ FOUC

8. **Universal Input & UX**:
   - รองรับการลากวางไฟล์ทุกที่บนหน้าเว็บ (Global Drag & Drop)
   - รองรับคีย์ลัด **Ctrl + V** เพื่อแปะภาพจาก Clipboard ทันที
   - ตรวจจับไฟล์ `.zip`, `.mcpack`, `.mcaddon` อัตโนมัติ พร้อมอ่านชื่อจาก `manifest.json`

---

## 📝 บันทึกประวัติการปรับปรุงระบบ (Update Logs & Changelog)

### v1.2.0 (ล่าสุด - 29 กันยายน 2026)
- **Universal Auto-Resampler**: ปลดล็อกให้รองรับภาพสกินที่มีขนาดพิกเซลอิสระ เช่น `1452x1452`, `1254x1254`, `800x800` โดยย่อและแมปลงเป็น 64x64 มาตรฐาน Bedrock อัตโนมัติ
- **Full JPG/JPEG Conversion**: รองรับภาพ `.jpg` และแปลงเป็น `.png` แท้ 100% ผ่าน Offscreen Canvas ก่อนบรรจุลงใน `.mcpack` และ `.mcaddon`
- **Comprehensive Toast Feedback**: แก้ไขระบบแจ้งเตือนตู้เสื้อผ้าให้แสดง Toast ทั้งกรณีปรับขนาดสำเร็จและแจ้งเตือน Error ทันที (ไม่เกิดอาการอัปโหลดแล้วเงียบอีกต่อไป)
- **Official Skin Pack (.mcpack)**: ยกเครื่องระบบตู้เสื้อผ้าจาก Script API มาเป็น Bedrock Skin Pack มาตรฐาน นำเข้าห้องแต่งตัว Dressing Room โดยตรง
- **Clean Extension**: แก้ปัญหาดาวน์โหลดไฟล์แล้วติดนามสกุล `.zip` พ่วงท้าย (`.mcaddon.zip` / `.mcpack.zip`) ด้วย MIME `application/octet-stream`
- **Vercel CI/CD Fix**: ป้องกัน Build Error บนกิ่ง `gh-pages` ด้วย `ignoreCommand: exit 0` และรองรับทั้ง Vercel (Root) และ GitHub Pages

### v1.1.0
- สถาปัตยกรรม Client-Side 100% ผ่าน JSZip In-Memory ไร้ Backend
- สลับโมเดล Steve (แขน 4px) และ Alex (แขน 3px) แบบเรียลไทม์
- Custom Render Controller (`controller.render.zirconx_skin`) สำหรับ Bedrock 1.21.10+
- Web Audio API Sound Effects ในตัว ไม่โหลดไฟล์เสียงภายนอก

### v1.0.0
- เปิดตัว ZirconX Studio เครื่องมือสร้างสกินล่องหน และสกินไอเทมสวมใส่

---

## 💡 กลยุทธ์และสถาปัตยกรรมการแก้ปัญหาสกินไม่ตรงปก (Skin Integrity & Restoration Strategies)

### 1. ปัญหาพื้นหลังทึบของเลเยอร์นอก (Solid Black/White Overlay Glitch จากไฟล์ JPG):
- **สาเหตุ**: ไฟล์ JPG ไม่มี Alpha Channel พื้นที่ว่างรอบสกินจึงกลายเป็นสีดำ `#000000` ส่งผลให้เลเยอร์นอก (หมวก, เสื้อ, กางเกง) กลายเป็นกล่องทึบครอบตัวละคร 360 องศา บังหน้าตาและเสื้อผ้าจริง
- **โซลูชัน (Smart Alpha Inferrer)**:
  - สุ่มตรวจพิกเซลที่ตำแหน่งว่างแน่นอนของ Minecraft เช่น มุม `(0, 0)` หรือ `(32, 0)` หากพบว่าเป็นสีทึบสม่ำเสมอ
  - ทำ Alpha Masking เฉพาะใน **พื้นที่เลเยอร์นอก (Outer Overlay Rectangles)** โดยเปลี่ยนสีพื้นหลังนั้นให้โปร่งใส (`alpha = 0`) โดยไม่กระทบเลเยอร์ใน เพื่อให้สกินกลับมาแสดงผลปกติ

### 2. ปัญหาตำแหน่ง UV เคลื่อนจากการครอบตัดหรือแคปจอ (Scale & Grid Misalignment):
- **สาเหตุ**: ผู้ใช้นำภาพสกินที่แคปจอมาจากโซเชียลซึ่งมีขอบ Padding ส่วนเกิน หรือถูกครอปตำแหน่งทำให้พิกเซลไม่ตรงเส้นกริด 64x64
- **โซลูชัน (Auto-Anchor & Trimming)**:
  - สแกนหา Bounding Box ของเทมเพลตสกิน ตัดขอบดำ/ขอบขาวรอบนอกทิ้งก่อนย่อลง 64x64
  - รองรับระบบ Manual UV Calibration สำหรับขยับ Offset เล็กน้อยในหน้าพรีวิว

### 3. ปัญหาภาพวาดแฟนอาร์ต/วอลเปเปอร์ (Fanart Wallpaper Misuse):
- **สาเหตุ**: ภาพมีตัวหนังสือ โซ่ แสงนีออน หรือภาพฉากหลังวาดทับเทมเพลต (เช่น ภาพ `s2.png`) ซึ่งไม่ใช่สกินจริง
- **โซลูชัน (Heuristic Skin Validator)**:
  - คำนวณ Skin Health Score หากพบสัญญาณรบกวนในพื้นที่ที่ไม่ควรมีพิกเซลเกินเกณฑ์ ให้ขึ้นข้อความแนะนำให้ดาวน์โหลดสกินต้นฉบับที่เป็น PNG โปร่งใสจากเว็บสกินมาตรฐาน (NameMC / Skindex)

---

## 🪨 Global Efficiency Rule
- **Caveman Mode (Always-On)**: ดูรายละเอียดที่ [caveman.md](rules/caveman.md)

