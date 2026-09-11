import path from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // האתר מתארח ב-GitHub Pages תחת נתיב המאגר.
  // אם עוברים לדומיין משלכם — שנו ל-'/'.
  base: '/learn-python/',
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
});
