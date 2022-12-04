<template>
    <div>
        <div class="container">
          <div class="row">
              
              <b-card>
                <template #header>
                  <b-card-img
                    src="https://www.semana.com/resizer/JmiB52VJxZmk799j7D2CEeTZ1x4=/arc-anglerfish-arc2-prod-semana/public/R52D6MSO7ZB4DF3W4QM4LECYIA.jpg"
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
                      <label for="">Inicio del trabajo</label>
                    </div>  
                    <div class="col-4">
                      <b-form-datepicker v-model="value" :min="min" :max="max" locale="es"></b-form-datepicker>
                    </div>  
                    <div class="col-2">
                      <label for="">Terminar el trabajo</label>
                    </div>  
                      <div class="col-4">
                      <b-form-datepicker v-model="value" :min="min" :max="max" locale="es"></b-form-datepicker>
                    </div>
                  </div>
                  <br>
                </template>
<b-button href="#" variant="primary" class="m-1"><b-icon icon="hdd"></b-icon>  Guardar</b-button> 
<b-button href="#" variant="danger" class="m-1"><b-icon icon="x-circle"></b-icon> Cancelar</b-button>             
              </b-card>
            
          </div>
    </div>
    </div>
</template>
<script>
export default{
    name:'EditarOferta',
    data(){
      return{

      }
    },
    components:{
  },
  }
  </script>