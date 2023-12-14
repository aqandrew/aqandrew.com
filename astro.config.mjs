import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import nightOwl from './src/assets/night-owl.json';

// https://astro.build/config
export default defineConfig({
  integrations: [mdx()],
  markdown: {
    shikiConfig: {
      theme: nightOwl,
    },
  },
});
