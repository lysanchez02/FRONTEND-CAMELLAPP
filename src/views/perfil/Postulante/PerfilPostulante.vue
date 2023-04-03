<template>
  <div>
    <b-card
      no-body
      style="max-width: 20rem;"
      img-src="https://st3.depositphotos.com/6582994/13117/v/450/depositphotos_131177892-stock-illustration-user-icon-in-trendy-flat.jpg"
      img-alt="Image"
      img-top>
      <template #header>
        <h4 class="mb-0">Postulante</h4>
        <h5></h5>
      </template>

      <b-list-group flush>
        <b-list-group-item button @click="show = 'EditarPerfil'">Gestionar Perfil</b-list-group-item>
        <b-list-group-item button @click="show = 'Ofertas'">Ofertas de Empleo</b-list-group-item>
        <b-list-group-item button @click="show = 'Experiencia'">Mi Experiencia</b-list-group-item>
        <b-list-group-item button @click="show = 'Ofertas'">Mis Postulaciones</b-list-group-item>
      </b-list-group>
    </b-card>
      
      <div class="col-1"></div>
      <div class="col-8">
        
                    <h4>Experiencia</h4>
                <!--start card-->
                <div v-for="experiencia in ListarExperiencia" :key="experiencia" class="d-flex justify-content-center">
                  <b-card no-body class="my-4 overflow-hidden" style="max-width: 1540px;">
                    <b-row no-gutters>
                      <b-col md="7">
                        <b-card-body class="my-4" :title="experiencia.titulo">
                          <b-card-text  class="my-4">{{experiencia.descripcion}}</b-card-text><br>
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
                      <a href="" @click="show = 'nuevoRegistroCatalogo'"><b-card img-src="" img-alt="Card image" img-left class="mb-3">
                      <b-icon icon="plus-circle-dotted"></b-icon>
                      <b-card-text>Añadir experiencia</b-card-text></b-card></a>
            </div><!--Experiencia-->
          
            <div class="row">
              <div class="col-3">
                <div>
                  <b-card
                    no-body
                    style="max-width: 20rem"
                    img-src="https://st3.depositphotos.com/6582994/13117/v/450/depositphotos_131177892-stock-illustration-user-icon-in-trendy-flat.jpg"
                    img-alt="Image"
                    img-top
                  >
                    <template #header>
                      <h4 class="mb-0">Postulante</h4>
                      <h5></h5>
                    </template>

                    <b-list-group flush>
                      <b-list-group-item button @click="show = 'EditarPerfil'"
                        >Gestionar Perfil</b-list-group-item
                      >
                      <b-list-group-item button @click="show = 'Ofertas'"
                        >Ofertas de Empleo</b-list-group-item
                      >
                      <b-list-group-item button @click="show = 'Experiencia'"
                        >Mi Experiencia</b-list-group-item
                      >
                      <b-list-group-item button @click="show = 'Ofertas'"
                        >Mis Postulaciones</b-list-group-item
                      >
                    </b-list-group>
                  </b-card>
                </div>
              </div>
              <div class="col-1"></div>
              <div class="col-8">
                <div v-if="show === 'Experiencia'">
                  <h4>Experiencia</h4>
                  <!--start card-->
                  <div
                    v-for="experiencia in ListarExperiencia" :key="experiencia.id"

                    class="d-flex justify-content-center"
                  >
                    <b-card
                      no-body
                      class="my-4 overflow-hidden"
                      style="max-width: 1540px"
                    >
                      <b-row no-gutters>
                        <b-col md="7">
                          <b-card-body class="my-4" :title="experiencia.titulo">
                            <b-card-text class="my-4">{{
                              experiencia.descripcion
                            }}</b-card-text
                            ><br />
                          </b-card-body>
                        </b-col>
                        <b-col md="5">
                          <b-card-img
                            src="https://cloudfront-us-east-1.images.arcpublishing.com/infobae/JYRA6SJJXNCSNIWPTRXDJW2ABI.jpg"
                            alt="Image"
                            class="rounded-0"
                          ></b-card-img>
                        </b-col>
                      </b-row>
                    </b-card>
                  </div>
                  <br />
                  <!--end card-->
                  <a href="" @click="show = 'nuevoRegistroCatalogo'"
                    ><b-card img-src="" img-alt="Card image" img-left class="mb-3">
                      <b-icon icon="plus-circle-dotted"></b-icon>
                      <b-card-text>Añadir experiencia</b-card-text></b-card
                    ></a
                  >
                </div>
                <!--Experiencia-->
                <div v-else-if="show === 'Ofertas'"><OfertasEmpleo /></div>
                <div v-else-if="show === 'EditarPerfil'"><EditarPerfil /></div>
                <div v-else-if="show === 'nuevoRegistroCatalogo'">
                  <div class="row">
                    <b-card>
                      <template #header>
                        <b-card-img
                          src="https://help.fromdoppler.com/wp-content/uploads/2016/12/Alto_y_ancho-1024x531.png"
                          img-top
                          class="w-20"
                        ></b-card-img>
                        <br />
                        <br />
                        <div class="row d-flex">
                          <div class="col-4">
                            <label for="">Titulo</label>
                          </div>
                          <div class="col-8">
                            <input class="from_control" placeholder="titulo" />
                          </div>
                        </div>
                        <br />
                        <div class="row d-flex">
                          <div class="col-4">
                            <label for="">Descripcion Del Trabajo</label>
                          </div>
                          <div class="col-8">
                            <b-form-textarea
                              placeholder="se permite al menos 500 caracteres"
                              rows="3"
                            >
                            </b-form-textarea>
                          </div>
                        </div>
                        <br />
                        <div class="row d-flex">
                          <div class="col-4">
                            <label for="">Pago</label>
                          </div>
                          <div class="col-8">
                            <input class="from_control" placeholder="$" />
                          </div>
                        </div>
                        <br />
                        <div class="row d-flex">
                          <div class="col-2">
                            <label for="">Fecha de Inicio del trabajo</label>
                          </div>
                          <div class="col-4">
                            <b-form-datepicker
                              v-model="value"
                              :min="min"
                              :max="max"
                              locale="es"
                            ></b-form-datepicker>
                          </div>
                          <div class="col-2">
                            <label for="">Fecha de Finalizacion</label>
                          </div>
                          <div class="col-4">
                            <b-form-datepicker
                              v-model="value"
                              :min="min"
                              :max="max"
                              locale="es"
                            ></b-form-datepicker>
                          </div>
                        </div>
                        <br />
                      </template>
                      <b-button href="#" variant="primary" class="m-1"
                        ><b-icon icon="check2"></b-icon> Publicar Oferta</b-button
                      >
                      <b-button href="#" variant="danger" class="m-1"
                        ><b-icon icon="x-circle"></b-icon> Cancelar</b-button
                      >
                    </b-card>
                  </div>
                </div>
              </div>
            </div>
          </div>
             
</template>
<script>
import axios from "axios";
import OfertasEmpleo from "@/components/OfertasEmpleo.vue";
import EditarPerfil from "@/components/EditarPerfil.vue";
import NavBar from "@/components/NavBar.vue";
export default {
  name: "PerfilPostulante",
  data() {
    return {
      lista: null,
      ListarExperiencia: null,
      show: 'Ofertas' ,
      value1: null,
      value2: null,
    };
  },
  components: {
    OfertasEmpleo,
    EditarPerfil,
    NavBar,
  },
  mounted() {
    axios.get("http://localhost:3000/ListarExperiencia/").then((response) => {
      this.ListarExperiencia = response.data;
    });
  },
};
</script>
