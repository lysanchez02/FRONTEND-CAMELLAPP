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
        <b-avatar button icon="plus" variant="light" v-b-popover.hover="'Subir foto'"></b-avatar>
    </b-avatar-group>
    </div>
  </div><br>
  <div>
  <b-form><!--foto-->
    <div role="group">
        <label for="input-live">foto:</label>
        <input id="nombre" class="form-control" type="file">
      </div><br>
    <!--foto-->
<!--Nombre-->
<div role="group">
    <label for="input-live">Nombre:</label>
    <input id="nombre" class="form-control" type="text" :value="[[usuario.nombres]]">
  </div><br>
<!--Nombre-->
<!--Apellido-->
<div role="group">
    <label for="input-live">Apellidos:</label>
    <input id="nombre" class="form-control" type="text" :value="[[usuario.apellidos]]">

  </div><br>
<!--Apellido-->
<!--Celular-->
<div role="group">
    <label for="input-live">Celular:</label>
    <input id="nombre" class="form-control" type="text" :value="[[usuario.telefono]]">
  </div><br>
<!--Celular-->
<!--Direccion-->
<div role="group">
    <label for="input-live">Direccion:</label>
    <input id="nombre" class="form-control" type="text" :value="[[usuario.direccion]]">
  </div><br>
<!--Direccion-->
<!--Correo-->
<div role="group">
    <label for="input-live">Correo:</label>
    <input id="nombre" class="form-control" type="text" :value="[[usuario.correo]]">
  </div><br>
<!--Correo-->
<!--Nacionalidad-->
<div role="group">
    <label for="input-live">Nacionalidad:</label>
    <input id="nombre" class="form-control" type="text" :value="[[usuario.nacionalidad]]">
  </div><br>
<!--Documento-->
<div role="group">
   <label for="input-live">Documento:</label>
<b-input-group>
  <input id="nombre" class="form-control" type="text" :value="[[usuario.documento]]">
</b-input-group>
  </div><br>
<!--Documento-->
</b-form>

</div>
<b-button @click="GuardarPostulante()" variant="primary" class="m-1"><b-icon icon="hdd"></b-icon>  Guardar</b-button> 
<b-button href="#" variant="danger" class="m-1"><b-icon icon="x-circle"></b-icon> Cancelar</b-button>
</div>
    </div>
</template>
<script>
import axios from 'axios'

export default {
    name: 'EditarPerfil',

    data(){
        return{
          show: null,
          usuario:{},
          idUsuario:null,
          form :[],

           options: [
      { value: null, text: 'Tipo de documento' },
      { value: 'cc', text: 'Cédula de Ciudadanía' },
      { value: 'ce', text: 'Cédula Extranjería' },
      { value: 'pep', text: 'PEP' },
      { value: 'otro', text: 'Otro', disabled: true }
    ],
 }
},
components:{},
computed: {},
methods:{
GuardarPostulante(){
  alert();
  axios.post(" http://localhost:3000/GuardarPostulante",this.form)
  .then((data) => {
    console.log(data);
  });
},
},
  async mounted(){
    await this.listarDatos()
  },
  methods:{
    listarDatos(){
      axios.get("http://localhost:3000/usuario/"+1)
      .then((respuesta) => {
        // console.log(respuesta.data);
       this.usuario = respuesta.data  
      })
      .catch((err) => {//500
        alert("error del servidor")
      })
      .finally(()=>{

      })

    }
  }
}
</script>