import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import expressiveCode from 'astro-expressive-code';
import nightOwl from './src/assets/night-owl.json';

// https://astro.build/config
export default defineConfig({
  integrations: [
    expressiveCode({
      themes: [nightOwl],
      styleOverrides: { borderRadius: 'var(--border-radius-small)' },
    }),
    mdx(),
  ],
});
