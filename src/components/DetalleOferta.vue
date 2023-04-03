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
    <h3 class="d-flex align-items-baseline">{{oferta.id_ofertaEmpleo}}.{{oferta.titulo}}</h3>
    <h6 class="d-flex align-items-baseline">{{oferta.descripcion}}</h6>
    <h6 class="d-flex align-items-baseline">Direccion: {{oferta.ubicacion}}</h6>
    <h6 class="d-flex align-items-baseline">Salario:  ${{oferta.salario}}</h6>
    <h6 class="d-flex align-items-baseline">Duracion:  {{oferta.tipoDeContrato}}</h6>
  </div>
  <div class="col-4">
    <b-img rounded src="https://www.semana.com/resizer/JmiB52VJxZmk799j7D2CEeTZ1x4=/arc-anglerfish-arc2-prod-semana/public/R52D6MSO7ZB4DF3W4QM4LECYIA.jpg" class="w-100"></b-img>
    <img img-left class="w-100" alt="">
  </div>
</div><hr>
<h4 class="my-4">Postulados</h4>
      <div>
          <b-card img-src="https://www.semana.com/resizer/JmiB52VJxZmk799j7D2CEeTZ1x4=/arc-anglerfish-arc2-prod-semana/public/R52D6MSO7ZB4DF3W4QM4LECYIA.jpg" img-alt="Card image" img-left img-width="33%">
    <b-card-text class="d-flex justify-content-end">nombres apellidos</b-card-text>
    <b-card-text class="d-flex justify-content-end">correo</b-card-text>
    <b-card-text class="d-flex justify-content-end">telefono</b-card-text>
    <b-card-text class="d-flex justify-content-end">nacionalidad</b-card-text>
    <b-button variant="info" class="mx-1">Contratar</b-button>
    <b-button variant="danger" class="mx-1">Eliminar</b-button>
  </b-card><br>
</div>
</div>
</div>
</div>
</div>
</template>
<script>
import axios from "axios"

import NavBar from "./NavBar.vue"
export default{
    name:'detalleOferta',
    data(){
      return{
        oferta:{},
        idOferta:null
      }
    },
    components:{
    NavBar,

  },
  async mounted(){
    this.idOferta = this.$route.params.id  
    await this.verDetalleOferta()
  },
  methods:{
    verDetalleOferta(){
      axios.get("http://localhost:3000/ofertaEmpleo/"+this.idOferta)
      .then((respuesta) => {
        // console.log(respuesta.data);
       this.oferta = respuesta.data  
      })
      .catch((err) => {//500
        alert("error del servidor")
      })
      .finally(()=>{})
    },
    goBack() {
      window.history.back();
    }
  }
  }
  </script>