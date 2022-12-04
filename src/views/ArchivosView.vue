<template >
  <div>
        <b-navbar class="navbar" >
            <b-navbar-nav>
                <div class="d-flex flex-row mb-2">
                </div>
                <div class="d-flex flex-.flex-row">


                </div>

                <img class="img1" src="@/assets/logocamellapp.png">


                <nav class="navbar bg-danger-fluid">
                    <div class="row">
                        <div class ="col-md-4"><button type="button" class="btn1 btn-danger">INICIO</button>
                        </div>
                        <div class="col-md-4 offset-md-4"><button type="button" class="btn2 btn-success">SALIR</button>
                        </div>
                        </div>
                        
                            
                        
                   

                    <form class="container-fluid">
                        <div class="row">
                            <div class="col-md-2">
                                <a class="justify-content-start">
                                </a>

                            </div>
                            <div class="justify-content-end">


                            </div>
                        </div>

                    </form>
                </nav>

            </b-navbar-nav>
        </b-navbar>
        <br>

        <b-container class="row">
            <b-row class="my1">
                <b-col sm="5">
                    <div class="perfil">
                        <b-row>
                            <b-col>
                                <h5>SEBASTIAN GOMEZ</h5>
                                <img class="img1" src="https://img.lovepik.com/element/45001/3052.png_860.png">
                                <br>
                                <br>
                               
                            </b-col>
                        </b-row>
                       
                        
                    </div>
                    <br>
                    <div class="combo">
                        <img src="" class="icon">
                        <div class="preguntas1">
                            
                            <div class="preguntas">
                              <div class="preguntas">
                                <b-button class="button1" @click="guardar()" variant="outline-primary">DATOS PERESONALES</b-button>
                                <br>
                                <br>
                                <b-button class="button1  " sm="4" @click="guardar()" variant="outline-primary">MIS ARCHIVOS </b-button>
                                <br>
                                <br>
                                <b-button class="button1" @click="guardar()" variant="outline-primary">MAS OPCIONES</b-button>
                                <br>
                                <br>
                               
                            </div>
                          </div>
                            
                        </div>
                    </div>
                </b-col>
                <b-col sm="6">
                    
                
    <div class="Combo">
                        <br>
                    
                        <p>SUBIR ARCHIVO</p>
                        <b-form-file v-model="file2" class="mt-3" plain></b-form-file>
                        <br>

                        <b-row class="my-5">
                        
                            <b-col sm="3">
                       <label for="input-small">TITULO:</label>
                    </b-col>
                    <b-col sm="8">
                        <b-form-input id="input-small" size="sm" placeholder=""></b-form-input>
                    </b-col>
                </b-row>
                <br>

                 
                <b-row class="my-2">
                    <b-col sm="3">
                        <label for="input-small">DESCRIPCION:</label>
                    </b-col>
                    <b-col sm="8">
                        <b-form-input id="input-small" size="sm" placeholder=""></b-form-input>
                    </b-col>
                </b-row>
                <br>
              

                <b-row class="my-10">
                    <b-col sm="5">
                        <b-button-group>
                         <b-button variant="danger">CANCELAR</b-button>
                </b-button-group>
               </b-col>

                    <b-col sm="7">
                        <b-button-group>
      
                <b-button variant="success">SUBIR</b-button>
                 </b-button-group>
                    </b-col>
                </b-row>
               
               
            </div>
        </b-col>

                

     </b-row>
        </b-container>
    </div>
</template>
<script>

export default {
    name: 'ArchivosView',
    data() {
      return {
        form: {
          titulo: '',
          descripcion: '',
          salario: null,
          ubicacion:'',
          
        },
        foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
        show: true
      }
    },
   
  }
</script>

<style>
@import "C:\Users\Leyder\camellapp\src\assets\sass\botones\botonesgenerales.scss";
.preguntas {

    text-align: center;
    height: 50%;


}

.button1 {

    width: 300px;
    height: 40px;
    text-align: center;
}

.img1 {
   
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
    border:50%;
    padding: 5px;
    border: 5px;
}

.preguntas1 {
    width: 30%;
    height: 30%;
    border: 50%;

   
}
.Combo{
    width: 50em;
   
    border: 2px solid;
    height: 30%
}
.oferta{
    text-align: left;
}
.navbar{
    background-color: rgb(4, 0, 255);
    border: 50%;
    width: 88.5%;
    height: 10%;

}


  



</style>
        
           
           