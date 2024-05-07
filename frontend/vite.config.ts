import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    host: true,
    proxy: {
      '/api': {
        // backendのURLを指定
        target: 'http://backend:3001',
        changeOrigin: true,
        // /apiを削除してリクエストを送る
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})