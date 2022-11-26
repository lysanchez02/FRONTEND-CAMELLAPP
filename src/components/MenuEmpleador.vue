<template>
<div>
    <b-card
      no-body
      style="max-width: 20rem;"
      img-src="https://scontent.fbaq1-1.fna.fbcdn.net/v/t39.30808-6/315233693_152195517543046_6581462483582397166_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5cd70e&_nc_eui2=AeHwCjqvr4R_8bxyFRPe7NETDFKCIXFP5wMMUoIhcU_nAwbD62vhIROMiU8PB7xZtya2zUqB5fFwV-YHarfS5djf&_nc_ohc=aTVyxlqWwFsAX-ygHT8&_nc_zt=23&_nc_ht=scontent.fbaq1-1.fna&oh=00_AfCW2ciLdMSFnpnzowFbmrv4DnnRblioePyY4jHW4sddSQ&oe=63788F6F"
      img-alt="Image"
      img-top
    >
      <template #header>
        <h4 class="mb-0">Leyder Yesid Sanchez Benachi</h4>
      </template>
  
      <b-card-body>
        <b-card-title>oficio y/o empresa</b-card-title>
        <b-card-sub-title class="mb-2">Popayan - Cauca</b-card-sub-title>
<p>persona natural</p>      </b-card-body>
      <b-list-group flush>
        <b-list-group-item href="#">Editar Perfil</b-list-group-item>
        <b-list-group-item href="#">Todas las ofertas</b-list-group-item>
        <b-list-group-item href="#">Mis Ofertas</b-list-group-item>
        <b-list-group-item href="#">Postulantes</b-list-group-item>
        <b-list-group-item href="#">Trabajos terminados</b-list-group-item>
        <b-list-group-item href="#">Mi grupo de trabajo</b-list-group-item>
      </b-list-group>
  
      <b-card-body>
        <h6>Redes:</h6>
        <a href="#" class="card-link">Facebook</a>
        <a href="#" class="card-link">Whatsapp</a>
      </b-card-body>  
    </b-card>
  </div>
</template>
<script>
export default{
  name:'MenuEmpleador',
  data(){
    return{
      valueperfil: 5,
      value1: null,
      value2: null
    }
  },
  components:{

  },
}
</script>