<template>
<div>
 <div>
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
  <b-form>
  <!--id_usuario-->
<div role="group">
    <label for="input-live">id_usuario:</label>
    <b-form-input
    type="number"
    id="input-live"
    v-model="form.id_usuario"
    aria-describedby="input-live-help input-live-feedback"
    placeholder="Escribe tu id_usuario."
    trim
    >{{form.id}}</b-form-input>
    <!-- This will only be shown if the preceding input has an invalid state -->
    <b-form-invalid-feedback id="input-live-feedback">
      El campo está vacío.
    </b-form-invalid-feedback>
  </div><br>
<!--id_usuario-->
<!--Nombre-->
<div role="group">
    <label for="input-live">Nombre:</label>
    <b-form-input
    id="input-live"
    v-model="form.nombres"
    aria-describedby="input-live-help input-live-feedback"
    placeholder="Escribe tu nombre."
    trim
    >{{form.nombres}}</b-form-input>
    <!-- This will only be shown if the preceding input has an invalid state -->
    <b-form-invalid-feedback id="input-live-feedback">
      El campo está vacío.
    </b-form-invalid-feedback>
  </div><br>
<!--Nombre-->
<!--foto-->
<div role="group">
    <label for="input-live">foto:</label>
    <b-form-input
    id="input-live"
    v-model="form.foto_perfil"
    aria-describedby="input-live-help input-live-feedback"
    placeholder="Escribe tu foto."
    trim
    >{{form.foto_perfil}}</b-form-input>
    <!-- This will only be shown if the preceding input has an invalid state -->
    <b-form-invalid-feedback id="input-live-feedback">
      El campo está vacío.
    </b-form-invalid-feedback>
  </div><br>
<!--foto-->
<!--Apellido-->
<div role="group">
    <label for="input-live">Apellidos:</label>
    <b-form-input
    id="input-live"
    v-model="form.apellidos"
    aria-describedby="input-live-help input-live-feedback"
    placeholder="Escribe tus apellidos."
    trim
    >{{form.apellidos}}</b-form-input>
    <b-form-invalid-feedback id="input-live-feedback">
      El campo está vacío.
    </b-form-invalid-feedback>
  </div><br>
<!--Apellido-->
<!--Celular-->
<div role="group">
    <label for="input-live">Celular:</label>
    <b-form-input
    type="tel"
    id="input-live"
    v-model="form.telefono"
    aria-describedby="input-live-help input-live-feedback"
    placeholder="Escribe tu Celular."
    trim
    >{{form.telefono}}</b-form-input>
    <!-- This will only be shown if the preceding input has an invalid state -->
    <b-form-invalid-feedback id="input-live-feedback">
      El numero debe tener 10 caracteres.
    </b-form-invalid-feedback>
  </div><br>
<!--Celular-->
<!--Direccion-->
<div role="group">
    <label for="input-live">Direccion:</label>
    <b-form-input
    id="input-live"
    v-model="form.direccion"
    aria-describedby="input-live-help input-live-feedback"
    placeholder="Escribe tu Direccion."
    trim
    >{{form.direccion}}</b-form-input>
    <!-- This will only be shown if the preceding input has an invalid state -->
    <b-form-invalid-feedback id="input-live-feedback">
      El campo está vacío.
    </b-form-invalid-feedback>
  </div><br>
<!--Direccion-->
<!--Correo-->
<div role="group">
    <label for="input-live">Correo:</label>
    <b-form-input
    type="email"
    id="input-live"
    v-model="form.correo"
    aria-describedby="input-live-help input-live-feedback"
    placeholder="Escribe tu Correo."
    trim
    >{{form.correo}}</b-form-input>
    <!-- This will only be shown if the preceding input has an invalid state -->
    <b-form-invalid-feedback id="input-live-feedback">
      El campo está vacío.
    </b-form-invalid-feedback>
  </div><br>
<!--Correo-->
<!--Disponibilidad-->
<template>
  <div>    
    <label for="input-live">Disponibilidad:</label><br>
        <b-form-select v-model="form.disponibilidad" :options="ListaDisponibilidad" style="width: 53.5rem; height: 2.5rem; border-radius: 0.35rem;">{{this.form.disponibilidad}}</b-form-select>
  </div>
</template><br>
<!--Disponibilidad-->
<!--Nacionalidad-->
<div role="group">
    <label for="input-live">Nacionalidad:</label>
    <b-form-input
    type="text"
    v-model="form.nacionalidad"
    aria-describedby="input-live-help input-live-feedback"
    placeholder="Ej: Colombia."
    trim
    >{{form.nacionalidad}}</b-form-input>
  </div><br>
<!--Documento-->
<div role="group">
   <label for="input-live">Documento:</label>
<b-input-group>
    <b-form-input
    type="text"
    id="input-live"
    v-model="form.documento"
    aria-describedby="input-live-help input-live-feedback"
    placeholder="Numero de Documento."
    trim
    >{{form.documento}}</b-form-input>
    <b-form-invalid-feedback id="input-live-feedback">
      El campo está vacío.
    </b-form-invalid-feedback>
    <template #prepend>
     <div>
     <!-- <b-form-select  style="max-width: 4rem; height: 2.5rem;" v-model="form.disponibilidad" :options="options"></b-form-select>-->
     </div>
    </template>
</b-input-group>
  </div><br>
<!--Documento-->
</b-form>
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
            show: null,
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
    components:{

 },
 computed: {

},
methods:{
GuardarPostulante(){
  alert();
  axios.post(" http://localhost:4000/GuardarPostulante",this.form)
  .then((data) => {
    console.log(data);
  });
}

 }
  }
</script>