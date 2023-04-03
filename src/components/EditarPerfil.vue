<template>
  <div>
    <div>
      <div>
        <b-avatar-group size="4rem" class="d-flex justify-content-center">
          <b-avatar variant="primary" button></b-avatar>
          <b-avatar variant="light" button></b-avatar>
          <b-avatar variant="success" button></b-avatar>
          <b-avatar variant="danger" button></b-avatar>
          <b-avatar variant="warning" button></b-avatar>
          <b-avatar variant="info" button></b-avatar>
          <b-avatar
            button
            icon="plus"
            variant="light"
            v-b-popover.hover="'Subir foto'"
          ></b-avatar>
        </b-avatar-group>
      </div>
    </div>
    <br />
    <div id="user" class="user" v-for="user in listar" :key="user">
      <b-form>
        <!--foto-->
        <div role="group">
          <label for="input-live">foto:</label>
          <input id="nombre" class="form-control" type="file" value="" />
        </div>
        <br />
        <!--foto-->
        <!--Nombre-->
        <div role="group">
          <label for="input-live">Nombre:</label>
          <input
            id="nombre"
            class="form-control"
            type="text"
            v-model="form.nombres"
          />
        </div>
        <br />
        <!--Nombre-->
        <!--Apellido-->
        <div role="group">
          <label for="input-live">Apellidos:</label>
          <input
            id="nombre"
            class="form-control"
            type="text"
            v-model="form.apellidos"
          />
        </div>
        <br />
        <!--Apellido-->
        <!--Celular-->
        <div role="group">
          <label for="input-live">Celular:</label>
          <input
            id="nombre"
            class="form-control"
            type="text"
            v-model="form.telefono"
          />
        </div>
        <br />
        <!--Celular-->
        <!--Direccion-->
        <div role="group">
          <label for="input-live">Direccion:</label>
          <input
            id="nombre"
            class="form-control"
            type="text"
            v-model="direccion"
          />
        </div>
        <br />
        <!--Direccion-->
        <!--Correo-->
        <div role="group">
          <label for="input-live">Correo:</label>
          <input
            id="nombre"
            class="form-control"
            type="text"
            v-model="correo"
          />
        </div>
        <br />
        <!--Correo-->
        <!--Nacionalidad-->
        <div role="group">
          <label for="input-live">Nacionalidad:</label>
          <input
            id="nombre"
            class="form-control"
            type="text"
            v-model="form.nacionalidad"
          />
        </div>
        <br />
        <!--Documento-->
        <div role="group">
          <label for="input-live">Documento:</label>
          <b-input-group>
            <input
              id="nombre"
              class="form-control"
              type="text"
              v-model="form.documento"
            />
          </b-input-group>
        </div>
        <br />
        <!--Documento-->
      </b-form>

      <b-button v-on:click="GuardarPostulante()" variant="primary" class="m-1"><b-icon icon="hdd"></b-icon>Guardar</b-button>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "EditarPerfil",

  data() {
    return {
      show: null,
      listar: null,
      form: {
        nombres: "",
        apellidos: "",
        nacionalidad: "",
        documento: "",
        fotoPerfil: "url",
        telefono: "",
        correo:"",
        direccion: "",
      },

      options: [
        { value: null, text: "Tipo de documento" },
        { value: "cc", text: "Cédula de Ciudadanía" },
        { value: "ce", text: "Cédula Extranjería" },
        { value: "pep", text: "PEP" },
        { value: "otro", text: "Otro", disabled: true },
      ],
    };
  },
  components: {},
  computed: {},
  methods: {
    
  },
  mounted(id = 1) {
    
    axios.get("http://localhost:3000/usuario/" + id).then((res) => {
      this.form.nombres =res.data.nombres;
      this.form.apellidos =res.data.apellidos;
      this.form.nacionalidad =res.data.nacionalidad;
      this.form.fotoPperfil =res.data.fotoPerfil;
      this.form.documento =res.data.documento;
      this.form.telefono =res.data.telefono;
      this.form.correo =res.data.correo;
      this.form.direccion =res.data.direccion;

    });
  },
};
</script>
