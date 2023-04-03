<template>
  <div>
    <NavBarLogin />
    <div>
      <div class="container">
        <br />
        <h1 class="m-3">BIENVENIDOS A CAMELLAPP</h1>
        <b-row>
          <div class="col-6">
            <img src="@/assets/imagentrabajo.jpg" alt="" />
          </div>
          <div class="col-6 d-flex justify-content-end">
            <h2 class="m-5">
              Aqui encontraras las mejores ofertas de empleos de construccion de
              forma informal e independiente, ingresa a CamellApp y se parte de
              nuestra familia.
            </h2>
          </div> </b-row
        ><br />
      </div>
    </div>
  </div>
</template>
<script>
import NavBarLogin from "@/components/NavBarLogin.vue";
export default {
  name: "InicioView",
  components: { NavBarLogin },
  methods: {
    iniciarSesion(){
      //logica de iniciar sesión
      localStorage.setItem("usuario", respuesta);

    }
  },
  mounted(){
    this.iniciarSesion()
  }
};
</script>
