<template >
  <div>
    <div class="container">
      <div class="row">
        <b-card>
          <template #header>
            <b-card-img src="" img-top class="w-20"></b-card-img>
              <img src="https://www.semana.com/resizer/JmiB52VJxZmk799j7D2CEeTZ1x4=/arc-anglerfish-arc2-prod-semana/public/R52D6MSO7ZB4DF3W4QM4LECYIA.jpg" rounded  img-top alt="" class="w-50"><br><br>
            <div class="row d-flex">
              <div class="col-4">
                <label for="">Titulo</label>
              </div>
              <div class="col-8">
                <input class="from_control" v-model="ofertaEmpleo.titulo" placeholder="Titulo">
              </div>
            </div>
            <br>
            <div class="row d-flex">
              <div class="col-4">
                <label for="">Descripcion Del Trabajo</label>
              </div>
              <div class="col-8">
                <b-form-textarea placeholder="Se permite al menos 500 caracteres" v-model="ofertaEmpleo.descripcion"
                  rows="2"> </b-form-textarea>
              </div>
            </div>
            <br>
            <div class="row d-flex">
              <div class="col-4">
                <label for="">Salario</label>
              </div>
              <div class="col-8">
                <input class="from_control" v-model="ofertaEmpleo.salario" placeholder="$">
              </div>
            </div>
            <br>

            <div class="row d-flex">

              <div class="col-4">
                <label for="">Ubicacion</label>
              </div>
              <div class="col-8">
                <input class="from_control" v-model="ofertaEmpleo.ubicacion" placeholder="">
              </div>
            </div>
            <br>
            <div class="row d-flex">

              <div class="col-4">
                <label for="">Tipo de Contrato</label>
              </div>
              <div class="col-8">
                <input class="from_control" v-model="ofertaEmpleo.tipoDeContrato" placeholder="">
              </div>
            </div>
            <br>
          </template>
          <b-button v-on:click="publicarOferta()" variant="primary" class="m-1"><b-icon icon="check2"></b-icon> Publicar
            Oferta</b-button>
          <b-button href="#" variant="danger" class="m-1"><b-icon icon="x-circle"></b-icon> Cancelar</b-button>
        </b-card>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "PublicarView",
  data() {
    return {
      ofertaEmpleo:{
        titulo: "", 
        salario:"" ,
        descripcion: "",
        ubicacion: "",
        tipoDeContrato: "",
        id_categoria: 1,
        id_usuario: 1
      }
    };
  },
  methods: {
    publicarOferta() {
    //   user = localStorage.getItem("usuario")
    //   user.id
      axios.post("http://localhost:3000/guardarOfertaEmpleo", this.ofertaEmpleo)
        .then((data) => {
          console.log(data);
       });
        
}
},
};
</script>
<style>.from_control {
  width: 100%;
  max-height: 112%;
}

.button1 {

  width: 300px;
  height: 40px;
  text-align: center;
}

.img1 {
  border-radius: 90%;
  border: 1px solid;
  width: 90px;
  height: 90px;
}

.img3 {
  margin-left: 1140px;
}

.camellapp {
  background-color: white;
  border: 1px solid;
  width: 800px;
  height: 50px;
}

.tarjeta1 {
  background-color: white;
  border: 1px solid;
  width: 800px;
  height: 11em;
}

.img5 {
  border-radius: 90%;
  border: 1px solid;
  width: 75px;
  height: 75px;
  margin-top: 18%;

}

.row {
  padding: 1px;
}

.problemas {
  text-align: left;
}


.perfil {
  border: 1px solid;
  width: 27em;
  height: 200px;
  background-color: white;
  border-radius: 10px 10px 10px 10px;
  padding: 5px;
  border-radius: 5px;
}
</style>