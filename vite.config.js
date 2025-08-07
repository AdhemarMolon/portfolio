// vite.config.ts - A VERSÃO CORRETA E FUNCIONAL
import path from "path";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
});
