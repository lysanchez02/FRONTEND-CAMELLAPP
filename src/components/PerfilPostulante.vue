<template>
    <div class="container">
        <div class="row">
  <div>
    <b-card>
    <template #header>
      <b-card-img src="https://media-exp1.licdn.com/dms/image/D4E03AQFKfOzFSM4Mpg/profile-displayphoto-shrink_400_400/0/1668206363895?e=1674086400&v=beta&t=ayccEam7G1vLp4kYMS4v3mmXZj5uM1aoTj1d7c773N4" img-top class="w-25"></b-card-img>
        <h4 class="mb-0 m-1">Leyder Yesid Sanchez Benachi</h4>
        <div class="row d-flex justify-content-center"><div class="col-4 w-50 d-flex justify-content-center"><b-form-rating v-model="value1" show-value variant="warning" class="bg-transparent border-0 m-1"></b-form-rating></div></div>
      </template>
  
      <b-card-body>
        <b-card-title>Ayudante Construccion</b-card-title>
        <b-card-sub-title class="mb-2">Popayan - Cauca</b-card-sub-title>
      </b-card-body>
      <b-list-group flush>
        <b-list-group-item href=""></b-list-group-item>
        <b-list-group-item href="">Detalles</b-list-group-item>
        <b-list-group-item v-b-toggle.accordion-experiencia >Experiencia
          <b-collapse id="accordion-experiencia" accordion="my-accordion" role="tabpanel">
                        <b-card-body>
                          <b-card-text>
                    <p>Dos años de experiencia como ayudante en distintas obras de la ciudad de popayan...</p>
                <!--start card-->
                <div class="d-flex justify-content-center">
                  <b-card no-body class="overflow-hidden" style="max-width: 100%;">
                    <b-row no-gutters>
                      <b-col md="7">
                        <b-card-body title="Trabajo de construccion">
                          <b-card-text>
                            This is a wider card with supporting text as a natural lead-in to additional content.
                            This content is a little bit longer.
                          </b-card-text><br>
                <div class="row">  
                  <div class="col-4"></div>
                  <div class="row d-flex justify-content-center"><div class="col-4 w-50 d-flex justify-content-center"><b-form-rating v-model="value1" show-value variant="warning" class="bg-transparent border-0 m-1"></b-form-rating></div></div>
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
                  <b-card no-body class="overflow-hidden" style="max-width: 100%;">
                    <b-row no-gutters>
                      <b-col md="7">
                        <b-card-body title="Trabajo de construccion">
                          <b-card-text>
                            This is a wider card with supporting text as a natural lead-in to additional content.
                            This content is a little bit longer.
                          </b-card-text><br>
                <div class="row">  
                  <div class="col-4"></div>
                  <div class="row d-flex justify-content-center"><div class="col-4 w-50 d-flex justify-content-center"><b-form-rating v-model="value1" show-value variant="warning" class="bg-transparent border-0 m-1"></b-form-rating></div></div>
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
<!--end card--></b-card-text>
        </b-card-body>
      </b-collapse>


        </b-list-group-item>
        <b-list-group-item href="#">Contratar</b-list-group-item>
        <b-list-group-item href="#"></b-list-group-item>
      </b-list-group>
  
      <b-card-body>
        <h6>Contacto:</h6>
        <a href="#" class="card-link">Facebook</a>
        <a href="#" class="card-link">Whatsapp</a>
      </b-card-body>
  
      <b-card-footer footer-bg-variant="danger" footer-text-variant="white">Bloquear</b-card-footer>
      <b-card-footer footer-bg-variant="secondary" footer-text-variant="white">Reportar</b-card-footer>
      </b-card>
  </div>
</div>
    </div>
</template>
<script>
export default{
  name:'PerfilPostulante',
  data(){
    return{
      valueperfil: 5,
      value1: null,
      value2: null,
    }
  },
  components:{
},
}
</script>