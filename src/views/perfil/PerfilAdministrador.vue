<template>
  <div class="container">

    <div class="row">
      <div class="col-3">
        <div>
          <b-card no-body style="max-width: 20rem;"
            img-src="https://st3.depositphotos.com/6582994/13117/v/450/depositphotos_131177930-stock-illustration-user-icon-in-trendy-flat.jpg"
            img-alt="Image" img-top>
            <template #header>
              <h4 class="mb-0">CAMELLAPP</h4>
            </template>
            <b-card-body>
              <b-card-title>Administrador</b-card-title>
              <b-card-sub-title class="mb-2">Popayan - Cauca</b-card-sub-title>
              <a href="">Ver mas...</a>
            </b-card-body>
            <b-list-group flush>
              <b-list-group-item button @click="show = ''">Ofertas</b-list-group-item>
              <b-list-group-item button @click="show = ''">Empleadores</b-list-group-item>
              <b-list-group-item button @click="show = 'ListaPostulantes'">Postulantes</b-list-group-item>
              <b-list-group-item button @click="show = ''">Usuarios Bloqueados</b-list-group-item>
              <b-list-group-item button @click="show = ''">Comentarios</b-list-group-item>
            </b-list-group>
            <b-card-body>
              <h6>Contacto:</h6>
              <a href="#" class="card-link">Facebook</a>
              <a href="#" class="card-link">Whatsapp</a>
            </b-card-body>
          </b-card>
        </div>
      </div>
      <div class="col-1"></div>
      <div class="col-8">
        <div v-if="show === 'ListaPostulantes'">
          <ListaPostulantes />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ListaPostulantes from '@/components/ListaPostulantes.vue';

export default {
  name: 'PerfilAdministrador',
  data() {
    return {
      show: null
    }
  },
  components: {
    ListaPostulantes
  },
}
</script>