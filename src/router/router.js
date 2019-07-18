import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/Main'
    },
    {
      path: '/Main',
      name: 'Main',
      redirect: '/Main/Overview',
      component: () => import(/* webpackChunkName: "main" */ '@/views/Main/Main'),
      children: [{
        path: 'Overview',
        name: 'Overview',
        component: () => import(/* webpackChunkName: "overview" */ '@/views/Main/Overview')
      }]
    }
  ]
})
