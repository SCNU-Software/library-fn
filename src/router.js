import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes:[
    {
      path:'/',
      redirect: '/login'
    },
    {
      path:'/login',
      component: () => import('./views/Login.vue')
    },
    {
      path:'/dashboard',
      component: () => import('./views/Dashboard.vue'),
      children: [
        {
          path: 'search',
          name: 'search',
          component: () => import('./views/Search.vue')
        },
        {
          path: 'importfile',
          name: 'importfile',
          component: () => import('./views/ImportFile.vue')
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
