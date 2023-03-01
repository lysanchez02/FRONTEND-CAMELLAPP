<template>
    <div>
      <div class="container">
        <div class="row">
          <div class="col-3">
            <div>
    <b-card
      no-body
      style="max-width: 20rem;"
      img-src="https://st3.depositphotos.com/6582994/13117/v/450/depositphotos_131177880-stock-illustration-user-icon-in-trendy-flat.jpg"
      img-alt="Image"
      img-top
    >
      <template #header>
        <h4 class="mb-0">Leyder Yesid Sanchez Benachi</h4>
      </template>
  
      <b-card-body>
        <b-card-title>oficio y/o empresa</b-card-title>
        <b-card-sub-title class="mb-2">Popayan - Cauca</b-card-sub-title>
<p>persona natural</p>
      </b-card-body>
      <b-list-group flush>
        <b-list-group-item button @click="show = 'EditarPerfil'">Editar Perfil</b-list-group-item>
        <b-list-group-item button @click="show = 'MisEmpleos'">Mis Empleos</b-list-group-item>
        <b-list-group-item button @click="show = 'Postulantes'">Postulantes</b-list-group-item>
        <b-list-group-item button @click="show = ''">Trabajos terminados</b-list-group-item>
        <b-list-group-item button @click="show = ''">Mi grupo de trabajo</b-list-group-item>
      </b-list-group>
      <b-card-body>
        <h6>Redes:</h6>
        <a href="#" class="card-link">Facebook</a>
        <a href="#" class="card-link">Whatsapp</a>
      </b-card-body>  
    </b-card>
  </div>
          </div>
          <div class="col-1"></div>
          <div class="col-8">
<div v-if="show === 'EditarPerfil'"><EditarPerfil/></div>
  <div v-else-if="show === 'MisEmpleos'"><OfertasEmpleador/></div>
          </div>
        </div></div>
    </div>
    </template>
    <script>
    import OfertasEmpleador from '@/components/OfertasEmpleador.vue';
    import EditarPerfil from '@/components/EditarPerfil.vue';
    
    export default {
        name: 'PerfilEmpleador',

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
        EditarPerfil,
        OfertasEmpleador,
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