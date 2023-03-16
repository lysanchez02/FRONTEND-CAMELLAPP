<template>
  <div>
    <div class="container">
      <NavBarLogin/>
      <div class="row">
        <div class="col-3">
          <div>
            <b-card no-body style="max-width: 20rem;"
              img-src="https://st3.depositphotos.com/6582994/13117/v/450/depositphotos_131177880-stock-illustration-user-icon-in-trendy-flat.jpg"
              img-alt="Image" img-top>
              <template #header>
                <h4 class="mb-0">Leyder Yesid Sanchez Benachi</h4>
              </template>

              <b-card-body>
                <b-card-title>oficio y/o empresa</b-card-title>
                <b-card-sub-title class="mb-2">Popayan - Cauca</b-card-sub-title>
                <p>persona natural</p>
              </b-card-body>
              <b-list-group flush>
                <b-list-group-item button @click="show = 'EditarPerfil'">Editar Perfil</b-list-group-item>
                <b-list-group-item button @click="show = 'MisEmpleos'">Mis Empleos</b-list-group-item>
                <b-list-group-item button @click="show = 'ListaPostulantes'">Postulantes</b-list-group-item>
                <b-list-group-item button @click="show = ''">Trabajos terminados</b-list-group-item>
                <b-list-group-item button @click="show = ''">Mi grupo de trabajo</b-list-group-item>
              </b-list-group>
              <b-card-body>
                <h6>Redes:</h6>
                <a href="#" class="card-link">Facebook</a>
                <a href="#" class="card-link">Whatsapp</a>
              </b-card-body>
            </b-card>
          </div>
        </div>

        <div class="col-9">
          <div>
            <div class="container">
              <div class="row">
                <b-card>
                  <template #header>
                    <div class="row">
                      <div class="col-7">
                        <b-card-img
                          src="https://th.bing.com/th/id/R.7f27abb3c1eaa7b8c460a144a32f1c3d?rik=iHENRO5HKygsCw&pid=ImgRaw&r=0"
                          img-top class="w-25">
                        </b-card-img>
                      </div>
                      <div class="col-3">
                        <h4 class="mb-0 m-1">Leyder Yesid Sanchez Benachi</h4>
                        <b-card-img
                          src="https://th.bing.com/th/id/R.ef11358a21182845c7c11c3e9c41b3a0?rik=CTY93EeLjopA6Q&pid=ImgRaw&r=0"
                          img-top class="w-25">

                        </b-card-img>
                        <p>Editar</p>
                      </div>
                      <div class="row d-flex justify-content-center">
                        <div class="col-4 w-50 d-flex justify-content-center"><b-form-rating v-model="value1" show-value
                            variant="warning" class="bg-transparent border-0 m-1"></b-form-rating></div>
                      </div>
                    </div>
                  </template>

                  <b-card-body>
                    <b-card-title>Ayudante Construccion</b-card-title>
                    <b-card-sub-title class="mb-2">Popayan - Cauca</b-card-sub-title>
                  </b-card-body>

                  <b-list-group flush>
                    <b-list-group-item href=""></b-list-group-item>
                    
                    <b-list-group-item href="">datos personales</b-list-group-item>
                    <b-list-group-item v-b-toggle.accordion-experiencia>Experiencia
                      <b-collapse id="accordion-experiencia" accordion="my-accordion" role="tabpanel">
                        <b-card-body>
                          <b-card-text>
                            <p>Dos años de experiencia como ayudante en distintas obras de la ciudad de popayan...
                            </p>
                            <!--start card-->
                            <div class="d-flex justify-content-center">
                              <b-card no-body class="overflow-hidden" style="max-width: 100%;">
                                <b-row no-gutters>
                                  <b-col md="7">
                                    <b-card-body title="Trabajo de construccion">
                                      <b-card-text>
                                        This is a wider card with supporting text as a natural lead-in to additional
                                        content.
                                        This content is a little bit longer.
                                      </b-card-text><br>
                                      <div class="row">
                                        <div class="col-4"></div>
                                        <div class="row d-flex justify-content-center">
                                          <div class="col-4 w-50 d-flex justify-content-center"><b-form-rating
                                              v-model="value1" show-value variant="warning"
                                              class="bg-transparent border-0 m-1"></b-form-rating>
                                          </div>
                                        </div>
                                        <div class="col-4"></div>
                                      </div>

                                    </b-card-body>
                                  </b-col>
                                  <b-col md="5">
                                    <b-card-img
                                      src="https://cloudfront-us-east-1.images.arcpublishing.com/infobae/JYRA6SJJXNCSNIWPTRXDJW2ABI.jpg"
                                      alt="Image" class="rounded-0"></b-card-img>
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
                                        This is a wider card with supporting text as a natural lead-in to additional
                                        content.
                                        This content is a little bit longer.
                                      </b-card-text><br>
                                      <div class="row">
                                        <div class="col-4"></div>
                                        <div class="row d-flex justify-content-center">
                                          <div class="col-4 w-50 d-flex justify-content-center"><b-form-rating
                                              v-model="value1" show-value variant="warning"
                                              class="bg-transparent border-0 m-1"></b-form-rating>
                                          </div>
                                        </div>
                                        <div class="col-4"></div>
                                      </div>
                                    </b-card-body>
                                  </b-col>
                                  <b-col md="5">
                                    <b-card-img
                                      src="https://technodesing.com/wp-content/uploads/2019/06/Noticia-133479-construccion.jpg"
                                      alt="Image" class="rounded-0"></b-card-img>
                                  </b-col>
                                </b-row>
                              </b-card>
                            </div>
                            <!--end card-->
                          </b-card-text>
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
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import NavBarLogin from "@/components/NavBarLogin.vue"
export default {
  name: 'PerfilEmpleador',

  data() {
    return {

    }
  },
  components: {
    NavBarLogin
  },
  computed: {
  },
}
</script>