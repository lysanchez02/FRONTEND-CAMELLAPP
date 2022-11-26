<template>
  <div id="app">
    <NavBarLogin/>
   <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>  |
      <router-link to="/Inicioview">Inicio</router-link>  |
      <router-link to="/LoginView">Login</router-link>   |
      <router-link to="/RegistroView">Registro</router-link>   |
      <router-link to="/OfertasdeempleoEmpleador">OfertasEmpleador</router-link>   |
      <router-link to="/OfertasdeempleoPostulante">OfertasPostulante</router-link>   |
      <router-link to="/PostulantesView">Postulantes</router-link>   |
      <router-link to="/PerfilPostulanteView">PerfilPostulante</router-link>   |
      <router-link to="/PerfilAdministrador">PerfilAdministrador</router-link>   |
      <router-link to="/MiPerfilPostulante">MiPerfilPostulante</router-link>   |
      <router-link to="/EditarEmpleo">Editar Empleo</router-link>   |
      <router-link to="/DetalleOfertaView">Detalles del Empleo</router-link>   |
      <router-link to="/PlantillaPerfil">Plantilla Perfil</router-link>   |
    </nav>
    <router-view/>
  </div>
</template>
<script>
import NavBarLogin from './components/NavBarLogin.vue';

export default{
  name:'App',
  data(){
    return{
    }
  },
  components:{
    NavBarLogin
},
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
