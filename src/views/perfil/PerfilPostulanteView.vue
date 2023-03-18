<template>
  <div>
    <div class="container">
      <NavBarLogin/>
      <div class="row">
        <div class="col-4">
         <PerfilPostulante/>
        </div>

        <div class="col-8">
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
                      <div class="col-5">
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
                  <div class="row">
                  
                   <div class="col-3">
                    
                
                    </div>

                    <div class="col-8">
                  
                    </div>
                      

                  </div>
                     
                

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
import PerfilPostulante from "@/components/PerfilPostulante.vue"
export default {
  name: 'PerfilEmpleador',

  data() {
    return {

    }
  },
  components: {
    NavBarLogin,
    PerfilPostulante
  },
  computed: {
  },
}
</script>