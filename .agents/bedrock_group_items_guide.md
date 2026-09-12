# 📦 คู่มือระบบ Group Items ใน Minecraft Bedrock ฉบับสมบูรณ์ตั้งแต่ 0
**Bedrock Crafting & Creative Item Catalog System (Complete Master Guide)**

---

## 📑 สารบัญเนื้อหา (Table of Contents)
1. [ปูพื้นฐานระบบ Group Items คืออะไร? (Introduction from Scratch)](#1-ปูพื้นฐานระบบ-group-items-คืออะไร-introduction-from-scratch)
2. [สถาปัตยกรรม 3 เสาหลักที่ต้องทำงานร่วมกัน (3 Pillar Architecture)](#2-สถาปัตยกรรม-3-เสาหลักที่ต้องทำงานร่วมกัน-3-pillar-architecture)
3. [หมวดหมู่มาตรฐานทั้ง 4 ของ Bedrock (Vanilla Menu Categories)](#3-หมวดหมู่มาตรฐานทั้ง-4-ของ-bedrock-vanilla-menu-categories)
4. [โครงสร้างไฟล์ `crafting_item_catalog.json`](#4-โครงสร้างไฟล์-crafting_item_catalogjson)
5. [⚠️ กฎเหล็กห้ามลืมเด็ดขาด (Critical Golden Rules)](#5-⚠️-กฎเหล็กห้ามลืมเด็ดขาด-critical-golden-rules)
6. [ระบบแปลภาษาชื่อกลุ่ม 100% (Localization in RP)](#6-ระบบแปลภาษาชื่อกลุ่ม-100-localization-in-rp)
7. [กรณีศึกษาจากโปรเจกต์จริง (Real-World Case Studies)](#7-กรณีศึกษาจากโปรเจกต์จริง-real-world-case-studies)
8. [คู่มือแก้ข้อผิดพลาดที่พบบ่อย (Troubleshooting & Debugging)](#8-คู่มือแก้ข้อผิดพลาดที่พบบ่อย-troubleshooting--debugging)
9. [🤖 รวมคำสั่ง Prompt AI สำหรับสร้างระบบ Group Items (Ready-to-Use AI Prompts)](#9-🤖-รวมคำสั่ง-prompt-ai-สำหรับสร้างระบบ-group-items-ready-to-use-ai-prompts)

---

## 1. ปูพื้นฐานระบบ Group Items คืออะไร? (Introduction from Scratch)

ใน Minecraft Bedrock (เวอร์ชัน 1.20+ จนถึง 1.21.60+) หน้าต่าง **Creative Inventory** และ **Recipe Book (สมุดสูตรคราฟต์)** มีฟังก์ชันพิเศษที่เรียกว่า **"Item Grouping"**:
- **แบบไม่มี Group Items**: หากแอดออนของคุณมีไอเทม 50 ชิ้น ไอเทมทั้งหมดจะลอยเกะกะกระจัดกระจายเต็มหน้ากระเป๋า ทำให้ผู้เล่นหาของยากและดูไม่เป็นมืออาชีพ
- **แบบมี Group Items**: ไอเทมประเภทเดียวกันสามารถ **"พับรวมเป็นไอคอนเดียว"** ได้ เช่น คันเบ็ด 10 คันจะรวมอยู่หลังไอคอนเบ็ดเพชรอันเดียว เมื่อผู้เล่นคลิกที่ไอคอนกลุ่ม รายการเบ็ดทั้ง 10 คันจะคลี่ขยายกางออกมา (Expand/Collapse) อย่างสวยงามแบบเดียวกับไอเทมทางการของ Mojang

```text
+-------------------------------------------------------------------------+
| [หน้าต่าง Creative Inventory]                                             |
|                                                                         |
|  [ ไอคอนเบ็ดเพชร ] ---> เมื่อชี้เมาส์: "คันเบ็ดตกปลา (Fishing Rods)"      |
|         │                                                               |
|         └───> เมื่อคลิกจะคลี่ขยายคันเบ็ดทั้ง 10 คันออกมาให้เลือกหยิบ      |
+-------------------------------------------------------------------------+
```

---

## 2. สถาปัตยกรรม 3 เสาหลักที่ต้องทำงานร่วมกัน (3 Pillar Architecture)

ระบบ Group Items จะทำงานสมบูรณ์ 100% ปราศจาก Error หรือ Warning ได้นั้น **ต้องอาศัย 3 เสาหลักทำงานสอดคล้องกัน**:

```text
               ┌──────────────────────────────────────────────────────────┐
               │              3 เสาหลักของระบบ Group Items                  │
               └────────────────────────────┬─────────────────────────────┘
                                            │
        ┌───────────────────────────────────┼───────────────────────────────────┐
        ▼                                   ▼                                   ▼
┌──────────────────────────┐    ┌──────────────────────────┐    ┌──────────────────────────┐
│ เสาที่ 1: กำหนดหมวดในไอเทม │    │ เสาที่ 2: สร้างกลุ่มแคตตาล็อก │    │ เสาที่ 3: ลงทะเบียนแปลภาษา │
│  BP/items/<item>.json    │    │ BP/.../crafting_item_catalog │    │  RP/texts/*.lang         │
│  "category": "equipment" │    │  "category_name": "equipment"│    │  kubo:group_rods=คันเบ็ด │
└──────────────────────────┘    └──────────────────────────┘    └──────────────────────────┘
```

1. **เสาที่ 1 (ไฟล์ไอเทมเดี่ยว ใน BP)**:
   - ไฟล์: `BP/items/<item_name>.json`
   - หน้าที่: กำหนดว่าไอเทมชิ้นนั้นสังกัดหมวดหมู่อะไรผ่าน `menu_category.category`
2. **เสาที่ 2 (ไฟล์แคตตาล็อกรวมกลุ่ม ใน BP & RP)**:
   - ไฟล์: `BP/item_catalog/crafting_item_catalog.json` (และซิงก์ใน `RP`)
   - หน้าที่: จัดไอเทมเข้ากลุ่ม กำหนดไอคอนหน้ากลุ่ม และตั้งรหัสคีย์ชื่อกลุ่ม
3. **เสาที่ 3 (ไฟล์แปลภาษา ใน RP)**:
   - ไฟล์: `RP/texts/th_TH.lang` และ `RP/texts/en_US.lang`
   - หน้าที่: แปลรหัสชื่อกลุ่มให้แสดงผลเป็นภาษาไทยและภาษาอังกฤษ ไม่ให้ขึ้นเป็นรหัสดิบ

---

## 3. หมวดหมู่มาตรฐานทั้ง 4 ของ Bedrock (Vanilla Menu Categories)

Minecraft Bedrock แบ่งแถบหมวดหมู่ใน Creative Inventory ออกเป็น **4 หมวดเท่านั้น**:

| ชื่อหมวดหมู่ (`category`) | แถบไอคอนในเกม | ประเภทไอเทมที่เหมาะสม | ตัวอย่างไอเทม |
|---|:---:|---|---|
| `"construction"` | 🧱 บล็อกอิฐ | บล็อกสำหรับสร้างบ้าน, กำแพง, บันได, แผ่นพื้น | บล็อกไม้, หินแปรรูป, บล็อกคอนกรีต |
| `"equipment"` | ⚔️ ดาบทอง | อาวุธ, ชุดเกราะ, เครื่องมือ, เบ็ดตกปลา, อาหารปรุงสุก | ดาบ, ธนู, คันเบ็ด, ปลาดุกย่าง, เกราะ |
| `"items"` | 🍎 แอปเปิล | วัตถุดิบผสม, แร่แปรรูป, ชิ้นส่วนดรอป, หนังสือ | แท่งเหล็ก, เศษผง, เหยื่อตกปลา |
| `"nature"` | 🌿 ต้นกล้า | บล็อกธรรมชาติ, แร่ดิบ, พืช, สัตว์, ปลาเป็น/ปลาดิบ | เมล็ดพืช, ปลาสด, เนื้อปลาดิบ, หนอนดิน |

---

## 4. โครงสร้างไฟล์ `crafting_item_catalog.json`

ตำแหน่งไฟล์: `development_behavior_packs/<Addon_BP>/item_catalog/crafting_item_catalog.json`

### ตัวอย่างโครงสร้างมาตรฐาน:
```json
{
  "format_version": "1.21.60",
  "minecraft:crafting_items_catalog": {
    "categories": [
      {
        "category_name": "equipment",
        "groups": [
          {
            "group_identifier": {
              "icon": "my_addon:ruby_sword",
              "name": "my_addon:group_swords"
            },
            "items": [
              "my_addon:ruby_sword",
              "my_addon:sapphire_sword",
              "my_addon:emerald_sword"
            ]
          }
        ]
      },
      {
        "category_name": "nature",
        "groups": [
          {
            "group_identifier": {
              "icon": "my_addon:ruby_ore",
              "name": "my_addon:group_ores"
            },
            "items": [
              "my_addon:ruby_ore",
              "my_addon:sapphire_ore"
            ]
          }
        ]
      }
    ]
  }
}
```

### คำอธิบายฟิลด์สำคัญ:
- `format_version`: **ต้องเป็น `"1.21.60"` เท่านั้น**
- `category_name`: ต้องตรงกับ 1 ใน 4 หมวดมาตรฐาน (`construction`, `equipment`, `items`, `nature`)
- `group_identifier.icon`: Identifier ของไอเทมที่จะนำรูปมาเป็นหน้าปกกลุ่ม
- `group_identifier.name`: รหัสคีย์สำหรับนำไปใส่คำแปลใน `.lang`
- `items`: อาร์เรย์เก็บ Identifier ของไอเทมทั้งหมดที่ต้องการพับรวมในกลุ่มนี้

---

## 5. ⚠️ กฎเหล็กห้ามลืมเด็ดขาด (Critical Golden Rules)

### 🔴 กฎข้อที่ 1: `format_version` ต้องเป็น `"1.21.60"` เสมอ
- ❌ **ห้ามใส่**: `"1.21.50"`, `"1.20.50"` หรือ `"1.20.0"`
- หากใส่เวอร์ชันอื่น ตัวเกมจะฟ้อง Error ทันที:
  ```text
  [ERROR] [Item] .../crafting_item_catalog.json | The file cannot be processed without a valid format_version
  ```

### 🔴 กฎข้อที่ 2: Category ใน `items/*.json` และ Catalog ต้องตรงกัน 100%
- ในไฟล์ไอเทม `BP/items/my_item.json`:
  ```json
  "menu_category": { "category": "equipment" }
  ```
- ในไฟล์ `crafting_item_catalog.json` ไอเทมนี้ **ต้องอยู่ภายใต้ `"category_name": "equipment"` เท่านั้น**
- ❌ **หากหมวดไม่ตรงกัน** เช่น ไอเทมถูกสร้างด้วย `nature` แต่นำไปใส่ในแคตตาล็อกหมวด `items` ตัวเกมจะขึ้น Warning รัวๆ:
  ```text
  [WARN] [Item] .../crafting_item_catalog.json | The item my_addon:fish was created with the category set to 'nature', and is now being set to 'items'
  ```

### 🔴 กฎข้อที่ 3: ซิงก์ไฟล์แคตตาล็อกไว้ทั้ง BP และ RP
- เพื่อให้ตัวเกมทั้งฝั่ง Server (BP) และ Client (RP) ประมวลผลหน้าต่างไอเทมได้ตรงกันและโหลดทันที ควรคัดลอกไฟล์ `crafting_item_catalog.json` ไว้ที่โฟลเดอร์ `item_catalog/` ของทั้ง **Behavior Pack** และ **Resource Pack**

---

## 6. ระบบแปลภาษาชื่อกลุ่ม 100% (Localization in RP)

เมื่อผู้เล่นนำเมาส์ไปชี้ที่ไอคอนหน้ากลุ่ม ตัวเกมจะนำค่าจาก `group_identifier.name` ไปค้นหาคำแปลใน Resource Pack

### 📄 วิธีการเขียนใน `RP/texts/th_TH.lang` (ภาษาไทย):
```properties
## Creative Inventory Groups
my_addon:group_swords=ดาบธาตุศักดิ์สิทธิ์
my_addon:group_ores=แร่ธาตุอัญมณี
itemGroup.name.my_addon:group_swords=ดาบธาตุศักดิ์สิทธิ์
itemGroup.name.my_addon:group_ores=แร่ธาตุอัญมณี
```

### 📄 วิธีการเขียนใน `RP/texts/en_US.lang` (ภาษาอังกฤษ):
```properties
## Creative Inventory Groups
my_addon:group_swords=Elemental Swords
my_addon:group_ores=Gem Ores
itemGroup.name.my_addon:group_swords=Elemental Swords
itemGroup.name.my_addon:group_ores=Gem Ores
```

> 💡 **สูตรสำเร็จ:** ใส่ทั้งแบบ `รหัสกลุ่ม=คำแปล` และแบบวนิลา `itemGroup.name.รหัสกลุ่ม=คำแปล` เสมอ เพื่อให้รองรับ Bedrock Engine ทุกเวอร์ชัน

---

## 7. กรณีศึกษาจากโปรเจกต์จริง (Real-World Case Studies)

### 📌 กรณีศึกษาที่ 1: แอดออนดาบธาตุ (`ดาบธาตุ Edit By ZirconX`)
ในโปรเจกต์ดาบธาตุ มีไอเทมดาบ 18 เล่ม และเศษชิ้นส่วนธาตุ 20 ชิ้น:
- **หมวด `equipment`**:
  - สร้างกลุ่ม `rex:elemental_weapon` (ไอคอน: `rex:leaf`) รวมดาบทั้ง 18 เล่ม
  - ในไฟล์ดาบทุกชิ้น (`api.json`, `bluf.json` ฯลฯ) ระบุ `"category": "equipment"`
- **หมวด `nature`**:
  - สร้างกลุ่ม `element:elemental_fragments` (ไอคอน: `element:wind`) รวมชิ้นส่วนธาตุทั้ง 20 ชิ้น
  - ในไฟล์ชิ้นส่วนทุกชิ้น ระบุ `"category": "nature"`
- **ผลลัพธ์**: โหลดเร็ว เป็นระเบียบ ไร้ Warning 100%

### 📌 กรณีศึกษาที่ 2: แอดออนตกปลา (`Fishing Add-On BP`)
ในโปรเจกต์ตกปลามีไอเทม 60 ชิ้น ต้องการแยกปลาและอุปกรณ์ทั้งหมดไม่ให้ไปปะปนกับหมวดธรรมชาติ (`nature`):
- **หมวด `equipment`**:
  - กลุ่ม **`คันเบ็ดตกปลา`** (`kubo_fs:group_fishing_rods`) -> เบ็ด 10 คัน (ไฟล์ไอเทมตั้ง `menu_category.category = "equipment"`)
- **หมวด `items`**:
  - กลุ่ม **`ปลาที่ตกได้`** (`kubo_fs:group_fishes`) -> ปลาทั้ง 30 ชนิด (ไฟล์ไอเทมตั้ง `menu_category.category = "items"`)
  - กลุ่ม **`เหยื่อตกปลา`** (`kubo_fs:group_baits`) -> หนอนดิน, หนอนทราย, หนอนมอส 3 ชิ้น
  - กลุ่ม **`ผลิตภัณฑ์และอาหารจากปลา`** (`kubo_fs:group_fish_products`) -> เนื้อปลาดิบ 7 ชิ้น, เนื้อปลาสุก 6 ชิ้น, ปลาไหลเนเธอร์แห้ง, ครีบปลา, เกล็ดมังกรโบราณ (17 ชิ้น)
- **ผลลัพธ์**:
  - ไม่มีไอเทมใดๆ ไปปะปนในหมวดธรรมชาติ (`nature`) เลย
  - Category ในไฟล์ไอเทมทุกชิ้นตรงกับ Catalog 100% ทำให้ไม่พบ Warning ใน Log เลยแม้แต่บรรทัดเดียว!

---

## 8. คู่มือแก้ข้อผิดพลาดที่พบบ่อย (Troubleshooting & Debugging)

| ปัญหาที่พบ | สาเหตุ | วิธีแก้ไข |
|---|---|---|
| **ERROR:** `The file cannot be processed without a valid format_version` | ใส่ `format_version` เป็น 1.21.50 หรือเวอร์ชันเก่า | เปลี่ยนเป็น `"format_version": "1.21.60"` ใน `crafting_item_catalog.json` |
| **WARN:** `The item ... was created with the category set to 'X', and is now being set to 'Y'` | Category ในไฟล์ไอเทมเดี่ยวกับในแคตตาล็อกไม่ตรงกัน | ย้ายกลุ่มไอเทมนั้นในแคตตาล็อกให้ไปอยู่ใต้ `category_name` เดียวกับไฟล์ไอเทม |
| **WARN:** `The item ... was created with the group set to 'minecraft:group_name', but is now being set to 'group_name'` | ใส่ฟิลด์ `"group"` ในไฟล์ `items/<item>.json` ทำให้เอนจินเกมเติม namespace `minecraft:` ดักหน้า | **ลบฟิลด์ `"group"` ออกจาก `items/<item>.json` ทั้งหมด** ให้เหลือเฉพาะ `"menu_category": { "category": "..." }` แล้วปล่อยให้ `crafting_item_catalog.json` เป็นตัวจัดกลุ่มเอง |
| **ชื่อกลุ่มขึ้นเป็นรหัสดิบ** (เช่น `kubo_fs:group_rods`) | ไม่ได้ใส่คีย์แปลในไฟล์ `.lang` หรือพิมพ์ชื่อคีย์ผิด | เพิ่มคีย์ `kubo_fs:group_rods=ชื่อไทย` ลงใน `th_TH.lang` และ `en_US.lang` |
| **ไอคอนหน้ากลุ่มเป็นกล่องสีดำ-ม่วง** | ไอเทมที่เป็น Icon ยังไม่ได้ลงทะเบียน Texture | ตรวจสอบไฟล์ `RP/textures/item_texture.json` ว่าไอเทม Icon นั้นมี Texture หรือไม่ |
| **ไอเทมบางชิ้นไม่โผล่ในกลุ่ม** | พิมพ์ Identifier ตกหล่นหรือมีตัวพิมพ์เล็ก-ใหญ่ผิด | ก๊อบปี้ชื่อ `identifier` จากไฟล์ `items/<item>.json` มาวางในอาร์เรย์ `items` ให้ตรงเป๊ะ |

---

## 9. 🤖 รวมคำสั่ง Prompt AI สำหรับสร้างระบบ Group Items (Ready-to-Use AI Prompts)

สามารถคัดลอก Prompt ด้านล่างนี้ไปสั่ง AI ให้ทำงานจัดกลุ่มไอเทมในแอดออนของคุณได้ทันที:

### 🎯 Prompt 1: ให้ AI สร้างระบบ Group Items ตั้งแต่ต้น (Full Setup)
```markdown
คุณคือผู้เชี่ยวชาญการพัฒนา Minecraft Bedrock Add-on กรุณาสร้างระบบ Creative Inventory Group Items ให้กับแอดออนของฉันตามข้อกำหนดต่อไปนี้:

1. ตรวจสอบไฟล์ไอเทมทั้งหมดในโฟลเดอร์ `BP/items/` เพื่อดูว่าไอเทมแต่ละชิ้นมี `menu_category.category` เป็นหมวดใด (`construction`, `equipment`, `items`, หรือ `nature`)
2. สร้างไฟล์ `BP/item_catalog/crafting_item_catalog.json` โดยใช้ `"format_version": "1.21.60"`
3. จัดกลุ่มไอเทมตามประเภทการใช้งาน เช่น กลุ่มอาวุธ, กลุ่มชุดเกราะ, กลุ่มวัตถุดิบ โดยต้องจับคู่ให้ `category_name` ในแคตตาล็อกตรงกับ `menu_category.category` ของไอเทมแต่ละชิ้น 100% เพื่อไม่ให้เกิด Warning ใน Log
4. เลือกไอคอนหน้ากลุ่มที่เด่นชัด และตั้งรหัสกลุ่มในรูปแบบ `<namespace>:group_<type>`
5. ซิงก์ไฟล์แคตตาล็อกไปยัง `RP/item_catalog/crafting_item_catalog.json`
6. เพิ่มคำแปลชื่อกลุ่มทั้งภาษาไทย (`RP/texts/th_TH.lang`) และภาษาอังกฤษ (`RP/texts/en_US.lang`) ทั้งแบบตรงและแบบ `itemGroup.name.<name>`
7. ทำการ Bump patch version ใน `RP/manifest.json` และซิงก์ `world_resource_packs.json`
```

### 🎯 Prompt 2: ให้ AI แก้ไข Warning Category หรือ Group Mismatch
```markdown
ฉันพบ Warning ใน Log ของ Minecraft Bedrock ดังนี้:
- "The item <item_id> was created with the category set to '<cat_A>', and is now being set to '<cat_B>'"
- หรือ "The item <item_id> was created with the group set to 'minecraft:<group>', but is now being set to '<group>'"

กรุณาแก้ไขโดย:
1. ตรวจสอบไฟล์ไอเทม `BP/items/<item>.json` ให้แน่ใจว่า:
   - มีเฉพาะฟิลด์ `"category"` เท่านั้น (เช่น `"menu_category": { "category": "equipment" }`)
   - **ลบฟิลด์ `"group"` ออกจากไฟล์ไอเทมทั้งหมด** เพื่อป้องกันไม่ให้เอนจินเติม `minecraft:` ดักหน้า
2. ย้ายไอเทมใน `crafting_item_catalog.json` ไปอยู่ใต้บล็อก `category_name` เดียวกับไฟล์ไอเทม เพื่อไม่ให้เกิด Category Mismatch
3. ตรวจสอบว่า `format_version` เป็น `"1.21.60"`
4. ซิงก์ Catalog ไปยัง RP, อัปเดตไฟล์ `.lang` และ Bump RP version ตามกฎ
```

### 🎯 Prompt 3: ให้ AI สแกนไอเทมทั้งหมดและจัดหมวดหมู่อัตโนมัติ (Audit & Categorize)
```markdown
กรุณาเขียน Node.js script สแกนไฟล์ไอเทมทั้งหมดใน `BP/items/*.json` แล้วสรุปออกมาเป็นตาราง:
1. รายชื่อไอเทมทั้งหมดแยกตามหมวดหมู่ `category` ที่ระบุไว้ในไฟล์
2. สร้างไฟล์ `crafting_item_catalog.json` ที่จับกลุ่มไอเทมเหล่านั้นให้อัตโนมัติ โดยจับกลุ่มไม่เกิน 4-5 กลุ่มใหญ่
3. บันทึกคำแปลชื่อกลุ่มภาษาไทยและอังกฤษลงในไฟล์ `.lang` พร้อมใช้งาน
```
