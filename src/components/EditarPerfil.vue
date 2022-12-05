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
<!--Nombre-->
<div role="group">
    <label for="input-live">Nombre:</label>
    <b-form-input
    id="input-live"
    v-model="form.nombre"
    aria-describedby="input-live-help input-live-feedback"
    placeholder="Escribe tu nombre."
    trim
    ></b-form-input>
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
    v-model="form.foto"
    aria-describedby="input-live-help input-live-feedback"
    placeholder="Escribe tu foto."
    trim
    ></b-form-input>
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
    v-model="form.apellido"
    aria-describedby="input-live-help input-live-feedback"
    placeholder="Escribe tus apellidos."
    trim
    ></b-form-input>
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
    v-model="form.celular"
    aria-describedby="input-live-help input-live-feedback"
    placeholder="Escribe tu Celular."
    trim
    ></b-form-input>
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
    ></b-form-input>
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
    ></b-form-input>
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
        <b-form-select v-model="form.disponibilidad" :options="disponibilidad" style="width: 53.5rem; height: 2.5rem; border-radius: 0.35rem;"></b-form-select>
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
    ></b-form-input>
  </div><br>
<!--Documento-->
<div role="group">
   <label for="input-live">Documento:</label>
<b-input-group>
    <b-form-input
    type="number"
    id="input-live"
    v-model="form.cedula"
    aria-describedby="input-live-help input-live-feedback"
    placeholder="Numero de Documento."
    trim
    ></b-form-input>
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
          form:{
            nombre: null,
            apellido: null,
            foto: null,
            cedula: null,
            correo: null,
            celular: null,
            disponibilidad:null
          },
            show: null,
    /*        options: [
      { value: null, text: 'Tipo de documento' },
      { value: 'cc', text: 'Cédula de Ciudadanía' },
      { value: 'ce', text: 'Cédula Extranjería' },
      { value: 'pep', text: 'PEP' },
      { value: 'otro', text: 'Otro', disabled: true }
    ],*/
    disponibilidad: [
        {value: 'TiempoCompleto', text: 'Tiempo Completo'},
        {value: 'MedioTiempo', text: 'Medio Tiempo'},
        {value: 'PorHoras', text: 'Por Horas'},
        {value: 'PorDias', text: 'Por Dias'},
        {value: 'PorCon', text: 'Por Contrato'},
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
  axios.post("http://localhost:3000/GuardarPostulante",this.form).then(response=>{
    console.log(response)  
  })
}

}
}
</script>