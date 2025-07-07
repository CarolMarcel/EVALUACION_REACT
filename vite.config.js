// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/EVALUACION_REACT/', // 👈 IMPORTANTE: nombre exacto del repositorio
  plugins: [react()],
})
