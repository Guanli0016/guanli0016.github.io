import DefaultTheme from 'vitepress/theme';
import ElementPlus from 'element-plus';

import './styles/global.css';
import 'element-plus/dist/index.css'

export default {
    ...DefaultTheme,
    enhanceApp({ app }) {
        app.use( ElementPlus );
    }
};