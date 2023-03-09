<template>
  <div id="app">
    <nav>
      
      <router-link to="/RegistroView">Registro</router-link>|
      <router-link to="/">Home</router-link> |
      <router-link to="/LoginView">Login</router-link>|
      
      <router-link to="/ArchivoPostulanteView">publicar experiencia </router-link>|
      <router-link to="/AdministradorView">Adminsitrador</router-link>|
      <router-link to="/PostulacionesView">Postulaciones</router-link>|
      <router-link to="/AdmiOfertaView">ADMIN</router-link>|
      <router-link to="/AdmisubView">subcategorias</router-link> |
      <router-link to="/PostulantesView">Postulantes</router-link>   |
      <router-link to="/PerfilPostulanteView">PerfilPostulante</router-link>   |
      <router-link to="/PerfilAdministrador">PerfilAdministrador</router-link>   |
      <router-link to="/OfertaEmpleo">ofertas empleo</router-link>   |
      <router-link to="/Experiencia">experiencia</router-link>|  
      <router-link to="/PlantillaPerfil">Plantilla Perfil</router-link>   |
      <router-link to="/CategoriaView">CategoriaView</router-link> |
      <router-link to="/PublicarView">publicar</router-link>|
      
      
    
    </nav>
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
