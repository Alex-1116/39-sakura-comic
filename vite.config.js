import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: './',
  resolve: {
    alias: [
      { find: /^vue3-video-play$/, replacement: 'vue3-video-play/dist/index.es.js' }
    ]
  },
  optimizeDeps: {
    include: ['vue3-video-play/dist/index.es.js']
  }
})
