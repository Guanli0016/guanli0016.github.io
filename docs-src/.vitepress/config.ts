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
                    { text: 'Vite', link: 'https://cn.vitejs.dev/guide/' },
                    { text: 'Vue', link: 'https://cn.vuejs.org/guide/introduction/' },
                    { text: 'Angular', link: 'https://angular.cn/docs/' },
                    { text: 'Electron', link: 'https://www.electronjs.org/zh/docs/latest/' },
                ]
            }, {
                text: '教程',
                items: [
                    { text: 'vite教程', link: '/guides/tutorial/vite' },
                ]
            }, {
                text: '笔记',
                items: [
                    { text: 'vite教程', link: '/guides/note/vite' },
                ]
            }
        ],
        sidebar: [
            {
                text: 'demo',
                link: '/guides/collection',
            }
        ],
        socialLinks: [
            { icon: 'github', link: 'https://github.com/Guanli0016/' },
            { icon: 'npm', link: 'https://www.npmjs.com/~guanli0016' },
        ],
        footer: {
            copyright: 'Copyright © 2024-present Guanli'
        },
    }
})