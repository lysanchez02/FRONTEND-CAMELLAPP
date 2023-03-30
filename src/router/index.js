import Vue from 'vue'
import VueRouter from 'vue-router'

import HomeView from '../views/HomeView.vue'

import LoginView from'../views/login/LoginView.vue'
import RegistroView from'../views/login/RegistroView.vue'
import ContrasenaView from'../views/login/ContrasenaView.vue'
import RecuContraseña from'../views/login/RecuContraseña.vue'

import PerfilPostulanteView from'../views/Postulante/PerfilPostulanteView.vue'
import Experiencia from'../views/Postulante/Experiencia.vue'
import ArchivoPostulanteView from '../views/Postulante/ArchivoPostulante.vue'
import VistaOferta from'../views/Postulante/VistaOferta.vue'
import PostulacionesView from'../views/Postulante/PostulacionesView.vue'

import PerfilEmpleador from'../views/empleador/PerfilEmpleador.vue'
import OfertaEmpleo from'../views/empleador/OfertaEmpleo.vue'
import PublicarView from '../views/empleador/PublicarView.vue'
import Postulantes from '../views/empleador/Postulantes.vue'
import Misofertas from'../views/empleador/Misofertas.vue'
import Editaroferta from'../views/empleador/Editaroferta.vue'

import PerfilAdministrador from'../views/administrador/PerfilAdministrador.vue'
import Usuarios from'../views/administrador/Usuarios.vue'
import Subcategoria from '../views/administrador/Subcategoria.vue'

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
    path: '/ContrasenaView',
    name: 'ContrasenaView',
    component: ContrasenaView
  },
  {
    path: '/RecuContraseña',
    name: 'RecuContraseña',
    component: RecuContraseña
  },
  // postulante

  {
    path: '/PerfilPostulanteView',
    name: 'PerfilPostulanteView',
    component: PerfilPostulanteView
  },
  {
    path: '/ArchivoPostulanteView',
    name: 'ArchivoPostulanteView',
    component: ArchivoPostulanteView
  },
  {
    path: '/Experiencia',
    name: 'Experiencia',
    component: Experiencia
  },

//Empleador
  
  
  {
    path: '/PerfilEmpleador',
    name: 'PerfilEmpleador',
    component: PerfilEmpleador
  },
   {
    path: '/OfertaEmpleo',
    name: 'OfertaEmpleo',
    component: OfertaEmpleo
  },
  {
    path: '/Postulantes',
    name: 'Postulantes',
    component: Postulantes
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
    path: '/VistaOferta',
    name: 'VistaOferta',
    component: VistaOferta
  },
  
  {
    path: '/PublicarView',
    name: 'PublicarView',
    component: PublicarView
  },
  {
    path: '/Misofertas',
    name: 'Misofertas',
    component: Misofertas
  },
  {
    path: '/Editaroferta',
    name: 'Editaroferta',
    component: Editaroferta
  },

//administrador

 {
    path: '/PerfilAdministrador',
    name: 'PerfilAdministrador',
    component: PerfilAdministrador
  },
  {
    path: '/Usuarios',
    name: 'Usuarios',
    component: Usuarios
  },
  {
    path: '/Subcategoria',
    name: 'Subcategoria',
    component: Subcategoria
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
