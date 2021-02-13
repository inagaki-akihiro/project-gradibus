import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'
import CategoryRouter from '../views/CategoryRouter.vue'
import Withdraw from '../views/Withdraw.vue'




Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/categoryrouter',
    name: 'CategoryRouter',
   component : CategoryRouter
  },
  {
    path: '/signup',
    name: 'Signup',
   component : Signup
  },
  {
    path: '/withdraw',
    name: 'Withdraw',
   component : Withdraw
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    children : [
      {
        path: '/signup',
        name: 'Signup',
       component : Signup
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
