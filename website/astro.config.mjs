import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { unified } from '@astrojs/markdown-remark';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import { presentation } from './scripts/presentation.mjs';
const site = process.env.SITE_URL || 'https://ahmedrabie-23.github.io';
const base = process.env.BASE_PATH || '/RBE-WaveLab';
export default defineConfig({
  site, base, output: 'static', trailingSlash: 'always',
  devToolbar: { enabled: false },
  integrations: [sitemap()],
  markdown: { processor: unified({ remarkPlugins: [remarkMath], rehypePlugins: [[rehypeKatex, { throwOnError: true, strict: 'error', trust: false, output: 'htmlAndMathml' }], presentation({base})] }) },
  vite: { build: { sourcemap: false }, server: { host: '127.0.0.1' } },
});
