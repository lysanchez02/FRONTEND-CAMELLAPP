<template>
    <div>
        <div class="container">
        <div class="row">
  <div>
    <b-card>
    <template #header>
      <b-card-img src="https://www.semana.com/resizer/JmiB52VJxZmk799j7D2CEeTZ1x4=/arc-anglerfish-arc2-prod-semana/public/R52D6MSO7ZB4DF3W4QM4LECYIA.jpg" img-top class="w-50"></b-card-img>
      
      <b-input-group size="lg" prepend="$" append=".00" placeholder="1'000.000">
    <b-form-input class="bg-opacity-100 border-0" placeholder="Salario" style="height: 2.3rem;"></b-form-input>
  </b-input-group>
      <!--
         class="" placeholder="$ 1'000.000
      <br>  <br>
      <h4 class="mb-0 m-1"> <input type="text" class="border-0 bg-opacity-100" placeholder="Ayudante General"></h4>
      <input type="text" placeholder="ej: Se requiere ayudante de construccion por 6 meses" class="border-0 bg-opacity-100">
      <h6></h6>
      
      <div class="row d-flex">
        <div class="col-4"><p class="d-flex justify-content-end">Pago:</p></div>
        <div class="col-4"><input type="number"" prepend="$"></div>
        <div class="col-4"><p class="d-flex justify-content-top">COP</p></div></div>
        -->
      </template>
      <b-card-body class="p-0">
        <b-card-title><input type="text" placeholder="Leyder Yesid Sanchez Benachi" class="border-0"></b-card-title>
        <b-card-sub-title class="mb-2 justify-content-center"><input type="text" placeholder="Popayan - Cauca" class="border-0"></b-card-sub-title>
<input type="text" class="border-0 align-content-center" placeholder="Nombre de la empresa">
      </b-card-body>
      <b-list-group flush class="b-0"><hr class="m-0">
        <b-list-group-item href="">Detalles de la Oferta</b-list-group-item>

        <b-list-group-item href="#">Postulados</b-list-group-item>
        <b-list-group-item href="#"></b-list-group-item>
      </b-list-group>
  
      <b-card-body class="p-2">
        <h6>Contacto:</h6>
        <a href="#" class="card-link">Facebook</a>
        <a href="#" class="card-link">Whatsapp</a>
      </b-card-body>
  
      <b-card-footer footer-bg-variant="secondary" footer-text-variant="white">Guardar</b-card-footer>
      <b-card-footer footer-bg-variant="danger" footer-text-variant="white">Eliminar</b-card-footer>
      </b-card>
  </div>
</div>
    </div>
    </div>
</template>
<script>
export default{
    name:'EditarOferta',
    data(){
      return{

      }
    },
    components:{
  },
  }
  </script>