import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url';
import tailwindcss from 'tailwindcss';
import postcssPresetEnv from 'postcss-preset-env';
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
// import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  // server: {
  //   host: '127.0.0.1',
  //   port: 5173,
  // },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      // '@': path.resolve('./src'),
    }
  },
  base: './',
  css: {
    preprocessorOptions: {
      less: { javascriptEnabled: true }
    },
    postcss: {
      plugins: [
        postcssPresetEnv(),
        tailwindcss({
          content: ["./src/**/*.{html,vue,ts}"]
        })
      ]
    }
  }
})
