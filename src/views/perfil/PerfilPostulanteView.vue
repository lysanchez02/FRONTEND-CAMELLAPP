<template>
    <div class="container">
<div class="row">
<div class="col-3">
</div>
<div class="col-1"></div>
<div class="col-8">
<PerfilPostulante/>
<br>
  </div>             
 </div>
</div>
</template>
<script>
import PerfilPostulante from '@/components/PerfilPostulante.vue';

export default{
  name:'PerfilPostulanteView',
  data(){
    return{
      valueperfil: 5,
      value1: null,
      value2: null,
    }
  },
  components:{
    PerfilPostulante
},
}
</script>