<template>
    <div><NavBar/><br>
      <div class="container">
      <div class="row">
<div class="col-3 d-flex align-self-start">
  <b-button><b-icon icon="arrow-left" class="mx-2"></b-icon>   Regresar</b-button>
</div>
<div class="col-1"></div>
<div class="col-8">
          <div>
            <b-card>
    <template #header>
      <b-card-img src="https://www.semana.com/resizer/JmiB52VJxZmk799j7D2CEeTZ1x4=/arc-anglerfish-arc2-prod-semana/public/R52D6MSO7ZB4DF3W4QM4LECYIA.jpg" img-top class="w-50"></b-card-img>
      <h6></h6>
      </template>
      <b-card-body class="p-0">
        <b-card-title>{{oferta.titulo}}</b-card-title>
        <b-card-sub-title class="mb-2">{{oferta.descripcion}}</b-card-sub-title>
        <p class="">Duracion del trabajo:{{oferta.tipoDeContrato}}</p> 
        <p>Pago: ${{oferta.salario}}</p>
      </b-card-body>  
      <!-- <b-card-footer class="btn" footer-bg-variant="secondary" footer-text-variant="white" @click="verDetalleOferta()">obtener datos</b-card-footer> -->
<b-button class="mx-1" variant="info">Postularme</b-button>
<b-button class="mx-1" variant="danger">Cancelar</b-button>
    </b-card>
  </div>   
</div>
</div>
</div>
  </div>
</template>
<script>
import axios from "axios"
import MenuPostulante from "./MenuPostulante.vue"
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
    MenuPostulante
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
      .finally(()=>{

      })

    }
  }
  }
  </script>
