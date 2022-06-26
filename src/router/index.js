import { createRouter, createWebHistory } from 'vue-router'

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

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;
