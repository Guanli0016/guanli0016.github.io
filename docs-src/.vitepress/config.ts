import { defineConfig } from 'vitepress';

export default defineConfig({
    // 应用级配置选项
    lang: 'en-US',
    title: 'Guanli Site',
    titleTemplate: ':title | Guanli Site',
    description: 'liuguanli homepage',
    outDir: '../docs',
    appearance: 'force-dark',
    cleanUrls: true,
    // 主题相关配置
    themeConfig: {
        i18nRouting: false,
        logo: '/images/liu-logo.jpg',
        siteTitle: 'Guanli的个人主页',
        nav: [
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
        ],
        sidebar: {
            '/guides/notes/docx': [
                {
                    text: 'docx.js 使用笔记',
                    items: [
                        { text: '概述', link: '/guides/notes/docx/welcome' },
                        { text: '构建数据', link: '/guides/notes/docx/build' },
                    ]
                }
            ],
            '/guides/tools': [
                {
                //     text: '在线格式化工具',
                //     collapsed: true,
                //     items: [
                //         { text: 'XML在线格式化', link: '/guides/tools/format/xml' },
                //         { text: 'JSON在线格式化', link: '/guides/tools/format/json' },
                //     ]
                // }, {
                    text: '在线转换工具',
                    collapsed: true,
                    items: [
                        { text: '图片转BASE64', link: '/guides/tools/convert/image2base64' },
                        { text: 'RGB转16进制', link: '/guides/tools/convert/rgb2hex' },
                    ]
                }, {
                    text: '在线编码/解码工具',
                    collapsed: true,
                    items: [
                        { text: 'BASE64编码/解码', link: '/guides/tools/encode/base64' },
                        { text: 'URL编码/解码', link: '/guides/tools/encode/url' },
                    ]
                }, {
                    text: '在线加密工具',
                    collapsed: true,
                    items: [
                        { text: 'MD5加密', link: '/guides/tools/encrypt/md5' },
                        { text: 'SHA加密', link: '/guides/tools/encrypt/sha' },
                    ]
                }, {
                    text: '在线生成工具',
                    collapsed: true,
                    items: [
                        { text: '二维码生成器', link: '/guides/tools/builder/qrcode' },
                    ]
                }
            ],
        },
        socialLinks: [
            { icon: 'github', link: 'https://github.com/Guanli0016/' },
            { icon: 'npm', link: 'https://www.npmjs.com/~guanli0016' },
        ],
        footer: {
            copyright: 'Copyright © 2024-present Guanli'
        },
    },
    markdown: {
        lineNumbers: true,
        theme: 'slack-dark'
    }
})