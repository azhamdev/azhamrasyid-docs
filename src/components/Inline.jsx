/**
 * Mengubah `kode` di antara backtick menjadi elemen <code>, supaya teks soal,
 * ide, dan petunjuk bisa menyebut tag atau fungsi tanpa Markdown lengkap.
 */
export default function Inline({ text }) {
  // split dengan capture group: indeks ganjil selalu isi di dalam backtick.
  const parts = String(text).split(/`([^`]+)`/g);
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? <code key={i}>{part}</code> : <span key={i}>{part}</span>,
      )}
    </>
  );
}
