<template>
  <div class="cantainer2">
    <div>
      <b-navbar toggleable="lg" type="dark" variant="info">
        <img class="img1" src="@/assets/logocamellapp.png" >

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="#">Home</b-nav-item>
              <b-nav-item href="#">Trabaja con Nosotros</b-nav-item>
              <b-nav-item href="#">Contactanos</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="boton1">
          <b-button  variant="primary" @click="Inicio_sesion()">INICIAR SESION</b-button>
            <b-button  variant="primary" @click="Registrar()">REGISTRAR</b-button>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
    </div>
    
    <br>
    <div>
      <h3>BIENVENIDOS A CAMELLAPP</h3>
      <b-row class="my-1">
        <b-col sm="4">
          <img class="img2" src="@/assets/imagentrabajo.jpg" alt="">
        </b-col>
        <b-col lg="7">
          <P class="p">Aqui encontraras las mejores ofertas de empleos de construccion de forma informal e
            independiente, ingresa a CamellApp y se parte de nuestra  familia. </P>
        </b-col>
      </b-row><br>
    </div>
  </div>

</template>

<script>
export default {
  name: 'HomeView',
  components: {

  },
  methods: {
    Inicio_sesion(){
      this.$router.push("/LoginView");
  },
  Registrar(){
      this.$router.push("/RegistroView");
  },
    }
}
</script>
<style>
.container{
  width: auto;
 
}
.navbar{
  width: auto;
  height: auto;
  border: 2px;
  
  
}
.img1 {
  width: 70px;
}

.img2 {
  width: 35em;
  height: 20em;
}

.p {
  margin-top: 150px;
  margin-left: 230px;
  font-size: 20px;
  margin-bottom: 100px;
  font-family: Arial, Helvetica, sans-serif;
}


.boton1 {
  display: flex;
  justify-content: right ;
  
  width: 850px;
  height: 45px;
  color: aliceblue;
  
}
.navbar{
  border: 10em;
  padding: 15px;
}
</style>
