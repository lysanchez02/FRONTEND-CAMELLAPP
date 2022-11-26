<template>
    <div class="container">
<div class="row">
<div class="col-3">
<MenuPostulante/>
</div>
<div class="col-1"></div>
<div class="col-8">
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

  </div>             
 </div>
</div>
</template>
<script>
import MenuPostulante from '@/components/MenuPostulante.vue';

export default{
  name:'MiPerfilPostulante',
  data(){
    return{
      value1: null,
      value2: null
    }
  },
  components:{
    MenuPostulante
},
}
</script>