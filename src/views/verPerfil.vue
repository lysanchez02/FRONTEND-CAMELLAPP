<template>
    <div><NavBar/><br>
      <div class="container">
      <div class="row">
<div class="col-2 d-flex align-self-start">
  <b-button @click="goBack"><b-icon icon="arrow-left" class="mx-2"></b-icon>   Regresar</b-button>
</div>
<div class="col-9">
  <h3>Informacion Personal</h3><br>
  <div class="row">
    <div class="col-8">
      <h4 class="d-flex align-items-baseline">{{usuario.nombres}}  {{usuario.apellidos}}</h4>
      <h6 class="d-flex align-items-baseline">{{usuario.correo}}</h6>
      <h6 class="d-flex align-items-baseline">{{usuario.telefono}}</h6>
      <h6 class="d-flex align-items-baseline">{{usuario.nacionalidad}}  {{usuario.direccion}}</h6>
    </div>
    <div class="col-4">
      <b-img rounded src="https://www.semana.com/resizer/JmiB52VJxZmk799j7D2CEeTZ1x4=/arc-anglerfish-arc2-prod-semana/public/R52D6MSO7ZB4DF3W4QM4LECYIA.jpg" class="w-100"></b-img>
      <img img-left class="w-100" alt="">
    </div>
  </div><hr>
  <h4 class="my-4">Experiencia</h4>
        <div v-for="experiencia in listarExperiencia" >
            <b-card img-src="https://www.semana.com/resizer/JmiB52VJxZmk799j7D2CEeTZ1x4=/arc-anglerfish-arc2-prod-semana/public/R52D6MSO7ZB4DF3W4QM4LECYIA.jpg" img-alt="Card image" img-left img-width="33%">
      <b-card-text class="d-flex justify-content-end">{{experiencia.titulo}}</b-card-text>
      <b-card-text class="d-flex justify-content-end">lugar de trabajo</b-card-text>
      <b-card-text class="d-flex justify-content-end">descripcion</b-card-text>
      <b-card-text class="d-flex justify-content-end">duracion del trabajo</b-card-text>
    </b-card><br>
</div>
</div>
</div>
</div>
  </div>
</template>
<script>
import axios from "axios"
import NavBar from "@/components/NavBar.vue"
export default{
    name:'verPerfil',
    data(){
      return{
        usuario:{},
        experiencia:{},
        idUsuario:null,
        listarExperiencia:null
      }
    },
    components:{
    NavBar,
},
  async mounted(){
    this.idUsuario = this.$route.params.id  
    await this.verUsuario() & this.verExperiencia()
  },
  methods:{
    verUsuario(){
      axios.get("http://localhost:3000/usuario/"+this.idUsuario)
      .then((respuesta) => {
       this.usuario = respuesta.data  
      })
      .catch((err) => {
        alert("error del servidor")
      })
      .finally(()=>{
      })
    },
    verExperiencia(){
      axios.get("http://localhost:3000/listarExperiencia")
      .then((resExperiencia)=> {
        this.listarExperiencia=resExperiencia.data
      })
      .catch((err)=>{
        alert("error del servidor")
      })
    },
    goBack() {
      window.history.back();
    }
  }
  }
  </script>
<script>
import axios from "axios"
import NavBar from "@/components/NavBar.vue"
export default{
    name:'verPerfil',
    data(){
      return{
        usuario:{},
        experiencia:{},
        idUsuario:null,
        listarExperiencia:null
      }
    },
    components:{
    NavBar,
},
  async mounted(){
    this.idUsuario = this.$route.params.id  
    await this.verUsuario() & this.verExperiencia()
  },
  methods:{
    verUsuario(){
      axios.get("http://localhost:3000/usuario/"+this.idUsuario)
      .then((respuesta) => {
       this.usuario = respuesta.data  
      })
      .catch((err) => {
        alert("error del servidor")
      })
      .finally(()=>{
      })
    },
    verExperiencia(){
      axios.get("http://localhost:3000/listarExperiencia")
      .then((resExperiencia)=> {
        this.listarExperiencia=resExperiencia.data
      })
      .catch((err)=>{
        alert("error del servidor")
      })
    },
    goBack() {
      window.history.back();
    }
  }
  }
  </script>