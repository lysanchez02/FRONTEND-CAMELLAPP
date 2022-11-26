<template>
<div>
  <div class="container">
    <div class="row">
      <div class="col-3">
        <MenuEmpleador/>
      </div>
      <div class="col-1"></div>
      <div class="col-8">
        <OfertasEmpleador/>
      </div>
    </div></div>
</div>
</template>
<script>
import MenuEmpleador from '@/components/MenuEmpleador.vue';
import OfertasEmpleador from '@/components/OfertasEmpleador.vue';

export default {
    name: 'OfertasdeempleoEmpleador',
    components:{
    OfertasEmpleador,
    MenuEmpleador,
 }
}
</script>