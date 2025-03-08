import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory('/lzx-player/'),
  routes: [
    {
      path:'/toplist',
      component:()=>import('@/pages/toplist/index.vue')
    },
    {
      path:'/playlist',
      component:()=>import('@/pages/playlist/index.vue')
    },
    {
      path:'/search',
      component:()=>import('@/pages/search/index.vue')
    },
    {
      path:'/userlist',
      component:()=>import('@/pages/userlist/index.vue')
    },
    {
      path:'/historylist',
      component:()=>import('@/pages/historylist/index.vue')
    },
    {
      path:'/comment',
      component:()=>import('@/pages/comment/index.vue')
    },
    {
      path: '/',
      redirect: '/playlist'
    }
  ],
  scrollBehavior(){
    return {
        left: 0,
        top: 0
    }
}
})

export default router;