import { createRouter, createWebHistory } from 'vue-router'

import Footer from '@/components/landing/Footer.vue'
import Header from '@/components/landing/Header.vue'
import Plans from '@/components/landing/Plans.vue'
import Platform from '@/components/landing/Platform.vue'
import Solutions from '@/components/landing/Solutions.vue'
import Login from '@/views/Login.vue'
import Register from '@/views/Register.vue'

const routes = [
  { path: '/', component: Header },
  { path: '/platform', component: Platform },
  { path: '/solutions', component: Solutions },
  { path: '/plans', component: Plans },
  { path: '/terms', component: Footer },
  { path: '/register', component: Register },
  { path: '/login', component: Login }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
