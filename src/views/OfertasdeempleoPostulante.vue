<template>
<div class="container">
  <div class="row">
    <div class="col-3">
      <MenuPostulante/>
    </div>
    <div class="col-1"></div>
    <div class="col-8">
      <OfertasPostulante/></div>
  </div>
</div>
</template>
<script>
import MenuPostulante from '@/components/MenuPostulante.vue';
import OfertasPostulante from '@/components/OfertasPostulante.vue';

export default {
    name: 'OfertasdeempleoPostulante',
    components:{
    MenuPostulante,
    OfertasPostulante
}
}
</script>