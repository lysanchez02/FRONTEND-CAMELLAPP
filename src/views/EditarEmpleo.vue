<template>
<div class="container">
  <div class="row">
    <div class="col-3">
      <MenuEmpleador/>
    </div>
    <div class="col-1"></div>
    <div class="col-8">
      <EditarOferta/>
    </div>
  </div>
</div>
</template>
<style lang="scss">
@import "@/assets/sass/botones/botonesGenerales.scss";
.contentfooter{
    display: flex;
    margin-top: 600px;
}

</style>
<script>
import EditarOferta from '@/components/EditarOferta.vue';
import MenuEmpleador from '@/components/MenuEmpleador.vue';

export default{
  name:'EditarEmpleo',
  data(){
    return{
    }
  },
  components:{
    EditarOferta,
    MenuEmpleador
},
}
</script>