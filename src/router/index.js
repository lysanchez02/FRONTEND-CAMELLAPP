import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/login/LoginView.vue'
import RegistroView from '../views/login/RegistroView.vue'
import ExperienciaView from '../views/login/ExperienciaView.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView
  },
  {
    path: '/LoginView',
    name: 'LoginView',
    component: LoginView
  },
  {
    path: '/RegistroView',
    name: 'RegistroView',
    component: RegistroView
  },
  {
    path: '/ExperienciaView',
    name: 'ExperienciaView',
    component: ExperienciaView 
  },
  {
    path: '/About',
    name: 'About',
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
