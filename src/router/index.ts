import { createRouter, createWebHistory } from 'vue-router'
import IndexView from '../views/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Index',
      component: IndexView,
      children: [
        {
          path: '',
          name: 'Home',
          component: () => import('../views/home.vue')
        },
        {
          path: '/download',
          name: 'Download',
          component: () => import('../views/download.vue')
        },
        {
          path: '/contact',
          name: 'Contact',
          component: () => import('../views/download.vue')
        }
      ]
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        
      }
    }
  },
})

export default router
