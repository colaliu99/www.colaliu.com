import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import legacy from '@vitejs/plugin-legacy'

// https://vitejs.dev/config/
export default defineConfig({
  // 使用相对路径 './' 而不是默认的 '/'，这有助于解决在某些服务器或子目录下图片路径错误的问题
  base: './', 
  plugins: [
    react(),
    // 添加传统浏览器支持，解决 360 浏览器等旧内核报错 "Unexpected token" 的问题
    legacy({
      targets: ['defaults', 'not IE 11', 'chrome >= 64'],
      additionalLegacyPolyfills: ['regenerator-runtime/runtime']
    })
  ],
  build: {
    // 显式指定构建目标为 es2015，确保语法被转译
    target: 'es2015',
    cssTarget: 'chrome61',
  }
})