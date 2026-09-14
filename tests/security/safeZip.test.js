import { describe, it, expect } from 'vitest';
import JSZip from 'jszip';
import { validateEntryPath, loadSafeArchive, ARCHIVE_LIMITS } from '../../src/core/security/safeZip.js';
import { ErrorCode } from '../../src/core/errors/AppError.js';

describe('SafeZip Security Layer', () => {
  it('allows safe relative paths', () => {
    expect(validateEntryPath('manifest.json')).toBe('manifest.json');
    expect(validateEntryPath('textures/skin/player.png')).toBe('textures/skin/player.png');
    expect(validateEntryPath('items\\skin_hat.json')).toBe('items/skin_hat.json');
  });

  it('rejects path traversal attempts', () => {
    expect(() => validateEntryPath('../secrets.txt')).toThrowError();
    expect(() => validateEntryPath('textures/../../etc/passwd')).toThrowError();
    expect(() => validateEntryPath('/root/file.png')).toThrowError();
    expect(() => validateEntryPath('C:/Windows/system32')).toThrowError();
  });

  it('rejects empty archives', async () => {
    const emptyBuffer = new ArrayBuffer(0);
    await expect(loadSafeArchive(emptyBuffer)).rejects.toMatchObject({
      code: ErrorCode.IMPORT_EMPTY_FILE
    });
  });

  it('rejects archives exceeding maximum size', async () => {
    const fakeOversized = { byteLength: ARCHIVE_LIMITS.MAX_ARCHIVE_SIZE + 1024 };
    await expect(loadSafeArchive(fakeOversized)).rejects.toMatchObject({
      code: ErrorCode.IMPORT_FILE_TOO_LARGE
    });
  });

  it('safely parses valid zip archives', async () => {
    const zip = new JSZip();
    zip.file('manifest.json', '{"format_version": 2}');
    zip.file('textures/skin.png', 'fake_skin_png_data');

    const buffer = await zip.generateAsync({ type: 'arraybuffer' });
    const loaded = await loadSafeArchive(buffer);
    expect(loaded.file('manifest.json')).not.toBeNull();
  });

  it('rejects archives with path traversal inside entry names', async () => {
    const zip = new JSZip();
    zip.file('../evil.bat', 'echo hacked');
    const buffer = await zip.generateAsync({ type: 'arraybuffer' });

    await expect(loadSafeArchive(buffer)).rejects.toMatchObject({
      code: ErrorCode.IMPORT_PATH_TRAVERSAL
    });
  });
});
