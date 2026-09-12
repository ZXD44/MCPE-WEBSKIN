# 👑 ระบบยศ แชต และป้ายชื่อ (Chat Rank & NameTag System)

เอกสารฉบับสมบูรณ์สำหรับระบบยศ แชตตกแต่ง และป้ายชื่อบนหัว (NameTag) รองรับ 33 ยศ + 3 มิติ ออกแบบตามหลัก **Zero-Lag O(1)** ไม่กิน CPU และป้องกันปัญหา Glyph ชนกับส่วนอื่นๆ

---

## 📂 1. โครงสร้างไฟล์ในระบบ

```text
Server Testing/
├── .agents/
│   ├── scripts/
│   │   └── generate_rank_glyph.py       <- สคริปต์รวม Glyph และสร้าง Registry อัตโนมัติ
│   └── chat_rank_system.md              <- เอกสารนี้
│
├── development_behavior_packs/
│   └── Moblie - BP/
│       ├── manifest.json                <- ต้องใช้ dependency @minecraft/server "2.10.0-beta" (สำหรับ beforeEvents.chatSend)
│       └── scripts/
│           ├── main.js                  <- นำเข้า ./systems/rank/chatRank.js
│           ├── systems/
│           │   └── rank/
│           │       ├── rankRegistry.js  <- ฐานข้อมูลยศ 33 ยศ + Glyphs (สร้างอัตโนมัติจากสคริปต์)
│           │       └── chatRank.js      <- เอนจินแชต O(1), Anti-Spam, อัปเดต NameTag, Auto-Member
│           └── smartphone/
│               └── apps/
│                   └── admin.js         <- เมนูแอดมิน: เปลี่ยนยศผู้เล่นแบบเรียลไทม์
│
└── development_resource_packs/
    └── Moblie - RP/
        ├── manifest.json                <- RP Manifest (Bump patch version เมื่ออัปเดตรูป)
        └── font/
            └── glyph_E8.png             <- ชีต Glyph รวม (Unicode Page 0xE800 - 0xE830)
```

---

## 🎨 2. ตารางยศทั้งหมด (33 Ranks + 3 Dimensions)

Unicode หน้า **`0xE800` - `0xE8FF`** (ชีต `glyph_E8.png` ขนาด 2048x2048 พิกเซล):

### 🌍 สัญลักษณ์มิติ (Dimension Icons - แถวที่ 0)
| Codepoint | รหัสมิติ | ภาษาไทย | คำอธิบาย |
|---|---|---|---|
| `\uE800` | `minecraft:overworld` | โลกหลัก | ไอคอนโลกสีเขียวฟ้า |
| `\uE801` | `minecraft:nether` | เนเธอร์ | ไอคอนมิติเนเธอร์สีแดง |
| `\uE802` | `minecraft:the_end` | ดิเอนด์ | ไอคอนมิติดิเอนด์สีม่วง |

