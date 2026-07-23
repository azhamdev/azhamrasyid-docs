import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { chapters } from '../site.config.js';
import './Sidebar.css';

/** A single navigable page link, including the sliding active pill. */
function SideLink({ slug, title, onNavigate }) {
  return (
    <li>
      <NavLink to={`/${slug}`} className="side-link" onClick={onNavigate}>
        {({ isActive }) => (
          <>
            {isActive && (
              <motion.span
                layoutId="side-active"
                className="side-active"
                transition={{ type: 'spring', stiffness: 500, damping: 40 }}
              />
            )}
            <span className="side-link-text">{title}</span>
          </>
        )}
      </NavLink>
    </li>
  );
}

/**
 * A collapsible sub-chapter: a clickable heading that expands / collapses its
 * pages. Starts open when it contains the active page, and auto-opens whenever
 * navigation moves into it — while still letting the reader toggle it by hand.
 */
function SubGroup({ section, onNavigate, active }) {
  const [open, setOpen] = useState(active);

  useEffect(() => {
    if (active) setOpen(true);
  }, [active]);

  return (
    <div className="side-subgroup">
      <button
        type="button"
        className="side-subgroup-title"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span>{section.title}</span>
        <svg
          className={`side-caret${open ? ' open' : ''}`}
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M3 4.5 6 7.5 9 4.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.ul
            className="side-list side-sublist"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
          >
            {section.items.map((item) => (
              <SideLink key={item.slug} {...item} onNavigate={onNavigate} />
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}

/**
 * Left-hand chapter navigation. Rendered both in the desktop rail and inside
 * the mobile drawer. `onNavigate` lets the drawer close itself on selection.
 *
 * Each chapter may hold pages directly (`items`) and/or grouped into
 * sub-chapters (`sections`) — see src/site.config.js.
 */
/**
 * One chapter block. Chapters that hold sub-chapters (`sections`) become
 * collapsible dropdowns; chapters with only direct pages stay as a plain,
 * always-visible heading. Auto-opens when it contains the active page.
 */
function Chapter({ chapter, index, onNavigate, activeSlug }) {
  const collapsible = chapter.sections?.length > 0;

  const containsActive =
    chapter.items?.some((item) => item.slug === activeSlug) ||
    chapter.sections?.some((section) =>
      section.items.some((item) => item.slug === activeSlug),
    ) ||
    false;

  const [open, setOpen] = useState(collapsible ? containsActive : true);

  useEffect(() => {
    if (containsActive) setOpen(true);
  }, [containsActive]);

  const body = (
    <>
      {/* Pages listed directly under the chapter. */}
      {chapter.items?.length > 0 && (
        <ul className="side-list">
          {chapter.items.map((item) => (
            <SideLink key={item.slug} {...item} onNavigate={onNavigate} />
          ))}
        </ul>
      )}

      {/* Sub-chapters render as collapsible dropdowns. */}
      {chapter.sections?.map((section) => (
        <SubGroup
          key={section.title}
          section={section}
          onNavigate={onNavigate}
          active={section.items.some((item) => item.slug === activeSlug)}
        />
      ))}
    </>
  );

  return (
    <motion.section
      className="side-group"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.04 * index, duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
    >
      {collapsible ? (
        <>
          <button
            type="button"
            className="side-group-title side-group-toggle"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span>{chapter.title}</span>
            <svg
              className={`side-caret${open ? ' open' : ''}`}
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M3 4.5 6 7.5 9 4.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <AnimatePresence initial={false}>
            {open && (
              <motion.div
                className="side-group-body"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
              >
                {body}
              </motion.div>
            )}
          </AnimatePresence>
        </>
      ) : (
        <>
          <h2 className="side-group-title">{chapter.title}</h2>
          {body}
        </>
      )}
    </motion.section>
  );
}

export default function Sidebar({ onNavigate }) {
  const { pathname } = useLocation();
  const activeSlug = pathname.replace(/^\//, '');

  return (
    <nav className="sidebar" aria-label="Documentation">
      {chapters.map((chapter, ci) => (
        <Chapter
          key={chapter.title}
          chapter={chapter}
          index={ci}
          onNavigate={onNavigate}
          activeSlug={activeSlug}
        />
      ))}
    </nav>
  );
}
