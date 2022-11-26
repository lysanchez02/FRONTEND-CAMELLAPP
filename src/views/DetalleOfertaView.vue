<template>
    <div class="container">
        <div class="row">
            <div class="col-3">
                <MenuEmpleador/>
            </div>
            <div class="col-1"></div>
            <div class="col-8">
                <DetalleOferta/>
            </div>
        </div>
    </div>
</template>
<script>
import DetalleOferta from '@/components/DetalleOferta.vue';
import MenuEmpleador from '@/components/MenuEmpleador.vue';

export default{
    name:'DetalleOfertaView',
    data(){
      return{

      }
    },
    components:{
    DetalleOferta,
    MenuEmpleador
},
}
</script>