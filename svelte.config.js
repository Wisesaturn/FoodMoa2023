import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      fallback: '404.html',
    }),
    paths: {
      base: process.env.NODE_ENV === 'development' ? '' : process.env.BASE_PATH,
    },
  },
  preprocess: vitePreprocess(),
};

export default config;
