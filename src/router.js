import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/',
      redirect: 'book',
      children: [
        {
          path: '/book',
          name: 'book',
          component: () => import('@/views/Book.vue')
        }
      ]
    },
  ]
})
