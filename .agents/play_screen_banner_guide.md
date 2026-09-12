# คู่มือระบบป้ายโฆษณาและแบนเนอร์เซิร์ฟเวอร์ (Play Screen Banner Guide)

คู่มืออธิบายโครงสร้าง สถาปัตยกรรมการทำงาน วิธีการสร้างภาพ การคอมโพสิตข้อความภาษาไทย และขั้นตอนการแก้ไข/เพิ่มป้ายโฆษณาในเซิร์ฟเวอร์ Minecraft Bedrock

---

## 📌 1. ภาพรวมสถาปัตยกรรมระบบ (Architecture Overview)

ระบบแสดงผลป้ายโฆษณาต้อนรับ (Play Screen) เป็นระบบไฮบริดที่ทำงานร่วมกันระหว่าง **Behavior Pack (BP Script)** และ **Resource Pack (RP UI JSON)**:

```
[ผู้เล่นเข้าเกม / AFK 2 นาที]
          │
          ▼
┌──────────────────────────────────────┐
│  playScreen.js (BP Script)           │
│  - สุ่มลำดับแบนเนอร์ (1, 2, 3)       │
│  - แนบ Tag ควบคุม: §banner1, §banner2│
│  - เปิด ModalFormData                 │
└──────────────────┬───────────────────┘
                   │
                   ▼
┌──────────────────────────────────────┐
│  play_screen.json (RP UI Engine)     │
│  - ตรวจจับสตริงใน #title_text         │
│  - Binding เช็คเงื่อนไข Property     │
│  - แสดงภาพ banner_X.png ที่ตรงกัน    │
└──────────────────────────────────────┘
```

---

## 📂 2. โครงสร้างไฟล์ที่เกี่ยวข้อง

| ประเภท | ที่อยู่ไฟล์ (Relative Path) | หน้าที่ |
| :--- | :--- | :--- |
| **BP Script** | `development_behavior_packs/Moblie - BP/scripts/world/playScreen.js` | ควบคุมตรรกะการแสดงผล, สุ่มแบนเนอร์, ตรวจจับ AFK, ข้อความ Title และ Subtitle |
| **RP UI JSON** | `development_resource_packs/Moblie - RP/ui/a30x1_rob/play_screen.json` | วางเลย์เอาต์หน้าจอ คอนเทนเนอร์รูปภาพ (`150px`) และ Data-Binding สลับรูป |
| **RP Textures** | `development_resource_packs/Moblie - RP/textures/ui/play_screen/banner_*.png` | ไฟล์ภาพกราฟิกแบนเนอร์โฆษณา (`banner_1.png`, `banner_2.png`, `banner_3.png`) |
| **RP Manifest** | `development_resource_packs/Moblie - RP/manifest.json` | กำหนด Patch Version ของ RP |
| **World Packs** | `worlds/TEST/world_resource_packs.json` | ซิงก์เวอร์ชัน RP ให้เข้ากับโลกเซิร์ฟเวอร์ |

---

## ⚙️ 3. กลไกการทำงานของ Data-Binding ใน RP UI

ในหน้าฟอร์มปกติของ Bedrock Server Form ไม่สามารถแนบรูปภาพลงใน Header ได้โดยตรง แต่ระบบนี้ใช้เทคนิค **Title String Injection**:

1. **ฝั่ง BP (`playScreen.js`)**:
   ```javascript
   const bannerTag = `§banner${nextIndex + 1}`;
   form.title(`§playScreen${bannerTag}§r${currentBanner.title}`);
   ```
2. **ฝั่ง RP (`play_screen.json`)**:
   ตัว Texture Controller จะตรวจสอบสตริง `#title_text` หากตรวจพบคำว่า `§banner1` จะเปิดการมองเห็น (`#visible: true`):
   ```json
   {
     "banner_image_1": {
       "type": "image",
       "texture": "textures/ui/play_screen/banner_1",
       "size": ["100%", "100%"],
       "bindings": [
         { "binding_name": "#title_text" },
         {
           "binding_type": "view",
           "source_property_name": "(not ((#title_text - '§banner1') = #title_text))",
           "target_property_name": "#visible"
         }
       ]
     }
   }
   ```

