import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/login/LoginView.vue'
import RegistroView from '../views/login/RegistroView.vue'
import ArchivosView from '../views/ArchivosView.vue'
import AdministradorView from'../views/AdministradorView.vue'
import PostulacionesView from'../views/PostulacionesView.vue'
import AdmiOfertaView from'../views/AdmiOfertaView.vue'
import AdmisubView from'../views/AdmisubView.vue'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/LoginView',
    name: 'LoginView',
    component: LoginView
  },
  {
    path: '/AdmisubView',
    name: 'AdmisubView',
    component: AdmisubView
  },
  {
    path: '/AdministradorView',
    name: 'AdministradorView',
    component: AdministradorView
  },
  {
    path: '/AdmiOfertaView',
    name: 'AdmiOfertaView',
    component: AdmiOfertaView
  },
  {
    path: '/PostulacionesView',
    name: 'PostulacionesView',
    component: PostulacionesView
  },
  {
    path: '/RegistroView',
    name: 'RegistroView',
    component: RegistroView
  },
  {
    path: '/ArchivosView',
    name: 'ArchivosView',
    component: ArchivosView
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
