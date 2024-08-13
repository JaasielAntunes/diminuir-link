import { createMemoryHistory, createRouter } from 'vue-router'

import Header from '@/components/landing/Header.vue'

const routes = [{ path: '/', component: Header }]

const router = createRouter({
  history: createMemoryHistory(),
  routes
})

export default router
