import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Mark from '../views/Mark.vue'
import Amy from '../views/Amy.vue'
import John from '../views/John.vue'
import Debby from '../views/Debby.vue'
import Fang from '../views/Fang.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/mark',
    name: 'Mark',
    component: Mark
  },
  {
    path: '/amy',
    name: 'Amy',
    component: Amy
  },
  {
    path: '/john',
    name: 'John',
    component: John
  },
  {
    path: '/debby',
    name: 'Debby',
    component: Debby
  },
  {
    path: '/fang',
    name: 'Fang',
    component: Fang
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
