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
              img-src="https://st3.depositphotos.com/6582994/13117/v/450/depositphotos_131177880-stock-illustration-user-icon-in-trendy-flat.jpg"
              img-alt="Image"
              img-top
            >
              <template #header>
                <h4 class="mb-0">Empleador</h4>
              </template>
              <b-list-group flush>
                <b-list-group-item button @click="show = 'EditarPerfil'"
                  >Gestionar Perfil</b-list-group-item
                >
                <b-list-group-item button @click="show = 'PublicarView'"
                  >Crea una oferta de empleo</b-list-group-item
                >
                <b-list-group-item button @click="show = 'MisEmpleos'"
                  >Mis Empleos</b-list-group-item
                >
                <b-list-group-item button @click="show = 'ListaPostulantes'"
                  >Postulantes</b-list-group-item
                >
                <b-list-group-item button @click="show = ''"
                  >Trabajos terminados</b-list-group-item
                >
                <b-list-group-item button @click="show = ''"
                  >Mi grupo de trabajo</b-list-group-item
                >
              </b-list-group>
            </b-card>
          </div>
        </div>
        <div class="col-1"></div>
        <div class="col-8">
          <div v-if="show === 'EditarPerfil'"><EditarPerfil /></div>
          <div v-else-if="show === 'MisEmpleos'"><OfertasEmpleo /></div>
          <div v-else-if="show === 'PublicarView'"><PublicarView /></div>
          <div v-else-if="show === 'ListaPostulantes'">
            <ListaPostulantes />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ListaPostulantes from "@/components/ListaPostulantes.vue";
import EditarPerfil from "@/components/EditarPerfil.vue";
import PublicarView from "@/components/PublicarView.vue";
import NavBar from "@/components/NavBar.vue";
import OfertasEmpleo from "@/components/OfertasEmpleo.vue";
export default {
  name: "PerfilEmpleador",

  data() {
    return {
      nombre: "",
      apellido: "",
      cedula: "",
      correo: "",
      celular: "",
      show: "ListaPostulantes",
      options: [
        { value: null, text: "Tipo de documento" },
        { value: "a", text: "Cédula de Ciudadanía" },
        { value: "b", text: "Cédula Extranjería" },
        { value: "c", text: "PEP" },
        { value: "d", text: "Otro", disabled: true },
      ],
      disponibilidad: [
        { value: "a", text: "Tiempo Completo" },
        { value: "b", text: "Medio Tiempo" },
        { value: "c", text: "Por Horas" },
        { value: "c", text: "Por Dias" },
        { value: "d", text: "Por Contrato" },
        { value: "e", text: "A Convenir" },
      ],
    };
  },
  components: {
    EditarPerfil,
    PublicarView,
    ListaPostulantes,
    NavBar,
    OfertasEmpleo,
  },
  computed: {
    nombreState() {
      return this.nombre.length > 0 ? true : false;
    },
    apellidoState() {
      return this.apellido.length > 0 ? true : false;
    },
    cedulaState() {
      return this.cedula.length > 0 ? true : false;
    },
    correoState() {
      return this.correo.length > 0 ? true : false;
    },
    celularState() {
      return this.celular.length == 10 ? true : false;
    },
  },
};
</script>
