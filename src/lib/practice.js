/* ============================================================================
   Model latihan — meratakan `practiceSets` menjadi daftar yang mudah difilter,
   dan menyediakan daftar topik & level untuk tombol filter.
   ========================================================================== */

import { practiceSets } from '../practice.config.js';

/** Urutan level dari yang paling mudah — dipakai untuk mengurutkan filter. */
export const LEVELS = ['Dasar', 'Menengah', 'Lanjut'];

/** Semua soal dalam satu daftar datar, lengkap dengan nomor urut & topiknya. */
export const allExercises = practiceSets.flatMap((set) =>
  set.exercises.map((exercise) => ({
    ...exercise,
    topic: set.topic,
    docSlug: set.docSlug,
  })),
);

/** Total soal — dipakai untuk bar progres. */
export const totalExercises = allExercises.length;

/** Nama topik sesuai urutan di config, untuk tombol filter. */
export const topics = practiceSets.map((set) => set.topic);

/** Hanya level yang benar-benar dipakai, tetap dalam urutan LEVELS. */
export const levels = LEVELS.filter((level) =>
  allExercises.some((exercise) => exercise.level === level),
);

/**
 * Menyaring topik + soal sesuai filter yang aktif.
 * Topik yang kehabisan soal setelah difilter tidak ikut dikembalikan.
 *
 * @param {{ topic: string|null, level: string|null }} filters
 * @returns {{ topic: string, summary: string, docSlug?: string, exercises: object[] }[]}
 */
export function filterSets({ topic, level }) {
  return practiceSets
    .filter((set) => !topic || set.topic === topic)
    .map((set) => ({
      ...set,
      exercises: set.exercises.filter((ex) => !level || ex.level === level),
    }))
    .filter((set) => set.exercises.length > 0);
}

/** Nomor urut global tiap soal (01, 02, …) supaya penomoran stabil saat difilter. */
const numberById = new Map(allExercises.map((ex, i) => [ex.id, i + 1]));

export function getExerciseNumber(id) {
  return numberById.get(id) ?? 0;
}
