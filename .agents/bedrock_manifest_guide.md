# คู่มือมาตรฐานการจัดการ Manifest ของเซิร์ฟเวอร์ (Bedrock Manifest Guide)

คู่มืออธิบายโครงสร้าง กฎการตั้งค่า `manifest.json` และการจัดการชื่อ/คำอธิบาย (Name & Description) ให้เป็นมาตรฐานเดียวกันทั่วทั้งโปรเจกต์ **Thiang Na Story**

---

## 📌 1. โครงสร้างพื้นฐานของ `manifest.json` (Format Version 2)

ไฟล์ `manifest.json` คือหัวใจหลักที่บอกให้ตัวเกม Minecraft Bedrock ทราบว่าโฟลเดอร์นี้คือแอดออนประเภทใด มี Module อะไรบ้าง และต้องพึ่งพาแอดออนอื่นหรือไม่

### 1.1 ตัวอย่างโครงสร้างฝั่ง Behavior Pack (BP)
```json
{
  "format_version": 2,
  "header": {
    "name": "Thiang Na Story - Moblie [Behavior Pack]",
    "description": "Thiang Na Story Official",
    "uuid": "2fa986da-d7f6-4d5f-a64d-3630af333e69",
    "min_engine_version": [1, 21, 130],
    "version": [1, 0, 14]
  },
  "modules": [
    {
      "type": "data",
      "uuid": "26b1100d-664f-4a1e-8047-d34c2706fd12",
      "version": [1, 0, 14]
    },
    {
      "type": "script",
      "language": "javascript",
      "entry": "scripts/main.js",
      "uuid": "dcb8b83f-a5b9-44e6-9a1a-1d3124ad2109",
      "version": [1, 0, 0]
    }
  ],
  "dependencies": [
    { "module_name": "@minecraft/server", "version": "2.1.0" },
    { "module_name": "@minecraft/server-ui", "version": "2.0.0" },
    { "uuid": "41c19919-ee6e-4799-8f25-fb0d7b31299a", "version": [1, 0, 41] }
  ]
}
```

### 1.2 ตัวอย่างโครงสร้างฝั่ง Resource Pack (RP)
```json
{
  "format_version": 2,
  "header": {
    "name": "Thiang Na Story - Moblie [Resource Pack]",
    "description": "Thiang Na Story Official",
    "uuid": "41c19919-ee6e-4799-8f25-fb0d7b31299a",
    "min_engine_version": [1, 20, 130],
    "version": [1, 0, 113]
  },
  "modules": [
    {
      "type": "resources",
      "uuid": "3a3103e2-9446-414f-8b19-29edf3a51c43",
      "version": [1, 0, 113]
    }
  ],
  "dependencies": [
    { "uuid": "2fa986da-d7f6-4d5f-a64d-3630af333e69", "version": [1, 0, 14] }
  ]
}
```

---

## 🏷️ 2. มาตรฐานการตั้งชื่อและคำอธิบาย (Branding Standard)

เพื่อให้หน้าจอการจัดการแอดออนในโลก (World Settings) และหน้ารวมแพ็กของผู้เล่นเป็นระเบียบ เรียบร้อย ดูเป็นมืออาชีพ มีมาตรฐานดังนี้:

### 2.1 รูปแบบการตั้งชื่อ (`header.name`)
- **แอดออนหลักของเซิร์ฟเวอร์**:
  - BP: `Thiang Na Story - Moblie [Behavior Pack]`
  - RP: `Thiang Na Story - Moblie [Resource Pack]`
- **แอดออนระบบย่อย**: `Thiang Na Story - <ชื่อระบบ> [<Behavior Pack / Resource Pack>]`
  - ตกปลา: `Thiang Na Story - Fishing [Behavior Pack]` / `[Resource Pack]`
  - ตำรวจ: `Thiang Na Story - Police [Behavior Pack]` / `[Resource Pack]`
  - ไก่ชนไทย: `Thiang Na Story - Cockfighting [Behavior Pack]` / `[Resource Pack]`
  - เครื่องมือสร้างแมพ: `Thiang Na Story - World Builder [Behavior Pack]` / `[Resource Pack]`

