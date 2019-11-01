import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import('@/views/index.vue')
  },
  {
    path: '/pageA',
    name: 'pageA',
    component: () => import('@/views/pageA.vue')
  },
  {
    path: '/pageB',
    name: 'pageB',
    component: () => import('@/views/pageB.vue')
  },
  {
    path: '/axiosDemo',
    name: 'axiosDemo',
    component: () => import('@/views/axiosDemo.vue')
  },
  {
    path: '/formPage',
    name: 'formPage',
    component: () => import('@/views/formPage.vue')
  },
  {
    path: '/vuexPage',
    name: 'vuexPage',
    component: () => import('@/views/vuexPage.vue')

  },
  {
    path: '/elementPage',
    name: 'elementPage',
    component: () => import('@/views/elementPage.vue')

  }
]

// eslint-disable-next-line no-new
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
