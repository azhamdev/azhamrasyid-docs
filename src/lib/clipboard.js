/**
 * Menyalin teks ke papan klip, dengan cadangan untuk peramban lama atau
 * halaman non-HTTPS tempat `navigator.clipboard` tidak tersedia.
 *
 * @returns {Promise<boolean>} true bila berhasil disalin
 */
export async function writeClipboard(text) {
  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
      return true;
    }
  } catch {
    /* lanjut ke cara lama di bawah (izin ditolak, http, …) */
  }
  try {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.setAttribute('readonly', '');
    ta.style.cssText = 'position:fixed;top:-9999px;opacity:0';
    document.body.appendChild(ta);
    ta.select();
    const ok = document.execCommand('copy');
    document.body.removeChild(ta);
    return ok;
  } catch {
    return false;
  }
}
