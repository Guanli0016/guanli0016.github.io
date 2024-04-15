import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path"

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
    root: path.join( __dirname, 'src' ),
    build: {
        outDir: __dirname,
        rollupOptions: {
            input: path.join( __dirname, 'src/index.html' ),
            output: {
                // 入口文件名
                entryFileNames: 'assets/js/[name].js',
                // 块文件名
                chunkFileNames: chunkInfo => {
                    const [ name ] = path.basename( chunkInfo.name ).split( '.' );
                    return `assets/js/${ name.toLocaleLowerCase() }.js`;
                },
                // 资源文件名 css 图片等等
                assetFileNames: chunkInfo => {
                    const [ name, ext ] = path.basename( chunkInfo.name ).split( '.' );
                    let fold = ext === 'css' ? 'css' : 'images';
                    return `assets/${ fold }/${ name.toLocaleLowerCase() }.${ ext }`;
                },
                sanitizeFileName: name => {
                    return name.replace( /[^a-z0-9A-Z\-]/g, '-' ).replace( /^[^a-z0-9A-Z]/, '' );
                }
            }
        }
    },
    server: {
        open: true,
        hmr: true,
        watch: {
            usePolling: true
        }
    },
    plugins: [
        vue(),
        AutoImport({
            resolvers: [ElementPlusResolver()],
        }),
        Components({
            resolvers: [ElementPlusResolver()],
        }),
    ],
    resolve: {
        // 设置别名
        alias: {
            "@": path.resolve( __dirname, 'src' )
        }
    }
})