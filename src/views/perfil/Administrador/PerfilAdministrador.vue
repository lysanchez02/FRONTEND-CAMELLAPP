<template>
  <div>
    <NavBar /><br />
    <div class="container">
      <div class="row">
        <div class="col-3">
          <div>
            <b-card
              no-body
              style="max-width: 20rem"
              img-src="https://st3.depositphotos.com/6582994/13117/v/450/depositphotos_131177930-stock-illustration-user-icon-in-trendy-flat.jpg"
              img-alt="Image"
              img-top
            >
              <template #header>
                <h4 class="mb-0">Administrador</h4>
              </template>
              <b-list-group flush>
                <b-list-group-item button @click="show = ''"
                  >Gestionar Perfil</b-list-group-item
                >
                <b-list-group-item button @click="show = 'Ofertas'"
                  >Ofertas de Empleo</b-list-group-item
                >
                <b-list-group-item button @click="show = 'ListaEmpleadores'"
                  >Empleadores</b-list-group-item
                >
                <b-list-group-item button @click="show = 'ListaPostulantes'"
                  >Postulantes</b-list-group-item
                >
                <b-list-group-item button @click="show = ''"
                  >Usuarios Bloqueados</b-list-group-item
                >
                <b-list-group-item button @click="show = ''"
                  >Comentarios</b-list-group-item
                >
              </b-list-group>
            </b-card>
          </div>
        </div>

        <div class="col-1"></div>
        <div class="col-8">
          <div v-if="show === 'Ofertas'"><OfertasEmpleo /></div>
          <div v-if="show === 'ListaEmpleadores'"><ListaEmpleadores /></div>
          <div v-if="show === 'ListaPostulantes'"><ListaPostulantes /></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import ListaPostulantes from "@/components/ListaPostulantes.vue";
import ListaEmpleadores from "@/components/ListaEmpleadores.vue";
import OfertasEmpleo from "@/components/OfertasEmpleo.vue";
import NavBar from "@/components/NavBar.vue";

export default {
  name: "PerfilAdministrador",
  data() {
    return {
      empleador: null,
      show: null,
    };
  },
  components: {
    ListaEmpleadores,
    ListaPostulantes,
    OfertasEmpleo,
    NavBar,
  },
  mounted() {
    axios.get("http://localhost:3000/listarUsuario").then((response) => {
      this.empleador = response.data;
    });
  },
};
</script>
