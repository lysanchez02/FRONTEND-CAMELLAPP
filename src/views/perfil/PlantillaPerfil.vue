<template>
    <div class="container">
<div class="row">
<div class="col-3">
<div>
    <b-card
      no-body
      style="max-width: 20rem;"
      img-src="https://media-exp1.licdn.com/dms/image/D4E03AQFKfOzFSM4Mpg/profile-displayphoto-shrink_400_400/0/1668206363895?e=1674086400&v=beta&t=ayccEam7G1vLp4kYMS4v3mmXZj5uM1aoTj1d7c773N4"
      img-alt="Image"
      img-top
    >
      <template #header>
        <h4 class="mb-0">Leyder Yesid Sanchez Benachi</h4>
      </template>
  
      <b-card-body>
        <b-card-title>Ayudante Construccion</b-card-title>
        <b-card-sub-title class="mb-2">Popayan - Cauca</b-card-sub-title>
      </b-card-body>
  
      <b-list-group flush>
        <b-list-group-item href="#">Actualizar Datos Personales</b-list-group-item>
        <b-list-group-item href="#">Ofertas de Empleo</b-list-group-item>
        <b-list-group-item href="#">Mis Empleos</b-list-group-item>
      </b-list-group>
  
      <b-card-body>
        <h6>Contacto:</h6>
        <a href="#" class="card-link">Facebook</a>
        <a href="#" class="card-link">Whatsapp</a>
      </b-card-body>
  
      <b-card-footer>This is a footer</b-card-footer>
  
      <b-card-img src="https://placekitten.com/480/210" alt="Image" bottom></b-card-img>
    </b-card>
  </div>
</div>
<div class="col-1"></div>
<div class="col-8">
    <h4>Experiencia</h4>

<a href="">
    <b-card img-src="" img-alt="Card image" img-left class="mb-3">
      <b-icon icon="plus-circle-dotted"></b-icon>
      <b-card-text>Añadir experiencia</b-card-text>      
    </b-card></a>

  </div>             
 </div>
</div>
<!--
<template>
  <div class="container"><div class="row">
  <div class="col-3"></div>
  <div class="col-1"></div>
  <div class="col-8"></div>
 </div>
</div>
</template>

-->

</template>
<script>
export default{
  name:'PlantillaPerfil',
  data(){
    return{
    }
  },
  components:{

  },
}
</script>