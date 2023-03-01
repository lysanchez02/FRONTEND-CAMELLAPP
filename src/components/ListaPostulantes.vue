<template>
    <div>
        <div class="container">
        <div class="row">
            <h2>CAMELLAPP</h2>
  <div class="col-1"></div>
    <div class="col-8">
        <div>
            <b-input-group>
              <template #append>
                <b-button><b-icon icon="search"></b-icon></b-button>                   
                </template>
              <b-form-input></b-form-input>
              <template #prepend>
                <b-dropdown text="Categorias">
                  <b-dropdown-item>Ayudante General</b-dropdown-item>
                  <b-dropdown-item>Oficial de construccion</b-dropdown-item>
                  <b-dropdown-item>Soldadura</b-dropdown-item>
                  <b-dropdown-item>Pintado en general</b-dropdown-item>
                  <b-dropdown-item>Plomeria</b-dropdown-item>
                  <b-dropdown-item>Jardineria</b-dropdown-item>
                  <b-dropdown-item>Otros Servicios</b-dropdown-item>
                </b-dropdown>
              </template>
            </b-input-group>
          </div>
          <br>
          <!--aqui termina la barra de busqueda--> 
    </div>
    <div class="col-3">
        <b-button variant="outline-success">Nueva Oferta<b-icon icon="plus"></b-icon></b-button>
    </div>
        </div><br>
        <div class="row d-flex">  
<!--start card-->
            <div class="col-6" v-for="listar in listar" :key="listar.id">
            <b-card
            :title="listar.nombres+' '+listar.apellidos"
            img-src="https://st3.depositphotos.com/6582994/13117/v/450/depositphotos_131177892-stock-illustration-user-icon-in-trendy-flat.jpg"
            :img-alt=listar.foto_perfil
            img-top
            tag="article"
            style="max-width: 25rem;"
            >
            {{listar.nacionalidad}}<br>
            <b-card-text><p>{{listar.telefono}}</p></b-card-text>
            <b-card-text><p>Disponible:{{listar.disponibilidad}}</p></b-card-text>
            <b-button href="#" variant="outline-primary" class="m-1">Contratar</b-button>
            <b-button href="PerfilPostulanteView" variant="primary" class="m-1">Ver Perfil</b-button>
            <b-button href="#" variant="danger" @click="eliminarpostulante(listar.id)" class="m-1">Eliminar</b-button>
          </b-card><br>
        </div>
<!--end card-->
  </div>
 </div>
</div>
</template>
<script>
import axios from "axios"
export default{
  name:'ListaPostulantes',
  data(){
    return{
      listar:null
    }
  },
  components:{
  },
  methods:{
  eliminarpostulante(id){
    axios.delete("http://localhost:4000/eliminarpostulante/"+id).then(response=>{
  })
}
},
  mounted(){
    alert()
    axios.get("http://localhost:4000/ListarPostulante").then(response=>{
      this.listar=response.data
    })
  },
  mounted(){
    axios.get("http://localhost:4000/consultaPostulantexCategoria").then(response=>{
     this.listar=response.data
   })
  }
}
</script>