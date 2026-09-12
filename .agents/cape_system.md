# ระบบผ้าคลุม (Cape System) — ฉบับสมบูรณ์

> เวอร์ชันล่าสุด: RP `1.0.120` | อัปเดต: 2026-09-12

---

## สารบัญ

1. [ภาพรวมสถาปัตยกรรม](#1-ภาพรวมสถาปัตยกรรม)
2. [โครงสร้างไฟล์](#2-โครงสร้างไฟล์)
3. [รายการผ้าคลุมทั้งหมด](#3-รายการผ้าคลุมทั้งหมด)
4. [ระบบการทำงาน — Script API](#4-ระบบการทำงาน--script-api)
5. [ระบบ Render (player.entity.json)](#5-ระบบ-render-playerentityjson)
6. [Render Controller](#6-render-controller)
7. [UI แอปผ้าคลุม](#7-ui-แอปผ้าคลุม)
8. [วิธีเพิ่มผ้าคลุมใหม่](#8-วิธีเพิ่มผ้าคลุมใหม่)
9. [ปัญหาที่พบและวิธีแก้ไข](#9-ปัญหาที่พบและวิธีแก้ไข)
10. [Manifest & Version Bump](#10-manifest--version-bump)

---

## 1. ภาพรวมสถาปัตยกรรม

```
[Smartphone App UI]
        |
        v
  capes.js (Script API)
   - openCapesApp()        <- เปิด UI
   - equipCape()           <- ใส่ผ้าคลุม
   - unequipCape()         <- ถอดผ้าคลุม
   - restoreEquippedCape() <- Restore หลัง spawn/respawn
        |
        | player.triggerEvent("capes:<name>")
        v
  player.json (BP entity)
   - component_groups: capes:<name>
   - mark_variant: <N>     <- ค่า int สำหรับ Render Controller
        |
        | query.mark_variant == N
        v
  player.entity.json (RP)
   - render_controllers -> controller.render.player.<name>_cape
        |
        v
  cape.render_controllers.json (RP)
   - textures.<key>
        |
        v
  textures/capes/<file>.png
```

**หลักการ**: Script ยิง `triggerEvent` -> BP entity เปลี่ยน `mark_variant` -> RP render controller ตรวจ `query.mark_variant` -> เลือก texture ผ้าคลุมที่ถูกต้อง

---

## 2. โครงสร้างไฟล์

### Behavior Pack (BP)

| ไฟล์ | หน้าที่ |
|------|---------|
| `Moblie - BP/scripts/smartphone/apps/capes.js` | Logic หลัก: รายการ, UI, equip/unequip |
| `Moblie - BP/entities/player.json` | entity component_groups + mark_variant |

### Resource Pack (RP)

| ไฟล์ | หน้าที่ |
|------|---------|
| `Moblie - RP/entity/player.entity.json` | ลงทะเบียน textures, geometry, render_controllers |
| `Moblie - RP/render_controllers/cape.render_controllers.json` | Render Controller แต่ละผ้าคลุม |
| `Moblie - RP/textures/capes/*.png` | ไฟล์ texture ผ้าคลุม |
| `Moblie - RP/textures/entity/cape_invisible.png` | ผ้าคลุมว่าง (default / unequip) |
| `Moblie - RP/textures/icons_apps/capes.png` | ไอคอนแอป |
| `Moblie - RP/textures/icons_apps/capes_app/unequip.png` | ไอคอนปุ่ม Unequip |
| `Moblie - RP/textures/textures_list.json` | ลงทะเบียน path ทุก texture |
| `Moblie - RP/manifest.json` | Version RP |

---

## 3. รายการผ้าคลุมทั้งหมด

| # | cape ID | ชื่อไทย | mark_variant | Texture Key |
|---|---------|---------|:---:|-------------|
| 0 | default (ไม่มี) | — | 0 | `cape` (invisible) |
| 1 | `capes:pan_cape` | กระทะแพนเค้ก | 1 | `pan_cape` |
| 2 | `capes:translator_cape` | นักแปลภาษา | 2 | `translator_cape` |
| 3 | `capes:cn_translator_cape` | นักแปลภาษาจีน | 3 | `cn_translator_cape` |
| 4 | `capes:scrolls_champion_cape` | แชมป์สโครลส์ | 4 | `scrolls_champion_cape` |
| 5 | `capes:cobalt_cape` | โคบอลต์ | 5 | `cobalt_cape` |
| 6 | `capes:moderator_cape` | ผู้ดูแล Mojira | 6 | `moderator_cape` |
| 7 | `capes:mapmaker_cape` | ผู้สร้างแผนที่ | 7 | `mapmaker_cape` |
| 8 | `capes:turtle_cape` | เต่าทะเล | 8 | `turtle_cape` |
| 9 | `capes:migrator_cape` | ไมเกรเตอร์ | 9 | `migrator_cape` |
| 10 | `capes:minecon2011_cape` | Minecon 2011 | 2011 | `minecon2011_cape` |
| 11 | `capes:minecon2012_cape` | Minecon 2012 | 2012 | `minecon2012_cape` |
| 12 | `capes:minecon2013_cape` | Minecon 2013 | 2013 | `minecon2013_cape` |
| 13 | `capes:minecon2015_cape` | Minecon 2015 | 2015 | `minecon2015_cape` |
| 14 | `capes:minecon2016_cape` | Minecon 2016 | 2016 | `minecon2016_cape` |
| 15 | `capes:minecon2019_cape` | Minecon 2019 | 2019 | `minecon2019_cape` |
| 16 | `capes:mojang_cape1` | โมแจงคลาสสิก | 951 | `mojang_cape1` |
| 17 | `capes:mojang_cape2` | โมแจงสีแดง | 952 | `mojang_cape2` |
| 18 | `capes:mojang_studios_cape` | โมแจงสตูดิโอ | 953 | `mojang_studios_cape` |
| 19 | `capes:bacon_cape` | เบคอน | 51 | `bacon_cape` |
| 20 | `capes:millionthsale_cape` | ฉลอง 1 ล้านยอดขาย | 52 | `millionthsale_cape` |
| 21 | `capes:dannybstyle_cape` | แดนนี่บีสไตล์ | 53 | `dannybstyle_cape` |
| 22 | `capes:julianclark_cape` | จูเลียน คลาร์ก | 54 | `julianclark_cape` |
| 23 | `capes:cheapsh0t_cape` | ชีปช็อต | 55 | `cheapsh0t_cape` |
| 24 | `capes:mr_messiah_cape` | มิสเตอร์เมสไซอาห์ | 56 | `mr_messiah_cape` |
| 25 | `capes:prismarine_cape` | ปริซมารีน | 57 | `prismarine_cape` |
| 26 | `capes:birthday_cape` | วันเกิด | 58 | `birthday_cape` |
| 27 | `capes:valentine_cape` | วาเลนไทน์ | 59 | `valentine_cape` |
| 28 | `capes:endermanwh_cape` | ไวท์เอนเดอร์แมน | 60 | `endermanwh_cape` |

> **หมายเหตุ**: mark_variant ของ Minecon ใช้ปี (2011-2019) เพื่อหลีกเลี่ยงการชนกับ variant อื่น

---

## 4. ระบบการทำงาน — Script API

**ไฟล์**: `Moblie - BP/scripts/smartphone/apps/capes.js`

### Functions ที่ Export

#### `getEquippedCape(player)`
ดึงผ้าคลุมที่ใส่อยู่ -> ตรวจ `DynamicProperty("equipped_cape")` ก่อน แล้ว fallback ไป tag

#### `hasCapeUnlocked(player, cape)`
ตรวจว่าปลดล็อกแล้วหรือยัง -> tag `cape:<id>` หรือ tag `<id>` ตรง

#### `equipCape(player, cape)`
```
1. ลบ tag ผ้าคลุมเก่าทั้งหมดออก
2. addTag(cape.cape)
3. setDynamicProperty("equipped_cape", cape.cape)
4. player.triggerEvent(cape.cape)  -> เปลี่ยน mark_variant ใน BP
5. playSound("armor.equip_leather")
```

#### `unequipCape(player)`
```
1. ลบ tag ผ้าคลุมทั้งหมด
2. setDynamicProperty("equipped_cape", "")
3. player.triggerEvent("capes:remove_cape") -> mark_variant = 0
4. playSound("random.break")
```

#### `restoreEquippedCape(player)`
เรียกตอน `playerSpawn` (delay 10 ticks) -> ยิง triggerEvent คืนให้ผ้าคลุมกลับมา

#### `openCapesApp(player)`
เปิด ActionFormData style `smartphone-LIST`

### Auto-Restore on Spawn
```js
mc.world.afterEvents.playerSpawn.subscribe(({ player }) => {
    mc.system.runTimeout(() => restoreEquippedCape(player), 10);
});
```

### ระบบซื้อ
1. ตรวจ `money` DynamicProperty
2. ถ้าเงินพอ: หัก money -> addTag(`cape:<id>`) -> equipCape()
3. ถ้าไม่พอ: แจ้ง message + playSound("note.bass")

---

## 5. ระบบ Render (player.entity.json)

**ไฟล์**: `Moblie - RP/entity/player.entity.json`

### ค่าสำคัญใน description

```json
{
  "format_version": "1.26.0",
  "minecraft:client_entity": {
    "description": {
      "identifier": "minecraft:player",
      "min_engine_version": "1.8.0",
      ...
    }
  }
}
```

> **`min_engine_version: "1.8.0"`** เปิดโหมด Persona Skin Rendering ของ Bedrock Engine
> ทำให้ชุด 3D, Character Creator, และชุดจากร้านค้าแสดงผลถูกต้อง
> **ห้ามลบ** หรือตัวละครจะกลายเป็น Steve และ Persona/Dressing Room ไม่ทำงาน

### Textures ที่ลงทะเบียน

```json
"textures": {
    "default":    "textures/entity/steve",
    "cape":       "textures/entity/cape_invisible",
    "pan_cape":   "textures/capes/Pancape_Cape",
    "cobalt_cape":"textures/capes/Cobalt_Cape",
    ...
}
```

### Render Controllers array

Condition pattern ทุกผ้าคลุม:
```
!variable.is_first_person && !variable.map_face_icon && !query.is_spectator && query.mark_variant == N
```

| Controller | Condition |
|------------|-----------|
| `default_cape` | mark_variant == 0 |
| `pan_cape` | mark_variant == 1 |
| `cobalt_cape` | mark_variant == 5 |
| `minecon2011_cape` | mark_variant == 2011 |
| `mojang_cape1` | mark_variant == 951 |
| `bacon_cape` | mark_variant == 51 |
| ... | ... |

### Geometry & Materials

```json
"geometry": {
    "default": "geometry.humanoid.custom",
    "cape":    "geometry.cape"
},
"materials": {
    "default":   "entity_alphatest",
    "cape":      "entity_alphatest",
    "animated":  "player_animated",
    "spectator": "player_spectator"
},
"enable_attachables": true
```

---

## 6. Render Controller

**ไฟล์**: `Moblie - RP/render_controllers/cape.render_controllers.json`

Pattern สำหรับผ้าคลุมแต่ละชิ้น:

```json
"controller.render.player.cobalt_cape": {
    "geometry": "Geometry.cape",
    "materials": [{ "*": "Material.cape" }],
    "textures": ["Texture.cobalt_cape"]
}
```

ผ้าคลุม default (ไม่สวมใส่):

```json
"controller.render.player.default_cape": {
    "geometry": "Geometry.cape",
    "materials": [{ "*": "Material.cape" }],
    "textures": ["Texture.cape"]
}
```

---

## 7. UI แอปผ้าคลุม

**ประเภท**: `ActionFormData` (title: `§smartphone-LIST§r`)

### Layout

```
Index 0: [Back]     -> กลับ Home
Index 1: [Unequip]  -> ถอดผ้าคลุม (icon: capes_app/unequip)
Index 2+: [ผ้าคลุมแต่ละชิ้น]
```

### สถานะปุ่มผ้าคลุม

| สถานะ | บรรทัด 1 | บรรทัด 2 |
|------|----------|----------|
| กำลังใส่อยู่ | `§e[ใส่] §fชื่อ` | `§aกำลังสวมใส่อยู่` |
| มีแล้ว (ไม่ได้ใส่) | `§a[มีแล้ว] §fชื่อ` | `§7แตะเพื่อสวมใส่` |
| ยังไม่มี | `§fชื่อ` | `§7N เหรียญ` |

### การ handle selection

- Index 0 -> `openHomeScreen(player)`
- Index 1 -> `unequipCape()` -> refresh UI
- Index 2+ -> capeIndex = selection - 2
  - ใส่อยู่แล้ว -> ถอด
  - มีแล้ว -> ใส่
  - ไม่มี -> ตรวจเงิน -> ซื้อ+ใส่

---

## 8. วิธีเพิ่มผ้าคลุมใหม่

### Step 1 — เตรียม Texture
```
textures/capes/<name>capes.png   (64x32 หรือ 64x64 px)
```
ลงทะเบียนใน `textures_list.json`:
```json
"textures/capes/<name>capes"
```

### Step 2 — เพิ่มใน capes.js
```js
{
    cape: "capes:<name>_cape",
    name: "Name EN",
    thaiName: "ชื่อไทย",
    cost: 1,
    texture: "textures/capes/<name>capes"
}
```

### Step 3 — เพิ่ม texture key ใน player.entity.json (RP)
```json
"textures": {
    "<name>_cape": "textures/capes/<name>capes"
}
```

### Step 4 — เพิ่ม render_controllers entry ใน player.entity.json (RP)
เลือก mark_variant ที่ยังว่าง:
```json
{
    "controller.render.player.<name>_cape":
    "!variable.is_first_person && !variable.map_face_icon && !query.is_spectator && query.mark_variant == <N>"
}
```

### Step 5 — เพิ่ม Render Controller JSON
ใน `cape.render_controllers.json`:
```json
"controller.render.player.<name>_cape": {
    "geometry": "Geometry.cape",
    "materials": [{ "*": "Material.cape" }],
    "textures": ["Texture.<name>_cape"]
}
```

### Step 6 — เพิ่ม Component Group + Event ใน BP player.json
```json
"component_groups": {
    "capes:<name>_cape": {
        "minecraft:mark_variant": { "value": <N> }
    }
},
"events": {
    "capes:<name>_cape": {
        "add": { "component_groups": ["capes:<name>_cape"] },
        "remove": { "component_groups": ["capes:remove_cape"] }
    }
}
```

### Step 7 — Bump RP Version
```
manifest.json:              1.0.X -> 1.0.X+1
world_resource_packs.json:  sync ให้ตรงกัน
```

---

## 9. ปัญหาที่พบและวิธีแก้ไข

### ปัญหา: ตัวละครกลายเป็น Steve / ไม่รองรับ Persona / Dressing Room

**สาเหตุ**: ไม่มี `min_engine_version` ใน `description` ของ `player.entity.json`

**แก้ไข**: เพิ่มใต้ `identifier` ใน RP player.entity.json:
```json
"identifier": "minecraft:player",
"min_engine_version": "1.8.0",
```

---

### ปัญหา: Animation Error — can't find animation `first_person_shield_block` / `riding.root` / `crawling` / ฯลฯ

**สาเหตุ**: `player.entity.json` เก่าอ้างอิง animation key ที่ไม่มีในเกม 1.21.130+

**แก้ไข**:
- ใช้ `player.entity.json` vanilla 1.21.130 เป็นฐาน (`format_version: "1.26.0"`)
- ตัด animation key ที่ไม่มีไฟล์รองรับออก
- Key ที่มักหายในเวอร์ชันเก่า: `swimming.no_right_arm`
- Key ที่เพิ่มใหม่ใน 1.21+: `tooting_goat_horn`, `holding_brush`, `brushing`, `holding_heavy_core` — ต้องมี animation file ด้วย

---

### ปัญหา: Animation Error — can't find animation `first_person_breathing_bob`

**สาเหตุ**: เมื่อเปิดโหมด Persona Skin Rendering (`min_engine_version: "1.8.0"`) ตัวเอนจินของเกมในโหมดมุมมองบุคคลที่ 1 จะเรียกหา animation alias `first_person_breathing_bob` แต่ใน `player.entity.json` ไม่ได้ประกาศไว้

**แก้ไข**: เพิ่มใน `"animations"` ของ `player.entity.json`:
```json
"first_person_breathing_bob": "animation.player.first_person.breathing_bob",
"first_person_crossbow_hold": "animation.player.first_person.crossbow_hold",
"first_person_attack_rotation_item": "animation.player.first_person.attack_rotation_item",
"fishing_rod": "animation.humanoid.fishing_rod"
```

---

### ปัญหา: Render Controller Error — can't find render controller

**สาเหตุ**: ใน `render_controllers` array อ้างถึง controller ที่ไม่มีในไฟล์

**แก้ไข**:
1. ตรวจว่า `cape.render_controllers.json` มี entry ครบ
2. ลบ entry ที่ไม่มีจริงออกจาก `player.entity.json`
3. ห้ามปล่อย controller เก่า (`spectator_cape`, `elytra.json`) ค้างไว้

---

### ปัญหา: ผ้าคลุมไม่แสดงเลย (invisible)

**สาเหตุที่เป็นไปได้**:
1. `mark_variant` ยังเป็น 0 (default cape = invisible)
2. `texture` path ใน `capes.js` ผิด
3. ไม่ได้ลงทะเบียน texture key ใน `player.entity.json`
4. `triggerEvent` ล้มเหลว (ดู console log)

---

### ปัญหา: ผ้าคลุมหายหลัง respawn

**สาเหตุ**: `triggerEvent` ไม่ถูกยิงซ้ำหลัง spawn ใหม่

**แก้ไข** (มีอยู่แล้วใน capes.js — ห้ามลบ):
```js
mc.world.afterEvents.playerSpawn.subscribe(({ player }) => {
    mc.system.runTimeout(() => restoreEquippedCape(player), 10);
});
```

---

### ปัญหา: ไอคอนผ้าคลุมใน UI แสดงเป็นกล่องขาว

**สาเหตุ**: path ใน `texture` field ผิด หรือไม่ได้ลงทะเบียนใน `textures_list.json`

**แก้ไข** — format ใน textures_list.json ต้องไม่มี `.png`:
```json
"textures/capes/<name>capes"
```

---

## 10. Manifest & Version Bump

### กฎ

เมื่อแก้ไข RP ใดๆ (texture / entity / render controller / lang):

1. Bump patch ใน `Moblie - RP/manifest.json` (header.version + modules[0].version)
2. Sync `worlds/TEST/world_resource_packs.json` (pack_id: `41c19919-ee6e-4799-8f25-fb0d7b31299a`)
3. ไม่ต้อง bump BP manifest

### ประวัติ Version

| Version | การเปลี่ยนแปลง |
|---------|----------------|
| `1.0.118` | Migration ระบบผ้าคลุมเข้า Smartphone App, ลบ Cape Shop addon เก่า, แก้ animation/geometry errors |
| `1.0.119` | เพิ่ม `min_engine_version: "1.8.0"` แก้ปัญหา Steve / Persona ไม่แสดง |
| `1.0.120` | เพิ่ม animation alias `first_person_breathing_bob`, `first_person_crossbow_hold`, `first_person_attack_rotation_item`, `fishing_rod` ใน `player.entity.json` แก้ error Persona FPP |
