// @ts-check
import { defineConfig } from 'astro/config';
import vercelAdapter from '@astrojs/vercel';
import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
  integrations: [preact()],
    output: 'server',
    adapter: vercelAdapter(),
});