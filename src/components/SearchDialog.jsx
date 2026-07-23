import { useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { searchPages } from '../lib/navigation.js';
import { SearchIcon, CornerReturnIcon } from './icons.jsx';
import './SearchDialog.css';

/** ⌘K / Ctrl-K command palette to jump between pages. */
export default function SearchDialog({ open, onClose }) {
  const [query, setQuery] = useState('');
  const [cursor, setCursor] = useState(0);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  const results = useMemo(() => searchPages(query), [query]);

  // Reset + focus when opened.
  useEffect(() => {
    if (open) {
      setQuery('');
      setCursor(0);
      // Focus after the enter animation starts.
      const t = setTimeout(() => inputRef.current?.focus(), 20);
      return () => clearTimeout(t);
    }
  }, [open]);

  // Keep the cursor within bounds as results change.
  useEffect(() => {
    setCursor((c) => Math.min(c, Math.max(0, results.length - 1)));
  }, [results.length]);

  const go = (slug) => {
    navigate(`/${slug}`);
    onClose();
  };

  const onKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setCursor((c) => (c + 1) % results.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setCursor((c) => (c - 1 + results.length) % results.length);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      const hit = results[cursor];
      if (hit) go(hit.slug);
    } else if (e.key === 'Escape') {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="search-overlay"
          onMouseDown={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
        >
          <motion.div
            className="search-panel"
            role="dialog"
            aria-modal="true"
            aria-label="Search documentation"
            onMouseDown={(e) => e.stopPropagation()}
            onKeyDown={onKeyDown}
            initial={{ opacity: 0, scale: 0.97, y: -8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: -6 }}
            transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="search-field">
              <SearchIcon width={18} height={18} />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search pages…"
                aria-label="Search"
                spellCheck={false}
              />
              <span className="kbd">Esc</span>
            </div>

            <ul className="search-results" role="listbox">
              {results.length === 0 && (
                <li className="search-empty">No results for “{query}”.</li>
              )}
              {results.map((page, i) => (
                <li key={page.slug}>
                  <button
                    className={`search-result ${i === cursor ? 'active' : ''}`}
                    onMouseEnter={() => setCursor(i)}
                    onClick={() => go(page.slug)}
                    role="option"
                    aria-selected={i === cursor}
                  >
                    <span className="search-result-main">
                      <span className="search-result-title">{page.title}</span>
                      <span className="search-result-chapter">{page.chapter}</span>
                    </span>
                    {i === cursor && <CornerReturnIcon />}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
