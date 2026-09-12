# 📱 มาตรฐานการเขียนข้อความและออกแบบ UI สมาร์ตโฟน (Smartphone UI & Text Standards)

เอกสารนี้รวบรวมกฎและมาตรฐานการออกแบบ UI, การเขียนข้อความภาษาไทย, การวางเลย์เอาต์ฟอร์ม, และการใช้ API ของ `@minecraft/server-ui 2.0.0` สำหรับสมาร์ตโฟน โดยอ้างอิงจากต้นแบบ **แอปแอดมิน (`admin.js`)** และ **แอป X (`twitter.js`)**

---

## 1. 🖼️ โครงสร้างกรอบและหัวข้อหน้าจอ (Smartphone Frame & Headers)

ระบบ Smartphone Add-On ใช้ Custom Font Tags เพื่อเรนเดอร์กรอบจอมือถือ ผู้พัฒนาต้องใช้แท็กต่อไปนี้เสมอ:

### 1.1 ActionFormData (หน้ารายการ / หน้าเมนูหลัก)
- **Title**: ต้องตั้งเป็น `"§smartphone-LIST§r"` เสมอ
- **Body (Title Bar Header)**: พื้นที่ Body ถูกระบบ UI นำไปใช้เรนเดอร์เป็น **หัวข้อบนสุดของหน้าจอสมาร์ตโฟน (Title Bar)**
  - ต้องใส่ยอดเงิน `${fillMoney(money)}` นำหน้าเสมอ (ระบบ UI จะตัดออก 12 ตัวแรกอัตโนมัติ)
  - **ข้อความหัวข้อ**: ต้องเป็นข้อความสั้นหรือคีย์แปลภาษา `{ translate: 'a30x1_rob.smartphone.<app>.text' }`
  - **ห้ามใส่โค้ดสี เช่น `§e`, `§a` และห้ามใส่ `\n` หรือคำอธิบายยาว**: เพราะระบบ UI ตั้งค่าฟอนต์เป็น `MinecraftTen` ตัวหนาใหญ่ สีขาว `[1, 1, 1]` พื้นที่จำกัดกว้างเพียง `130px` หากใส่โค้ดยาวจะทำให้ฟอนต์ล้นจนแสดงเป็นจุดไข่ปลา (`...`) หรือเปลี่ยนเป็นสีอื่น

```javascript
const money = player.getDynamicProperty("money") || 0;
const form = new mcUI.ActionFormData().title("§smartphone-LIST§r");

form.body({
  rawtext: [
    { text: `${fillMoney(money)}` },
    { translate: "a30x1_rob.smartphone.quests.text" } // แสดง "ภารกิจ" สีขาวตัวใหญ่ คมชัด
  ]
});

// กฎเหล็ก: ปุ่มแรก (Index 0) ต้องเป็นปุ่มย้อนกลับเสมอ
form.button({ translate: "a30x1_rob.smartphone.back.text" }, "textures/icons_apps/back_full");
```

### 1.2 ModalFormData (หน้าต่างกรอกข้อมูล / หน้าตั้งค่า)
- **Title**: ต้องเป็น `{ rawtext: [...] }` ที่ประกอบด้วย `§smartphone-MODAL§r` + `${fillMoney(money)}` + ชื่อหน้าต่าง

```javascript
const money = player.getDynamicProperty("money") || 0;
const form = new mcUI.ModalFormData().title({
  rawtext: [
    { text: "§smartphone-MODAL§r" },
    { text: `${fillMoney(money)}` },
    { text: "ตั้งค่าระบบ" }
  ]
});
```

---

## 2. 📝 มาตรฐานการเขียนข้อความในฟอร์ม (Form Wording & Typography)

