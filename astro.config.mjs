import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://sol.moe',
  integrations: [
    tailwind(),
    mdx(),
    sitemap()
  ],
  markdown: {
    shikiConfig: {
      theme: 'one-dark-pro'
    }
  }
});