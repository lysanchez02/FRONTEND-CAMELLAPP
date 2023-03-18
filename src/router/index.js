import Vue from 'vue'
import VueRouter from 'vue-router'

import HomeView from '../views/HomeView.vue'

import LoginView from'../views/login/LoginView.vue'
import RegistroView from'../views/login/RegistroView.vue'
import ContrasenaView from'../views/login/ContrasenaView.vue'

import PerfilPostulanteView from'../views/Postulante/PerfilPostulanteView.vue'
import Experiencia from'../views/Postulante/Experiencia.vue'
import ArchivoPostulanteView from '../views/Postulante/ArchivoPostulante.vue'
import PerfilAdministrador from'../views/perfil/PerfilAdministrador.vue'


import PerfilEmpleador from'../views/empleador/PerfilEmpleador.vue'
import OfertaEmpleo from'../views/empleador/OfertaEmpleo.vue'
import PublicarView from '../views/empleador/PublicarView.vue'
import PostulacionesView from'../views/Postulante/PostulacionesView.vue'

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
    path: '/PublicarView',
    name: 'PublicarView',
    component: PublicarView
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
    path: '/PerfilPostulanteView',
    name: 'PerfilPostulanteView',
    component: PerfilPostulanteView
  },
  {
    path: '/PerfilEmpleador',
    name: 'PerfilEmpleador',
    component: PerfilEmpleador
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
