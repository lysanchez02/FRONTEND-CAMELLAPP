<template>
  <div>
        <b-input-group class="mt-3">
            <b-form-input value="Ingeniero Civil" disabled></b-form-input>
            <b-input-group-append>
            <b-button  @click="show=true" variant="primary">Button</b-button>
            </b-input-group-append>
        </b-input-group>

        <b-input-group class="mt-3">
            <b-form-input value="Maestro de Construccion" disabled></b-form-input>
            <b-input-group-append>
            <b-button  @click="show=true" variant="primary">Button</b-button>
            </b-input-group-append>
        </b-input-group>

        <b-input-group class="mt-3">
            <b-form-input value="Auxiliar de Construccion" disabled></b-form-input>
            <b-input-group-append>
            <b-button  @click="show=true" variant="primary">Button</b-button>
            </b-input-group-append>
        </b-input-group>

        <b-input-group class="mt-3">
            <b-form-input value="Almacenista" disabled></b-form-input>
            <b-input-group-append>
            <b-button  @click="show=true" variant="primary">Button</b-button>
            </b-input-group-append>
        </b-input-group>

        <b-input-group class="mt-3">
            <b-form-input value="topografo" disabled></b-form-input>
            <b-input-group-append>
            <b-button  @click="show=true" variant="primary">Button</b-button>
            </b-input-group-append>
        </b-input-group>

        <b-input-group class="mt-3">
            <b-form-input value="Aseadora de Residuos de Construccion" disabled></b-form-input>
            <b-input-group-append>
            <b-button  @click="show=true" variant="primary">Button</b-button>
            </b-input-group-append>
        </b-input-group>
        
    <b-modal
      v-model="show"
      title="Modal Variants"
      :header-bg-variant="headerBgVariant"
      :header-text-variant="headerTextVariant"
      :body-bg-variant="bodyBgVariant"
      :body-text-variant="bodyTextVariant"
      :footer-bg-variant="footerBgVariant"
      :footer-text-variant="footerTextVariant"
    >
      <b-container fluid>
        <b-row class="mb-1 text-center">
          <b-col cols="3"></b-col>
          <b-col>Background</b-col>
          <b-col>Text</b-col>
        </b-row>

        <b-row class="mb-1">
          <b-col cols="3">Header</b-col>
          <b-col>
            <b-form-select
              v-model="headerBgVariant"
              :options="variants"
            ></b-form-select>
          </b-col>
          <b-col>
            <b-form-select
              v-model="headerTextVariant"
              :options="variants"
            ></b-form-select>
          </b-col>
        </b-row>

        <b-row class="mb-1">
          <b-col cols="3">Body</b-col>
          <b-col>
            <b-form-select
              v-model="bodyBgVariant"
              :options="variants"
            ></b-form-select>
          </b-col>
          <b-col>
            <b-form-select
              v-model="bodyTextVariant"
              :options="variants"
            ></b-form-select>
          </b-col>
        </b-row>

        <b-row>
          <b-col cols="3">Footer</b-col>
          <b-col>
            <b-form-select
              v-model="footerBgVariant"
              :options="variants"
            ></b-form-select>
          </b-col>
          <b-col>
            <b-form-select
              v-model="footerTextVariant"
              :options="variants"
            ></b-form-select>
          </b-col>
        </b-row>
      </b-container>

      <template #modal-footer>
        <div class="w-100">
          <p class="float-left">Modal Footer Content</p>
          <b-button
            variant="primary"
            size="sm"
            class="float-right"
            @click="show=false"
          >
            Close
          </b-button>
        </div>
      </template>
    </b-modal>
  </div>
</template>

<script>
  export default {
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
