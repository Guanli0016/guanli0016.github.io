import { defineConfig } from 'vitepress'

export default defineConfig({
    // 应用级配置选项
    lang: 'en-US',
    title: 'Guanli Site',
    titleTemplate: ':title | Guanli HomePage',
    description: 'liuguanli homepage',
    outDir: '../docs',
    appearance: 'force-dark',
    cleanUrls: true,

    // 主题相关配置
    themeConfig: {
        i18nRouting: false,
        logo: '/images/liu-logo.jpg',
        siteTitle: 'Guanli Site',
        nav: [
            {
                text: '收藏',
                items: [
                    { text: 'vite教程', link: '/guides/vite' },
                ]
            }, {
                text: '家庭', 
                items: [
                    { text: '刘小宝', link: '/guides/photoslist/baby' },
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