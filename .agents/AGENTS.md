# Workspace Rules for Minecraft Bedrock Smartphone Addon

## 📂 สารบัญเอกสารและกฎในโปรเจกต์:
- **กฎมายคราฟ & Addon**: [minecraft_addon_rules.md](file:///c:/Users/ZirconX/Desktop/Server%20Testing/.agents/rules/minecraft_addon_rules.md)
- **มาตรฐานการเขียนข้อความ & UI มือถือ**: [smartphone_ui_text_rules.md](file:///c:/Users/ZirconX/Desktop/Server%20Testing/.agents/rules/smartphone_ui_text_rules.md)
- **ระบบมือถือ & ฟังก์ชันทั้งหมด**: [smartphone_system.md](file:///c:/Users/ZirconX/Desktop/Server%20Testing/.agents/smartphone_system.md)
- **คู่มือสร้างไอคอนมือถือ 16x16 & Script**: [smartphone_icon_guide.md](file:///c:/Users/ZirconX/Desktop/Server%20Testing/.agents/rules/smartphone_icon_guide.md)
- **ระบบตกปลาฉบับสมบูรณ์**: [fishing_system.md](file:///c:/Users/ZirconX/Desktop/Server%20Testing/.agents/fishing_system.md)
- **ระบบเลี้ยงไก่และสังเวียนไก่ชนไทย**: [cockfighting_system.md](file:///c:/Users/ZirconX/Desktop/Server%20Testing/.agents/cockfighting_system.md)
- **คู่มือระบบ Group Items (Creative Inventory)**: [bedrock_group_items_guide.md](file:///c:/Users/ZirconX/Desktop/Server%20Testing/.agents/bedrock_group_items_guide.md)
- **ระบบ GPS และแผนที่นำทางฉบับสมบูรณ์**: [gps_system.md](file:///c:/Users/ZirconX/Desktop/Server%20Testing/.agents/gps_system.md)
- **ระบบหลอดน้ำและกระหายน้ำฉบับสมบูรณ์**: [thirst_system.md](file:///c:/Users/ZirconX/Desktop/Server%20Testing/.agents/thirst_system.md)
- **คู่มือปรับแต่งเซิร์ฟเวอร์ให้ลื่นไหล (Optimization Guide)**: [server_optimization_guide.md](file:///c:/Users/ZirconX/Desktop/Server%20Testing/.agents/server_optimization_guide.md)
- **คู่มือระบบป้ายโฆษณาและแบนเนอร์ (Play Screen Banner Guide)**: [play_screen_banner_guide.md](file:///c:/Users/ZirconX/Desktop/Server%20Testing/.agents/play_screen_banner_guide.md)
- **คู่มือมาตรฐานการจัดการ Manifest (Bedrock Manifest Guide)**: [bedrock_manifest_guide.md](file:///c:/Users/ZirconX/Desktop/Server%20Testing/.agents/bedrock_manifest_guide.md)
- **ระบบผ้าคลุมฉบับสมบูรณ์ (Cape System)**: [cape_system.md](file:///c:/Users/ZirconX/Desktop/Server%20Testing/.agents/cape_system.md)
- **ระบบยศและแชตฉบับสมบูรณ์ (Chat Rank System)**: [chat_rank_system.md](file:///c:/Users/ZirconX/Desktop/Server%20Testing/.agents/chat_rank_system.md)

---

## ⚠️ MANDATORY RULES (กฎเหล็กห้ามลืม)

1. **Resource Pack Version Bumping (RP ONLY)**:
   - แก้ไข Texture/UI/Lang ➔ Bump patch version ใน `development_resource_packs/Moblie - RP/manifest.json` (เช่น `1.0.49` -> `1.0.50`)
   - ซิงก์ `worlds/TEST/world_resource_packs.json` ให้ตรงกันทันที
   - ลงทะเบียน Path ภาพใน `development_resource_packs/Moblie - RP/textures/textures_list.json`
   - **ไม่ต้องเปลี่ยน Version ใน BP**

2. **มาตรฐานไอคอนแอป (16x16 Pixel Master Standard)**:
   - ใช้โครงสร้างตามภาพต้นแบบ `settings.png` เสมอ (กรอบนอกสีดำทึบ `#070b13` / `#000000`, รอยบากมุมบนซ้าย-ขวา `y=1`, ฐานเงามุมล่างซ้าย-ขวา `y=12` และแถบเงาเต็ม `y=13-14`, สัญลักษณ์สีขาวมีเงาตกกระทบด้านล่าง `Under-shadow` เพิ่มมิติ 3D)
   - **ปรัชญาการออกแบบไอคอนระดับพรีเมียม (Smart Design Principles)**:
     - **Context-Aware Palette**: เช็กสีแอปทั้งหมดบนหน้า Home ก่อนเลือกสีพื้นหลัง เพื่อสร้าง Focal Point ไม่ให้เฉดสีกลืนกัน
     - **Universal Visual Metaphor**: ใช้รูปสัญลักษณ์สากลที่มองออกใน 0.5 วินาที (เช่น ข่าวสาร = หนังสือพิมพ์มีพาดหัวและภาพ, สโตร์ = ถุงช้อปปิ้ง) ห้ามวาดรูปนามธรรม
     - **Contrast Hierarchy**: ขอบวัตถุขาวคมกริบตัดกับพื้นหลังสด + เลเยอร์มิติภายในด้วยหมึกเข้มและสีเน้น + เงา 3D ลึก
     - **Visual Simulation**: รันจำลองภาพในเทอร์มินัลและเช็กสมมาตรกึ่งกลาง (`diff == 0`) ทุกครั้งก่อนเซฟจริง (ดูรายละเอียดที่ [smartphone_icon_guide.md](rules/smartphone_icon_guide.md))

3. **สัญลักษณ์และข้อความในฟอร์ม**:
   - **ใช้ได้**: สัญลักษณ์ Glyph พื้นฐาน เช่น `✔`, `+`, `-`, `^`, `v`, `[=]`, `[V]`, `[ราคา]` (ฟอนต์เกมรองรับปกติ)
   - **ห้ามใช้**: อีโมจิสีแบบมือถือ (Color Unicode Emoji เช่น 💰, 🎁, ❤️, 📈, 📉) เพราะฟอนต์เกมจะแสดงเป็นกล่องสี่เหลี่ยมบั๊ก (Tofu)

4. **มาตรฐานการจัดเลย์เอาต์ UI และข้อความในแอป (UI & Message Formatting Standard)**:
   - **ยึดสไตล์ X (Twitter) เป็นต้นแบบหลัก**:
     - **หน้า Hub หลัก**: ปุ่มแรก (Index 0) ต้องเป็นปุ่มย้อนกลับ `back_full` เสมอ
     - **ข้อความบนปุ่ม (Two-Line Format)**: บรรทัด 1 คือชื่อหัวข้อ `§<color><Title>` / บรรทัด 2 คือคำอธิบายสีเทา `§7<Description>`
     - **ปุ่มรายการพร้อมป้ายรางวัล/สถานะ (List Items with Badges)**: 
       - รายการทั่วไป: `§e<Title> §a(+<Reward>)\n§7<Description>`
       - รายการสำเร็จ: `§a✔ <Title>\n§7สำเร็จแล้ว §a(+<Reward> เหรียญ)`
     - **หน้ารายละเอียด (Information Detail Modal)**: แสดงรายละเอียดเป้าหมาย + ป้ายสรุปรางวัลสีทอง/เขียว พร้อมปุ่มย้อนกลับ
     - **หน้ารายการฟีด (Feed List)**: บรรทัด 1 คือ `§<color>@<Author> §8| §7<Time>` / บรรทัด 2 คือเนื้อหาย่อ `§f<Content>` (ตัด 20 ตัวอักษร)
     - **Modal Forms**: ใน `form.toggle()` ต้องส่ง `{ defaultValue: boolean }` เป็นอาร์กิวเมนต์ที่ 2 เสมอ (ตาม `@minecraft/server-ui 2.0.0`)
     - **มาตรฐานภาษาและข้อความในฟอร์ม (Form Wording Standard)**:
       - ใช้ภาษาไทยกระชับ เข้าใจง่าย ตรงประเด็น
       - **ห้ามใส่ตัวเลขขนาดทางเทคนิคที่ไม่จำเป็นในเมนู** (เช่น ห้ามใส่ `ขนาด 48x48 บล็อก`, `88x88` ในข้อความปุ่ม ให้บอกหน้าที่การใช้งานกระชับตรงจุด)
       - **ห้ามใส่วงเล็บภาษาอังกฤษกำกับซ้ำซ้อน** (เช่น ห้ามใช้ `(Clock-In)`, `(Work Note)`, `(Broadcast)` ใน UI ภาษาไทย)
     - **มาตรฐาน Discord Rich Embed (Card Layout)**:
       - **Avatar (ซ้ายบน)**: อ้างอิงรูปโปรไฟล์ Xbox Live จริงของตัวละคร
       - **Thumbnail (ขวามือ)**: แสดงเฉพาะเมื่อผู้ใช้ใส่ลิงก์รูปภาพประกอบเท่านั้น (ถ้าไม่ใส่ ห้ามแสดง และห้ามเอา Avatar มาใส่ซ้ำ)
       - **เนื้อหา**: ใช้ Title สั้นกระชับ และ Description แบบ Blockquote `> ...`

5. **มาตรฐานความปลอดภัยและป้องกันการเอาเปรียบระบบ (Anti-Exploit Security Standard)**:
   - **ห้ามแจกบัฟ/ไอเทมตอนเข้าเกมโดยไม่มี Cooldown**: บันทึกเวลาลง Dynamic Property (`player.setDynamicProperty`) เพื่อป้องกันผู้เล่นจงใจ Reconnect ออกเข้าเกมใหม่เพื่อปั๊ม Speed หรือของฟรี
   - **Anti-ESC บนหน้าต่างสำคัญ**: บังคับให้ผู้เล่นกดปุ่มที่กำหนดเท่านั้น หากกด ESC หรือกดย้อนกลับ ต้องวนลูปเปิดฟอร์มกลับมาเสมอ (ดูรายละเอียดที่ [minecraft_addon_rules.md](rules/minecraft_addon_rules.md))

6. **มาตรฐานระบบยศและป้ายชื่อ (Chat Rank & NameTag Standard)**:
   - **ห้ามแก้ Glyph Unicode ด้วยมือ**: รัน `.agents/scripts/generate_rank_glyph.py` ทุกครั้งที่มีการอัปเดตยศ เพื่อป้องกันการชนของ Codepoint
   - **การแยกสิทธิ์ Admin vs Owner**: ผู้เล่นที่มี tag `admin` หรือ OP จะได้รับยศ `admin` (แอดมิน: `\uE810`) เท่านั้น **ห้ามให้เป็นยศ `owner`**
   - **Auto-Member**: ผู้เล่นเข้าใหม่ทุกคนต้องได้ยศเริ่มต้น `member` (ประชาชน: `\uE812`) อัตโนมัติ
   - **Zero-Lag Architecture**: ห้ามมี `runInterval` ลูปทุก Tick ในระบบยศเด็ดขาด ให้ใช้ In-Memory Cache O(1) ร่วมกับ Event-Driven (`chatSend`, `playerSpawn`, `playerLeave`) เท่านั้น
   - **BP Dependency**: ต้องใช้ `@minecraft/server` เป็น `"2.10.0-beta"` ขึ้นไปใน `manifest.json` ของ BP เพื่อรองรับ `beforeEvents.chatSend` (ดูรายละเอียดที่ [chat_rank_system.md](chat_rank_system.md))

---

## 🪨 Global Efficiency Rule
- **Caveman Mode (Always-On)**: ดูรายละเอียดที่ [caveman.md](rules/caveman.md)
