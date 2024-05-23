import { DefaultTheme, UserConfig, defineConfig } from 'vitepress';

import navigator from '../configs/theme/navigator';
import sidebar from '../configs/theme/sidebar'

const config: UserConfig<DefaultTheme.Config> = {

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
    markdown: {
        lineNumbers: true,
        theme: 'slack-dark'
    }
}

export default defineConfig( config );