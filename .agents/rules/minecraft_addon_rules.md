# 📜 กฎการพัฒนา Minecraft Bedrock Addon (Minecraft Addon Rules)

เอกสารนี้รวบรวมกฎและข้อบังคับสำหรับการพัฒนา Addon, Resource Pack, Behavior Pack, และการจัดการไอคอน

---

## 1. ⚠️ กฎการ Bump Version (CRITICAL)

ทุกครั้งที่มีการแก้ไข/เพิ่มไฟล์รูปภาพ (Textures, Icons), ไฟล์ UI JSON (`development_resource_packs/Moblie - RP/ui/`), หรือไฟล์ภาษา (`texts/*.lang`):

1. **ต้อง Bump Version ใน RP Manifest เสมอ (BP ไม่ต้องเปลี่ยน)**:
   - `development_resource_packs/Moblie - RP/manifest.json` (เพิ่ม patch version เสมอ เช่น `1.0.49` -> `1.0.50`)
2. **ต้อง Sync Version ใน World Resource Packs ทันที**:
   - `worlds/TEST/world_resource_packs.json` (อัปเดต version ให้ตรงกับ RP manifest)
3. **ต้องลงทะเบียน Texture ใน `textures_list.json`**:
   - ทุกครั้งที่สร้างภาพ/ไอคอนใหม่ ต้องเพิ่ม Path ลงใน `development_resource_packs/Moblie - RP/textures/textures_list.json` เสมอ

---

## 2. 🎨 มาตรฐานโครงสร้างไอคอนแอป (16x16 Pixel Master Standard)

อ้างอิงจากภาพต้นแบบ `settings.png` ที่ถูกต้องที่สุดสำหรับ UI Smartphone ทุกแอป:

```text
Row 00: ................  <- กรอบดำทึบรอบนอก (#070b13)
Row 01: ..##        ##..  <- รอยบากมุมบนซ้าย-ขวา (#144b2d)
Row 02: ..    ████    ..  <- พื้นหลังการ์ดสีหลัก + ลวดลายสีขาว
...
Row 11: ..    ▓▓▓▓    ..  <- เงาตกกระทบใต้สัญลักษณ์ (Under-shadow 3D)
Row 12: ..####    ####..  <- ฐานเงามุมล่างซ้าย-ขวา
Row 13: ..############..  <- แถบเงาเต็มฐานล่าง
Row 14: ....########....  <- แถบเงาขั้นบันไดชั้นล่างสุด
Row 15: ................  <- กรอบดำทึบรอบนอก
```

### 📌 แม่แบบโครงสร้าง Palette 7 สี:
- `Color 0`: กรอบดำทึบ `#070b13`
- `Color 1`: รอยบากมุมและแถบเงาฐานล่าง (Darker Shade)
- `Color 2`: สีพื้นหลังหลักตามธีมแอป (Main Background Theme)
- `Color 3`: สัญลักษณ์สีขาว `#ffffff`
- `Color 4`: แสงไฮไลต์สีขาวฟ้า/นวล `#f8faff` / `#c8f5dc`
- `Color 5`: เงาตกกระทบใต้สัญลักษณ์ 3D Extrusion (Under-shadow)
- `Color 6`: สีลูกเล่นเสริม (Accent Color)

