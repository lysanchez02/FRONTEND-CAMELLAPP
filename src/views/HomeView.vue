<template>
  <div class="contenedor">
    <div class="home">
      <b-navbar toggleable="lg" type="dark" variant="info">
        
        <b-navbar-brand href="#" >CAMELLAAP</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          

        </b-collapse>
      </b-navbar>
      <img src="@/assets/logocamellapp.png" alt="">

      <b-button class="boton" variant="outline-primary">INICIAR SESION</b-button>
      <b-button class="boton" variant="outline-primary">REGISTRAR</b-button>

    </div><br>
    <div class="barra">
      <b-breadcrumb-item href="#home">
        <b-icon icon="house-fill"></b-icon>
        Home
      </b-breadcrumb-item>
      <b-breadcrumb-item href="#foo">Trabaja Con Nosotros</b-breadcrumb-item>
      <b-breadcrumb-item href="#foo">Contactanos</b-breadcrumb-item>
    </div>
    <br>
    <div>
      <h1>BIENVENIDOS A CAMELLAPP</h1>
      <b-row class="my-1">
        <b-col sm="5">

          <img class="img" src="@/assets/imagentrabajo.jpg" alt="">
        </b-col>
        <b-col lg="5">
          <P class="p">Aqui encontraras las mejores ofertas de enpleo de contrccion de forma informal e independiente de
            manera facil y segura</P>
        </b-col>
      </b-row><br>
    </div>
  </div>

</template>

<script>


export default {
  name: 'HomeView',
  components: {

  }
}
</script>
<style>
.container {
  height: auto;
  width: auto;
  background-color: rgb(255, 255, 255);
  font-family: "Lucida Console", "Courier New", monospace;
  font-size: 20px;
  padding: 150em 12px;
}

.home {

  display: flex;
  width: 60px;
  height: 50px;
  border: 30px;


}

.p {
  margin-top: 150px;
  margin-left: 90px;
  font-size: 20px;
  margin-bottom: 100px;
  font-family: Arial, Helvetica, sans-serif;
}

.boton {
  padding: 100%;


}

.img {
  height: 600px;
  width: 120%;


}

.barra {
  display: flex;
}
</style>
