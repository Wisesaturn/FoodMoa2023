import path from 'path';

import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/FoodMoa2023/',
  plugins: [svelte()],
  resolve: {
    alias: {
      '@style': path.resolve(__dirname, './src//style'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@lib': path.resolve(__dirname, './src/utils/lib'),
      '@component': path.resolve(__dirname, './src/component'),
      '@page': path.resolve(__dirname, './src/page'),
      '@': path.resolve(__dirname, './src'),
    },
  },
});