### 🏷️ ป้ายยศ (31 Distinct Ranks - แถวที่ 1 และ 2)
| Codepoint | Rank ID | ข้อความบนป้าย | ชื่อภาษาไทย | สียศ (Tag) | สีชื่อผู้เล่น | ลำดับ (Priority) |
|---|---|---|---|---|---|---|
| `\uE810` | `admin` | **ADMIN** | แอดมิน | `§6` | `§c` | 90 |
| `\uE811` | `dev` | **DEV** | นักพัฒนา | `§5` | `§d` | 88 |
| `\uE812` | `member` | **MEMBER** | ประชาชน *(ค่าเริ่มต้น)* | `§7` | `§f` | 10 |
| `\uE813` | `mod` | **MOD** | ผู้ดูแล | `§b` | `§9` | 85 |
| `\uE814` | `owner` | **OWNER** | เจ้าของ | `§c` | `§4` | 100 |
| `\uE815` | `copper` | **COPPER** | ทองแดง | `§e` | `§6` | 30 |
| `\uE816` | `diamond` | **DIAMOND** | เพชร | `§3` | `§b` | 38 |
| `\uE817` | `gold` | **GOLD** | ทองคำ | `§6` | `§e` | 35 |
| `\uE818` | `iron` | **IRON** | เหล็ก | `§7` | `§f` | 32 |
| `\uE819` | `netherite` | **NETHERITE** | เนเธอร์ไรต์ | `§d` | `§5` | 42 |
| `\uE81A` | `stone` | **STONE** | หินผา | `§8` | `§7` | 18 |
| `\uE81B` | `builder` | **BUILDER** | นักสร้าง | `§6` | `§e` | 70 |
| `\uE81C` | `donator` | **DONATOR** | ผู้สนับสนุน | `§5` | `§d` | 65 |
| `\uE81D` | `explorer` | **EXPLORER** | นักสำรวจ | `§b` | `§3` | 22 |
| `\uE81E` | `farmer` | **FARMER** | เกษตรกร | `§2` | `§a` | 21 |
| `\uE81F` | `helper` | **HELPER** | ผู้ช่วย | `§2` | `§a` | 75 |
| `\uE820` | `miner` | **MINER** | คนเหมือง | `§3` | `§b` | 23 |
| `\uE821` | `warrior` | **WARRIOR** | นักรบ | `§4` | `§c` | 28 |
| `\uE822` | `danger` | **DANGER** | ตัวอันตราย | `§4` | `§c` | 24 |
| `\uE823` | `dead` | **DEAD** | ผู้ดับสูญ | `§7` | `§8` | 15 |
| `\uE824` | `elite` | **ELITE** | ชนชั้นนำ | `§e` | `§f` | 60 |
| `\uE825` | `fire` | **FIRE** | เปลวเพลิง | `§c` | `§6` | 27 |
| `\uE826` | `hacker` | **HACKER** | แฮกเกอร์ | `§2` | `§a` | 45 |
| `\uE827` | `toxic` | **TOXIC** | สารพิษ | `§2` | `§a` | 25 |
| `\uE828` | `water` | **WATER** | สายน้ำ | `§b` | `§9` | 26 |
| `\uE829` | `tiktok` | **TIKTOK** | ติ๊กต็อก | `§d` | `§b` | 48 |
| `\uE82A` | `twitch` | **TWITCH** | ทวิช | `§5` | `§d` | 49 |
| `\uE82B` | `youtube` | **YOUTUBE** | ยูทูบ | `§4` | `§c` | 50 |
| `\uE82C` | `mvp` | **MVP** | MVP | `§e` | `§6` | 58 |
| `\uE82D` | `vip` | **VIP** | VIP | `§6` | `§e` | 52 |
| `\uE82E` | `vip_plus` | **VIP+** | VIP+ | `§e` | `§6` | 55 |
| `\uE82F` | `doctor` | **DOCTOR** | หมอ | `§c` | `§c` | 36 |
| `\uE830` | `police` | **POLICE** | ตำรวจ | `§b` | `§9` | 38 |

---

## 🛠️ 3. วิธีการสร้าง Glyph และอัปเดตระบบอัตโนมัติ

ทุกครั้งที่มีการเพิ่มยศ ปรับเปลี่ยนสี หรือจัดลำดับใหม่ **ห้ามแก้ไข Unicode ด้วยมือ** ให้ใช้สคริปต์ Generator:

### คำสั่งรันสคริปต์:
```bash
python .agents/scripts/generate_rank_glyph.py
```