---

## 🎨 4. มาตรฐานการสร้างภาพแบนเนอร์ (Graphic & Text Standard)

### 4.1 สเปกของภาพ (Recommended Specs)
- **อัตราส่วน (Aspect Ratio)**: `16:9`
- **ขนาดพิกเซลที่เหมาะสม**: `640 x 360` (หรือ `768 x 432`)
  - *หมายเหตุ*: หน้าต่างคอนเทนเนอร์ในเกมมีความสูง `150px` ขนาด `640x360` ให้ความคมชัดระดับ Retina คมกริบ และลดขนาดไฟล์ลงเหลือเพียง **~500 KB** (จากเดิม 2.7 MB ประหยัดพื้นที่ได้ถึง 80%+)
- **ฟอร์แมต**: `.png` (24-bit / 32-bit RGB)

### 4.2 ทำไมต้องแยกการเจนภาพ 3D และใส่ข้อความภาษาไทย
1. **AI Image Generator**: มีความสามารถสูงในการสร้างภาพพื้นหลัง 3D Minecraft แสงเงาสวยงาม แต่ไม่สามารถเขียนภาษาไทยที่ถูกต้องได้ (ตัวอักษรจะเบี้ยว สระลอย หรือสะกดผิด)
2. **การซ้อนข้อความเวกเตอร์ (Compositing)**: สร้างพื้นหลังด้วย AI แบบ `No text / Clean` แล้วใช้สคริปต์คอมโพสิตตัวหนังสือภาษาไทยด้วย GDI+ / HTML Canvas จะทำให้:
   - ตัวอักษรคมชัด อ่านง่าย ไม่มีสระลอย
   - มีการไล่ระดับเงาดำ (Dark Gradient) ทางซ้าย เพื่อให้ฟอนต์ลอยเด่นชัดเจน
   - มีกล่อง Badge, กล่องราคา (Price Tag) และสัญลักษณ์ไอคอนชัดเจน

---

## 🛠️ 5. ขั้นตอนการทำเจนรูปและใส่ข้อความ (Step-by-Step Guide)

### ขั้นตอนที่ 1: เจนภาพพื้นหลังคลีน (Clean 3D Background)
ใช้คำสั่ง Image Generator ด้วย Prompt ที่ระบุ **ห้ามมีข้อความ** เช่น:
```text
Prompt: Cinematic Minecraft style fantasy promotional banner, 16:9 ratio. A magnificent glowing golden fishing rod hovering horizontally across magical sparkling water. Golden sparkles, light beams, floating gold coins, water splashes. Completely clean, NO TEXT, no words, no letters, high quality Minecraft 3D art.
```

### ขั้นตอนที่ 2: วางข้อความภาษาไทยและลดขนาดไฟล์อัตโนมัติ
สร้างสคริปต์ PowerShell สำหรับเรนเดอร์ภาพ โดยมีตัวอย่างโครงสร้างดังนี้:

```powershell
Add-Type -AssemblyName System.Drawing

$W = 640
$H = 360
$bmp = New-Object System.Drawing.Bitmap $W, $H
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
$g.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::ClearTypeGridFit

# 1. วาดรูปพื้นหลัง
$img = [System.Drawing.Image]::FromFile("path_to_clean_background.jpg")
$g.DrawImage($img, 0, 0, $W, $H)
$img.Dispose()

# 2. ใส่แถบไล่เงาดำซ้าย (Gradient Shadow)
$grad = New-Object System.Drawing.Drawing2D.LinearGradientBrush(
    (New-Object System.Drawing.Point 0, 0),
    (New-Object System.Drawing.Point 440, 0),
    [System.Drawing.Color]::FromArgb(235, 10, 15, 25),
    [System.Drawing.Color]::FromArgb(0, 10, 15, 25)
)
$g.FillRectangle($grad, 0, 0, 440, $H)
$grad.Dispose()

# 3. วาดข้อความและกล่องราคา
$fontTitle = New-Object System.Drawing.Font("Tahoma", [float]22, [System.Drawing.FontStyle]::Bold)
$brushGold = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(255, 255, 215, 0))
$g.DrawString("เบ็ดบ้านรวย", $fontTitle, $brushGold, 24, 54)

# 4. บันทึกเป็น PNG ที่ปลายทาง
$bmp.Save("development_resource_packs/Moblie - RP/textures/ui/play_screen/banner_1.png", [System.Drawing.Imaging.ImageFormat]::Png)
$bmp.Dispose()
$g.Dispose()
```

