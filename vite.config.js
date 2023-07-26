import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: { //me permite cambiar el peurto local para desarrollo
    port: 3030
  },
  preview: { //me permite cambiar el puerto del servidor de prueba pre-producción
    port: 4270
  },
  build: { // optimizacion del build para que el codigo final sea generado de mejor manera
    incremental: true, // acelar la generacion del build
    babel: { //me permite ayudar a babel al reconomiento del entorno en el cual vas a manipular las versiones del JS
      presets: ["@babel/preset-env", "@babel/preset-react"],
    },
    //configuracion opcional para TS
    /*
    typescript: {
      tsconfig: "./tsconfig.json"
    } */
    cache: true, // verificar si el codigo sigue siendo el mismo o no  y cachear el codigo del build
    minify: true, // habilitar la opcion de compresion para minificar el tamaño de los archivos generados por el build
    cssMinify: true, // habilita la opcion de compresion para minificar el tamaño del css generado por el build
    mode: "production", // especificar un contexto de salida que sera para un entorno de producción (opcional)
    chunks: true, // Habilitar el particionamiento para proveer por trozos el js
    moduleBundling: true, // me permite tomar el codigo de las librerias del proyecto para producción y bajarles el tamaño
    


  }
})
