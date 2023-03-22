
<template>
    <div class="container">
      <NavBarLogin />
      <div class="row">
        <div class="col-3">
          <col_Administrador />
        </div>
  
        <div class="col-9">
          
            <h2>Mis Ofertas</h2>

              <b-card class="d-flex " bg-variant="white" text-variant="black" title="" >
                <div class="row d-flex">
                
  
                  <div class="col-4">
                    <img src="https://www.semana.com/resizer/JmiB52VJxZmk799j7D2CEeTZ1x4=/arc-anglerfish-arc2-prod-semana/public/R52D6MSO7ZB4DF3W4QM4LECYIA.jpg"
                     style="max-width: 15rem; height: 10rem;"  class="mb-2 m-1" alt="">
                    
                  </div><br>
  
                  <div class="col-8">
                    <b-card-text>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora, 
                        fuga reiciendis, debitis architecto, quisquam distinctio amet at modi iure facere doloremque corrupti ratione 
                        cum vel saepe placeat porro nisi quidem.
                    </b-card-text><br>
                    <div class="row">
                        <div class="col-12">
                           <b-button href="#" variant="danger">eliminar</b-button>  
                        
                           <b-button href="#" variant="primary">ver postulantes</b-button><br>
                        </div>
                    </div>
                    
                    
                  </div>
  
                  
  
                </div>
             </b-card>
          
            
          
        </div>
      </div>
    </div>
  </template>                
  <script>
  import NavBarLogin from "@/components/NavBarLogin.vue"
  import col_Administrador from "@/components/col_Administrador.vue"
  
  import axios from "axios"
  export default {
    name: 'usuarios',
    data() {
      return {
  
      }
    },
    components: {
      NavBarLogin,
      col_Administrador
    },
    methods: {
      eliminarpostulante(id) {
        axios.delete("http://localhost:4000/eliminarpostulante/" + id).then(response => {
        })
      }
    },
    mounted() {
      alert()
      axios.get("http://localhost:4000/ListarPostulante").then(response => {
        this.listar = response.data
      })
    },
    mounted() {
      axios.get("http://localhost:4000/consultaPostulantexCategoria").then(response => {
        this.listar = response.data
      })
    }
  }
  </script>
  
  
  