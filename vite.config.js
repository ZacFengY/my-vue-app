import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { viteMockServe } from 'vite-plugin-mock'
import vueI18n from '@intlify/vite-plugin-vue-i18n'
import path from 'path'
import dotenv from 'dotenv'
import fs from 'fs'

try {
  // 根据环境变量加载环境变量文件
  const file = dotenv.parse(fs.readFileSync(`.env.${process.env.NODE_ENV}`))
  // 根据获取的key给对应的环境变量赋值
  for (const key in file) {
    process.env[key] = file[key]
  }
} catch (e) {
  console.error(e)
}

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      comps: path.resolve(__dirname, 'src/components'),
      styles: path.resolve(__dirname, 'src/styles'),
      plugins: path.resolve(__dirname, 'src/plugins'),
      pages: path.resolve(__dirname, 'src/pages'),
      layouts: path.resolve(__dirname, 'src/layouts'),
      utils: path.resolve(__dirname, 'src/utils'),
      hooks: path.resolve(__dirname, 'src/hooks'),
      stores: path.resolve(__dirname, 'src/stores'),
      config: path.resolve(__dirname, 'config'),
    },
  },
  plugins: [
    vue(),
    vueI18n({
      include: path.resolve(__dirname, './src/locales/**'),
    }),
    viteMockServe({}),
  ],
  server: {
    // 默认是 3000 端口
    port: Number(process.env.VITE_APP_PORT) || 3000,
    // 不默认打开浏览器
    open: false,
    proxy: {
      '^/.*-api': {
        target: process.env.VITE_APP_PROXY_URL,
        changeOrigin: true,
      },
      '/developer-service': {
        target: process.env.VITE_APP_PROXY_DEVLOPER_URL,
        secure: false,
        changeOrigin: true,
      },
    },
  },
})
