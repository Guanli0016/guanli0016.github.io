import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path"

const INVALID_CHAR_REGEX = /[\x00-\x1F\x7F<>*#"{}|^[\]`;?:&=+$,]/g;
const DRIVE_LETTER_REGEX = /^[a-z]:/i;

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
                    const match = DRIVE_LETTER_REGEX.exec( name );
                    const driveLetter = match ? match[ 0 ] : '';
                    return (
                        driveLetter +
                        name.slice( driveLetter.length ).replace( INVALID_CHAR_REGEX, '' )
                    );
                }
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