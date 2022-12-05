<template>
  <div class="container">
    <div class="row">
  <div class="col">
        <b-input-group class="mt-3">
            <b-form-input value="pintor" disabled></b-form-input>
            <b-input-group-append>
            <b-button  @click="show=true" variant="secondary"><b-icon icon="arrow-right-short"></b-icon></b-button>
            </b-input-group-append>
        </b-input-group>

        <b-input-group class="mt-3">
            <b-form-input value="carpintero" disabled></b-form-input>
            <b-input-group-append>
            <b-button  @click="show=true" variant="secondary"><b-icon icon="arrow-right-short"></b-icon></b-button>
            </b-input-group-append>
        </b-input-group>

        <b-input-group class="mt-3">
            <b-form-input value="Yesero" disabled></b-form-input>
            <b-input-group-append>
            <b-button  @click="show=true" variant="secondary"><b-icon icon="arrow-right-short"></b-icon></b-button>
            </b-input-group-append>
        </b-input-group>

        <b-input-group class="mt-3">
            <b-form-input value="Estucadores" disabled></b-form-input>
            <b-input-group-append>
            <b-button  @click="show=true" variant="secondary"><b-icon icon="arrow-right-short"></b-icon></b-button>
            </b-input-group-append>
        </b-input-group>

        <b-input-group class="mt-3">
            <b-form-input value="Acabados" disabled></b-form-input>
            <b-input-group-append>
            <b-button  @click="show=true" variant="secondary"><b-icon icon="arrow-right-short"></b-icon></b-button>
            </b-input-group-append>
        </b-input-group>
</div>
      
 </div>
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