import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import CodePlayground from './CodePlayground.jsx';
import Inline from './Inline.jsx';
import { writeClipboard } from '../lib/clipboard.js';
import { getExerciseNumber } from '../lib/practice.js';
import {
  BulbIcon,
  BookIcon,
  CheckIcon,
  CopyIcon,
  ChevronDownIcon,
} from './icons.jsx';

/**
 * Satu soal latihan: pertanyaan selalu terlihat, ide pengerjaan disembunyikan.
 * Soal yang membawa `tests` (soal algoritma) juga menampilkan editor kode
 * yang bisa dijalankan langsung; lulus semua uji = otomatis ditandai selesai.
 */
export default function PracticeCard({ exercise, done, onToggleDone, onSolved }) {
  const runnable = Array.isArray(exercise.tests) && exercise.tests.length > 0;
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const number = String(getExerciseNumber(exercise.id)).padStart(2, '0');

  useEffect(() => {
    if (!copied) return undefined;
    const t = setTimeout(() => setCopied(false), 1800);
    return () => clearTimeout(t);
  }, [copied]);

  async function handleCopy() {
    if (await writeClipboard(exercise.starter)) setCopied(true);
  }

  return (
    <motion.article
      layout
      className={`pr-card${done ? ' is-done' : ''}`}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="pr-card-head">
        <span className="pr-num">{number}</span>

        <div className="pr-head-main">
          <h3 className="pr-title">{exercise.title}</h3>
          <span className="pr-level" data-level={exercise.level}>
            {exercise.level}
          </span>
        </div>

        <button
          type="button"
          className={`pr-done${done ? ' is-on' : ''}`}
          onClick={() => onToggleDone(exercise.id)}
          aria-pressed={done}
          title={done ? 'Batalkan tanda selesai' : 'Tandai soal ini selesai'}
        >
          <CheckIcon />
          <span>{done ? 'Selesai' : 'Tandai'}</span>
        </button>
      </div>

      <p className="pr-question">
        <Inline text={exercise.question} />
      </p>

      {/* Soal algoritma: editor langsung terlihat agar siswa bisa mulai
          menulis tanpa membuka apa pun. */}
      {runnable && (
        <CodePlayground
          exercise={exercise}
          onAllPass={() => onSolved?.(exercise.id)}
        />
      )}

      <button
        type="button"
        className={`pr-toggle${open ? ' is-open' : ''}`}
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <BulbIcon />
        <span>{open ? 'Sembunyikan ide pengerjaan' : 'Lihat ide pengerjaan'}</span>
        <ChevronDownIcon className="pr-caret" />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            className="pr-reveal"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.26, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="pr-reveal-inner">
              <ul className="pr-ideas">
                {exercise.ideas.map((idea, i) => (
                  <li key={i}>
                    <Inline text={idea} />
                  </li>
                ))}
              </ul>

              {exercise.starter && !runnable && (
                <div className="pr-starter">
                  <div className="pr-starter-head">
                    <span>Kode awal{exercise.lang ? ` · ${exercise.lang}` : ''}</span>
                    <button type="button" className="pr-copy" onClick={handleCopy}>
                      {copied ? <CheckIcon /> : <CopyIcon />}
                      {copied ? 'Tersalin' : 'Salin'}
                    </button>
                  </div>
                  <pre>
                    <code>{exercise.starter}</code>
                  </pre>
                </div>
              )}

              {exercise.docSlug && (
                <Link className="pr-doclink" to={`/${exercise.docSlug}`}>
                  <BookIcon />
                  Baca materi terkait
                </Link>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
}
