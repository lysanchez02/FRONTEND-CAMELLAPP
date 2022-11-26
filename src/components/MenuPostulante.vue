<template>
<div>
    <b-card
      no-body
      style="max-width: 20rem;"
      img-src="https://media-exp1.licdn.com/dms/image/D4E03AQFKfOzFSM4Mpg/profile-displayphoto-shrink_400_400/0/1668206363895?e=1674086400&v=beta&t=ayccEam7G1vLp4kYMS4v3mmXZj5uM1aoTj1d7c773N4"
      img-alt="Image"
      img-top>
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
</template>
<script>
export default{
  name:'MenuPostulante',
  data(){
    return{

    }
  },
  components:{
  },
}
</script>