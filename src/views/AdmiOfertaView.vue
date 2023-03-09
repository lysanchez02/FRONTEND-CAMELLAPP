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
                                <div class="preguntas">
                                    <b-button class="button1" @click="guardar()" variant="outline-primary">PERFIL</b-button>
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
                                    <b-button class="button1" @click="guardar()" variant="outline-primary">VER USUARIOS DE
                                        EMPLEADOR </b-button>
                                    <br>
                                    <br>
                                    <b-button class="button1" @click="guardar()" variant="outline-primary">VER CATEGORIAS
                                    </b-button>
                                    <br>
                                    <br>
                                    <b-button class="button1" @click="guardar()" variant="outline-primary">VER DETALLE DE
                                        OFERTA </b-button>
                                    <br>
                                    <br>
                                    <b-button class="button1" @click="guardar()" variant="outline-primary">VER LOS ARCHIVOS
                                    </b-button>
                                </div>
                            </div>

                        </div>
                    </div>
                </b-col>
                <b-col sm="6">
                    <P>ADMINISTRADOR</P>
                    <br>
                    <p class="oferta">OFERTA DE EMPLEO</p>

                    <div class="Combo">

                        <b-row class="my-2">
                            <b-col sm="2">
                                <label for="input-small">TITULO:</label>
                            </b-col>
                            <b-col sm="8">
                                <b-form-input id="input-small" size="sm"
                                    placeholder="Ayudante de construccion"></b-form-input>
                            </b-col>
                        </b-row>
                        <br>


                        <b-row class="my-2">
                            <b-col sm="2">
                                <label for="input-small">DESCRIPCION:</label>
                            </b-col>
                            <b-col sm="8">
                                <b-form-input id="input-small" size="sm"
                                    placeholder="Derribar paredes y limpieza de las herramientas de trabajo"></b-form-input>
                            </b-col>
                        </b-row>
                        <br>



                        <b-row class="my-2">
                            <b-col sm="2">
                                <label for="input-small">SALARIO:</label>
                            </b-col>
                            <b-col sm="8">
                                <b-form-input id="input-small" size="sm" placeholder="1,200.000"></b-form-input>
                            </b-col>
                        </b-row>
                        <br>

                        <b-row class="my-2">
                            <b-col sm="2">
                                <label for="input-small">UBICACION:</label>
                            </b-col>
                            <b-col sm="8">
                                <b-form-input id="input-small" size="sm"
                                    placeholder="Popayan Cauca/variante norte"></b-form-input>
                            </b-col>
                        </b-row>
                        <br>

                        <b-row class="my-2">
                            <b-col sm="2">
                                <label for="input-small">TIEMPO ESTIMA PARA EL TRABAJO:</label>
                            </b-col>
                            <b-col sm="8">
                                <b-form-input id="input-small" size="sm" placeholder="4 meses"></b-form-input>
                            </b-col>
                        </b-row>

                        <div>
                            <b-button-group>

                                <b-button variant="danger">Eliminar</b-button>
                            </b-button-group>
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
                titulo: '',
                descripcion: '',
                salario: null,
                ubicacion: '',

            },
            foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
            show: true
        }
    },

}
</script>

<style>
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
    width: 50em;
    height: 30em;

    border-radius: 5px;
}

.Combo {
    width: 50em;
    border: 2px solid;
    height: 85%
}

.oferta {
    text-align: left;
}</style>