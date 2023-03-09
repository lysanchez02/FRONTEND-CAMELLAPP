<template>
  <div>
    <div class="container">
      <div class="row">
        <h2>CAMELLAPP</h2>
        <div class="col">
          <div>
            <b-input-group>


              <template #append>
                <b-button><b-icon icon="search"></b-icon></b-button>
              </template>
              <b-form-input></b-form-input>

              <template #prepend>
                <b-dropdown text="Mas Opciones" variant="info">
                  <b-dropdown-item button @click="show = 'Ofertas'">Todas las ofertas</b-dropdown-item>
                  <b-dropdown-item button @click="show = 'Categorias'">Categorias</b-dropdown-item>
                  <b-dropdown-item>Mis postulaciones</b-dropdown-item>
                  <b-dropdown-item>Trabajos Terminados</b-dropdown-item>
                </b-dropdown>
              </template>
            </b-input-group>
          </div>
          <br>
          <!--aqui termina la barra de busqueda-->
        </div>
      </div>
      <div class="row">
        <div>
          <div v-if="show === 'Categorias'">
            <b-list-group v-for="categoria in listarCategoria" :key="listarCategoria.id">
              <b-list-group-item class="m-1" button :title="categoria.descripcion">{{ categoria.nombre }}
                <b-badge variant="primary"><b-icon icon="x"></b-icon></b-badge>
              </b-list-group-item>
            </b-list-group>
          </div>
        </div>
        <div v-if="show === 'DetalleOferta'">
          <DetalleOferta />
        </div>
        <div class="row" v-else-if="show === 'Ofertas'">
          <!--start card-->
          <div class="row d-flex">
            <div class="col-6" v-for="listar in listar" :key="listar.id">
              <b-card :title="listar.nombres"
                img-src="https://www.semana.com/resizer/JmiB52VJxZmk799j7D2CEeTZ1x4=/arc-anglerfish-arc2-prod-semana/public/R52D6MSO7ZB4DF3W4QM4LECYIA.jpg"
                img-alt="Image" img-top tag="article" style="max-width: 25rem;" class="mb-2 m-1">
                <b-card-text>{{ listar.descripcion }}</b-card-text>
                <b-card-text>{{ listar.horario }}</b-card-text>
                <b-card-text>{{ listar.tiempo_estimado }}</b-card-text>
                <b-card-text>Pago: {{ listar.salario }}</b-card-text>
                <b-button @click="show = 'DetalleOferta'" variant="primary" class="m-1">Ver Detalles</b-button>
                <b-button href="#" variant="success" class="m-1">Aplicar a esta oferta</b-button>
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
import axios from "axios"
import DetalleOferta from '@/components/DetalleOferta.vue'

export default {
  name: 'OfertasPostulante',
  data() {
    return {
      listar: null,
      show: 'Categorias'
    }
  },
  components: {
    DetalleOferta,

  },
  mounted() {
    axios.get("http://localhost:4000/consultaOfertas/").then(response => {
      this.listar = response.data
    });
    axios.get("http://localhost:4000/Listarcategorianew/").then(response2 => {
      this.listarCategoria = response2.data
    })
  },
}
</script>