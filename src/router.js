import { createRouter, createWebHistory } from 'vue-router'

// 1. Define route components.
// These can be imported from other files
const Home = () => import('pages/home.vue')
const About = () => import('pages/about.vue')
const Test = () => import('pages/test.vue')
// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
export const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/test', component: Test },
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes,
})

export default router