### 2.1 การเรียงลำดับหัวข้อใน Modal (Numbered Standard)
อ้างอิงจาก `admin.js`: ใน Modal Form ควรระบุหมายเลขกำกับ `1., 2., 3.` ชัดเจน เพื่อให้อ่านง่ายและเป็นหมวดหมู่:
- `1. หัวข้อตัวเลือกแรก:`
- `2. หัวข้อตัวเลือกที่สอง:`
- มีคำอธิบายหรือตัวอย่างกำกับในวงเล็บ เช่น `(เช่น บ้านของฉัน, จุดฟาร์ม)` หรือระบุหน่วย `(พิกเซล)`

### 2.2 รูปแบบปุ่มกด 2 บรรทัด (Two-Line Button Standard)
ทุกปุ่มใน ActionForm ต้องใช้รูปแบบ 2 บรรทัดเสมอ:
- **บรรทัดที่ 1**: `§<color><ชื่อหัวข้อ>` (ใช้สีนำสายตา เช่น `§a`, `§b`, `§e`, `§6`, `§c`, `§d`)
- **บรรทัดที่ 2**: `§7<คำอธิบายฟังก์ชันสั้นๆ กระชับ>` (สีเทา `§7`)
- **ห้าม**: ใส่วงเล็บปีกกา/เครื่องหมายรก เช่น `[V]`, `[X]`, `[^]`, `[+]`, `[*]`, `(Open)` เพราะทำให้หน้าจอรกตา
- **ห้ามระบุขนาดทางเทคนิคที่ไม่จำเป็น**: ห้ามใส่ตัวเลขขนาดพิกเซลหรือบล็อกในข้อความเมนู เช่น `(ขนาด 48x48 บล็อก)`, `88x88` เพราะรกหน้าจอและผู้เล่นไม่จำเป็นต้องทราบ ให้ใช้คำอธิบายหน้าที่การใช้งานกระชับตรงประเด็นแทน

```javascript
// ✅ ถูกต้องตามมาตรฐาน (เรียบหรู กระชับ คมชัด)
form.button("§aเปิด GPS\n§7แสดงแผนที่นำทางมุมจอ", "textures/icons_apps/gps_app/gps_on");
form.button("§bแผนที่เต็มจอ\n§7เปิดมุมมองดาวเทียมขนาดใหญ่", "textures/icons_apps/gps_app/map_fullscreen");
form.button("§6ปักหมุดใหม่\n§7บันทึกพิกัดพร้อมโฮโลแกรม 3D", "textures/icons_apps/gps_app/add_waypoint");
form.button("§dตั้งค่า GPS\n§7ปรับแต่งการแสดงผลแผนที่", "textures/icons_apps/gps_app/gps_settings");

// ❌ ไม่ถูกต้อง (รก ใส่ขนาดบล็อก และใส่วงเล็บซ้ำซ้อน)
form.button("§a[V] เปิด Mini GPS (Open Minimap)\n§7แสดงแผนที่มุมจอ (ขนาด 48x48 บล็อก)", "textures/icons_apps/gps");
```

### 2.3 รูปแบบปุ่มรายการพร้อมป้ายรางวัล/สถานะ (List Items with Badges & Values)
สำหรับหน้ารายการที่มีค่าตัวเลข, รางวัล หรือสถานะกำกับ (เช่น หน้ารายการภารกิจ, ร้านค้า, หรือประวัติความสำเร็จ):
- **รายการที่ยังไม่สำเร็จ/รอทำ**:
  - บรรทัด 1: `§e<ชื่อรายการ> §a(+<รางวัล/มูลค่า>)` (หัวข้อสีทอง/ขาว + ป้ายมูลค่าสีเขียว `§a`)
  - บรรทัด 2: `§7<คำอธิบายเงื่อนไขสั้นๆ>`
  ```javascript
  form.button(`§e${quest.name} §a(+${quest.reward})\n§7${quest.description}`, iconPath);
  ```
