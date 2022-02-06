import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
     alias: {
      '@views': path.resolve(__dirname, './src/views'),
      '@interfaces': path.resolve(__dirname, './src/interfaces'),
      '@themes': path.resolve(__dirname, './src/themes'),
      '@context': path.resolve(__dirname, './src/context'),
      '@components': path.resolve(__dirname, './src/components'),
      '@api': path.resolve(__dirname, './src/api'),
      '@helpers': path.resolve(__dirname, './src/helpers'),
      '@query': path.resolve(__dirname, './src/api/queries')
     }
  },
  plugins: [react()]
})
