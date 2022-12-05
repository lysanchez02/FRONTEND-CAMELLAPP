<template>
  <div>
        <b-input-group class="mt-3">
            <b-form-input value="Plomero" disabled></b-form-input>
            <b-input-group-append>
            <b-button  @click="show=true" variant="secondary"><b-icon icon="arrow-right-short"></b-icon></b-button>
            </b-input-group-append>
        </b-input-group>

        <b-input-group class="mt-3">
            <b-form-input value="Tecnico Impermeabilizacion" disabled></b-form-input>
            <b-input-group-append>
            <b-button  @click="show=true" variant="secondary"><b-icon icon="arrow-right-short"></b-icon></b-button>
            </b-input-group-append>
        </b-input-group>

        <b-input-group class="mt-3">
            <b-form-input value="Maestro Seramista" disabled></b-form-input>
            <b-input-group-append>
            <b-button  @click="show=true" variant="secondary"><b-icon icon="arrow-right-short"></b-icon></b-button>
            </b-input-group-append>
        </b-input-group>

        <b-input-group class="mt-3">
            <b-form-input value="Instalador de ventanas y cristalamiento" disabled></b-form-input>
            <b-input-group-append>
            <b-button  @click="show=true" variant="secondary"><b-icon icon="arrow-right-short"></b-icon></b-button>
            </b-input-group-append>
        </b-input-group>

        <b-input-group class="mt-3">
            <b-form-input value="electricista" disabled></b-form-input>
            <b-input-group-append>
            <b-button  @click="show=true" variant="secondary"><b-icon icon="arrow-right-short"></b-icon></b-button>
            </b-input-group-append>
        </b-input-group>
</div>
</template>
<script>
  export default {
    name:'ObraBlanca',
    data() {
      return {
        show: false,
        variants: ['primary', 'secondary', 'success', 'warning', 'danger', 'info', 'light', 'dark'],
        headerBgVariant: 'dark',
        headerTextVariant: 'light',
        bodyBgVariant: 'light',
        bodyTextVariant: 'dark',
        footerBgVariant: 'warning',
        footerTextVariant: 'dark'
      }
    }
  }
</script>