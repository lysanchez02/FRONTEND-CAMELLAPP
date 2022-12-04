<template>
    <div class="container">
<div class="row">
<div class="col-3">
  <div>
    <b-card
      no-body
      style="max-width: 20rem;"
      img-src="https://st3.depositphotos.com/6582994/13117/v/450/depositphotos_131177892-stock-illustration-user-icon-in-trendy-flat.jpg"
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
        <b-list-group-item button @click="show = 'EditarPerfil'">Actualizar Datos Personales</b-list-group-item>
        <b-list-group-item button @click="show = 'Experiencia'">Mi Experiencia</b-list-group-item>
        <b-list-group-item button @click="show = 'Ofertas'">Ofertas de Empleo</b-list-group-item>
        <b-list-group-item >Mis Empleos</b-list-group-item>
      </b-list-group>
  
      <b-card-body>
        <h6>Contacto:</h6>
        <a href="#" class="card-link">Facebook</a>
        <a href="#" class="card-link">Whatsapp</a>
      </b-card-body>
  
      <b-card-footer>This is a footer</b-card-footer>
  
      <b-card-img src="https://placekitten.com/480/210" alt="Image" bottom></b-card-img>
    </b-card>
</div></div>
<div class="col-1"></div>
<div class="col-8">
  <div v-if="show === 'Experiencia'">
    <h4>Experiencia</h4>
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
        </b-card-body>
      </b-col>
      <b-col md="5">
        <b-card-img src="https://technodesing.com/wp-content/uploads/2019/06/Noticia-133479-construccion.jpg" alt="Image" class="rounded-0"></b-card-img>
      </b-col>
    </b-row>
  </b-card>
</div><br>
<!--end card-->
<a href="">
    <b-card img-src="" img-alt="Card image" img-left class="mb-3">
      <b-icon icon="plus-circle-dotted"></b-icon>
      <b-card-text>Añadir experiencia</b-card-text>      
    </b-card></a>
   </div><!--Experiencia--> 
  <div v-else-if="show === 'Ofertas'"><OfertasPostulante/></div>
  <div v-else-if="show === 'EditarPerfil'"><EditarPerfil/></div>
  </div>             
 </div>
</div>
</template><script>


import OfertasPostulante from '@/components/OfertasPostulante.vue'
import EditarPerfil from '@/components/EditarPerfil.vue'

export default{
  name:'MiPerfilPostulante',
  data(){
    return{
      show: null ,
      value1: null,
      value2: null
    }
  },
  components:{
    OfertasPostulante,
    EditarPerfil,
},

}
</script>