// vite.config.ts - AGORA SIM A VERSÃO CORRETA E FUNCIONAL
import path from "path"
import react from "@vitejs/plugin-react-swc"
import { defineConfig } from "vite"

export default defineConfig({
  // ESSA É A LINHA QUE FALTAVA
  base: "/portfolio/",
  
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})