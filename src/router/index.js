import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CategoriaView from '../views/CategoriaView.vue'
import ObraGrisView from '../views/ObraGrisView.vue'
import ObraBlancaView from '../views/ObraBlancaView.vue'
import ObraNegraView from '../views/ObraNegraView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/CategoriaView',
    name: 'CategoriaView',
    component: CategoriaView
  },
  {
    path: '/ObraGrisView',
    name: 'ObraGrisView',
    component: ObraGrisView
  },
  {
    path: '/ObraBlancaView',
    name: 'ObraBlancaView',
    component: ObraBlancaView
  },
  {
    path: '/ObraNegraView',
    name: 'ObraNegraView',
    component: ObraNegraView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
