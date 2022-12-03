<template>
<div>
  <div class="container">
    <div class="row">
      <div class="col-3"></div>
      <div class="col-1"></div>
      <div class="col-8">
        <OfertasEmpleador/>
      </div>
    </div></div>
</div>
</template>
<script> import OfertasEmpleador from '@/components/OfertasEmpleador.vue';

export default {
    name: 'OfertasdeempleoEmpleador',
    components:{
    OfertasEmpleador}
}
</script>