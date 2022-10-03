import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'ConvertCurrency',
    component: () => import('../views/ConvertCurrency.vue')
  },
  {
    path: '/fluctuation',
    name: 'fluctuation',
    component: () => import('../views/FluctuationCurrency.vue')
  },
  {
    path: '/latest',
    name: 'latest',
    component: () => import('../views/LatestCurrency.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
