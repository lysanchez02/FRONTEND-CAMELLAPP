
    
<template >

    <div>
        <b-navbar class="navbar" type="dark" variant="primary">
            <b-navbar-nav>
                <div class="d-flex justify-content-end">
                </div>
                <div class="d-flex justify-content-end">


                </div>
                <img class="img1" src="@/assets/logocamellapp.png">

                <nav class="d-flex align-items-center">

                    <form class="container-fluid justify-content-start">
                        <b-button variant="danger">Inicio</b-button>

                    </form>
                </nav>
                <nav class="d-flex align-items-right">


                    <form class="container-fluid justify-content-start">

                        <b-button variant="success">Salir</b-button>

                    </form>
                </nav>
            </b-navbar-nav>
        </b-navbar>

        <b-container class="row">
            <div class="container">
                <b-container fluid>
                    <br>
                    <!-- <b-row class="my-1">
                    
                  
                </b-row> -->
                </b-container>
            </div>

            <b-row class="my1">



                <b-col sm="5">
                    <div class="cuerpo">
                        <div class="perfil">
                            <b-row>
                                <b-col>
                                    <h5>SEBASTIAN GOMEZ</h5>
                                    <img class="img1" src="@/assets//blank-profile-picture-973460_960_720.webp">
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
                                    <b-button class="button1" @click="guardar()" variant="outline-primary">PERFIL
                                    </b-button>
                                    <br>
                                    <br>
                                    <b-button class="button1  " sm="4" @click="guardar()" variant="outline-primary">VER
                                        EMPLEO </b-button>
                                    <br>
                                    <br>
                                    <b-button class="button1" @click="guardar()" variant="outline-primary">VER USUARIOS
                                        POSTULANTES</b-button>
                                    <br>
                                    <br>
                                    <b-button class="button1" @click="guardar()" variant="outline-primary">VER USUARIOS
                                        DE
                                        EMPLEADOR </b-button>
                                    <br>
                                    <br>
                                    <b-button class="button1" @click="guardar()" variant="outline-primary">VER
                                        CATEGORIAS
                                    </b-button>
                                    <br>
                                    <br>
                                    <b-button class="button1" @click="guardar()" variant="outline-primary">VER DETALLER
                                        DE
                                        OFERTA </b-button>
                                    <br>
                                    <br>
                                    <b-button class="button1" @click="guardar()" variant="outline-primary">VER LOS
                                        ARCHIVOS
                                    </b-button>
                                </div>

                            </div>
                        </div>
                    </div>
                </b-col>

                <b-col sm="6">


                    <div class="combo2">
                        <div>

                            <br>
                            <p class="camellapp"> Pablo Mosquera</p>
                            <p class="camellapp"> Carolina Paloma</p>
                            <p class="camellapp"> Danier Trochez</p>
                            <p class="camellapp"> Lisbeth Samboni</p>
                            <p class="camellapp"> Andres Perez</p>
                            <p class="camellapp"> Manuel Garcia</p>
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

.combo2 {
    width: 57em;
    height: 40em;
    border: 1px sólido;
}

.cuerpo {
    background-color: aqua;
    width: 20%;
    height: 10%;
    border: 10ch;
}
</style>
      