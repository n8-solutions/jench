import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://n8-solutions.github.io/jench/',
  base: '/jench/',
  trailingSlash: 'always',
  vite: {
    server: {
      fs: {
        strict: true,
      },
    },
  },
  output: 'static'
});

