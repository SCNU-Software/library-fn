import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes:[
    {
      path:'/',
      redirect: '/login'
    },
    {
      path:'/login',
      component: () => import('./views/Login.vue'),
      meta: {
        keepAlive: false //true显示头部
      },
    },
    {
      path:'/register',
      component: () => import('./views/Register.vue'),
      meta: {
        keepAlive: false //true显示头部
      },
    },
    {
      path:'/dashboard',
      component: () => import('./views/Dashboard.vue'),
      meta: {
        keepAlive: true //true显示头部
      },
      children: [
        {
          path: 'search',
          name: 'search',
          component: () => import('./views/Search.vue'),
          meta: {
            keepAlive: true //true显示头部
          },
        },
        {
          path: 'importfile',
          name: 'importfile',
          component: () => import('./views/ImportFile.vue'),
          meta: {
            keepAlive: true //true显示头部
          },
        },
        {
          path: 'addone',
          name: 'addone',
          component: () => import('./views/AddOne.vue'),
          meta: {
            keepAlive: true //true显示头部
          },
        },
        {
          path: 'order',
          name: 'order',
          component: () => import('./views/Order.vue'),
          meta: {
            keepAlive: true //true显示头部
          },
        },
      ]
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // },
  ]
})
