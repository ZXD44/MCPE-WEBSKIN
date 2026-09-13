# 🚀 คู่มือการใช้งาน Git & การเผยแพร่เว็บ (Git & Deployment Guide)

> **คู่มือฉบับสมบูรณ์สำหรับ ZirconX Skin Project (MCPE-WEBSKIN)**  
> ครอบคลุมคำสั่ง Git ที่จำเป็น, ความปลอดภัยของไฟล์ความลับ/ข้อมูลลูกค้า, การทำงานร่วมกับ GitHub Actions (CI/CD), และขั้นตอนการแก้ปัญหา (Troubleshooting & Rollback)

---

## 📌 1. ภาพรวมสถาปัตยกรรม Git & การเชื่อมต่อ (Architecture Overview)

โปรเจกต์นี้ใช้โครงสร้าง Git Branching ร่วมกับ GitHub Actions เพื่อ Deploy ขึ้น **GitHub Pages** อัตโนมัติ:

```
[ โค้ดบนเครื่อง Local ]
       │
       ▼ (git commit & git push)
[ GitHub Repository: main ]  (https://github.com/ZXD44/MCPE-WEBSKIN.git)
       │
       ▼ (GitHub Actions Workflow: .github/workflows/deploy.yml)
   npm ci ➔ npm run build ➔ peaceiris/actions-gh-pages
       │
       ▼
[ GitHub Pages: gh-pages ]
       │
       ▼
🌐 เว็บไซต์สด: https://zxd44.github.io/MCPE-WEBSKIN/
```

