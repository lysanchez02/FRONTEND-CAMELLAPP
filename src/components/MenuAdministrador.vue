<template>
        <div class="col-3">
  <div style="width: 130rem;">
    <b-card
      no-body
      style="max-width: 20rem;"
      img-src="https://scontent.fbaq1-1.fna.fbcdn.net/v/t39.30808-6/315233693_152195517543046_6581462483582397166_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5cd70e&_nc_eui2=AeHwCjqvr4R_8bxyFRPe7NETDFKCIXFP5wMMUoIhcU_nAwbD62vhIROMiU8PB7xZtya2zUqB5fFwV-YHarfS5djf&_nc_ohc=aTVyxlqWwFsAX-ygHT8&_nc_zt=23&_nc_ht=scontent.fbaq1-1.fna&oh=00_AfCW2ciLdMSFnpnzowFbmrv4DnnRblioePyY4jHW4sddSQ&oe=63788F6F"
      img-alt="Image"
      img-top
    >
      <template #header>
        <h4 class="mb-0">Camellapp</h4>
      </template>
      <b-card-body>
        <b-card-title>Administrador</b-card-title>
        <b-card-sub-title class="mb-2">Popayan - Cauca</b-card-sub-title>
          <a href="">Ver mas...</a>
      </b-card-body>
      <b-list-group flush>
        <b-list-group-item href="#">Ofertas</b-list-group-item>
        <b-list-group-item href="#">Empleadores</b-list-group-item>
        <b-list-group-item href="#">Postulantes</b-list-group-item>
        <b-list-group-item href="#">Usuarios Bloqueados</b-list-group-item>
        <b-list-group-item href="#">Caja de com</b-list-group-item>
      </b-list-group> 
      <b-card-body>
        <h6>Contacto:</h6>
        <a href="#" class="card-link">Facebook</a>
        <a href="#" class="card-link">Whatsapp</a>
      </b-card-body>
    </b-card>
  </div>
 </div>
</template>
<script>
export default{
  name:'MenuAdministrador',
  data(){
    return{
    }
  },
  components:{
},
}
</script>