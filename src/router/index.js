import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '主框架',
      component: Main,
      children: [
        {
          path: '/Dashboard',
          name: '首页',
          component: resolve => require(['@/components/partials/Dashboard'], resolve)
        },
        {
          path: '/user',
          name: '用户管理',
          component: resolve => require(['@/components/auth/user-manager'], resolve)
        }
      ]
    }
  ]
})
