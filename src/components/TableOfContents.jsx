import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { useActiveHeading } from '../hooks/useActiveHeading.js';
import './TableOfContents.css';

/**
 * The right-hand "On this page" list. Highlights the heading currently in
 * view and scrolls to a heading when clicked (updating the URL hash).
 *
 * @param {{ toc: {id:string,text:string,depth:number}[] }} props
 */
export default function TableOfContents({ toc }) {
  const ids = useMemo(() => toc.map((h) => h.id), [toc]);
  const activeId = useActiveHeading(ids);

  if (toc.length === 0) return null;

  const onClick = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      history.replaceState(null, '', `#${id}`);
    }
  };

  return (
    <nav className="toc" aria-label="On this page">
      <p className="toc-title">On this page</p>
      <ul className="toc-list">
        {toc.map((h) => {
          const isActive = h.id === activeId;
          return (
            <li key={h.id} className={`toc-item depth-${h.depth}`}>
              <a
                href={`#${h.id}`}
                className={`toc-link ${isActive ? 'active' : ''}`}
                onClick={(e) => onClick(e, h.id)}
              >
                {isActive && (
                  <motion.span
                    layoutId="toc-active"
                    className="toc-marker"
                    transition={{ type: 'spring', stiffness: 550, damping: 40 }}
                  />
                )}
                {h.text}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
