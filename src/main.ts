import { App, createApp } from 'vue';
import Index from '@/App.vue';
import router from '@/routers/router';

import './styles.css';

const app: App = createApp( Index );

app.use( router );

app.mount('#app');