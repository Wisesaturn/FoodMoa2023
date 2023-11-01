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
      '@lib': path.resolve(__dirname, './src/lib'),
      '@component': path.resolve(__dirname, './src/component'),
      '@': path.resolve(__dirname, './src'),
    },
  },
});
