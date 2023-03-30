<template>
  <div>
    <div class="container">
      <div class="row">
        <div>
          <b-card>
            <template #header>
              <b-card-img
                src="https://www.semana.com/resizer/JmiB52VJxZmk799j7D2CEeTZ1x4=/arc-anglerfish-arc2-prod-semana/public/R52D6MSO7ZB4DF3W4QM4LECYIA.jpg"
                img-top
                class="w-50"
              ></b-card-img>
              <br />
              <br />
              <h4 class="mb-0 m-1">Ayudante General</h4>
              <h6>Se requiere ayudante de construccion por 6 meses</h6>
              <p>Pago: $1000000</p>
            </template>
            <b-card-body class="p-0">
              <b-card-title>Leyder Yesid Sanchez Benachi</b-card-title>
              <b-card-sub-title class="mb-2">Popayan - Cauca</b-card-sub-title>
              <p class="">Empresa</p>
            </b-card-body>
            <b-list-group flush class="b-0"
              ><hr class="m-0" />
              <b-list-group-item href=""
                >Detalles de la Oferta</b-list-group-item
              >

              <b-list-group-item href="#">Postulados</b-list-group-item>
              <b-list-group-item href="#"></b-list-group-item>
            </b-list-group>

            <b-card-body class="p-2">
              <h6>Contacto:</h6>
              <a href="#" class="card-link">Facebook</a>
              <a href="#" class="card-link">Whatsapp</a>
            </b-card-body>

            <b-card-footer
              footer-bg-variant="secondary"
              footer-text-variant="white"
              >Guardar</b-card-footer
            >
            <b-card-footer
              footer-bg-variant="danger"
              footer-text-variant="white"
              >Eliminar</b-card-footer
            >
          </b-card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "DetalleOferta",
  data() {
    return {};
  },
  components: {},
};
</script>
