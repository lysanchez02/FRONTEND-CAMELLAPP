<template>
  <div class="container"><div class="row">
  <div class="col-3">
    <MenuEmpleador/>
  </div>
  <div class="col-1"></div>
  <div class="col-8">
<ListaPostulantes/></div>
 </div>
</div>
</template>
<script>
import MenuEmpleador from "@/components/MenuEmpleador.vue";
import ListaPostulantes from "@/components/ListaPostulantes.vue";
export default {
    name: 'PostulantesView',
    components:{
    ListaPostulantes,
    MenuEmpleador
}
}
</script>