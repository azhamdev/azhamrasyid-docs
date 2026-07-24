import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import PracticeCard from './PracticeCard.jsx';
import { usePracticeProgress } from '../hooks/usePracticeProgress.js';
import {
  filterSets,
  levels,
  topics,
  totalExercises,
} from '../lib/practice.js';
import { RefreshIcon } from './icons.jsx';
import './PracticePage.css';

/** Satu baris tombol filter (topik atau level). `null` berarti "Semua". */
function FilterRow({ label, options, value, onChange }) {
  return (
    <div className="pr-filter">
      <span className="pr-filter-label">{label}</span>
      <div className="pr-chips">
        <button
          type="button"
          className={`pr-chip${value === null ? ' is-on' : ''}`}
          onClick={() => onChange(null)}
        >
          Semua
        </button>
        {options.map((option) => (
          <button
            key={option}
            type="button"
            className={`pr-chip${value === option ? ' is-on' : ''}`}
            onClick={() => onChange(value === option ? null : option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

/**
 * Halaman Latihan Koding — daftar soal beserta ide pengerjaannya, lengkap
 * dengan filter topik/level dan progres yang tersimpan di peramban.
 */
export default function PracticePage() {
  const [topic, setTopic] = useState(null);
  const [level, setLevel] = useState(null);
  const { doneCount, isDone, toggle, markDone, reset } = usePracticeProgress();

  const sets = useMemo(() => filterSets({ topic, level }), [topic, level]);
  const shown = sets.reduce((n, set) => n + set.exercises.length, 0);
  const percent = totalExercises ? Math.round((doneCount / totalExercises) * 100) : 0;

  return (
    <div className="pr-page">
      <motion.header
        className="pr-hero"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="eyebrow">Latihan</p>
        <h1>Latihan Koding</h1>
        <p className="pr-lead">
          Kumpulan soal untuk melatih apa yang sudah kamu baca di materi. Baca
          soalnya, coba kerjakan sendiri dulu, baru buka ide pengerjaan kalau
          benar-benar mentok.
        </p>

        <div className="pr-progress">
          <div className="pr-progress-top">
            <span>
              <strong>{doneCount}</strong> dari {totalExercises} soal selesai
            </span>
            <div className="pr-progress-right">
              <span className="pr-percent">{percent}%</span>
              {doneCount > 0 && (
                <button type="button" className="pr-reset" onClick={reset}>
                  <RefreshIcon />
                  Atur ulang
                </button>
              )}
            </div>
          </div>
          <div className="pr-bar">
            <motion.div
              className="pr-bar-fill"
              initial={false}
              animate={{ width: `${percent}%` }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>
        </div>
      </motion.header>

      <div className="pr-filters">
        <FilterRow label="Topik" options={topics} value={topic} onChange={setTopic} />
        <FilterRow label="Level" options={levels} value={level} onChange={setLevel} />
      </div>

      <p className="pr-count" aria-live="polite">
        Menampilkan {shown} soal
        {topic ? ` · ${topic}` : ''}
        {level ? ` · ${level}` : ''}
      </p>

      {/* Sengaja tanpa AnimatePresence: hasil filter harus langsung benar,
          tidak menunggu animasi keluar selesai. Bagian yang tersaring hilang
          seketika, yang tersisa tetap beranimasi masuk. */}
      <div className="pr-sets">
        {sets.map((set) => (
          <motion.section
            key={`${set.topic}-${level ?? 'all'}`}
            className="pr-set"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="pr-set-head">
              <h2>{set.topic}</h2>
              <p>{set.summary}</p>
            </div>

            <div className="pr-list">
              {set.exercises.map((exercise) => (
                <PracticeCard
                  key={exercise.id}
                  exercise={{ ...exercise, docSlug: set.docSlug }}
                  done={isDone(exercise.id)}
                  onToggleDone={toggle}
                  onSolved={markDone}
                />
              ))}
            </div>
          </motion.section>
        ))}
      </div>

      {sets.length === 0 && (
        <p className="pr-empty">
          Belum ada soal untuk kombinasi filter ini. Coba pilih topik atau level
          yang lain.
        </p>
      )}
    </div>
  );
}