- **รายการที่สำเร็จแล้ว (Completed Items)**:
  - บรรทัด 1: `§a✔ ${quest.name}` (เครื่องหมายถูกสีเขียว + ชื่อรายการ)
  - บรรทัด 2: `§7สำเร็จแล้ว §a(+${quest.reward} เหรียญ)` (สถานะสีเทา + ยอดรับสีเขียว)
  ```javascript
  form.button(`§a✔ ${quest.name}\n§7สำเร็จแล้ว §a(+${quest.reward} เหรียญ)`, iconPath);
  ```

### 2.4 หน้าต่างดูรายละเอียดข้อมูล (Information & Detail Modal)
ใช้ ModalFormData สำหรับแสดงรายละเอียดแบบอ่านอย่างเดียว (เช่น ดูรายละเอียดภารกิจ, ดูข้อมูลไอเทม):
- **Title**: ใส่กรอบ `§smartphone-MODAL§r` + ยอดเงิน + ชื่อหัวข้อ
- **Label**: แบ่งเป็น 2 ส่วนชัดเจน (รายละเอียดเป้าหมาย + ป้ายสรุปรางวัล/ผลตอบแทน)
- **Submit Button**: ใช้ปุ่ม `"ย้อนกลับ"` เพื่อให้ผู้เล่นกดปิดกลับไปหน้ารายการเดิมได้สะดวก

```javascript
const title = {
    rawtext: [
        { text: '§smartphone-MODAL§r' },
        { text: `${fillMoney(money)}` },
        { text: quest.name }
    ]
};

// กรณีภารกิจที่ยังไม่สำเร็จ
questForm.label(`§7ภารกิจ: §e${quest.name}\n§7เป้าหมาย: §f${quest.description}\n\n§6รางวัล: §e+${quest.reward} เหรียญ`);

// กรณีภารกิจที่ทำสำเร็จแล้ว
questForm.label(`§7ภารกิจ: §a${quest.name}\n§7เป้าหมาย: §f${quest.description}\n\n§a✔ สำเร็จแล้ว §7(ได้รับ +${quest.reward} เหรียญ)`);

questForm.submitButton({ translate: 'a30x1_rob.smartphone.back.text' });
```

### 2.5 ปุ่มบันทึกข้อมูล (Submit Button)
ใน Modal Form ต้องมี `form.submitButton(...)` เสมอ เพื่อให้ผู้ใช้ทราบว่าปุ่มกดยืนยันคืออะไร:
```javascript
form.submitButton({ rawtext: [{ text: "บันทึกการตั้งค่า" }] });
// หรือ
form.submitButton("บันทึกข้อมูล");
```

---

## 3. 🇹🇭 กฎการใช้ภาษาและข้อความ (Language Rules)

1. **ใช้ภาษาไทยเป็นภาษาหลัก**: กระชับ ตรงประเด็น เข้าใจง่าย
2. **ห้ามใส่วงเล็บภาษาอังกฤษกำกับซ้ำซ้อน**:
   - ❌ ห้าม: `โหมดสแกนถ้ำอัตโนมัติ (Cave Mode)`, `โลกปกติ (Overworld)`, `แสดงม็อบ (Show Mobs)`
   - ✅ ถูกต้อง: `โหมดสแกนถ้ำอัตโนมัติ`, `โลกปกติ`, `แสดงสิ่งมีชีวิตบนแผนที่`
3. **ห้ามใช้อีโมจิสี Unicode**:
   - ❌ ห้าม: 💰, 🎁, 🗺️, ❤️, 📉, 📈 (เกม Minecraft Bedrock จะแสดงเป็นกล่องสี่เหลี่ยมเต๋าบั๊ก Tofu)
   - ✅ ถูกต้อง: ใช้ข้อความภาษาไทย หรือสัญลักษณ์ Glyph พื้นฐานที่รองรับ เช่น `✔`, `+`, `-`, `^`, `v`, `[=]`
4. **การแสดงสถานะ**:
   - เปิดใช้งาน: `§aเปิดอยู่` หรือ `§aเปิดใช้งาน`
   - ปิดใช้งาน: `§cปิดอยู่` หรือ `§cปิดใช้งาน`
   - การเตือน/ข้อผิดพลาด: `§e[ชื่อระบบ] §cข้อความแจ้งเตือน`