- **Branch หลัก (`main`)**: บรรจุซอร์สโค้ดของเว็บ (Vite + Vanilla JS + Assets + Documentation)
- **Branch แสดงผล (`gh-pages`)**: บรรจุไฟล์ผลลัพธ์ที่ Build แล้ว (`dist/`) ถูกสร้างและอัปเดตอัตโนมัติโดย GitHub Actions Bot
- **การตั้งค่า Base URL**: ใน [vite.config.js](file:///c:/Users/ZirconX/Documents/MCPE-WEBSKIN/vite.config.js) กำหนด `base: '/MCPE-WEBSKIN/'` เสมอ เพื่อให้ Asset Path บน GitHub Pages ถูกต้อง

---

## 🛡️ 2. กฎเหล็กความปลอดภัยและการป้องกันข้อมูลหลุด (.gitignore)

ไฟล์ [.gitignore](file:///c:/Users/ZirconX/Documents/MCPE-WEBSKIN/.gitignore) ถูกตั้งค่าเพื่อป้องกันไม่ให้ไฟล์ชั่วคราว, ไดเรกทอรีทดสอบ, หรือไฟล์ตัวอย่างสกินของลูกค้าหลุดขึ้นสู่ระบบสาธารณะ:

```gitignore
# Dependencies & Build Output
node_modules/
dist/

# System & OS Files
.DS_Store
*.local
.env

# Agent System Rules & Memory (Internal Only)
.agents/

# Customer Reference Addons & Samples (Strictly Confidential)
customer_samples/
```

> [!CAUTION]
> **ห้ามลบ `customer_samples/` หรือ `.agents/` ออกจาก `.gitignore` เด็ดขาด**  
> ก่อนการรันคำสั่ง `git add .` หรือ `git push` ให้รันคำสั่ง `git status` เสมอ เพื่อยืนยันว่าไม่มีไฟล์แปลกปลอมหรือโฟลเดอร์ที่เป็นความลับติดเข้าไปใน Staging Area

---

## 💻 3. ขั้นตอนการพัฒนาและการอัปเดตงาน (Daily Workflow)

### ขั้นตอนที่ 1: ตรวจสอบสถานะไฟล์ก่อนเริ่มงาน
```bash
# ตรวจสอบว่าอยู่บน branch main และไม่มีการค้างไฟล์
git status

# ดึงโค้ดล่าสุดจาก GitHub (ถ้ามีการแก้จากเครื่องอื่น)
git pull origin main
```

### ขั้นตอนที่ 2: ทดสอบรันและบิลด์ในเครื่อง (Local Testing)
```bash
# 1. ติดตั้ง Dependencies (ถ้ามีการเพิ่มแพ็กเกจใหม่)
npm install

# 2. รัน Local Development Server
npm run dev
# เปิดเบราว์เซอร์ที่ http://localhost:5173/ เพื่อทดสอบ

# 3. ตรวจสอบการ Build ก่อนส่งขึ้น GitHub เสมอ
npm run build
# ต้องขึ้น "✓ built in ...ms" โดยไม่มี Error
```

### ขั้นตอนที่ 3: สเตจไฟล์และเขียน Commit Message ที่มีคุณภาพ
```bash
# ตรวจสอบความเปลี่ยนแปลง
git diff

# สเตจไฟล์เฉพาะที่ต้องการ (หรือสเตจทั้งหมดที่ผ่านการคัดกรอง)
git add .

# บันทึกประวัติการแก้ไขตามมาตรฐาน Conventional Commits
# รูปแบบ: <type>: <รายละเอียดสั้นๆ>
# เช่น:
#   feat: เพิ่มระบบ slot.armor.feet และ custom render controller
#   fix: แก้บัคแขนขากลับด้านตอนแปลง 64x32 to 64x64
#   docs: อัปเดตคู่มือ git และเอกสารระบบ
#   style: ปรับแต่งธีม Dragon Crimson
git commit -m "feat: your commit message"
```

### ขั้นตอนที่ 4: พุชโค้ดขึ้น GitHub เพื่อ Deploy
```bash
# ส่งโค้ดขึ้น branch main
git push origin main
```

เมื่อ Push สำเร็จ GitHub Actions จะเริ่มทำงานทันทีโดยใช้เวลาประมาณ 40–60 วินาที เว็บไซต์จะอัปเดตเวอร์ชันใหม่โดยอัตโนมัติ

---

## ⚙️ 4. ตรวจสอบสถานะการ Deploy (GitHub Actions)

1. เข้าไปที่คลังโค้ดของคุณ: [ZXD44/MCPE-WEBSKIN](https://github.com/ZXD44/MCPE-WEBSKIN)
2. คลิกที่แท็บ **Actions** ด้านบน
3. คุณจะเห็นเวิร์กโฟลว์ `Deploy to GitHub Pages`
   - 🟡 **สีเหลือง (In Progress)**: กำลังรันคำสั่ง `npm run build` และเตรียมนำไฟล์ไปลง `gh-pages`
   - 🟢 **สีเขียว (Success)**: นำส่งไฟล์ขึ้นเว็บสำเร็จ สามารถกดเข้าชมเว็บได้ทันที
   - 🔴 **สีแดง (Failed)**: เกิดข้อผิดพลาดในการ Build ให้คลิกเข้าไปดู Log error เช่น ไวยากรณ์ JavaScript ผิดพลาด หรือขาดไฟล์ใน public

---

## 🔧 5. คำสั่ง Git ที่พบบ่อยและการแก้ปัญหา (Troubleshooting & Fixes)

### กรณีที่ 1: เผลอแก้ไขไฟล์ผิด แล้วต้องการยกเลิกการแก้ไขทั้งหมดกลับสู่สภาพเดิม
```bash
# ยกเลิกการแก้ไขของไฟล์ที่ยังไม่ได้ git add
git restore <path/to/file>

# หรือยกเลิกการเปลี่ยนแปลงของทุกไฟล์ในโฟลเดอร์
git restore .
```

### กรณีที่ 2: สเตจไฟล์ไปแล้ว (`git add`) แต่ต้องการเอาออกจาก Staging
```bash
# เอาไฟล์ออกจาก Staging โดยที่โค้ดยังไม่หาย
git restore --staged <path/to/file>

# หรือถอนทุกไฟล์ออกจาก Staging
git restore --staged .
```

### กรณีที่ 3: มีไฟล์ไม่พึงประสงค์หลุดเข้าไปใน Git Tracking
หากพบว่าเผลอ Commit ไฟล์ที่ควรจะ Ignore ไปในอดีต:
```bash
# ลบไฟล์ออกจาก Git Index แต่เก็บไฟล์ไว้ในเครื่องคอมพิวเตอร์
git rm -r --cached customer_samples/

# บันทึก Commit การลบ
git commit -m "fix: untrack confidential customer samples"
git push origin main
```

### กรณีที่ 4: ตรวจสอบประวัติการ Commit ย้อนหลัง
```bash
# ดูกราฟประวัติการแก้ไขแบบย่อ
git log --oneline -n 10 --graph

# ดูรายละเอียดของ commit ล่าสุด
git show
```

### กรณีที่ 5: การย้อนคืนเวอร์ชันฉุกเฉิน (Rollback)
หากเวอร์ชันล่าสุดที่ Push ไปมีบัคร้ายแรงและต้องการย้อนกลับทันที:
```bash
# สร้าง Commit ใหม่ที่ยกเลิกการเปลี่ยนแปลงของ Commit ล่าสุด
git revert HEAD

# ส่งขึ้น GitHub เพื่อให้ GitHub Actions สร้าง Build ก่อนหน้านี้ขึ้นเว็บ
git push origin main
```

---

## 📋 6. สรุป Checklist ก่อน Push ทุกครั้ง
- [ ] รัน `npm run build` ผ่าน 100% (ไม่มี Error สีแดง)
- [ ] รัน `git status` แล้วไม่มีไฟล์ใน `customer_samples/` ติดเข้าไป
- [ ] ข้อความ Commit สื่อความหมายชัดเจน
- [ ] ตรวจสอบแท็บ GitHub Actions หลัง Push ว่าผ่านเป็นสีเขียว
