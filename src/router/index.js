import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: '/',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/papers',
    name: 'papers',
    component: () => import('../views/PapersView.vue')
  },
  {
    path: '/extras',
    name: 'extras',
    component: () => import('../views/ExtrasView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
