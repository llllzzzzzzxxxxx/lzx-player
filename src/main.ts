import { createApp } from 'vue'
import { createPinia } from 'pinia'
import '@/style/reset.scss'
import router from './router'
import App from './App.vue'
import PlayerTop from '@/components/player_top/index.vue'
import PlayerBottom from '@/components/player_bottom/index.vue'
import Login from '@/components/login/index.vue'
import Player from '@/components/player/index.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn'

const app = createApp(App)

app.component('PlayerTop', PlayerTop)
  .component('PlayerBottom', PlayerBottom)
  .component('Login', Login)
  .component('Player', Player)

app.use(createPinia())
app.use(router)
app.use(ElementPlus, {
  locale: zhCn,
})

app.mount('#app')