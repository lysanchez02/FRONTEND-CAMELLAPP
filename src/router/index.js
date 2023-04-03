import Vue from 'vue';
import VueRouter from 'vue-router';
import LoginView from'../views/login/LoginView.vue';
import RegistroView from'../views/login/RegistroView.vue';
import ContrasenaView from'../views/login/PasswordView.vue';
import InicioView from '../views/InicioView.vue';
import PerfilPostulante from'../views/perfil/Postulante/PerfilPostulante.vue';
import PerfilAdministrador from'../views/perfil/Administrador/PerfilAdministrador.vue';
import PerfilEmpleador from'../views/perfil/Empleador/PerfilEmpleador.vue';
import PlantillaPerfil from'../views/perfil/PlantillaPerfil.vue';
import PublicarView from'../components/PublicarView.vue';
import detalleOferta from "../components/DetalleOferta";
import EditarPerfil from "../components/EditarPerfil.vue"
import OfertasEmpleo from "../components/OfertasEmpleo.vue"
import verPerfil from "../views/verPerfil.vue"

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
    path: '/RegistroView',
    name: 'RegistroView',
    component: RegistroView
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
