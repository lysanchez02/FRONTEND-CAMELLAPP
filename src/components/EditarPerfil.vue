<template>
  <div>
    <div>
      <h1 class="">Completa tus datos personales</h1>
      <div>
        <h5>Selecciona una imagen de perfil:</h5>
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
      <div id="user" class="user" v-for="user in listar" :key="user.id">
        <b-form>
          <!--foto-->
          <div role="group">
            <label for="input-live">foto:</label>
            <input id="foto" class="form-control" type="file" value="" />
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
              
              :value="[[user.nombres]]"
            />
          </div>
          <br />
          <!--Nombre-->
          <!--Apellido-->
          <div role="group">
            <label for="input-live">Apellidos:</label>
            <input
              id="apellidos"
              class="form-control"
              type="text"
              
              :value="[[user.apellidos]]"
            />
          </div>
          <br />
          <!--Apellido-->
          <!--Celular-->
          <div role="group">
            <label for="input-live">Celular:</label>
            <input
              id="celular"
              class="form-control"
              type="text"
              
              :value="[[user.telefono]]"
            />
          </div>
          <br />
          <!--Celular-->
          <!--Direccion-->
          <div role="group">
            <label for="input-live">Direccion:</label>
            <input
              id="direccion"
              class="form-control"
              type="text"
              
              :value="[[user.direccion]]"
            />
          </div>
          <br />
          <!--Direccion-->;
          <!--Nacionalidad-->
          <div role="group">
            <label for="input-live">Nacionalidad:</label>
            <input
              id="nacionalidad"
              class="form-control"
              type="text"
              
              :value="[[user.nacionalidad]]"
            />
          </div>
          <br />
          <!--Documento-->
          <div role="group">
            <label for="input-live">Documento:</label>
            <b-input-group>
              <input
                id="documento"
                class="form-control"
                type="text"
                
                :value="[[user.documento]]"
              />
            </b-input-group>
          </div>
          <br />
          <!--Documento-->
        </b-form>
      </div>
      <b-button @click="GuardarPostulante()" variant="primary" class="m-1"
        ><b-icon icon="hdd"></b-icon> Guardar</b-button
      >
      <b-button href="#" variant="danger" class="m-1"
        ><b-icon icon="x-circle"></b-icon> Cancelar</b-button
      >
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
        id_usuario: null,
        nombres: null,
        apellidos: null,
        direccion: null,
        foto_perfil: null,
        nacionalidad: null,
        documento: null,
        correo: null,
        telefono: null,
        disponibilidad: null,
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
    GuardarPostulante() {
      alert();
      axios
        .post(" http://localhost:3000/GuardarPostulante", this.form)
        .then((data) => {
          console.log(data);
        });
    },
  },
  mounted(id = 1) {
    axios.get("http://localhost:3000/usuario/" + id).then((response) => {
      this.listar = response.data;
    });
  },
};
</script>
