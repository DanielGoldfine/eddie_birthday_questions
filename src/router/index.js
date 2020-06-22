import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/instructions',
    name: 'Home',
    component: () => import('../views/Tech-Instructions.vue')
  },
  {
    path: '/quests/:relation',
    name: 'Home',
    component: () => import('../views/Quests.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return {x: 0, y: 0}
  }
})

export default router
