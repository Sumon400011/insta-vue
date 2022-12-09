import { createRouter, createWebHistory } from 'vue-router'
import TimelineView from '../views/TimelineView.vue'
import Settings from "../components/Settings.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: TimelineView
    },
    {
      path: '/settings',
      name: 'Settings',
      component: Settings
    },
  ]
})

export default router
