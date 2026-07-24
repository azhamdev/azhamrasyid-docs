import { Link, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { site } from '../site.config.js';
import { firstSlug } from '../lib/navigation.js';
import { useTheme } from '../hooks/useTheme.js';
import {
  SunIcon,
  MoonIcon,
  SearchIcon,
  MenuIcon,
  GithubIcon,
  CodeIcon,
} from './icons.jsx';
import './TopBar.css';

export default function TopBar({ onOpenSearch, onOpenMenu, isMac }) {
  const { theme, toggle } = useTheme();

  return (
    <header className="topbar">
      <div className="topbar-inner">
        <div className="topbar-left">
          <button
            className="icon-btn menu-btn"
            onClick={onOpenMenu}
            aria-label="Open navigation menu"
          >
            <MenuIcon />
          </button>

          <Link to={`/${firstSlug}`} className="brand" aria-label={site.name}>
            <span className="brand-mark">{site.logoText}</span>
            <span className="brand-name">{site.name}</span>
          </Link>
        </div>

        <div className="topbar-right">
          {/* Tombol menuju halaman latihan koding. */}
          <NavLink
            to="/latihan"
            className={({ isActive }) =>
              `practice-btn${isActive ? ' is-active' : ''}`
            }
          >
            <CodeIcon width={16} height={16} />
            <span className="practice-btn-text">Latihan</span>
          </NavLink>

          <button className="search-trigger" onClick={onOpenSearch}>
            <SearchIcon width={16} height={16} />
            <span>Search</span>
            <span className="kbd search-kbd">{isMac ? '⌘' : 'Ctrl'} K</span>
          </button>

          {site.repoUrl && (
            <a
              className="icon-btn desktop-only"
              href={site.repoUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="View source on GitHub"
            >
              <GithubIcon />
            </a>
          )}

          <button
            className="icon-btn theme-btn"
            onClick={toggle}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            <motion.span
              key={theme}
              initial={{ rotate: -40, opacity: 0, scale: 0.6 }}
              animate={{ rotate: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              style={{ display: 'inline-flex' }}
            >
              {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
            </motion.span>
          </button>
        </div>
      </div>
    </header>
  );
}