---

## ✏️ 6. วิธีการแก้ไขข้อความในเกม (Script Modification)

หากต้องการเปลี่ยนข้อความที่แสดงใต้ภาพแบนเนอร์ ให้เปิดไฟล์ `development_behavior_packs/Moblie - BP/scripts/world/playScreen.js` แก้ไขในอาร์เรย์ `banners`:

```javascript
// Multi-banner image list for slideshow / carousel
const banners = [
    { 
        title: "§6เบ็ดบ้านรวย §eระดับเทพ §a[50 บาท]", 
        sub: "§fเบ็ดเทพดึงไวติดคริติคอล ดรอปแรร์ไอเทมพิเศษ §eราคาเพียง 50 บาท!" 
    },
    { 
        title: "§bรับลงสกิน HD §fความละเอียดสูง", 
        sub: "§fสกินสวยคมชัดพรีเมียม §a512x512 §e(20บ.) §8| §a1024x1024 §6(25บ.)" 
    },
    { 
        title: "§dยศโดเนท §6บ้านรวย §eTop 1-3", 
        sub: "§fติดอันดับ 1-3 ผู้สนับสนุนสูงสุดของเซิร์ฟเวอร์ รับยศและชื่อนำหน้าพิเศษ!" 
    }
];
```

---

## ➕ 7. วิธีการเพิ่มแบนเนอร์ใหม่ (Adding a 4th Banner)

1. **เพิ่มภาพ**: สร้างภาพ `banner_4.png` วางในโฟลเดอร์ `development_resource_packs/Moblie - RP/textures/ui/play_screen/`
2. **ลงทะเบียน Texture**: เพิ่ม `"textures/ui/play_screen/banner_4"` ใน `textures_list.json`
3. **เพิ่มใน BP**: เพิ่มรายการที่ 4 ในอาร์เรย์ `banners` ของ `playScreen.js`
4. **เพิ่มใน RP UI**: เพิ่มคอนโทรล `banner_image_4` ใน `play_screen.json`:
   ```json
   {
     "banner_image_4": {
       "type": "image",
       "texture": "textures/ui/play_screen/banner_4",
       "size": ["100%", "100%"],
       "layer": 2,
       "bindings": [
         { "binding_name": "#title_text" },
         {
           "binding_type": "view",
           "source_property_name": "(not ((#title_text - '§banner4') = #title_text))",
           "target_property_name": "#visible"
         }
       ]
     }
   }
   ```
5. **Bump RP Version**: เพิ่มเลข Patch ใน `manifest.json` และซิงก์ `world_resource_packs.json`

---

## ⚠️ 8. กฎเหล็กและการตรวจสอบ (Mandatory Checklist)

- [ ] **ห้ามใช้อีโมจิสีในเกม**: ใน `title` และ `sub` ของ `playScreen.js` ต้องใช้สี `§` รหัสสี Minecraft เท่านั้น ห้ามใส่ Color Unicode Emoji
- [ ] **Bump RP ทุกครั้งที่เปลี่ยน Texture**:
  - อัปเดต Version ใน `development_resource_packs/Moblie - RP/manifest.json`
  - อัปเดต Version ใน `worlds/TEST/world_resource_packs.json` ให้ตรงกัน
- [ ] **ทดสอบ Syntax สคริปต์เสมอ**:
  ```powershell
  node --check "development_behavior_packs/Moblie - BP/scripts/world/playScreen.js"
  ```