### สิ่งที่สคริปต์ดำเนินการให้อัตโนมัติ (4-in-1 Pipeline):
1. **ประกอบภาพชีต Font**: ดึงภาพไอคอนมิติและตรายศทั้งหมด วาดลงในชีต `development_resource_packs/Moblie - RP/font/glyph_E8.png` ขนาด 2048x2048 (ตาราง 16x16 เซลล์ละ 128x128)
2. **คอมไพล์โค้ด BP อัตโนมัติ**: เจนไฟล์ [rankRegistry.js](file:///c:/Users/ZirconX/Desktop/Server%20Testing/development_behavior_packs/Moblie%20-%20BP/scripts/systems/rank/rankRegistry.js) พร้อม Type Annotations และเรียงลำดับ Priority ให้เสร็จสรรพ
3. **Auto-Bump RP Manifest**: เพิ่มเลข patch version ใน `Moblie - RP/manifest.json` อัตโนมัติ (BP ไม่ต้องเปลี่ยน)
4. **Auto-Sync World Packs**: อัปเดตเลขเวอร์ชันใน `worlds/TEST/world_resource_packs.json` ให้ตรงกันทันที

---

### 📝 คู่มือปฏิบัติการ: ขั้นตอนการเพิ่มยศใหม่ (Step-by-Step)

หากต้องการเพิ่มยศใหม่ (เช่น ยศ **`chef` (เชฟ)** หรือ **`mayor` (นายกเทศมนตรี)**):

1. **เปิดไฟล์สคริปต์**: [.agents/scripts/generate_rank_glyph.py](file:///c:/Users/ZirconX/Desktop/Server%20Testing/.agents/scripts/generate_rank_glyph.py)
2. **เพิ่มแถวลงใน `RANKS_DEF`**:
   ```python
   # รูปแบบ: (target_codepoint_hex, id, name_th, color_name, color_tag, priority, source_sample_idx)
   (0x31, "chef", "เชฟ", "§6", "§e", 35, None),
   ```
   *(หมายเหตุ: หากเป็นป้ายวาดเองให้ใส่ `None` ในช่องสุดท้าย)*
3. **สร้างฟังก์ชันวาดป้ายพิกเซล (หรือโหลดจากภาพ PNG)**:
   - **ความสูงมาตรฐาน**: ต้องสูง **10 พิกเซล** เท่านั้น (`h=10`)
   - **ความกว้าง**: แนะนำ 35 ถึง 50 พิกเซล (`w=35..50`)
   - **ตำแหน่งวางในช่อง 128x128**: ต้องวางที่พิกัด `(tgt_c * cell_size, tgt_r * cell_size + 59)` เสมอ เพื่อให้แนวระนาบ Baseline ตรงกับข้อความแชตพอดี
   - ดูตัวอย่างฟังก์ชัน `create_custom_doctor_badge()` หรือ `create_custom_dev_badge()` ในไฟล์สคริปต์
4. **ผูกฟังก์ชันใน `build_glyph_sheet()`**:
   ```python
   elif rank_id == "chef":
       badge = create_custom_chef_badge()
       master_sheet.paste(badge, (tgt_c * cell_size, tgt_r * cell_size + 59), badge)
       print(f"✔ Placed Custom Rank '{name_th}' ({rank_id}) at \\u{UNICODE_PAGE}{target_idx:02X}")
   ```
5. **รันคำสั่งคอมไพล์**:
   ```bash
   python .agents/scripts/generate_rank_glyph.py
   ```
6. **เข้าเกมแล้วพิมพ์ `/reload`**:
   - ยศใหม่จะเข้าไปอยู่ใน Dropdown ของหน้าต่างแอดมินมือถืออัตโนมัติ โดยไม่ต้องเขียนโค้ด UI เพิ่มเติม!

---

## ⚡ 4. สถาปัตยกรรมประสิทธิภาพสูง (Zero-Lag O(1) Architecture)

ระบบถูกออกแบบมาเพื่อให้เซิร์ฟเวอร์รันที่ **20 TPS นิ่งสนิท** โดยมีหลักการดังนี้:

1. **Zero Tick Overhead (0% CPU Idle)**:
   - **ไม่มี `system.runInterval`** (ไม่มีการวนลูปเช็กผู้เล่นทุก Tick เหมือน Addon ทั่วไป)
   - ทำงานเฉพาะตอนเกิด Event แชต หรือตอนผู้เล่นเชื่อมต่อ/ออกจากเกมเท่านั้น
2. **In-Memory Session Cache (O(1))**:
   - เมื่อผู้เล่นพิมพ์ข้อความ ข้อมูลยศและรูปแบบข้อความจะถูกดึงจาก `playerRankCache.get(sender.id)` (< 0.001ms)
   - ไม่มีการ Query Dynamic Property หรืออ่าน Tag จาก Disk ขณะแชต
3. **Event-Driven NameTag**:
   - `player.nameTag` จะถูกอัปเดตเฉพาะ 2 กรณีเท่านั้น:
     1. เมื่อเข้าเซิร์ฟเวอร์ (`playerSpawn`)
     2. เมื่อแอดมินเปลี่ยนยศผ่าน UI (`setPlayerRank`)
   - ไม่ส่ง Packet metadata รัวๆ ไปยังไคลเอนต์
4. **Anti-Spam Protection (600ms Debounce)**:
   - สกัดผู้เล่นหรือสคริปต์บอทที่พยายามส่งข้อความรัวเกินไป ช่วยป้องกัน Network Flooding
5. **Zero Memory Leak**:
   - มีระบบลบ Cache ทิ้งทันทีเมื่อผู้เล่นออกจากเซิร์ฟเวอร์ (`world.afterEvents.playerLeave`)

---

## 🔒 5. กฎความปลอดภัยและการกำหนดยศ (Admin vs Owner & Default Member)

1. **สิทธิ์แอดมิน (Admin vs Owner Rule)**:
   - ผู้เล่นที่มี Tag `admin` หรือผู้ที่เป็น OP จะได้รับยศ **`admin` (แอดมิน: `\uE810`)** เท่านั้น **ห้ามให้เป็นยศ `owner` โดยเด็ดขาด**
   - ยศ `owner` สงวนไว้สำหรับเจ้าของเซิร์ฟเวอร์ตัวจริงเท่านั้น และต้องตั้งค่าเจาะจงผ่าน Admin App
2. **ยศเริ่มต้น (Default Member Rule)**:
   - ผู้เล่นทุกคนที่เข้าเซิร์ฟเวอร์ หากยังไม่มียศ จะได้รับยศ **`member` (ประชาชน: `\uE812`)** โดยอัตโนมัติ พร้อมบันทึก Dynamic Property `player_rank = "member"` และ Tag `member`
3. **การล้าง Tag ซ้ำซ้อน (Clean Tag Sync)**:
   - เมื่อมีการเปลี่ยนยศใหม่ผ่าน Admin App ฟังก์ชัน `setPlayerRank()` จะลบ Tag ยศเก่าทิ้งทั้งหมดทันที ป้องกันยศแสดงผลตีกัน
4. **การคุ้มครอง Tag สิทธิ์แอดมิน (Admin Permission Tag Protection)**:
   - ฟังก์ชัน `setPlayerRank()` จะยกเว้น Tag `admin` เสมอ (`r.id !== "admin"`) เพื่อป้องกันไม่ให้แอดมินหลุดสิทธิ์การใช้งานมือถือหรือพาเนลแอดมินเมื่อลองเปลี่ยนป้ายยศแสดงผลให้ตนเอง

---

## ❓ 6. คู่มือแก้ไขปัญหา (Troubleshooting)

### ปัญหาที่ 1: แชตไม่ขึ้นยศ ยังเป็น `<Player> ข้อความ` แบบเดิม
- **สาเหตุ**: `@minecraft/server` ใน `Moblie - BP/manifest.json` เป็นเวอร์ชัน Stable ที่ไม่มี `world.beforeEvents.chatSend`
- **วิธีแก้**: ตรวจสอบว่าใน `manifest.json` ของ BP ตั้งค่าเป็น:
  ```json
  {
      "module_name": "@minecraft/server",
      "version": "2.10.0-beta"
  }
  ```
  และทำการ Restart โลกหรือรัน `/reload`

### ปัญหาที่ 2: ไอคอนยศแสดงเป็นกล่องสี่เหลี่ยมบั๊ก (Tofu / Square)
- **สาเหตุ**: Resource Pack ยังไม่ได้โหลด Font ใหม่ หรือเลข Version ใน RP ไม่อัปเดต
- **วิธีแก้**:
  1. ตรวจสอบว่ามีไฟล์ `Moblie - RP/font/glyph_E8.png`
  2. Bump Patch Version ใน `Moblie - RP/manifest.json` (เช่น `1.0.127` -> `1.0.128`)
  3. ซิงก์เลขใน `worlds/TEST/world_resource_packs.json` ให้ตรงกัน
  4. ออกเข้าโลกใหม่อีกครั้ง

### ปัญหาที่ 3: เปิดโทรศัพท์ไม่ได้ (Right-click ไม่ติด)
- **สาเหตุ**: สคริปต์ BP เกิด Fatal Error ระหว่างโหลด ทำให้ Script Engine ปิดตัว
- **วิธีแก้**:
  1. ตรวจสอบ Console Warning ในเกม
  2. ตรวจสอบว่าไฟล์ทุกไฟล์ใน `scripts/` ผ่านการเช็กไวยากรณ์ (`node -c <file.js>`)
  3. ลองใช้คำสั่งสำรอง `/scriptevent phone:open` เพื่อทดสอบว่า UI โทรศัพท์ยังตอบสนองหรือไม่

### ปัญหาที่ 4: เปลี่ยนยศในเมนูแอดมินแล้วไม่บันทึก / ไม่เกิดอะไรขึ้น
- **สาเหตุ**:
  1. การตรวจสอบสถานะ `target.isValid()` ขัดข้องเนื่องจาก Script API บางเวอร์ชันมองเป็น Boolean Property ไม่ใช่ฟังก์ชัน
  2. เงื่อนไข `chosenRank.id !== currentRank.id` บล็อกการบันทึก
- **วิธีแก้**:
  - ใช้ฟังก์ชันตรวจสอบสถานะแบบยืดหยุ่น: `typeof target.isValid === "function" ? target.isValid() : (typeof target.isValid === "boolean" ? target.isValid : Boolean(target?.name))`
  - เรียก `setPlayerRank(player, target, chosenRank.id)` ทันทีเมื่อมีการเลือกยศในฟอร์ม

### ปัญหาที่ 5: แอดมินตั้งยศตัวเองแล้วปุ่มแอดมินในมือถือหาย
- **สาเหตุ**: สคริปต์ลบ Tag เก่าทิ้งทั้งหมดทำให้ Tag `admin` หลุดไปด้วย
- **วิธีแก้**: ในฟังก์ชัน `setPlayerRank()` ให้ป้องกัน Tag `admin` โดยตรวจสอบ `if (r.id !== "admin") targetPlayer.removeTag(r.id)`

### ปัญหาที่ 6: ป้ายยศลอยสูงหรือต่ำกว่าระดับข้อความแชต (Baseline Alignment)
- **สาเหตุ**: วางภาพป้ายในช่องเซลล์ 128x128 ผิดพิกัด Y
- **วิธีแก้**: ในสคริปต์ `generate_rank_glyph.py` ต้องแปะภาพที่พิกัด `(x, y + 59)` เสมอ โดยตัวภาพป้ายต้องมีความสูง 10 พิกเซลพอดี (`h=10`) ซึ่งเป็นตำแหน่งที่ตรงกับ Baseline ของฟอนต์เกม Minecraft พอดี

### ปัญหาที่ 7: ข้อความแชตไม่เปลี่ยนหลังแอดมินเปลี่ยนยศให้ผู้เล่น
- **สาเหตุ**: ลืมอัปเดต In-Memory Cache `playerRankCache` ทำให้ตอนแชตดึงค่าเก่าจาก RAM
- **วิธีแก้**: ทุกครั้งที่มีการเปลี่ยนยศ ต้องเรียก `refreshPlayerRankCache(player)` เสมอ ซึ่งจะดึงค่าใหม่ บันทึกลง RAM Map และเซ็ต `player.nameTag` ให้อัตโนมัติ


