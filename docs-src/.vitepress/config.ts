import { fileURLToPath, URL } from 'node:url';
import { DefaultTheme, UserConfig, defineConfig } from 'vitepress';

import navigator from '../configs/theme/navigator';
import sidebar from '../configs/theme/sidebar';

const config: UserConfig<DefaultTheme.Config> = {

    // 应用级配置选项
    lang: 'en-US',
    title: '刘冠立的个人空间',
    titleTemplate: ':title | Guanli Site',
    description: '刘冠立的个人空间',
    outDir: '../docs',
    appearance: 'force-dark',
    cleanUrls: true,

    head: [
        ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
    ],

    vite: {
        resolve: {
            alias: [
                {
                    find: /^.*\/VPHero\.vue$/,
                    replacement: fileURLToPath(
                        new URL( '../components/extends/VPHero.vue', import.meta.url )
                    )
                },
                {
                    find: /^.*\/VPFeature\.vue$/,
                    replacement: fileURLToPath(
                        new URL( '../components/extends/VPFeature.vue', import.meta.url )
                    )
                }
            ]
        }
    },

    // 主题相关配置
    themeConfig: {
        i18nRouting: false,
        logo: '/images/liu-logo.jpg',
        siteTitle: '刘冠立的个人空间',
        nav: navigator,
        sidebar: sidebar,
        socialLinks: [
            { icon: 'github', link: 'https://github.com/Guanli0016/' },
            { icon: 'npm', link: 'https://www.npmjs.com/~guanli0016' },
        ],
        footer: {
            copyright: 'Copyright © 2024-present Guanli'
        },
    },
    // markdown: {
    //     lineNumbers: true,
    //     theme: 'slack-dark'
    // },
}

export default defineConfig( config );