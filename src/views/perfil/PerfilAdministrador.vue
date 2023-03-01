<template>
    <div class="container">

<div class="row">
  <div class="col-3">
    <div>
    <b-card
      no-body
      style="max-width: 20rem;"
      img-src="https://st3.depositphotos.com/6582994/13117/v/450/depositphotos_131177930-stock-illustration-user-icon-in-trendy-flat.jpg"
      img-alt="Image"
      img-top
    >
      <template #header>
        <h4 class="mb-0">CAMELLAPP</h4>
      </template>
      <b-card-body>
        <b-card-title>Administrador</b-card-title>
        <b-card-sub-title class="mb-2">Popayan - Cauca</b-card-sub-title>
          <a href="">Ver mas...</a>
      </b-card-body>
      <b-list-group flush>
        <b-list-group-item href="#">Ofertas</b-list-group-item>
        <b-list-group-item href="#">Empleadores</b-list-group-item>
        <b-list-group-item href="#">Postulantes</b-list-group-item>
        <b-list-group-item href="#">Usuarios Bloqueados</b-list-group-item>
        <b-list-group-item href="#">Comentarios</b-list-group-item>
      </b-list-group> 
      <b-card-body>
        <h6>Contacto:</h6>
        <a href="#" class="card-link">Facebook</a>
        <a href="#" class="card-link">Whatsapp</a>
      </b-card-body>
    </b-card>
  </div>
  </div>

<div class="col-1"></div>
   <div class="col-8">
<!--start card-->
<div class="d-flex justify-content-center">
  <b-card no-body class="overflow-hidden" style="max-width: 1540px;">
    <b-row no-gutters>
      <b-col md="7">
        <b-card-body title="Trabajo de construccion">
          <b-card-text>
            This is a wider card with supporting text as a natural lead-in to additional content.
            This content is a little bit longer.
          </b-card-text><br>
<div class="row">  
  <div class="col-4"></div>
  <div class="col-4"><b-form-rating v-model="value1" show-value variant="warning" ></b-form-rating></div>
  <div class="col-4"></div>
</div>
        </b-card-body>
      </b-col>
      <b-col md="5">
        <b-card-img src="https://cloudfront-us-east-1.images.arcpublishing.com/infobae/JYRA6SJJXNCSNIWPTRXDJW2ABI.jpg" alt="Image" class="rounded-0"></b-card-img>
      </b-col>
    </b-row>
  </b-card>
</div>
<br>
<!--end card-->
<!--start card-->
<div class="d-flex justify-content-center">
  <b-card no-body class="overflow-hidden" style="max-width: 1540px;">
    <b-row no-gutters>
      <b-col md="7">
        <b-card-body title="Trabajo de construccion">
          <b-card-text>
            This is a wider card with supporting text as a natural lead-in to additional content.
            This content is a little bit longer.
          </b-card-text><br>
<div class="row">  
  <div class="col-4"></div>
  <div class="col-4"><b-form-rating v-model="value2" show-value variant="warning" ></b-form-rating></div>
  <div class="col-4"></div>
</div>
        </b-card-body>
      </b-col>
      <b-col md="5">
        <b-card-img src="https://technodesing.com/wp-content/uploads/2019/06/Noticia-133479-construccion.jpg" alt="Image" class="rounded-0"></b-card-img>
      </b-col>
    </b-row>
  </b-card>
</div>
<!--end card-->
   </div>             
</div>
</div>
</template>
<script> export default{
  name:'PerfilAdministrador',
  data(){
    return{
    }
  },
  components:{},
}
</script>