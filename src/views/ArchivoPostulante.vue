<template>
  <div>
    <div class="container">
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

                    <br> <br>
                    <div class="row d-flex">
                      <div>
                        <!-- Styled -->
                        <b-form-file v-model="archivo" placeholder="elija el archivo que desea subir"></b-form-file><br>

                      </div>


                      <div class="row d-flex">
                        <div class="col-6">
                          <b-card-img
                            src="https://help.fromdoppler.com/wp-content/uploads/2016/12/Alto_y_ancho-1024x531.png"
                            img-top class="w-10"></b-card-img>
                        </div>
                        
                      
                        <div class="col-6">
                        <b-card-img
                          src="https://help.fromdoppler.com/wp-content/uploads/2016/12/Alto_y_ancho-1024x531.png" img-top
                          class="w-10"></b-card-img>
                      
                      </div>
                      </div>
                      
                    </div>

                    <div class="row d-flex">
                      <div class="col-4">
                        <label for="">Titulo</label>
                      </div>
                      <div class="col-8">
                        <input class="from_control" placeholder="titulo">
                      </div>
                    </div>
                    <br>
                    <div class="row d-flex">
                      <div class="col-4">
                        <label for="">Descripcion</label>
                      </div>
                      <div class="col-8">
                        <b-form-textarea placeholder="se permite al menos 500 caracteres" rows="3"> </b-form-textarea>
                      </div>
                    </div>
                    <br>
                    <div class="row d-flex">
                      <div class="col-4">
                        <label for="">duracion del trabajo</label>
                      </div>
                      <div class="col-8">
                        <input class="from_control" placeholder="duracion">
                      </div>
                    </div>
                    <br>
                    <div class="row d-flex">
                      <div class="col-4">
                        <label for="">lugar del trabajo</label>
                      </div>
                      <div class="col-8">
                        <input class="from_control" placeholder="ubicacion">
                      </div>
                    </div>
                    <br>
                  </template>
                  <b-button href="#" variant="primary" class="m-1"><b-icon icon="check2"></b-icon>Agregar experiencia</b-button>
                  <b-button href="#" variant="danger" class="m-1"><b-icon icon="x-circle"></b-icon> Cancelar</b-button>
                </b-card>
              </div>
            </div>
          </div>
        </div>
        <div class="col-1"></div>
        <div class="col-8">
          <div v-if="show === 'EditarPerfil'">
            <EditarPerfil />
          </div>
          <div v-else-if="show === 'MisEmpleos'">
            <OfertasEmpleador />
          </div>
          <div v-else-if="show === 'PublicarView'">
            <PublicarView />
          </div>
          <div v-else-if="show === 'ListaPostulantes'">
            <ListaPostulantes />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PerfilEmpleador',

  data() {
    return {
      
    }
  },
  components: {
  },
  computed: {
    },
}
</script>