import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://ton-user-github.github.io/ton-repo/', // Remplace ici
  vite: {
    server: {
      fs: {
        strict: true,
      },
    },
  },
  output: 'static'
});

