<template>
  <div id="app">
<<<<<<< HEAD
    <nav>
=======
    <!--  <nav>
      <router-link to="/RegistroView">Registro</router-link>|
>>>>>>> camellapp
      <router-link to="/">Home</router-link> |
      <router-link to="/LoginView">Login</router-link> |      
      <router-link to="/RegistroView">Registro</router-link> |
      <router-link to="/ContrasenaView">Enviar codigo</router-link> |
      <router-link to="/RecuContraseÑa">Recuperar Contrasena</router-link> |
      
      <router-link to="/PerfilPostulanteView">Perfil Postulante</router-link>   |
      <router-link to="/Experiencia">experiencia</router-link> | 
      <router-link to="/ArchivoPostulanteView">publicar experiencia </router-link> |
      <router-link to="/Vistaoferta">vista oferta p </router-link>|
      <router-link to="/PostulacionesView">Postulaciones</router-link> |

      <router-link to="/PerfilEmpleador">Perfil Empleador</router-link>   |
      <router-link to="/publicarView">publicarOferta</router-link> |  
      <router-link to="/OfertaEmpleo">ofertas empleo</router-link>   |
      <router-link to="/Misofertas">Mis Ofertas</router-link> |
      <router-link to="/Postulantes">postulantes</router-link> |
      <router-link to="/Editaroferta">Editaroferta</router-link> |
      
      <router-link to="/PerfilAdministrador">PerfilAdministrador</router-link>   |
      <router-link to="/PerfilEmpleador">PerfilEmpleador</router-link>   |
      <router-link to="/MiPerfilPostulante">MiPerfilPostulante</router-link>|  
      <router-link to="/PlantillaPerfil">Plantilla Perfil</router-link>   |
      <router-link to="/CategoriaView">CategoriaView</router-link>
      
      <router-link to="/PublicarView">publicar</router-link>|
      <router-link to="AdmiView">admiempleos</router-link>|
      <router-link to="CategoriaView">categoria</router-link>
    </nav>-->
    <router-view/>

    
  </div>
</template>
<script>


export default{
  name:'App',
  data(){
    return{
    }
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
