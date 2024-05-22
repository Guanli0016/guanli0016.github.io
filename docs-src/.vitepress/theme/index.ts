import DefaultTheme from 'vitepress/theme';
import ElementPlus from 'element-plus';
import GLPlayer from '../../components/ui/GLPlayer.vue';
import GLLayout from './GLLayout.vue';

import './styles/global.css';
import 'element-plus/dist/index.css'

export default {
    ...DefaultTheme,
    Layout: GLLayout,
    enhanceApp({ app }) {
        app.use( ElementPlus );
        app.component( 'GLPlayer', GLPlayer );
    }
};