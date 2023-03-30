<template>
  <div>
    <div class="container">
      <div class="row">
        <h2>CAMELLAPP</h2>
        <div class="col">
          <div>
            <b-input-group
              ><template #append>
                <b-button><b-icon icon="search"></b-icon></b-button>
              </template>
              <b-form-input></b-form-input
              ><template #prepend>
                <div>
                  <b-dropdown>
                    <template #button-content>
                      <b-icon icon="funnel" aria-hidden="true"></b-icon> Filtro
                    </template>
                    <b-dropdown-item
                      v-for="categoria in listarCategoria"
                      :key="listarCategoria.id"
                      :title="categoria.descripcion"
                      >{{ categoria.nombre }}</b-dropdown-item
                    >
                  </b-dropdown>
                </div>
              </template></b-input-group
            >
          </div>
          <br />
          <!--aqui termina la barra de busqueda-->
        </div>
      </div>
      <div class="row">
        <div v-if="show === 'DetalleOferta'"><DetalleOferta /></div>
        <div class="row" v-else-if="show === 'Ofertas'">
          <!--start card-->
          <div class="row d-flex">
            <div class="col-6" v-for="listar in listar" :key="listar.id">
              <b-card
                :title="listar.nombres"
                img-src="https://www.semana.com/resizer/JmiB52VJxZmk799j7D2CEeTZ1x4=/arc-anglerfish-arc2-prod-semana/public/R52D6MSO7ZB4DF3W4QM4LECYIA.jpg"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 25rem"
                class="mb-2 m-1 btn-ligth"
                @click="show = 'DetalleOferta'"
              >
                <b-card-text>{{ listar.descripcion }}</b-card-text>
                <b-card-text>{{ listar.horario }}</b-card-text>
                <b-card-text>{{ listar.tiempo_estimado }}</b-card-text>
                <b-card-text>Pago: {{ listar.salario }}</b-card-text>
                <b-button href="#" variant="info" class="m-1"
                  >Aplicar a esta oferta</b-button
                >
                <b-button href="#" variant="info" class="m-1"
                  ><b-icon icon="pencil"></b-icon
                ></b-button>
                <b-button href="#" variant="danger" class="m-1"
                  ><b-icon icon="trash"></b-icon
                ></b-button>
                <template #footer>
                  <small class="text-muted">Last updated 3 mins ago</small>
                </template>
              </b-card>
            </div>
          </div>
          <!--end card-->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import DetalleOferta from "@/components/DetalleOferta.vue";

export default {
  name: "OfertasEmpleo",
  data() {
    return {
      listar: null,
      listarCategoria: null,
      show: "Ofertas",
    };
  },
  components: {
    DetalleOferta,
  },
  mounted() {
    axios.get("http://localhost:3000/listarOfertaEmpleo/").then((response) => {
      this.listar = response.data;
    });
    axios.get("http://localhost:3000/listarCategoria/").then((response2) => {
      this.listarCategoria = response2.data;
    });
  },
};
</script>
