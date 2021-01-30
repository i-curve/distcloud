import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('@/views/Register.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/views/404.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach((to, from, next) => {
  if (to.path === "/login" || to.path === "/register") {
    sessionStorage.removeItem("username")
    sessionStorage.removeItem("token")
  }
  if (to.path === '/register') {
    next()
    return
  }
  let name = sessionStorage.getItem("token") 
  if (!name && to.path !== "/login") {
    next({path: "/login"})
  } else {
    next()
  }
})

export default router
