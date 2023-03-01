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
    v-model="nombre"
    :state="nombreState"
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
<!--Apellido-->
<div role="group">
    <label for="input-live">Apellidos:</label>
    <b-form-input
    id="input-live"
    v-model="apellido"
    :state="apellidoState"
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
    v-model="celular"
    :state="celularState"
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
    v-model="direccion"
    :state="direccionState"
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
    v-model="correo"
    :state="correoState"
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
        <b-form-select v-model="selected" :options="disponibilidad" style="width: 53.5rem; height: 2.5rem; border-radius: 0.35rem;"></b-form-select>
  </div>
</template><br>
<!--Disponibilidad-->
<!--Nacionalidad-->
<div role="group">
    <label for="input-live">Nacionalidad:</label>
    <b-form-input
    type="text"
    v-model="nacionalidad"
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
    v-model="cedula"
    :state="cedulaState"
    aria-describedby="input-live-help input-live-feedback"
    placeholder="Numero de Documento."
    trim
    ></b-form-input>
    <b-form-invalid-feedback id="input-live-feedback">
      El campo está vacío.
    </b-form-invalid-feedback>
    <template #prepend>
     <div>
      <b-form-select  style="max-width: 4rem; height: 2.5rem;" v-model="selected" :options="options"></b-form-select>
     </div>
    </template>
</b-input-group>
  </div><br>
<!--Documento-->
<b-button href="#" variant="primary" class="m-1"><b-icon icon="hdd"></b-icon>  Guardar</b-button> 
<b-button href="#" variant="danger" class="m-1"><b-icon icon="x-circle"></b-icon> Cancelar</b-button>
</div>
    </div>
</template>
<script>

export default {
    name: 'EditarPerfil',

    data(){
        return{
            nombre: '',
            apellido: '',
            cedula: '',
            correo: '',
            celular: '',
            show: null,
            options: [
      { value: null, text: 'Tipo de documento' },
      { value: 'a', text: 'Cédula de Ciudadanía' },
      { value: 'b', text: 'Cédula Extranjería' },
      { value: 'c', text: 'PEP' },
      { value: 'd', text: 'Otro', disabled: true }
    ],
    disponibilidad: [
        {value: 'a', text: 'Tiempo Completo'},
        {value: 'b', text: 'Medio Tiempo'},
        {value: 'c', text: 'Por Horas'},
        {value: 'c', text: 'Por Dias'},
        {value: 'd', text: 'Por Contrato'},
        {value: 'e', text: 'A Convenir'},
    ]
        }
    },
    components:{
 },
 computed: {
  nombreState() {return this.nombre.length > 0 ? true : false},
  apellidoState() {return this.apellido.length > 0 ? true : false},
  cedulaState(){return this.cedula.length > 0 ? true : false},
  correoState(){return this.correo.length > 0 ? true : false},
  celularState(){return this.celular.length == 10 ? true : false},
},
}
</script>