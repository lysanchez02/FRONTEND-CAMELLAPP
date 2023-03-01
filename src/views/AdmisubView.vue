<template >

    <div>
        
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
                                <button>Actualizar Datos</button>
                            </b-col>
                        </b-row>
                    </div>
                    <div class="combo">
                        <img src="" class="icon">
                        <div class="preguntas1">
                            
                            <div class="preguntas">
                                <b-button class="button1" @click="guardar()" variant="outline-primary">PERFIL</b-button>
                                <br>
                                <br>
                                <b-button class="button1  " sm="4" @click="guardar()" variant="outline-primary">VER EMPLEO </b-button>
                                <br>
                                <br>
                                <b-button class="button1" @click="guardar()" variant="outline-primary">VER USUARIOS POSTULANTES</b-button>
                                <br>
                                <br>
                                <b-button class="button1" @click="guardar()" variant="outline-primary">VER USUARIOS DE EMPLEADOR </b-button>
                                <br>
                                <br>
                                <b-button class="button1" @click="guardar()" variant="outline-primary">VER CATEGORIAS </b-button>
                                <br>
                                <br>
                                <b-button class="button1" @click="guardar()" variant="outline-primary">VER DETALLE DE OFERTA </b-button>
                                <br>
                                <br>
                                <b-button class="button1" @click="guardar()" variant="outline-primary">VER  LOS ARCHIVOS </b-button>
                            </div>
                            
                        </div>
                    </div>
                    </b-col>
                    <br>
                 <b-col sm="5">
                    <P>ADMINISTRADOR</P>
                    
                 
                     <b-button class="agregar" @click="guardar()" variant="success">AGREGAR SUBCATEGORIA</b-button>
                     <br>
                     <br>
                   
                    <div class="icon">
                            <b-row>
                                <b-col sm="10">
                                    <h5 class="problemas">MAESTRO DE CONSTRUCCION </h5>
                                </b-col>

                                <b-col  sm="2">
                                    <b-input-group class="buscar" size="sm">
                                    <b-input-group-prepend is-text>
                                    <b-icon icon="search"></b-icon>
                                    </b-input-group-prepend> </b-input-group>
                                </b-col>
                            </b-row>
                        </div>
                        <br>
                        <div class="icon">
                            <b-row>
                                <b-col sm="10">
                                    <h5 class="problemas">AUXILIAR DE CONSTRUCCION </h5>
                                </b-col>

                                <b-col  sm="2">
                                    <b-input-group class="buscar" size="sm">
                                    <b-input-group-prepend is-text>
                                    <b-icon icon="search"></b-icon>
                                    </b-input-group-prepend> </b-input-group>
                                </b-col>
                            </b-row>
                        </div>
                        <br>
                        <div class="icon">
                            <b-row>
                                <b-col sm="10">
                                    <h5 class="problemas">ALMACENISTA</h5>
                                </b-col>

                                <b-col  sm="2">
                                    <b-input-group class="buscar" size="sm">
                                    <b-input-group-prepend is-text>
                                    <b-icon icon="search"></b-icon>
                                    </b-input-group-prepend> </b-input-group>
                                </b-col>
                            </b-row>
                        </div>
                        <br>
                        <div class="icon">
                            <b-row>
                                <b-col sm="10">
                                    <h5 class="problemas">TOPOGRAFO</h5>
                                </b-col>

                                <b-col  sm="2">
                                    <b-input-group class="buscar" size="sm">
                                    <b-input-group-prepend is-text>
                                    <b-icon icon="search"></b-icon>
                                    </b-input-group-prepend> </b-input-group>
                                </b-col>
                            </b-row>
                        </div>
                        <br>
                        <div class="icon">
                            <b-row>
                                <b-col sm="10">
                                    <h5 class="problemas">PLOMERO</h5>
                                </b-col>

                                <b-col  sm="2">
                                    <b-input-group class="buscar" size="sm">
                                    <b-input-group-prepend is-text>
                                    <b-icon icon="search"></b-icon>
                                    </b-input-group-prepend> </b-input-group>
                                </b-col>
                            </b-row>
                        </div>
                        <br>
                        <div class="icon">
                            <b-row>
                                <b-col sm="10">
                                    <h5 class="problemas">MAESTRO DE CERAMICA </h5>
                                </b-col>

                                <b-col  sm="2">
                                    <b-input-group class="buscar" size="sm">
                                    <b-input-group-prepend is-text>
                                    <b-icon icon="search"></b-icon>
                                    </b-input-group-prepend> </b-input-group>
                                </b-col>
                            </b-row>
                        </div>
                        <br>
                        <div class="icon">
                            <b-row>
                                <b-col sm="10">
                                    <h5 class="problemas">ELECTRICISTA</h5>
                                </b-col>

                                <b-col  sm="2">
                                    <b-input-group class="buscar" size="sm">
                                    <b-input-group-prepend is-text>
                                    <b-icon icon="search"></b-icon>
                                    </b-input-group-prepend> </b-input-group>
                                </b-col>
                            </b-row>
                        </div>
                        <br>
                        <div class="icon">
                            <b-row>
                                <b-col sm="10">
                                    <h5 class="problemas">PINTOR</h5>
                                </b-col>

                                <b-col  sm="2">
                                    <b-input-group class="buscar" size="sm">
                                    <b-input-group-prepend is-text>
                                    <b-icon icon="search"></b-icon>
                                    </b-input-group-prepend> </b-input-group>
                                </b-col>
                            </b-row>
                        </div>
                        <br>
                        <div class="icon">
                            <b-row>
                                <b-col sm="10">
                                    <h5 class="problemas">ESTUCADOR</h5>
                                </b-col>

                                <b-col  sm="2">
                                    <b-input-group class="buscar" size="sm">
                                    <b-input-group-prepend is-text>
                                    <b-icon icon="search"></b-icon>
                                    </b-input-group-prepend> </b-input-group>
                                </b-col>
                            </b-row>
                        </div>
                        <br>
                        <div class="icon">
                            <b-row>
                                <b-col sm="10">
                                    <h5 class="problemas">INSTALADOR DE VIDRIOS</h5>
                                </b-col>

                                <b-col  sm="2">
                                    <b-input-group class="buscar" size="sm">
                                    <b-input-group-prepend is-text>
                                    <b-icon icon="search"></b-icon>
                                    </b-input-group-prepend> </b-input-group>
                                </b-col>
                            </b-row>
                        </div>
                        <br>
                        <div class="icon">
                            <b-row>
                                <b-col sm="10">
                                    <h5 class="problemas">CARPINTERO</h5>
                                </b-col>

                                <b-col  sm="2">
                                    <b-input-group class="buscar" size="sm">
                                    <b-input-group-prepend is-text>
                                    <b-icon icon="search"></b-icon>
                                    </b-input-group-prepend> </b-input-group>
                                </b-col>
                            </b-row>
                        
                        </div>
     
                        <br>
                </b-col> 
                
                 <b-col class="botones" sm="2">
                    <div class="">
                       <b-col>
                        <b-button @click="guardar()" variant="outline-light"></b-button>
                       </b-col>
                    </div>
                    <br>
                    <br>
                    <br>
                    <div class="iliminar">
                        <b-button @click="guardar()" variant="outline-danger">Eliminar</b-button>
                    </div>
                    <br>
                    <div class="iliminar">
                        <b-button @click="guardar()" variant="outline-danger">Eliminar</b-button>
                    </div>
                    <br>
                    <div class="iliminar">
                        <b-button @click="guardar()" variant="outline-danger">Eliminar</b-button>
                    </div>
                    <br>
                    <div class="iliminar">
                        <b-button @click="guardar()" variant="outline-danger">Eliminar</b-button>
                    </div>
                    <br>
                    <div class="iliminar">
                        <b-button @click="guardar()" variant="outline-danger">Eliminar</b-button>
                    </div>
                    <br>
                    <div class="iliminar">
                        <b-button @click="guardar()" variant="outline-danger">Eliminar</b-button>
                    </div>
                    <br>
                    <div class="iliminar">
                        <b-button @click="guardar()" variant="outline-danger">Eliminar</b-button>
                    </div>
                    <br>
                    <div class="iliminar">
                        <b-button @click="guardar()" variant="outline-danger">Eliminar</b-button>
                    </div>
                    <br>
                    <div class="iliminar">
                        <b-button @click="guardar()" variant="outline-danger">Eliminar</b-button>
                    </div>
                    <br>
                    <div class="iliminar">
                        <b-button @click="guardar()" variant="outline-danger">Eliminar</b-button>
                    </div>
                    <br>
                    <div class="iliminar">
                        <b-button @click="guardar()" variant="outline-danger">Eliminar</b-button>
                    </div>
               
                    <br>
                 </b-col>
                 

                
               
            </b-row>
         
        </b-container>
    
    </div>

 
</template>

<script>

export default {
    data() {
        return {

        }
    },
    components: {},
    methods: {
        // Agricultor(){
        //     this.$router.push("/Agricultor");
        // }
    },

    computed: {},
    mounted: {}
}
</script>

<style>
.preguntas {
    text-align: center;
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

.icon{
    text-align:right;
    border: 1px solid;
    width: 30em;
    
}
.botones{
    padding-top: 10px;
}


</style>