// Importamos la función defineConfig desde Vite para definir la configuración del proyecto
import { defineConfig } from 'vite'
// Importamos el plugin de React que permite a Vite trabajar correctamente con JSX y React
import react from '@vitejs/plugin-react'

// Exportamos la configuración personalizada para este proyecto de React usando Vite
export default defineConfig({
  // Establece la ruta base del proyecto para GitHub Pages
  base: '/EVALUACION_REACT/', // Debe coincidir con el nombre exacto del repositorio de GitHub
  plugins: [react()],  // Usamos el plugin de React para permitir que Vite maneje JSX y otras optimizaciones
  // Configuración del proceso de construcción (build)
  build: {
    outDir: 'dist',  // Carpeta donde se generarán los archivos listos para producción
    assetsInlineLimit: 0, // Evita que los recursos (como imágenes) se incrusten directamente como base64 en el HTML
  },
  // Configuraciones para el servidor local de desarrollo (vite dev)
  server: {
    headers: {
      'Cache-Control': 'no-store', // Desactiva la caché del navegador durante el desarrollo para ver cambios en tiempo real
    }
  }
})
