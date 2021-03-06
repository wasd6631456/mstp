import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login'
import Register from '@/components/register'
import Home from '@/components/home/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    }
  ]
})
