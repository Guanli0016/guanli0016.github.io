import { defineConfig } from 'vitepress'

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
                        items: [
                            { text: 'Vue', link: 'https://cn.vuejs.org/guide/introduction/' },
                            { text: 'Angular', link: 'https://angular.cn/docs/' },
                        ]
                    },
                    {
                        items: [
                            { text: 'Vite', link: 'https://cn.vitejs.dev/guide/' },
                            { text: 'Electron', link: 'https://www.electronjs.org/zh/docs/latest/' },
                        ]
                    }
                ]
            }, {
                text: '教程',
                items: [
                    { text: 'vite教程', link: '/guides/tutorial/vite' },
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
                        text: '在线格式化工具',
                        items: [
                            { text: 'XML在线格式化', link: '/guides/tools/format/xml' },
                            { text: 'JSON在线格式化', link: '/guides/tools/format/json' },
                        ]
                    }, {
                        text: '在线转换工具',
                        items: [
                            { text: '图片转BASE64', link: '/guides/tools/convert/image2base64' },
                            { text: 'RGB转16进制', link: '/guides/tools/convert/rgb2hex' },
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
            '/guides/tools/format': [
                {
                    text: '在线格式化工具',
                    items: [
                        { text: 'XML在线格式化', link: '/guides/tools/format/xml' },
                        { text: 'JSON在线格式化', link: '/guides/tools/format/json' },
                    ]
                }
            ],
            '/guides/tools/convert': [
                {
                    text: '在线转换工具',
                    items: [
                        { text: '图片转BASE64', link: '/guides/tools/convert/image2base64' },
                        { text: 'RGB转16进制', link: '/guides/tools/convert/rgb2hex' },
                    ]
                }
            ],
            '/guides/tools/builder': [
                {
                    text: '在线生成工具',
                    items: [
                        { text: '二维码生成器', link: '/guides/tools/builder/qrcode' },
                    ]
                }
            ]
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