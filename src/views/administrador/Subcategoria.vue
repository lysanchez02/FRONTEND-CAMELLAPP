<template>
    <div class="container">
        <NavBarLogin />
        <div class="row ">
            <div class="col-3">
                <col_Administrador />
            </div>

            <div class="col-9">
                <div class="row">
                    <h2>Categoria</h2>

                    <div class="col-6 ">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import NavBarLogin from "@/components/NavBarLogin.vue"
import col_Administrador from "@/components/col_Administrador.vue"

import axios from "axios"
export default {
  name: 'Subcategoria',
  data() {
    return {

    }
  },
  components: {
    NavBarLogin,
    col_Administrador
  },
  methods: {
    eliminarpostulante(id) {
      axios.delete("http://localhost:4000/eliminarpostulante/" + id).then(response => {
      })
    }
  },
  mounted() {
    alert()
    axios.get("http://localhost:4000/ListarPostulante").then(response => {
      this.listar = response.data
    })
  },
  mounted() {
    axios.get("http://localhost:4000/consultaPostulantexCategoria").then(response => {
      this.listar = response.data
    })
  }
}
</script>