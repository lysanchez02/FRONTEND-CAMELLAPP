<template>
  <div>
      <div class="container">
      <div class="row">
          <h2>CAMELLAPP</h2>
  <div class="col">
                    <div>
                      <b-input-group><template #append>
                            <b-button><b-icon icon="search"></b-icon></b-button>                   
                            </template>
                      <b-form-input></b-form-input><template #prepend>
  <div>
  <b-dropdown>
    <template #button-content>
      <b-icon icon="filter" aria-hidden="true"></b-icon> Filtro
    </template>
            <b-dropdown-item v-for="categoria in listarCategoria" :key="listarCategoria.id" :title="categoria.descripcion">{{categoria.nombre}}</b-dropdown-item>
  </b-dropdown>
</div>
</template></b-input-group></div>
        <br>
        <!--aqui termina la barra de busqueda-->
    </div>

        </div><br>
        <div class="row d-flex">  
<!--start card-->
            <div v-for="usuario in listarUsuario" :key="usuario.id" class="col-6 d-flex w-50">
              <router-link class="btn border border-0" :to="{name:'verPerfil',params:{id:usuario.id_usuario}}">
            <div>
            <b-card :title="usuario.nombres+' '+usuario.apellidos"
            img-src="https://st3.depositphotos.com/6582994/13117/v/450/depositphotos_131177892-stock-illustration-user-icon-in-trendy-flat.jpg"
            :img-alt=usuario.foto_perfil
            img-top
            tag="article"
            style="max-width: 25rem;"
            class="btn btn-light"
            >
            {{usuario.nacionalidad}}<br>
            <b-card-text><p>{{usuario.telefono}}</p></b-card-text>
            <b-card-text><p>Disponible:{{usuario.disponibilidad}}</p></b-card-text>
            <b-button href="#" variant="outline-primary" class="m-1">Contratar</b-button>            <b-button href="#" variant="danger" @click="eliminarpostulante(listar.id)" class="m-1">Eliminar</b-button>
            </b-card><br>
            </div>
          </router-link>
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
      listarUsuario:[],
      listarCategoria: null
    }
  },
  components:{
  },
  methods:{
  eliminarpostulante(id){
    axios.delete("http://localhost:3000/eliminarpostulante/"+id).then(response=>{
  })
}
},
  mounted(){
    
    axios.get("http://localhost:3000/listarCategoria/").then(response2=>{
     this.listarCategoria=response2.data
   }),
    axios.get("http://localhost:3000/listarUsuario").then(response=>{
      this.listarUsuario=response.data
   })
  },

}
</script>