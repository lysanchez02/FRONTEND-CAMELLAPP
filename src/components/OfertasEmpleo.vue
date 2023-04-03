<template>
  <div>
    <div class="container">
      <div class="row">
        <h2>CAMELLAPP</h2>
        <div class="col">
          <div>
            <b-input-group><template #append>
                <b-button>
                  <b-icon icon="search"></b-icon>
                </b-button>
              </template>
              <b-form-input></b-form-input><template #prepend>
                <div>
                  <b-dropdown>
                    <template #button-content>
                      <b-icon icon="filter" aria-hidden="true"></b-icon> Filtro
                    </template>
                    <b-dropdown-item v-for="categoria in listarCategoria" :key="categoria.id"
                      :title="categoria.descripcion">{{categoria.nombre}}</b-dropdown-item>
                  </b-dropdown>
                </div>
              </template>
            </b-input-group>
          </div>
          <br>
          <!--aqui termina la barra de busqueda-->
        </div>
      </div>
      <div class="row d-flex justify-content-center">
        <div v-if="show === 'DetalleOferta'">
          <DetalleOferta /></div>
        <div class="row d-flex justify-content-between" v-else-if="show === 'Ofertas'">
          <!--start card-->
          <div v-for="ofertaEmpleo in listaOfertaEmpleo" :key="ofertaEmpleo.id_ofertaEmpleo" class="d-flex w-50">
            <router-link class="btn border border-0" :to="{name:'detalleOferta',params:{id:ofertaEmpleo.id_ofertaEmpleo}}">
            <div :title="ofertaEmpleo.titulo" img-alt="Image" img-top tag="article" style="max-width: 25rem;" class="card btn btn-light">
              <b-card-text class="d-flex">{{ofertaEmpleo.id_ofertaEmpleo}}. {{ofertaEmpleo.titulo}}</b-card-text>
              <img src="https://www.semana.com/resizer/JmiB52VJxZmk799j7D2CEeTZ1x4=/arc-anglerfish-arc2-prod-semana/public/R52D6MSO7ZB4DF3W4QM4LECYIA.jpg" alt="">
                <b-card-text>{{ofertaEmpleo.descripcion}}</b-card-text>
                <b-card-text>Lugar: {{ofertaEmpleo.ubicacion}}</b-card-text>
            <b-card-text>Duracion: {{ofertaEmpleo.tipoDeContrato}}</b-card-text>
            <b-card-text>Pago: {{ofertaEmpleo.salario}}</b-card-text>
            <b-button href="#" variant="info" class="m-1">Aplicar a esta oferta</b-button>
            <b-button variant="info" class="m-1"><b-icon icon="pencil"></b-icon>  Editar</b-button>
            <h1>{{ofertaEmpleo.id}}</h1>
                <!-- <router-link class="btn" :to="{path:`detalleOferta${ofertaEmpleo.id_ofertaEmpleo}`}">ver</router-link> --><b-button href="#" variant="danger" class="m-1">
                  <b-icon icon="trash"></b-icon>
                </b-button>
                <!-- <template #footer>
                  <small class="text-muted">Last updated 3 mins ago</small>
                </template> -->
              </div>
            </router-link>
            </div>
          <!--end card-->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios"
import DetalleOferta from '@/components/DetalleOferta.vue'

export default {
  name: 'OfertasEmpleo',
  data() {
    return {
      listaOfertaEmpleo: [],
      listarCategoria: null,
      show: 'Ofertas'
    }
  },
  components: {
    DetalleOferta,

  },
  mounted() {
    axios.get("http://localhost:3000/listarOfertaEmpleo/").then(response => {
      this.listaOfertaEmpleo = response.data
    });
    axios.get("http://localhost:3000/listarCategoria/").then(response2 => {
      this.listarCategoria = response2.data
    })
  },
}
</script>