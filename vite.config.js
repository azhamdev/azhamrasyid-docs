import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// No backend, no database. Vite reads the Markdown files straight from disk
// at build time via `import.meta.glob` (see src/lib/content.js).
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    open: true,
  },
});
