import { createRouter, createWebHistory } from 'vue-router'
import Layout from '../views/Layout.vue'
import Settings from "../components/Settings.vue"
import Profile from "../views/ProfileLayout.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Layout
    },
    {
      path: '/settings',
      name: 'Settings',
      component: Settings
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    }
  ]
})

export default router
