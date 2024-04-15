import { App, createApp } from 'vue';
import Index from '@/App.vue';
import router from '@/routers/router';

import ElementPlus from 'element-plus';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';

import '@/styles.css';
import 'element-plus/dist/index.css';

const app: App = createApp( Index );

app
.use( router )
.use( ElementPlus );

for ( let [ key, component ] of Object.entries( ElementPlusIconsVue ) ) {
    app.component( key, component );
}

app.mount('#app');