import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path"

export default defineConfig({
    root: path.join( __dirname, 'src' ),
    build: {
        outDir: '../',
        rollupOptions: {
            input: path.join( __dirname, 'src/index.html' ),
            output: {
                entryFileNames: 'assets/[name].js',
            }
        }
    },
    server: {
        open: true,
        hmr: true,
    },
    plugins: [
        vue(),
    ],
    resolve: {
        // 设置别名
        alias: {
            "@": path.resolve( __dirname, 'src' )
        }
    }
})