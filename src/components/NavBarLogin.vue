<template>
    <div class="row">    <b-navbar class="d-flex" toggleable="lg" type="dark" variant="info">
        <img href="/" class="mx-5" src="https://i.ibb.co/ZxFjSC0/logocamellapp.png" style="width: 5%; height: 5%;">
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav >
            <b-nav-item href="/">Inicio</b-nav-item>
            <b-nav-item href="#">Trabaja con Nosotros</b-nav-item>
            <b-nav-item href="#">Contactanos</b-nav-item>
          </b-navbar-nav>
          </b-collapse>
        <b-button class="" variant="secondary" href="/LoginView">INICIAR SESION</b-button>
        <b-button class="mx-5" variant="outline-dark" href="/RegistroView">REGISTRATE</b-button>
      </b-navbar>
    </div>
</template>