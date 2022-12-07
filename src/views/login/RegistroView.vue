<template>
    <div class="container">
        <div class="row">
            <h1 class="">Completa tus datos personales</h1>
            <div class="col-2"></div>
            <div class="col-8">
        <div>
        <div>
        <h5>Selecciona una imagen de perfil:</h5>
        <div>
        <b-avatar-group size="4rem" class="d-flex justify-content-center">
            <b-avatar button src="https://i.ibb.co/ZxFjSC0/logocamellapp.png"></b-avatar>
            <b-avatar variant="success" button></b-avatar>
            <b-avatar variant="danger" button></b-avatar>
            <b-avatar variant="warning" button></b-avatar>
            <b-avatar variant="info" button></b-avatar>
            <b-avatar button icon="plus" variant="light" v-b-popover.hover="'Subir foto'"></b-avatar>
        </b-avatar-group>
        </div>
      </div><br>
      <div id="user" class="user">
      <b-form>
      <!--id_usuario-->
    <div role="group">
        <label for="input-live">id_usuario:</label>
        <input v-model="form.id_usuario" id="id_usuario" class="form-control" type="text" placeholder="Escribe tu id_usuario">
      </div><br>
    <!--id_usuario-->
    <!--Nombre-->
    <div role="group">
        <label for="input-live">Nombre:</label>
        <input v-model="form.nombres" id="nombre" class="form-control" type="text" placeholder="Escribe tu nombre">
      </div><br>
    <!--Nombre-->
    <!--foto-->
    <div role="group">
        <label for="input-live">foto:</label>
        <input v-model="form.foto_perfil" id="nombre" class="form-control" type="text" placeholder="">
      </div><br>
    <!--foto-->
    <!--Apellido-->
    <div role="group">
        <label for="input-live">Apellidos:</label>
        <input v-model="form.apellidos" id="nombre" class="form-control" type="text" placeholder="Escribe tu sapellido">
    
      </div><br>
    <!--Apellido-->
    <!--Celular-->
    <div role="group">
        <label for="input-live">Celular:</label>
        <input v-model="form.telefono" id="nombre" class="form-control" type="text" placeholder="Escribe tu celular">
      </div><br>
    <!--Celular-->
    <!--Direccion-->
    <div role="group">
        <label for="input-live">Direccion:</label>
        <input v-model="form.direccion" id="nombre" class="form-control" type="text" placeholder="Escribe tu direccion">
      </div><br>
    <!--Direccion-->
    <!--Correo-->
    <div role="group">
        <label for="input-live">Correo:</label>
        <input v-model="form.correo" id="nombre" class="form-control" type="text" placeholder="Escribe tu correo">
      </div><br>
    <!--Correo-->
    <!--Disponibilidad-->
    <template>
      <div>    
        <label for="input-live">Disponibilidad:</label><br>
            <b-form-select  v-model="form.disponibilidad" :options="ListaDisponibilidad" style="width: 53.5rem; height: 2.5rem; border-radius: 0.35rem;"></b-form-select>
      </div>
    </template><br>
    <!--Disponibilidad-->
    <!--Nacionalidad-->
    <div role="group">
        <label for="input-live">Nacionalidad:</label>
        <input v-model="form.nacionalidad" id="nombre" class="form-control" type="text" placeholder="Escribe pais de origen">
      </div><br>
    <!--Documento-->
    <div role="group">
       <label for="input-live">Documento:</label>
    <b-input-group>
      <input v-model="form.documento" id="nombre" class="form-control" type="text" placeholder="Escribe tu Documento">
    </b-input-group>
      </div><br>
    <!--Documento-->
    </b-form>
    
    </div>
    <b-button @click="GuardarPostulante()" variant="primary" class="m-1"><b-icon icon="search"></b-icon>  Busco Empleo</b-button>
    <b-button @click="GuardarEmpleador()" variant="primary" class="m-1"><b-icon icon="lightbulb"></b-icon>  Ofrezco Empleo</b-button><br>
    <b-button href="#" variant="danger" class="m-1"><b-icon icon="x-circle"></b-icon> Cancelar</b-button>
    </div>  
            </div>
            <div class="col-2"></div>
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
      alert('Te has registrado Exitosamente');
      axios.post(" http://localhost:4000/GuardarPostulante",this.form)
      .then((data) => {
        console.log(data);
      });
  },
 },
}</script>