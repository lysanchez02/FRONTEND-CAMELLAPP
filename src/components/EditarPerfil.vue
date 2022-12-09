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
  <div id="user" class="user" v-for="user in listar" :key="listar">
  <b-form>
  <!--id_usuario-->
<div role="group">
    <label for="input-live">id_usuario:</label>
    <input id="nombre" class="form-control" type="text" value='' :value="[[user.id_usuario]]">
  </div><br>
<!--id_usuario-->
<!--Nombre-->
<div role="group">
    <label for="input-live">Nombre:</label>
    <input id="nombre" class="form-control" type="text" value='' :value="[[user.nombres]]">
  </div><br>
<!--Nombre-->
<!--foto-->
<div role="group">
    <label for="input-live">foto:</label>
    <input id="nombre" class="form-control" type="text" value='' :value="[[user.foto_perfil]]">
  </div><br>
<!--foto-->
<!--Apellido-->
<div role="group">
    <label for="input-live">Apellidos:</label>
    <input id="nombre" class="form-control" type="text" value='' :value="[[user.apellidos]]">

  </div><br>
<!--Apellido-->
<!--Celular-->
<div role="group">
    <label for="input-live">Celular:</label>
    <input id="nombre" class="form-control" type="text" value='' :value="[[user.telefono]]">
  </div><br>
<!--Celular-->
<!--Direccion-->
<div role="group">
    <label for="input-live">Direccion:</label>
    <input id="nombre" class="form-control" type="text" value='' :value="[[user.direccion]]">
  </div><br>
<!--Direccion-->

<!--Disponibilidad-->
<template>
  <div>    
    <label for="input-live">Disponibilidad:</label><br>
        <b-form-select  v-model="form.disponibilidad" :options="ListaDisponibilidad" style="width: 53.5rem; height: 2.5rem; border-radius: 0.35rem;" :selected="[[user.disponibilidad]]"></b-form-select>
  </div>
</template><br>
<!--Disponibilidad-->
<!--Nacionalidad-->
<div role="group">
    <label for="input-live">Nacionalidad:</label>
    <input id="nombre" class="form-control" type="text" value='' :value="[[user.nacionalidad]]">
  </div><br>
<!--Documento-->
<div role="group">
   <label for="input-live">Documento:</label>
<b-input-group>
  <input id="nombre" class="form-control" type="text" value='' :value="[[user.documento]]">
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
          listar:null,
          form : {
            id_usuario:null,
            nombres: null,
            apellidos: null,
            direccion: null,
            foto_perfil: null,
            nacionalidad: null,
            documento: null,
            correo: null,
            telefono: null,
            disponibilidad:null
          },

           options: [
      { value: null, text: 'Tipo de documento' },
      { value: 'cc', text: 'Cédula de Ciudadanía' },
      { value: 'ce', text: 'Cédula Extranjería' },
      { value: 'pep', text: 'PEP' },
      { value: 'otro', text: 'Otro', disabled: true }
    ],
    ListaDisponibilidad: [
        {value: 'TiempoCompleto', text: 'Tiempo Completo'},
        {value: 'MedioTiempo', text: 'Medio Tiempo'},
        {value: 'PorHoras', text: 'Por Horas'},
        {value: 'PorDias', text: 'Por Dias'},
        {value: 'PorContrato', text: 'Por Contrato'},
        {value: 'aConvenir', text: 'A Convenir'},
    ]
 }
},
components:{},
computed: {},
methods:{
GuardarPostulante(){
  alert();
  axios.post(" http://localhost:4000/GuardarPostulante",this.form)
  .then((data) => {
    console.log(data);
  });
},
},
mounted(id=1){
    axios.get("http://localhost:4000/postulante/"+id).then(response=>{
      this.listar=response.data

    })
  },
  }
</script>