// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Reemplazar por la URL final del deploy (se usa para las meta tags Open Graph)
  site: 'https://ignacio-criscenti.vercel.app',
  build: {
    // CSS embebido en el HTML: evita una petición que bloquea el render (mejor Lighthouse)
    inlineStylesheets: 'always',
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
