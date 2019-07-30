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
        component: () => import(/* webpackChunkName: "overview" */ '@/views/Main/Overview'),
        meta: { activeIndex: '1', breadcrumb: [{ title: '概览', path: '/Main' }, { title: '概览' }] }
      }, {
        path: 'systemConfig',
        name: 'systemConfig',
        component: () => import(/* webpackChunkName: "systemConfig" */ '@/views/Main/Overview'),
        meta: { activeIndex: '2-1', breadcrumb: [{ title: '系统管理' }, { title: '系统配置' }] }
      }, {
        path: 'personnelConfig',
        name: 'personnelConfig',
        component: () => import(/* webpackChunkName: "personnelConfig" */ '@/views/Main/Overview'),
        meta: { activeIndex: '3-1', breadcrumb: [{ title: '人员管理' }, { title: '人员配置' }] }
      }]
    }
  ]
})
