<template>
  <div class="container"><div class="row">
  <div class="col-3"></div>
  <div class="col-1"></div>
  <div class="col-8">
<ListaPostulantes/></div>
 </div>
</div>
</template>
<script> import ListaPostulantes from "@/components/ListaPostulantes.vue";
export default {
    name: 'PostulantesView',
    components:{
    ListaPostulantes}
}
</script>