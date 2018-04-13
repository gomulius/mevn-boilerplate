import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store/store'
// pages
import HelloWorld from '@/pages/HelloWorld'
import Register from '@/pages/Register'
import Login from '@/pages/Login'
import Settings from '@/pages/Settings'
import Dashboard from '@/pages/Dashboard'
import NewPost from '@/pages/NewPost'
import ViewPost from '@/pages/viewPost'

Vue.use(Router)

const router = new Router({
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
      component: Settings,
      meta: { requiresAuth: true }
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
      meta: { requiresAuth: true }
    },
    {
      path: '/newpost',
      name: 'NewPost',
      component: NewPost,
      meta: { requiresAuth: true }
    },
    {
      path: '/viewpost/:id',
      name: 'ViewPost',
      component: ViewPost,
      meta: { requiresAuth: true }
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.state.loggedIn) {
      next({
        path: '/register'
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
