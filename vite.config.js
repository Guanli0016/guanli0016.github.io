import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
    build: {
        outDir: __dirname
    },
    server: {
        open: '/src/index.html'
    },
    plugins: [
        vue(),
    ]
})