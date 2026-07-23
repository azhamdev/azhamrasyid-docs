import { useCallback, useEffect, useState } from 'react';

/**
 * Light/dark theme, persisted to localStorage and reflected on
 * <html data-theme>. The initial value is set by an inline script in
 * index.html to avoid a flash, so here we just read what's already there.
 */
export function useTheme() {
  const [theme, setTheme] = useState(
    () => document.documentElement.dataset.theme || 'light',
  );

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem('theme', theme);
    } catch {
      /* private mode — ignore */
    }
  }, [theme]);

  const toggle = useCallback(() => {
    setTheme((t) => (t === 'dark' ? 'light' : 'dark'));
  }, []);

  return { theme, toggle };
}
