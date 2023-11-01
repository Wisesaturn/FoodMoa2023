import path from 'path';

import { defineConfig } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';

import dotenv from 'dotenv';

dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [sveltekit()],
  define: {
    'process.env': JSON.stringify(process.env),
  },
  resolve: {
    alias: {
      '@style': path.resolve(__dirname, './src/style'),
      '@public': path.resolve(__dirname, './public'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@lib': path.resolve(__dirname, './src/utils/lib'),
      '@components': path.resolve(__dirname, './src/components'),
      '@routes': path.resolve(__dirname, './src/routes'),
      '@': path.resolve(__dirname, './src'),
    },
  },
});
