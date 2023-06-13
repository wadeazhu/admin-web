import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/admin-web/',
  build: {
    outDir: 'dis/admin-web',
    minify: 'terser',
    terserOptions: {
      compress: {
        // 生产环境时移除console
        // eslint-disable-next-line camelcase
        drop_console: true,
        // 生产环境时移除debugger
        // eslint-disable-next-line camelcase
        drop_debugger: true
      }
    }
  },
  /*这个配置表示同时启用了 Vue.js 和 Vue JSX 插件。
  vue() 插件用于支持 Vue 单文件组件 (SFC) 的解析和处理，
  它使你可以在 Vite 项目中使用 .vue 后缀的文件。
  vueJsx({}) 插件则是用于支持在 Vue 单文件组件中使用 JSX 语法的插件，
  它允许你在 .vue 文件中使用类似于 React 中的 JSX 语法。*/
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      '@': path.join(__dirname, './src'),
      '~assets': path.join(__dirname, './src/assets'),
      '~api': path.join(__dirname, './src/api/modules')
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        // 注入全局样式
        additionalData: `
          @import "./src/style/basic.scss"
        `
      }
    }
  },
  server: {
    host: '0.0.0.0',
    port: 2000,
    proxy: {},
    hmr: {
      overlay: true
    }
  }

})