> 📖 **คู่มือฉบับเต็มและสคริปต์อัตโนมัติ**:
> - อ่านขั้นตอนแบบละเอียดและสูตรคำนวณกึ่งกลาง: [smartphone_icon_guide.md](file:///c:/Users/ZirconX/Downloads/server-testing/.agents/rules/smartphone_icon_guide.md)
> - สคริปต์สร้างไอคอน & Auto-Bump: [generate_icon.py](file:///c:/Users/ZirconX/Downloads/server-testing/.agents/scripts/generate_icon.py)

---

## 3. 🔤 สัญลักษณ์และข้อความในฟอร์ม

- **ใช้ได้**: สัญลักษณ์ Glyph พื้นฐาน เช่น `✔`, `+`, `-`, `^`, `v`, `[=]`, `[V]`, `[ราคา]` (ฟอนต์เกมรองรับปกติ)
- **ห้ามใช้**: อีโมจิสีแบบมือถือ (Color Unicode Emoji เช่น 💰, 🎁, ❤️, 📈, 📉) เพราะฟอนต์เกมจะแสดงเป็นกล่องสี่เหลี่ยมบั๊ก (Tofu)

---

## 4. 📱 มาตรฐานการจัดเลย์เอาต์ UI และข้อความในแอป (Smartphone UI & Message Formatting Standard)

ทุกแอปพลิเคชันที่สร้างขึ้นใหม่ให้ยึดรูปแบบความสวยงามและการจัดระเบียบตามต้นแบบ **X (Twitter)** (`twitter.js`) เสมอ:

### 📌 1. โครงสร้างหน้า Hub หลัก (ActionFormData `§smartphone-LIST§r`)
* **ส่วนหัว (Body Header)**:
  ```javascript
  form.body({ rawtext: [{ text: `${fillMoney(money)}` }, { text: `§<color><AppName> <SubTitle>` }] });
  ```
* **ปุ่มแรกสุด (Index 0)**: ต้องเป็นปุ่มย้อนกลับเสมอ
  ```javascript
  form.button({ translate: "a30x1_rob.smartphone.back.text" }, "textures/icons_apps/back_full");
  ```
* **รูปแบบปุ่มเมนู (Two-Line Split Format)**:
  * บรรทัด 1: หัวข้อหลักสีตามธีม `§<color><Title>`
  * บรรทัด 2: คำอธิบายสีเทา `§7<Description>`
  ```javascript
  form.button("§9Discord Feed\n§7ฟีดข้อความทั้งหมด (10)", "textures/icons_apps/discord");
  form.button("§aPost to Discord\n§7ส่งข้อความเข้าห้อง #เถียงนา", "textures/icons_apps/message");
  form.button("§eMy Sent Messages\n§7ดูข้อความที่คุณเคยส่ง", "textures/icons_apps/admin_app/players");
  form.button("§bDiscord Settings\n§7ตั้งค่าระบบ Auto-Chat", "textures/icons_apps/settings");
  ```

### 📌 2. โครงสร้างหน้ารายการฟีด (Feed List & Cards)
* **การ์ดข้อความในฟีด**:
  * บรรทัด 1: `§<color>@<Author> §8| §7<Time>`
  * บรรทัด 2: `§f<Content (ตัดย่อ 20 ตัวอักษร + ...)>`
* **กรณีไม่มีข้อมูล (Empty State)**: แสดงปุ่มคำแนะนำให้กดโพสต์แรกทันที
  ```javascript
  if (messages.length === 0) {
      form.button("§7ยังไม่มีข้อความในฟีด\n§fกดที่นี่เพื่อส่งข้อความแรก!", "textures/icons_apps/discord");
  }
  ```

### 📌 3. โครงสร้างหน้ารายละเอียดข้อความ (Detail View & Chat Printout)
* แสดงปุ่มกระทำ: `Repost to Chat` (`textures/icons_apps/admin_app/broadcast`) และ `Delete` (`textures/icons_apps/admin_app/clear_inv`)
* ส่งสรุปข้อมูลลงกล่องแชตส่วนตัวของผู้เล่นด้วยรูปแบบมาตรฐาน:
  ```javascript
  player.sendMessage(`§f--- §9[<AppName> Post by @${msg.author}] §f---\n§e"${msg.content}"\n§7ห้อง: §b#${channel} §7| เวลา: §f${msg.timestamp}`);
  ```

### 📌 4. โครงสร้างฟอร์มกรอกข้อมูล (ModalFormData `§smartphone-MODAL§r`)
* **Title Header**:
  ```javascript
  form.title({
      rawtext: [
          { text: "§smartphone-MODAL§r" },
          { text: `${fillMoney(money)}` },
          { text: "<Form Title>" }
      ]
  });
  ```
* **มาตรฐานข้อความในฟอร์ม (Concise Thai Only)**:
  * ใช้ข้อความภาษาไทยสั้น กระชับ ตรงประเด็น
  * **ห้ามระบุขนาดทางเทคนิคที่ไม่จำเป็นในเมนู**: เช่น ห้ามใส่ `ขนาด 48x48 บล็อก`, `88x88` ในข้อความปุ่ม ให้บอกหน้าที่การใช้งานกระชับตรงจุด
  * **ห้ามใส่วงเล็บภาษาอังกฤษกำกับซ้ำซ้อน** (เช่น ห้ามใช้ `(Clock-In)`, `(Work Note)`, `(Broadcast)`)
* **กฎเหล็กของ `@minecraft/server-ui 2.0.0` สำหรับ Modal Forms**:
  * **`form.toggle()`**: ต้องส่งอาร์กิวเมนต์ที่ 2 เป็น Object `{ defaultValue: boolean }` เสมอ (ห้ามส่ง boolean ดิบ)
  * **`form.textField()`**: หากต้องการกำหนดค่าเริ่มต้น ต้องส่งอาร์กิวเมนต์ที่ 3 เป็น Object `{ defaultValue: string }` เสมอ (ห้ามส่ง string ดิบ)
  * **`form.dropdown()`**: อาร์กิวเมนต์ที่ 3 ต้องเป็น Object `{ defaultValueIndex: number }` เสมอ
  ```javascript
  // ตัวอย่างที่ถูกต้อง:
  form.textField("หัวข้อ", "placeholder...", { defaultValue: "ค่าเดิม" });
  form.toggle("แจ้งเตือนแอดมินในเกม", { defaultValue: true });
  ```
> 📖 **คู่มือฉบับเต็มและตัวอย่างฟอร์มทั้งหมด**:
> - อ่านกฎการจัดเลย์เอาต์และการเขียนข้อความ: [smartphone_ui_text_rules.md](file:///c:/Users/ZirconX/Desktop/Server%20Testing/.agents/rules/smartphone_ui_text_rules.md)

### 📌 5. ข้อเสนอแนะและเสียงประกอบ (Feedback & Audio)
* โพสต์สำเร็จ: เล่นเสียง `player.playSound("random.levelup")`
* ลบ/ยกเลิก: เล่นเสียง `player.playSound("random.break")`
* ผิดพลาด/กรอกไม่ครบ: เล่นเสียง `player.playSound("note.bass")`
* ส่ง Toast แจ้งเตือนผู้เล่นอื่น: `sendToastMessage(p, "<app_type>", `§9@${player.name} §fโพสต์ข้อความใหม่!`)`

---

## 5. 💬 มาตรฐาน Discord Webhook & Rich Embed

1. **โครงสร้างการ์ด (Card Embed Format)**:
   - **Avatar (ซ้ายบน)**: แสดงรูปโปรไฟล์ตัวละคร Xbox Live Gamerpic ของผู้เล่นผ่านระบบ Proxy
   - **Thumbnail (ขวามือ)**: แสดงเฉพาะเมื่อผู้เล่นใส่ลิงก์รูปภาพประกอบเท่านั้น (หากไม่ใส่ **ห้ามแสดงภาพ** และห้ามนำรูปโปรไฟล์ไปใส่ซ้ำซ้อน)
   - **ข้อความ**: ใช้ Title สั้นกระชับ และจัดรูปแบบข้อความด้วย Blockquote `> <ข้อความ>`
   - **Footer & Time**: แสดงชื่อผู้เล่นและสถานะ (`<ชื่อ> • แอดมิน` หรือ `<ชื่อ> • ผู้เล่น`) พร้อม Discord ISO Timestamp
2. **ระบบลงเวลาปฏิบัติงานแอดมิน (Admin Shift)**:
   - แถบสี Embed แยกตามประเภทงาน: เข้าเวร (เขียว `#2ecc71`), ออกเวร (แดง `#e74c3c`), ตรวจตรา (ฟ้า `#3498db`), ดูแลระบบ (ทอง `#f1c40f`)

---

## 6. 🛡️ กฎความปลอดภัยและป้องกันการโกงระบบ (Anti-Exploit & Game Security Standards)

> [!IMPORTANT]
> **"เราต้องฉลาดกว่าคนเล่นเสมอ"**: ผู้เล่นมักหาช่องโหว่ทางเทคนิคเพื่อเอาเปรียบระบบ ดังนั้นทุกฟังก์ชันที่ให้ผลประโยชน์ (บัฟ, ไอเทม, เงิน) ต้องมีกลไกป้องกันการโกงรัดกุม 100%

### 1. ป้องกันการออกเข้าใหม่เพื่อปั๊มผลประโยชน์ (Anti-Rejoin Exploit)
- **ห้ามแจกบัฟ/รางวัลทุกครั้งที่เข้าเกมโดยไม่มี Cooldown**: ผู้เล่นจะจงใจออกเกมแล้วเข้าใหม่เรื่อยๆ เพื่อรับ Speed หรือเอฟเฟกต์ฟรีไม่รู้จบ
- **ต้องบันทึก Cooldown ลง Dynamic Property**: 
  - ใช้ `player.setDynamicProperty("last_<feature>_time", Date.now())` เสมอ เพราะค่านี้บันทึกติดตัวละคร NBT ถาวร แม้ผู้เล่นจะหลุดหรือปิดเกม ข้อมูลก็ไม่หาย
  - กำหนดระยะเวลาหน่วงที่เหมาะสม (เช่น บัฟต้อนรับเข้าเกม = 15 นาที `15 * 60 * 1000`)
  - หากเข้าซ้ำภายในช่วง Cooldown: ให้แสดงข้อความต้อนรับปกติ **แต่ไม่ให้เอฟเฟกต์หรือรางวัลซ้ำ**

```javascript
// ตัวอย่างมาตรฐาน:
const now = Date.now();
const lastTime = player.getDynamicProperty("last_login_buff_time") || 0;
const COOLDOWN_MS = 15 * 60 * 1000; // 15 นาที

if (now - lastTime >= COOLDOWN_MS) {
    player.setDynamicProperty("last_login_buff_time", now);
    player.addEffect("speed", 30 * 20, { amplifier: 0, showParticles: false });
    player.onScreenDisplay.setTitle("§6ยินดีต้อนรับ", { subtitle: "§aรับบัฟสำรวจโลก +Speed 30 วิ" });
} else {
    player.onScreenDisplay.setTitle("§6ยินดีต้อนรับกลับ", { subtitle: "§aพร้อมออกผจญภัยต่อแล้ว" });
}
```

### 2. ป้องกันการกด ESC ข้ามขั้นตอนสำคัญ (Anti-ESC / Anti-Bypass)
- หน้าต่างที่จำเป็นต้องให้ผู้เล่นรับทราบ/ยืนยันก่อนเริ่มเล่น (เช่น แบนเนอร์เริ่มต้น, กฎเซิร์ฟเวอร์, ข้อตกลง) ต้องป้องกันการกดปิด/ESC
- หากเช็กพบ `{ canceled: true }`: ให้สั่ง `mc.system.runTimeout` เพื่อเปิดหน้าต่างเดิมกลับมาทันที (หน่วง 5-12 ticks) จนกว่าจะกดปุ่มยืนยันที่กำหนดเท่านั้น

### 3. ป้องกันการส่งแพ็กเก็ตซ้ำ (Double-Trigger Guard)
- เมื่อมีปุ่มที่มีการหักเงิน ซื้อของ หรือแจกไอเทม ต้องใช้ Flag หรือ `Set` ล็อกสถานะของผู้เล่นระหว่างดำเนินการ ไม่ให้ผู้เล่นกดย้ำๆ หรือส่งคำสั่งซ้ำซ้อนใน tick เดียวกัน

---

## 8. 👑 มาตรฐานระบบยศ ป้ายชื่อ และ Glyph Font (Chat Rank Standard)

### 1. การบริหารจัดการชีต Glyph (`glyph_E8.png`)
- **ห้ามแก้ไฟล์ Unicode หรือรหัส Font ด้วยมือ**: ให้รันสคริปต์ [generate_rank_glyph.py](file:///c:/Users/ZirconX/Desktop/Server%20Testing/.agents/scripts/generate_rank_glyph.py) เท่านั้น เพื่อให้ระบบรวมภาพ, อัปเดต `rankRegistry.js`, และ Bump RP Version พร้อม Sync World RP ให้อัตโนมัติในคำสั่งเดียว
- **Unicode Page Isolation**: รวมภาพป้ายยศและมิติไว้ที่ `0xE800` - `0xE82E` ไม่ให้กระจายไปทับตัวอักษรหรือ Glyph อื่น

### 2. มาตรฐานการกำหนดยศและการแบ่งแยกสิทธิ์ (Role Hierarchy)
- **Admin vs Owner**: ผู้เล่นที่มี tag `admin` หรือผู้ที่เป็น OP จะต้องได้รับยศ `admin` (แอดมิน: `\uE810`) เสมอ **ห้ามปล่อยให้เป็นยศ `owner` (เจ้าของ)**
- **Default Member**: ผู้เล่นใหม่ที่ยังไม่มียศ จะต้องได้รับยศ `member` (ประชาชน: `\uE812`) อัตโนมัติทุกครั้ง
- **Clean Tag Sync**: ฟังก์ชัน `setPlayerRank` ต้องลบ tag ยศเก่าทิ้งทั้งหมดก่อนเพิ่ม tag ยศใหม่ เพื่อป้องกันป้ายยศตีกัน

### 3. Zero-Lag Engine Rules
- **ห้ามมี `system.runInterval`**: ระบบยศต้องเป็น Event-Driven 100% (`chatSend`, `playerSpawn`, `playerLeave`)
- **O(1) Memory Cache**: ตอนแชตต้องอ่านข้อมูลจาก `Map` ใน Memory เท่านั้น ห้าม Query Dynamic Property หรืออ่าน Tags ขณะพิมพ์
- **Anti-Spam 600ms**: ดักการพิมพ์รัวเพื่อลดภาระ Broadcast Packet
- **Anti-Memory Leak**: ต้องลบ Cache ทิ้งทันทีเมื่อผู้เล่นออกจากเซิร์ฟเวอร์ (`playerLeave`)
- อ่านคู่มือระบบยศฉบับสมบูรณ์: [chat_rank_system.md](file:///c:/Users/ZirconX/Desktop/Server%20Testing/.agents/chat_rank_system.md)



