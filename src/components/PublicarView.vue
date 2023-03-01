<template >
  <div>
          <div class="container">
            <div class="row">
              
                <b-card>
                  <template #header>
                    <b-card-img
                      src="https://help.fromdoppler.com/wp-content/uploads/2016/12/Alto_y_ancho-1024x531.png"
                      img-top class="w-20"></b-card-img>
                    <br> <br>
                    <div class="row d-flex">
                      <div class="col-4">
                        <label for="">Titulo</label>
                      </div>
                      <div class="col-8">
                        <input class="from_control" placeholder="titulo"> 
                      </div>
                    </div>
                    <br>
                    <div class="row d-flex">
                      <div class="col-4">
                       <label for="">Descripcion Del Trabajo</label> 
                      </div>
                      <div class="col-8">
                       <b-form-textarea placeholder="se permite al menos 500 caracteres" rows="3"> </b-form-textarea> 
                      </div>
                    </div>
                    <br>
                    <div class="row d-flex">
                      <div class="col-4">
                        <label for="">Pago</label>
                      </div>
                      <div class="col-8">
                        <input class="from_control" placeholder="$"> 
                      </div>
                    </div>
                    <br>
                    <div class="row d-flex">
                      <div class="col-2">
                        <label for="">Fecha de Inicio del trabajo</label>
                      </div>  
                      <div class="col-4">
                        <b-form-datepicker v-model="value" :min="min" :max="max" locale="es"></b-form-datepicker>
                      </div>  
                      <div class="col-2">
                        <label for="">Fecha de Finalizacion</label>
                      </div>  
                        <div class="col-4">
                        <b-form-datepicker v-model="value" :min="min" :max="max" locale="es"></b-form-datepicker>
                      </div>
                    </div>
                    <br>
                  </template>
                  <b-button href="#" variant="primary" class="m-1"><b-icon icon="check2"></b-icon>  Publicar Oferta</b-button> 
                  <b-button href="#" variant="danger" class="m-1"><b-icon icon="x-circle"></b-icon> Cancelar</b-button>                 
                </b-card>
            </div>
          </div>
        </div>
</template>
<script>

export default {
  data() {
    return {
      form: {


      },

    }
  },

}
</script>

<style>
.preguntas {

  text-align: center;
}
.from_control {
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

.preguntas1 {
  width: 25em;
  height: 30em;

  border-radius: 5px;
}

.Combo {
  width: 50em;
  border: 1px solid;
  height: 46.2em;
}
</style> 