import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // Hanya impor
import path from 'path'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // Panggil pluginnya tanpa argumen
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})