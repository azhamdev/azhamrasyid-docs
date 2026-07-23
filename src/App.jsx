import { useCallback, useEffect, useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
  useLocation,
} from 'react-router-dom';
import { motion } from 'framer-motion';
import TopBar from './components/TopBar.jsx';
import SearchDialog from './components/SearchDialog.jsx';
import MobileNav from './components/MobileNav.jsx';
import DocPage from './components/DocPage.jsx';
import { firstSlug } from './lib/navigation.js';
import { useScrollProgress } from './hooks/useScrollProgress.js';

const isMac =
  typeof navigator !== 'undefined' && /Mac|iPhone|iPad/.test(navigator.platform);

/** Persistent chrome around the routed page: top bar, progress, overlays. */
function AppShell() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const progress = useScrollProgress();
  const location = useLocation();

  // Global ⌘K / Ctrl-K to toggle search.
  useEffect(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setSearchOpen((v) => !v);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  // Scroll to top on page change — but respect in-page #hash links.
  useEffect(() => {
    if (!location.hash) window.scrollTo({ top: 0, behavior: 'auto' });
  }, [location.pathname]); // eslint-disable-line react-hooks/exhaustive-deps

  const closeSearch = useCallback(() => setSearchOpen(false), []);

  return (
    <div className="app">
      <TopBar
        isMac={isMac}
        onOpenSearch={() => setSearchOpen(true)}
        onOpenMenu={() => setMenuOpen(true)}
      />

      <div className="progress-track" aria-hidden="true">
        <motion.div
          className="progress-bar"
          style={{ scaleX: progress }}
          initial={false}
        />
      </div>

      <Outlet />

      <SearchDialog open={searchOpen} onClose={closeSearch} />
      <MobileNav open={menuOpen} onClose={() => setMenuOpen(false)} />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppShell />}>
          {/* Landing → first page in the first chapter. */}
          <Route index element={<Navigate to={`/${firstSlug}`} replace />} />
          <Route path="/:slug" element={<DocPage />} />
          <Route path="*" element={<DocPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
