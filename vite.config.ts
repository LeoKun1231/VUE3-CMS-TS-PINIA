/*
 * @Author: hqk
 * @Date: 2022-12-20 21:47:04
 * @LastEditors: Leo l024983409@qq.com
 * @LastEditTime: 2023-11-14 21:58:10
 * @Description:
 */
import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'

import AutoImport from 'unplugin-auto-import/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'

//自动导入图标
import IconsResolver from 'unplugin-icons/resolver'
import Icons from 'unplugin-icons/vite'

import vue from '@vitejs/plugin-vue'
import presetUno from 'unocss/preset-uno'
import Unocss from 'unocss/vite'

//gzip
import VitePluginCompression from 'vite-plugin-compression'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      // Auto import functions from Vue, e.g. ref, reactive, toRef...
      // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
      // 自动导入vueuse 以及pinia的storeToRefs
      imports: ['vue', '@vueuse/core', { pinia: ['storeToRefs'] }, 'vue-router'],
      resolvers: [
        // Auto import functions from Element Plus, e.g. ElMessage, ElMessageBox... (with style)
        // 自动导入 Element Plus 相关函数，如：ElMessage, ElMessageBox... (带样式)
        ElementPlusResolver(),
        // Auto import icon components
        // 自动导入图标组件
        IconsResolver({
          prefix: 'Icon'
        })
      ]
    }),
    Components({
      resolvers: [
        ElementPlusResolver(),
        // Auto register icon components
        // 自动注册图标组件
        //默认前缀为i，可自定义前缀
        IconsResolver({
          enabledCollections: ['ep']
          // prefix: 'icon'
        })
      ]
    }),
    Icons({
      autoInstall: true
    }),
    Unocss({
      presets: [presetUno()]
    }),
    // Gzip
    VitePluginCompression()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          echarts: ['echarts']
        }
      }
    },
    //   关闭生成map文件 可以达到缩小打包体积
    sourcemap: false,
    //   关闭文件计算
    reportCompressedSize: false
  },
  server: {
    proxy: {
      '/proxy': {
        target: 'https://hqk10.xyz:3000/api/v1',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/proxy/, '')
      }
    }
  }
})
