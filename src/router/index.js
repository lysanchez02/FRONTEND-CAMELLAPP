import Vue from 'vue'
import VueRouter from 'vue-router'

import HomeView from '../views/HomeView.vue'

import LoginView from'../views/login/LoginView.vue'
import RegistroView from'../views/login/RegistroView.vue'
import ContrasenaView from'../views/login/ContrasenaView.vue'

import PostulantesView from'../views/PostulantesView.vue'
import PerfilPostulanteView from'../views/perfil/PerfilPostulanteView.vue'
import Experiencia from'../views/perfil/Experiencia.vue'
import PerfilAdministrador from'../views/perfil/PerfilAdministrador.vue'
import OfertaEmpleo from'../views/perfil/OfertaEmpleo.vue'

import PublicarView from'../components/PublicarView.vue'

import ArchivoPostulanteView from '../views/ArchivoPostulante.vue'
import AdministradorView from'../views/AdministradorView.vue'
import PostulacionesView from'../views/PostulacionesView.vue'
import AdmiOfertaView from'../views/AdmiOfertaView.vue'
import AdmisubView from'../views/AdmisubView.vue'

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
    path: '/ArchivoPostulanteView',
    name: 'ArchivoPostulanteView',
    component: ArchivoPostulanteView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }, 

  {
    path: '/PostulantesView',
    name: 'PostulantesView',
    component: PostulantesView
  },
  {
    path: '/PerfilPostulanteView',
    name: 'PerfilPostulanteView',
    component: PerfilPostulanteView
  },
  {
    path: '/Experiencia',
    name: 'Experiencia',
    component: Experiencia
  },
  {
    path: '/PerfilAdministrador',
    name: 'PerfilAdministrador',
    component: PerfilAdministrador
  },
  {
    path: '/OfertaEmpleo',
    name: 'OfertaEmpleo',
    component: OfertaEmpleo
  },

  {
    path: '/ContrasenaView',
    name: 'ContrasenaView',
    component: ContrasenaView
  },{
    path: '/PublicarView',
    name: 'PublicarView',
    component: PublicarView
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