### 2.2 คำอธิบายมาตรฐาน (`header.description`)
- **ต้องใช้คำว่า**: `Thiang Na Story Official` **เหมือนกันทุกไฟล์ 100%** ทั้งใน BP, RP และไฟล์ภาษา

---

## 🌐 3. ความสัมพันธ์ระหว่าง `manifest.json` กับโฟลเดอร์ `texts/`

หากในโฟลเดอร์แอดออนมีโฟลเดอร์ `texts/` (เช่น `en_US.lang`, `th_TH.lang`) ตัวเกม Bedrock จะตรวจสอบคีย์ `pack.name` และ `pack.description` ก่อน หากไม่ตรงกันอาจทำให้ในเกมแสดงผลคลาดเคลื่อนจาก `manifest.json`

### กฎการซิงก์สองฝั่ง:
เมื่อแก้ไขชื่อหรือคำอธิบาย ต้องอัปเดตไฟล์ภาษาให้ตรงกันเสมอ:
1. **`manifest.json`**:
   ```json
   "name": "Thiang Na Story - Moblie [Behavior Pack]",
   "description": "Thiang Na Story Official"
   ```
2. **`texts/en_US.lang` & `texts/th_TH.lang`**:
   ```properties
   pack.name=Thiang Na Story - Moblie [Behavior Pack]
   pack.description=Thiang Na Story Official
   ```

---

## 📋 4. ตารางตรวจสอบสถานะแอดออนทั้งหมดในเซิร์ฟเวอร์

| โฟลเดอร์แอดออน | ประเภท | ชื่อใน Manifest (`header.name`) | คำอธิบาย (`header.description`) |
| :--- | :---: | :--- | :--- |
| `Moblie - BP` | BP | `Thiang Na Story - Moblie [Behavior Pack]` | `Thiang Na Story Official` |
| `Moblie - RP` | RP | `Thiang Na Story - Moblie [Resource Pack]` | `Thiang Na Story Official` |
| `Fishing Add-On BP` | BP | `Thiang Na Story - Fishing [Behavior Pack]` | `Thiang Na Story Official` |
| `Fishing Add-On RP` | RP | `Thiang Na Story - Fishing [Resource Pack]` | `Thiang Na Story Official` |
| `Police BP` | BP | `Thiang Na Story - Police [Behavior Pack]` | `Thiang Na Story Official` |
| `Police RP` | RP | `Thiang Na Story - Police [Resource Pack]` | `Thiang Na Story Official` |
| `Thai Cockfighting BP` | BP | `Thiang Na Story - Cockfighting [Behavior Pack]` | `Thiang Na Story Official` |
| `Thai Cockfighting RP` | RP | `Thiang Na Story - Cockfighting [Resource Pack]` | `Thiang Na Story Official` |
| `World Builder Add-On BP` | BP | `Thiang Na Story - World Builder [Behavior Pack]` | `Thiang Na Story Official` |
| `World Builder Add-On RP` | RP | `Thiang Na Story - World Builder [Resource Pack]` | `Thiang Na Story Official` |

---

## ⚠️ 5. กฎเหล็กห้ามพลาด (Mandatory Rules)

1. **ห้ามเปลี่ยน UUID ส่งเดช**:
   - `header.uuid` คือ ID ประจำแพ็ก หากเปลี่ยนจะทำให้เกมคิดว่าเป็นคนละแพ็ก และต้องกดย้ายแอดออนในโลกใหม่
2. **การ Bump Version**:
   - **Resource Pack (RP ONLY)**: ทุกครั้งที่มีการแก้ Texture / UI / เสียง / Lang ต้องเพิ่มเลข Patch ใน `manifest.json` และซิงก์ `worlds/TEST/world_resource_packs.json` ทันที
   - **Behavior Pack (BP)**: ไม่ต้องเปลี่ยน Version ถ้าไม่มีการเปลี่ยนโครงสร้างข้อมูลระดับลึก
3. **ตรวจสอบ JSON เสมอ**:
   - ห้ามมี Trailing Comma (ลูกน้ำเกินตัวสุดท้าย) ใน JSON เพราะ Bedrock จะโหลดแอดออนล้มเหลวทันที
