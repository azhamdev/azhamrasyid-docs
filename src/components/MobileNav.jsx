import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Sidebar from './Sidebar.jsx';
import { CloseIcon } from './icons.jsx';
import { site } from '../site.config.js';
import './MobileNav.css';

/** Slide-in chapter drawer for small screens. */
export default function MobileNav({ open, onClose }) {
  // Lock body scroll while the drawer is open.
  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        // AnimatePresence tracks its direct children for exit animations, so we
        // give it a SINGLE child: the overlay. The drawer is nested inside and
        // animates its own transform. Clicking the overlay closes; clicking the
        // drawer stops propagation so it doesn't.
        <motion.div
          className="drawer-overlay"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <motion.aside
            className="drawer"
            onClick={(e) => e.stopPropagation()}
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', stiffness: 420, damping: 40 }}
          >
            <div className="drawer-head">
              <span className="drawer-brand">
                <span className="brand-mark">{site.logoText}</span>
                {site.name}
              </span>
              <button className="icon-btn" onClick={onClose} aria-label="Close menu">
                <CloseIcon />
              </button>
            </div>
            <div className="drawer-body">
              <Sidebar onNavigate={onClose} />
            </div>
          </motion.aside>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
