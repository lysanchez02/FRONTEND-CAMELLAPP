<template>
  <div class="contenedor">
    <div>

      <b-navbar class="navbar"  type="dark" variant="dark" >
        <b-navbar-nav>
              <img class="img1" src="@/assets/logocamellapp.png" >
              <b-nav-item href="#">Home</b-nav-item>
              <b-nav-item href="#">Trabaja con Nosotros</b-nav-item>
              <b-nav-item href="#">Contactanos</b-nav-item>
          <div class="botton1">
              <button class="boton_1">Iniciar Sesion</button><br><br>
              <button class="boton_1">Registrar</button>
            </div>
        </b-navbar-nav>
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
          <P class="p">Aqui encontraras las mejores ofertas de enpleo de construccion de forma informal e
            independiente de manera facil y segura</P>
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
    
 
 

    }
}
</script>
<style>
.container {
  height: 80px;
  width: 80px ;
  background-color: rgb(255, 255, 255);
  font-family: "Lucida Console", "Courier New", monospace;
  font-size: 20px;
  padding: 130em 1opx;
  
}

.img1 {
  width: 70px;
}

.img2 {
  width: 40em;
}

.p {
  margin-top: 150px;
  margin-left: 230px;
  font-size: 20px;
  margin-bottom: 100px;
  font-family: Arial, Helvetica, sans-serif;
}

.boton_1 {
  padding: auto;
  border-radius: 10px;
}

.boton_1:hover {
  background-color: rgb(7, 209, 0);
}

.botton1 {
  display: flex;
  justify-content: flex-end;
  width: 850px;
  height: 45px;
  
}
.navbar{
  border: 10em;
  padding: 15px;
}
</style>
