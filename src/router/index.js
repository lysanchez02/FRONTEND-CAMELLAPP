import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import InicioView from'../views/InicioView.vue'
import LoginView from'../views/login/LoginView.vue'
import RegistroView from'../views/login/RegistroView.vue'
import OfertasdeempleoEmpleador from'../views/OfertasdeempleoEmpleador.vue'
import OfertasdeempleoPostulante from'../views/OfertasdeempleoPostulante.vue'
import PostulantesView from'../views/PostulantesView.vue'
import PerfilPostulanteView from'../views/perfil/PerfilPostulanteView.vue'
import MiPerfilPostulante from'../views/perfil/MiPerfilPostulante.vue'
import PerfilAdministrador from'../views/perfil/PerfilAdministrador.vue'
import EditarEmpleo from'../views/EditarEmpleo.vue'
import PlantillaPerfil from'../views/perfil/PlantillaPerfil.vue'
import DetalleOfertaView from'../views/DetalleOfertaView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/Inicioview',
    name: 'Inicioview',
    component: InicioView
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
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }, 
   {
    path: '/OfertasdeempleoEmpleador',
    name: 'OfertasdeempleoEmpleador',
    component: OfertasdeempleoEmpleador
  },
  {
    path: '/OfertasdeempleoPostulante',
    name: 'OfertasdeempleoPostulante',
    component: OfertasdeempleoPostulante
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
    path: '/EditarEmpleo',
    name: 'EditarEmpleo',
    component: EditarEmpleo
  },
  {
    path: '/PlantillaPerfil',
    name: 'PlantillaPerfil',
    component: PlantillaPerfil
  },  {
    path: '/DetalleOfertaView',
    name: 'DetalleOfertaView',
    component: DetalleOfertaView
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
