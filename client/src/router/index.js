import Vue from 'vue'
import Router from 'vue-router'
// pages
import HelloWorld from '@/pages/HelloWorld'
import Register from '@/pages/Register'
import Login from '@/pages/Login'
import Settings from '@/pages/Settings'
import Dashboard from '@/pages/Dashboard'
import NewPost from '@/pages/NewPost'
import ViewPost from '@/pages/viewPost'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/settings',
      name: 'Settings',
      component: Settings
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/newpost',
      name: 'NewPost',
      component: NewPost
    },
    {
      path: '/viewpost/:id',
      name: 'ViewPost',
      component: ViewPost
    }
  ]
})
