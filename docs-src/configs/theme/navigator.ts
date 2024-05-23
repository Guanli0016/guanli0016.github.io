export default [
    {
        text: '官方文档',
        items: [
            {
                text: '前端相关文档',
                items: [
                    { text: 'Vue', link: 'https://cn.vuejs.org/' },
                    { text: 'Angular', link: 'https://angular.cn/' },
                    { text: 'Electron', link: 'https://www.electronjs.org/' },
                    { text: 'Ionic', link: 'https://ionic.nodejs.cn/' },
                    { text: 'VitePress', link: 'https://vitepress.dev/zh/' },
                ]
            }, {
                text: '后端相关文档',
                items: [
                    { text: 'Vite', link: 'https://cn.vitejs.dev/' },
                    { text: 'Egg', link: 'https://www.eggjs.org/zh-CN' },
                ]
            }, {
                text: '其他',
                items: [
                    { text: 'Typescript', link: 'https://www.tslang.cn/' },
                    { text: 'Axios', link: 'https://www.axios-http.cn/' },
                    { text: 'Element Plus', link: 'https://element-plus.org/zh-CN/' },
                    { text: 'CreateJs', link: 'https://www.createjs.cc/' },
                    { text: 'Apache ECharts', link: 'https://echarts.apache.org/zh/index.html' },
                ]
            }
        ]
    }, {
        text: '收藏',
        items: [
            { text: 'IconFont', link: 'https://www.iconfont.cn/' },
            { text: 'Pexels', link: 'https://www.pexels.com/zh-cn/' },
            { text: 'OpenAI API Proxy', link: 'https://www.openai-proxy.com/' },
        ]
    }, {
        text: '笔记',
        items: [
            { text: 'docx', link: '/guides/notes/docx/welcome' },
        ]
    }, {
        text: '工具',
        items: [
            {
            //     text: '在线格式化工具',
            //     items: [
            //         { text: 'XML在线格式化', link: '/guides/tools/format/xml' },
            //         { text: 'JSON在线格式化', link: '/guides/tools/format/json' },
            //     ]
            // }, {
                text: '在线转换工具',
                items: [
                    { text: '图片转BASE64', link: '/guides/tools/convert/image2base64' },
                    { text: 'RGB转16进制', link: '/guides/tools/convert/rgb2hex' },
                ]
            }, {
                text: '在线编码/解码工具',
                items: [
                    { text: 'BASE64编码/解码', link: '/guides/tools/encode/base64' },
                    { text: 'URL编码/解码', link: '/guides/tools/encode/url' },
                ]
            }, {
                text: '在线加密工具',
                items: [
                    { text: 'MD5加密', link: '/guides/tools/encrypt/md5' },
                    { text: 'SHA加密', link: '/guides/tools/encrypt/sha' },
                ]
            }, {
                text: '在线生成工具',
                items: [
                    { text: '二维码生成器', link: '/guides/tools/builder/qrcode' },
                ]
            }
        ]
    }
]