<template>
    <div class="container">
      <div class="container col-8">
       <div v-if="registro === 'registro1'">
        <div class="d-flex"><h1><strong>Registrate</strong></h1></div>
        <div class="d-flex"><h5>! Bienvenido ¡</h5></div>
         <div class="row">
         <div class="col-6"><input v-model="form.nombres" class="form-control" type="text" placeholder="Nombre"></div>
         <div class="col-6"><input v-model="form.apellidos" class="form-control" type="text" placeholder="Apellidos"></div>
         </div><br>
        <input v-model="form.correo" class="form-control" type="email" placeholder="Correo"><br>
        <input class="form-control" type="password" placeholder="Contraseña"><br>
        <input v-model="form.contrasena" class="form-control" type="password" placeholder="Confirma tu Contraseña">
        <br>
        <b-button @click="registro = 'registro2'" variant="info">Siguiente</b-button>
       </div>
       <div v-else-if="registro === 'registro2'">
        <div class="d-flex"><h1><strong>Registrate</strong></h1></div>
        <div class="d-flex"><h5>Como podemos encontrarte</h5></div>
         <div class="row">
         <div class="col-6"><input v-model="form.nacionalidad" class="form-control" type="text" placeholder="Pais de Origen"></div>
         <div class="col-6"><input v-model="form.direccion" class="form-control" type="text" placeholder="Ciudad"></div>
         </div><br>
        <input v-model="form.direccion" class="form-control" type="email" placeholder="Direccion"><br>
        <input v-model="form.telefono" class="form-control" type="number" placeholder="Numero de Celular"><br>
        <input v-model="form.documento" class="form-control" type="number" placeholder="Numero de Documento">
        <br>
        <div class="d-flex"><p>Algunos datos no seran visibles por tu seguridad*</p></div><br>
        <b-button @click="registro = 'registro3'" variant="info">Siguiente</b-button>
       </div>
       <div id="usuario" class="usuario" v-for="usuario in listar" :key="listar" v-if="registro === 'registro3'">
        <div class="row">
          <div class="col-6">
            <div class="d-flex"><h1><strong>Registrate</strong></h1></div>
            <div class="d-flex justify-content-between"><h5>Estas a un solo paso</h5></div>
          </div>
          <div class="col-6">
        <div>
        <h5>Selecciona una imagen de perfil:</h5>
        <b-avatar-group size="4rem" class="d-flex justify-content-start">
          <b-avatar button src="https://i.ibb.co/ZxFjSC0/logocamellapp.png"></b-avatar>
          <b-avatar variant="success" button></b-avatar>
          <b-avatar variant="danger" button></b-avatar>
          <b-avatar variant="warning" button></b-avatar>
          <b-avatar variant="info" button></b-avatar>
          <b-avatar button icon="plus" variant="light" v-b-popover.hover="'Subir foto'"></b-avatar>
        </b-avatar-group>
        </div></div>
        </div>
<br>
<br>
<div class="row d-flex m-5">
  <input v-show="false" v-model="form.foto_perfil" class="form-control" type="text" value="IMAGEN">
   <div class="col-6"><h5>Su ID de usuario es:      {{usuario.id}}</h5></div>
   <div class="col-6"><input  class="form-control" type="text" v-model="form.id_usuario" placeholder="Confirma tu ID"></div><br>
  </div>
   
   <br><br>
  <b-button @click="registro = 'registroPostulante'" variant="info" class="m-1"><b-icon icon="search"></b-icon>  Busco Empleo</b-button>
  <b-button @click="GuardarUsuario(),GuardarEmpleador()" variant="info" class="m-1"><b-icon icon="megaphone"></b-icon>  Ofrezco Empleo</b-button><br>
</div>
      
 <div v-if="registro === 'registroPostulante'">

  <div class="d-flex"><h1><strong>Registrate</strong></h1></div>
            <div class="d-flex justify-content-between"><h5>Ya casi terminamos.</h5></div>
          <template>
        <div class="m-5">
          <b-form-input placeholder="Cual es tu disponibilidad" v-model="form.disponibilidad" list="my-list-id"></b-form-input>
          <datalist id="my-list-id">
          <option v-for="size in ListaDisponibilidad">{{ size }}</option>
          <option>Otra</option>
          </datalist>
        </div>
          </template>
          <b-button @click="GuardarUsuario(),GuardarPostulante()" variant="info" class="m-1"><b-icon icon="box-arrow-in-right"></b-icon>  Registrarme</b-button>
 </div>
</div></div>
    </template>
    <script>
    import axios from 'axios'
    
    export default {
        name: 'EditarPerfil',
    
        data(){
            return{
              registro: 'registro1',
              listar:null,
              show: null,
              user:{
                correo:null,
                contrasena:null,
              },
              form : {
                id_usuario:null,
                nombres: null,
                apellidos: null,
                direccion: null,
                foto_perfil: null,
                nacionalidad: null,
                documento: null,
                telefono: null,
                disponibilidad:null
              },
        ListaDisponibilidad: [
             'Tiempo Completo',
             'Medio Tiempo',
             'Por Horas',
             'Por Dias',,
             'Por Contrato',
             'A Convenir',,
        ]
            }
        },
        components:{},
        computed: {},
    methods:{
    GuardarPostulante(){
      alert('hecho');
      axios.post(" http://localhost:4000/GuardarPostulante",this.form)
      .then((data) => {
        console.log(data);
      });
  },    GuardarEmpleador(){
      alert('hecho');
      axios.post(" http://localhost:4000/GuardarEmpleador",this.form)
      .then((data) => {
        console.log(data);
      });
  },
  GuardarUsuario(){
    axios.post("http://localhost:4000/Guardarusuario",this.user)
    .then((data) => {
      console.log(data);
    }
    )
  }
 },
 mounted(id=1){
    axios.get("http://localhost:4000/usuario/"+id).then(response=>{
      this.listar=response.data
    })
  },
}</script>