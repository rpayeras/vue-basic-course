import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import Profile from '@/components/Profile'
import NotFound from '@/components/NotFound'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/profile/:user',
      name: 'profile',
      component: Profile,
      props: true
    },
    {
      path: '/404',
      name: '404',
      component: NotFound
    },
    {
      path: '*',
      redirect: {
        name: '404'
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  console.log('Before each route')
  next()
})

router.afterEach((to, from) => {
  console.log('After each')
})

export default router
