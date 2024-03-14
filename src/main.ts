import { App, createApp } from 'vue'
import Index from './App.vue'
import routes from './routers/router'
import { createRouter, createWebHistory }  from 'vue-router'

const app: App = createApp( Index )

const router = createRouter({
    history: createWebHistory(),
    routes,
})

app.use( router )

app.mount('#app')