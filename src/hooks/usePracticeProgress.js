import { useCallback, useEffect, useState } from 'react';

const STORAGE_KEY = 'practice-done';

function read() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

/**
 * Menyimpan soal mana yang sudah ditandai selesai. Disimpan di localStorage
 * (tanpa database, tanpa login) sehingga progres bertahan saat halaman ditutup.
 */
export function usePracticeProgress() {
  const [done, setDone] = useState(read);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(done));
    } catch {
      /* mode privat / storage penuh — progres cukup hidup di sesi ini */
    }
  }, [done]);

  const toggle = useCallback((id) => {
    setDone((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
    );
  }, []);

  /** Tandai selesai tanpa membalik status — dipakai saat semua uji lulus. */
  const markDone = useCallback((id) => {
    setDone((prev) => (prev.includes(id) ? prev : [...prev, id]));
  }, []);

  const reset = useCallback(() => setDone([]), []);

  const isDone = useCallback((id) => done.includes(id), [done]);

  return { done, doneCount: done.length, isDone, toggle, markDone, reset };
}
