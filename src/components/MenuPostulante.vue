<template>
  <div class="container">
    <b-card
      no-body
      style="max-width: 20rem;"
      img-src="https://st3.depositphotos.com/6582994/13117/v/450/depositphotos_131177892-stock-illustration-user-icon-in-trendy-flat.jpg"
      img-alt="Image"
      img-top>
      <template #header>
        <h4 class="mb-0">Postulante</h4>
        <h5></h5>
      </template>

      <b-list-group flush>
        <b-list-group-item button @click="">Gestionar Perfil</b-list-group-item>
        <b-list-group-item button @click="">Ofertas de Empleo</b-list-group-item>
        <b-list-group-item button @click="">Mi Experiencia</b-list-group-item>
        <b-list-group-item button @click="">Mis Postulaciones</b-list-group-item>
      </b-list-group>
    </b-card>
</div>
</template>