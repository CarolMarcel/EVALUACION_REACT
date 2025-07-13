// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/EVALUACION_REACT/', // 👈 nombre del repo en GitHub
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsInlineLimit: 0, // Evita que algunos archivos se incrusten en el HTML
  },
  server: {
    headers: {
      'Cache-Control': 'no-store', // Desactiva caché en desarrollo
    }
  }
})
