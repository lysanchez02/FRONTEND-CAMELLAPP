<template >

    <div>
        <b-navbar class="serna" >
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
        <b-container class="row">
            <b-row class="my1">
                <b-col sm="5">
                    <div class="perfil">
                        <b-row>
                            <b-col>
                                <h5>EDUARDO RIVERA</h5>
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
                                <b-button class="button1" @click="guardar()" variant="outline-primary">Datos Personales</b-button>
                                <br>
                                <br>
                                <b-button class="button1  " sm="4" @click="guardar()" variant="outline-primary">Mis Archivos</b-button>
                                <br>
                                <br>
                                <b-button class="button1" @click="guardar()" variant="outline-primary">Mis Postulaciones</b-button>
                                <br>
                                <br>
                                <b-button class="button1" @click="guardar()" variant="outline-primary">Mas Opciones</b-button>
                                <br>
                                <br>
                                <b-button class="button1" @click="guardar()" variant="outline-primary">Estadiscas</b-button>
                                <br>
                                <br>
                            </div>
                            
                        </div>
                    </div>
                </b-col>

                <b-col sm="6">
                    <div class="combo2">
                        <div>
                            <p>Necesitas empleo de construccion CAMELLAPP la mejor opcion</p>
                            <br>
                            <p class="camellapp"> inicias tu busqueda aqui</p>
                        </div>
                        <p>EMPLEOS</p>
                        <div class="tarjeta1">
                            <b-row>
                                <b-col sm="2">
                                    <img class="img5" src="https://i.pinimg.com/originals/3f/94/70/3f9470b34a8e3f526dbdb022f9f19cf7.jpg">
                                </b-col>

                                <b-col sm="10">
                                    <h5 class="problemas">Ayudante de constrccion</h5>
                                    <br>
                                    <h5 class="problemas"> se necesita trabajdor de construccion para el cargo de Ayudante de Construccion</h5>
                                     <br>
                                     <p class="hora"> 3 horas </p>
                                </b-col>
                            </b-row>
                        </div>
                        <br>
                        <div class="tarjeta1">
                            <b-row>
                                <b-col sm="2">
                                    <img class="img5" src="https://i.pinimg.com/originals/3f/94/70/3f9470b34a8e3f526dbdb022f9f19cf7.jpg">
                                </b-col>

                                <b-col sm="10">
                                    <h5 class="problemas">Ayudante de constrccion</h5>
                                    <br>
                                    <h5 class="problemas"> se necesita trabajdor de construccion para el cargo de Maestro de Obra</h5>
                                     <br>
                                     <p class="hora"> 6 horas </p>
                                </b-col>
                            </b-row>
                        </div>
                        <br>
                        <div class="tarjeta1">
                            <b-row>
                                <b-col sm="2">
                                    <img class="img5" src="https://i.pinimg.com/originals/3f/94/70/3f9470b34a8e3f526dbdb022f9f19cf7.jpg">
                                </b-col>

                                <b-col sm="10">
                                    <h5 class="problemas">Ayudante de constrccion</h5>
                                    <br>
                                    <h5 class="problemas"> se necesita trabajdor de construccion para el cargo de Ayudante Carpintero</h5>
                                     <br>
                                     <p class="hora"> 7 horas </p>
                                </b-col>
                            </b-row>
                        </div>
                    </div>
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

.nav1 {
    background-color: rgb(67, 133, 67);
    height: 75px;
    padding: 4px;
    border: 10px;
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

.combo {

    height: 33.8em;
    width: 27em;
    border: 1px solid;
}
.combo2{
    width: 57em;
    height: 46.4em;
    border: 1px solid;
}
.hora{
    text-align:right;
}
.serna{
    background-color: rgb(4, 0, 255);
    border: 50%;
    width: 95.6%;
    height: 10%;

}

</style>