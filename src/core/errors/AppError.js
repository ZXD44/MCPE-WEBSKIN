/**
 * Centralized Application Error System
 * Standardizes error codes, user-friendly messages, and developer debugging metadata
 */

export const ErrorCode = {
  // Import & Archive Errors
  IMPORT_EMPTY_FILE: 'IMPORT_EMPTY_FILE',
  IMPORT_FILE_TOO_LARGE: 'IMPORT_FILE_TOO_LARGE',
  IMPORT_TOO_MANY_FILES: 'IMPORT_TOO_MANY_FILES',
  IMPORT_TOTAL_SIZE_EXCEEDED: 'IMPORT_TOTAL_SIZE_EXCEEDED',
  IMPORT_PATH_TRAVERSAL: 'IMPORT_PATH_TRAVERSAL',
  IMPORT_NO_SKIN_FOUND: 'IMPORT_NO_SKIN_FOUND',
  IMPORT_INVALID_IMAGE: 'IMPORT_INVALID_IMAGE',
  IMPORT_UNSUPPORTED_TYPE: 'IMPORT_UNSUPPORTED_TYPE',

  // Skin Validation & Processing Errors
  SKIN_INVALID_DIMENSIONS: 'SKIN_INVALID_DIMENSIONS',
  SKIN_NON_SQUARE: 'SKIN_NON_SQUARE',
  SKIN_EMPTY_CANVAS: 'SKIN_EMPTY_CANVAS',
  SKIN_CONVERT_FAILED: 'SKIN_CONVERT_FAILED',

  // Addon Validation Errors
  VALIDATION_MISSING_MANIFEST: 'VALIDATION_MISSING_MANIFEST',
  VALIDATION_INVALID_JSON: 'VALIDATION_INVALID_JSON',
  VALIDATION_INVALID_UUID: 'VALIDATION_INVALID_UUID',
  VALIDATION_DUPLICATE_UUID: 'VALIDATION_DUPLICATE_UUID',
  VALIDATION_MISSING_TEXTURE: 'VALIDATION_MISSING_TEXTURE',
  VALIDATION_MISSING_GEOMETRY: 'VALIDATION_MISSING_GEOMETRY',

  // Generator Errors
  GENERATOR_MISSING_NAME: 'GENERATOR_MISSING_NAME',
  GENERATOR_MISSING_SKIN: 'GENERATOR_MISSING_SKIN',
  GENERATOR_ZIP_FAILED: 'GENERATOR_ZIP_FAILED',

  // Wardrobe Errors
  WARDROBE_EMPTY: 'WARDROBE_EMPTY',
  WARDROBE_CORRUPT: 'WARDROBE_CORRUPT'
};

const UserFriendlyMessages = {
  [ErrorCode.IMPORT_EMPTY_FILE]: 'ไฟล์ที่อัปโหลดมีขนาดว่างเปล่า',
  [ErrorCode.IMPORT_FILE_TOO_LARGE]: 'ขนาดไฟล์บีบอัดเกินขีดจำกัดความปลอดภัย (สูงสุด 25MB)',
  [ErrorCode.IMPORT_TOO_MANY_FILES]: 'ไฟล์ภายในแพ็กเกจมีจำนวนมากเกินไป (สูงสุด 250 ไฟล์)',
  [ErrorCode.IMPORT_TOTAL_SIZE_EXCEEDED]: 'ขนาดข้อมูลที่แตกออกมามีขนาดใหญ่เกินขีดจำกัด (สูงสุด 50MB)',
  [ErrorCode.IMPORT_PATH_TRAVERSAL]: 'ตรวจพบพาธไฟล์ที่ผิดปกติและอาจไม่ปลอดภัยในแพ็กเกจ',
  [ErrorCode.IMPORT_NO_SKIN_FOUND]: 'ไม่พบไฟล์ภาพสกิน (.png) ภายในไฟล์ที่นำเข้า',
  [ErrorCode.IMPORT_INVALID_IMAGE]: 'ไฟล์ภาพสกินเสียหายหรือไม่สามารถเปิดอ่านได้',
  [ErrorCode.IMPORT_UNSUPPORTED_TYPE]: 'ประเภทไฟล์ไม่ได้รับการสนับสนุน (รองรับ .png, .zip, .mcpack, .mcaddon)',

  [ErrorCode.SKIN_INVALID_DIMENSIONS]: 'ขนาดพิกเซลของสกินไม่ถูกต้อง (รองรับ 64x64 หรือสกิน HD เช่น 128, 256, 512 ถึง 4096)',
  [ErrorCode.SKIN_NON_SQUARE]: 'สกินต้องเป็นรูปสี่เหลี่ยมจัตุรัส (กว้างและสูงเท่ากัน ยกเว้นสกินดั้งเดิม 64x32)',
  [ErrorCode.SKIN_EMPTY_CANVAS]: 'ข้อมูลรูปภาพสกินว่างเปล่า',
  [ErrorCode.SKIN_CONVERT_FAILED]: 'เกิดข้อผิดพลาดในการแปลงสกินดั้งเดิม 64x32 เป็น 64x64',

  [ErrorCode.VALIDATION_MISSING_MANIFEST]: 'ไม่พบไฟล์ manifest.json ในแพ็กเกจ',
  [ErrorCode.VALIDATION_INVALID_JSON]: 'รูปแบบข้อมูล JSON ในแพ็กเกจไม่ถูกต้อง',
  [ErrorCode.VALIDATION_INVALID_UUID]: 'รหัส UUID ไม่ถูกต้องตามมาตรฐาน RFC4122',
  [ErrorCode.VALIDATION_DUPLICATE_UUID]: 'พบรหัส UUID ซ้ำกันภายในแพ็กเกจเดียวกัน',
  [ErrorCode.VALIDATION_MISSING_TEXTURE]: 'ไฟล์ภาพ Texture ที่แอดออนอ้างอิงถึงขาดหายไป',
  [ErrorCode.VALIDATION_MISSING_GEOMETRY]: 'ไม่พบนิยามโมเดล Geometry ที่แอดออนระบุ',

  [ErrorCode.GENERATOR_MISSING_NAME]: 'กรุณาระบุชื่อแอดออนและชื่อไอเทม',
  [ErrorCode.GENERATOR_MISSING_SKIN]: 'ไม่พบข้อมูลสกินสำหรับใช้สร้างแอดออน',
  [ErrorCode.GENERATOR_ZIP_FAILED]: 'เกิดข้อผิดพลาดในการสร้างไฟล์บีบอัดแอดออน',

  [ErrorCode.WARDROBE_EMPTY]: 'กรุณาสร้างตู้เสื้อผ้าอย่างน้อย 1 ตู้ก่อนส่งออก',
  [ErrorCode.WARDROBE_CORRUPT]: 'ไฟล์ไม่ถูกต้องหรือชำรุด ไม่สามารถเปิดตู้เสื้อผ้าได้'
};

export class AppError extends Error {
  constructor(code, details = null, customMessage = null) {
    const defaultMsg = UserFriendlyMessages[code] || 'เกิดข้อผิดพลาดที่ไม่สามารถระบุได้';
    const message = customMessage || defaultMsg;
    super(message);

    this.name = 'AppError';
    this.code = code;
    this.details = details;
    this.userMessage = message;
    this.timestamp = Date.now();
  }

  toJSON() {
    return {
      name: this.name,
      code: this.code,
      message: this.message,
      userMessage: this.userMessage,
      details: this.details,
      timestamp: this.timestamp
    };
  }
}