---

## 4. ⚙️ ข้อกำหนด API `@minecraft/server-ui 2.0.0` (Anti-Crash Rules)

การส่ง Argument ผิดรูปแบบจะทำให้เกิด `Native type conversion failed` ทันที:

| ฟังก์ชัน | พารามิเตอร์ที่ถูกต้อง | ข้อห้าม |
| :--- | :--- | :--- |
| **`textField`** | `textField(label, placeholder, { defaultValue: string })` | ❌ ห้ามส่ง string ตรงๆ ในพารามิเตอร์ที่ 3 |
| **`toggle`** | `toggle(label, { defaultValue: boolean })` | ❌ ห้ามส่ง boolean ตรงๆ ในพารามิเตอร์ที่ 2 |
| **`dropdown`** | `dropdown(label, optionsArray, { defaultValueIndex: number })` | ❌ ห้ามส่ง number ตรงๆ ในพารามิเตอร์ที่ 3 |
| **`slider`** | `slider(label, min, max, { defaultValue: number, valueStep?: number })` | ❌ ห้ามส่ง number ตรงๆ ในพารามิเตอร์ที่ 4 |

### ตัวอย่างการเขียน Modal Form ที่ถูกต้อง 100%:
```javascript
const form = new mcUI.ModalFormData().title({
  rawtext: [
    { text: "§smartphone-MODAL§r" },
    { text: `${fillMoney(money)}` },
    { text: "ปักหมุดพิกัดใหม่" }
  ]
});

form.textField({ rawtext: [{ text: "1. ชื่อหมุดพิกัด:" }] }, { rawtext: [{ text: "เช่น บ้านของฉัน" }] }, { defaultValue: "จุดปักหมุด" });
form.textField({ rawtext: [{ text: "2. พิกัด X:" }] }, { rawtext: [{ text: "ตัวเลขพิกัด X" }] }, { defaultValue: String(x) });
form.toggle({ rawtext: [{ text: "3. แสดงป้ายโฮโลแกรม 3D ลอยในโลกจริง" }] }, { defaultValue: true });
form.dropdown({ rawtext: [{ text: "4. เลือกสัญลักษณ์สี:" }] }, COLOR_OPTIONS, { defaultValueIndex: 0 });
form.slider("5. ระยะห่างจากขอบหน้าจอ", 0, 50, { defaultValue: 10, valueStep: 1 });
form.submitButton({ rawtext: [{ text: "บันทึกหมุดพิกัด" }] });
```

---

## 5. 🔔 การตอบสนองผู้ใช้ (Feedback & Notifications)

ทุกการกระทำที่สำคัญควรมี Feedback ให้ผู้เล่นเสมอ:
1. **Toast Notification บนมือถือ**:
   ```javascript
   sendToastMessage(player, "quests", "§aบันทึกการตั้งค่าเรียบร้อยแล้ว");
   ```
2. **เสียงตอบรับ (Sound Effects)**:
   - สำเร็จ/บันทึก: `player.playSound("random.levelup", { volume: 0.8, pitch: 1.5 });`
   - คลิก/แจ้งเตือนทั่วไป: `player.playSound("random.toast");`
   - ข้อผิดพลาด/เตือน: `player.playSound("note.bass");`
3. **ข้อความแจ้งเตือนความสำเร็จและรางวัล (Achievement & Reward Notifications)**:
   - **ข้อความในช่องแชต (Chat)**:
     ```javascript
     player.sendMessage(`§e[ภารกิจ] §aสำเร็จ: §f${quest.name}§r §e(+${quest.reward} เหรียญ)`);
     ```
   - **ป๊อปอัปแจ้งเตือนมุมจอ (Toast)**:
     ```javascript
     sendToastMessage(player, "quests", `ภารกิจสำเร็จ: §b${quest.name}§r`);
     ```
