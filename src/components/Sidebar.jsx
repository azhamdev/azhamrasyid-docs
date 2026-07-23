import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { chapters } from '../site.config.js';
import './Sidebar.css';

/**
 * Left-hand chapter navigation. Rendered both in the desktop rail and inside
 * the mobile drawer. `onNavigate` lets the drawer close itself on selection.
 */
export default function Sidebar({ onNavigate }) {
  return (
    <nav className="sidebar" aria-label="Documentation">
      {chapters.map((chapter, ci) => (
        <motion.section
          key={chapter.title}
          className="side-group"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.04 * ci, duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="side-group-title">{chapter.title}</h2>
          <ul className="side-list">
            {chapter.items.map((item) => (
              <li key={item.slug}>
                <NavLink
                  to={`/${item.slug}`}
                  className="side-link"
                  onClick={onNavigate}
                >
                  {({ isActive }) => (
                    <>
                      {isActive && (
                        <motion.span
                          layoutId="side-active"
                          className="side-active"
                          transition={{ type: 'spring', stiffness: 500, damping: 40 }}
                        />
                      )}
                      <span className="side-link-text">{item.title}</span>
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </motion.section>
      ))}
    </nav>
  );
}
