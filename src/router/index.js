import Vue from 'vue'
import VueRouter from 'vue-router'

import HomeView from '../views/HomeView.vue';
import LoginView from'../views/login/LoginView.vue'
import RegistroView from'../views/login/RegistroView.vue'
import ContraseñaView from'../views/login/ContraseñaView.vue'

import PostulantesView from'../views/PostulantesView.vue'
import PerfilPostulanteView from'../views/perfil/PerfilPostulanteView.vue'
import MiPerfilPostulante from'../views/perfil/MiPerfilPostulante.vue'
import PerfilAdministrador from'../views/perfil/PerfilAdministrador.vue'
import PerfilEmpleador from'../views/perfil/PerfilEmpleador.vue'

import PlantillaPerfil from'../views/perfil/PlantillaPerfil.vue'

import PublicarView from'../components/PublicarView.vue'
import AdmiView from'../views/AdmiView.vue'
import CategoriaView from'../views/CategoriaView.vue'

import ArchivosView from '../views/ArchivosView.vue'
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
    path: '/MiPerfilPostulante',
    name: 'MiPerfilPostulante',
    component: MiPerfilPostulante
  },
  {
    path: '/PerfilAdministrador',
    name: 'PerfilAdministrador',
    component: PerfilAdministrador
  },
  {
    path: '/PerfilEmpleador',
    name: 'PerfilEmpleador',
    component: PerfilEmpleador
  },

  {
    path: '/PlantillaPerfil',
    name: 'PlantillaPerfil',
    component: PlantillaPerfil
  },{
    path: '/CategoriaView',
    name: 'CategoriaView',
    component: CategoriaView
  },
  {
    path: '/ContraseñaView',
    name: 'ContraseñaView',
    component: ContraseñaView
  },{
    path: '/PublicarView',
    name: 'PublicarView',
    component: PublicarView
  },{
    path: '/AdmiView',
    name: 'AdmiView',
    component: AdmiView
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
