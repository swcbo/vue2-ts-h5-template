import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "Home" */ '@/views/Home.vue'),
    redirect: '/index',
    children: [
      {
        path: '/index',
        name: 'Index',
        component: () =>
          import(/* webpackChunkName: "Index" */ '@/views/Index.vue'),
        meta: {
          title: '网络投票'
        }
      },

      {
        path: '/list',
        name: 'List',
        component: () =>
          import(/* webpackChunkName: "List" */ '@/views/List.vue'),
        meta: {
          title: '排行榜'
        }
      }
    ]
  },
  {
    path: '/detail/:id',
    name: 'Detail',
    component: () =>
      import(/* webpackChunkName: "Detail" */ '@/views/Detail.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
  next()
})
export default router
