import pinia from '@/stores/index'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import '@/style/reset.scss'
import router from './router'
import App from './App.vue'
import PlayerTop from '@/components/player_top/index.vue'
import PlayerBottom from '@/components/player_bottom/index.vue'
import Login from '@/components/login/index.vue'
import Nav from '@/components/nav/index.vue'
import player from '@/components/player/index.vue'

const app = createApp(App)
 app.component('PlayerTop', PlayerTop)
    .component('PlayerBottom', PlayerBottom)
    .component('Login', Login)
    .component('Player',player)


app.use(createPinia())
app.use(router)
app.use(pinia);

app.mount('#app')
