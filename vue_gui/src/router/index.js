import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
  },
  {
    path: '/buy',
    name: 'buy',
    component: function () {
      return import('../views/BuyView.vue')
    }
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: function () {
      return import('../views/CheckoutView.vue')
    }
  },
  {
    path: '/login',
    name: 'login',
    component: function () {
      return import('../views/LoginView.vue')
    }
  },
  {
    path: '/signup',
    name: 'signup',
    component: function () {
      return import('../views/SignupView.vue')
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
