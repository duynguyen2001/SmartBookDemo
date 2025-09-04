import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.NODE_ENV === 'production' ? '/SmartBookDemo/' : '/',
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/',
      redirect: '/book'
    },
    {
      path: '/book',
      name: 'book',
      component: () => import('@/views/Book.vue')
    }
  ]
})
