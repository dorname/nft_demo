import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: process.env.IS_DEV !== 'true' ? './' : '/app/build',
  build: {
    outDir: './app/build/',
  },
  // server: {
  //   open: '/docs/index.html',
  // },
  plugins: [vue()],
  resolve: {
        alias: {
          '@': fileURLToPath(new URL('./src', import.meta.url))
        }
  }
});