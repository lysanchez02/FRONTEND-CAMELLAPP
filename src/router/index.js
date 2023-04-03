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
    name: 'InicioView',
    component: InicioView
  },

  {
    path: '/LoginView',
    name: 'LoginView',
    component: LoginView
  },
  {
    path: '/detalleOferta/:id',
    name: 'detalleOferta',
    component: detalleOferta
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
    path: '/PerfilPostulante',
    name: 'PerfilPostulante',
    component: PerfilPostulante
  },
  {
    path: '/PerfilEmpleador',
    name: 'PerfilEmpleador',
    component: PerfilEmpleador
  },
  {
    path: '/PerfilAdministrador',
    name: 'PerfilAdministrador',
    component: PerfilAdministrador
  },

  
  {
    path: '/PlantillaPerfil',
    name: 'PlantillaPerfil',
    component: PlantillaPerfil,
  },
  {
    path: '/ContrasenaView',
    name: 'ContrasenaView',
    component: ContrasenaView
  },
  {
    path: '/PublicarView',
    name: 'PublicarView',
    component: PublicarView
  },
  {
    path: '/EditarPerfil',
    name: 'EditarPerfil',
    component: EditarPerfil
  },
  {
    path: '/OfertasEmpleo',
    name: 'OfertasEmpleo',
    component: OfertasEmpleo
  },
  {
    path: '/verPerfil',
    name: 'verPerfil',
    component: verPerfil
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
