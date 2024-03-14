import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
    build: {
        outDir: __dirname,
        rollupOptions: {
            output: {
                entryFileNames: "assets/[name].js"
            }
        }
    },
    optimizeDeps: {
        entries: 'template.html'
    },
    server: {
        open: 'templete.html'
    },
    plugins: [
        vue(),
    ]
})