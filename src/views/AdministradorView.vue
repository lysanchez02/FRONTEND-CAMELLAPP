<template >

    <div>
        <b-container>
            <b-row class="my1">
                <b-col sm="5">
                   
                </b-col>

                <b-col sm="6">
                    <p>ADMINIDTRADOR</p>
                    <div class="combo2">
                        <div>
                            <p class="ayudagro1"> EMPLEOS</p>
                        </div>
                        <div class="tarjeta1">
                            <b-row>
                                <b-col sm="2">
                                    <img class="img5" src="">
                                    <P>Julian Gomes</P>
                                </b-col>

                                <b-col sm="6">
                                    <h5 class="problemas"> Muestros de obras</h5>
                                    <br>
                                    <h5 class="problemas">Muestro de obras 8 años de experiencia </h5>
                                </b-col>
                                
                                    <b-col class="butons" sm="2">
                                        <b-button @click="guardar()" variant="">ELIMINAR</b-button>
                                    </b-col>
                                    <b-col class="butons" sm="2">
                                        <b-button @click="guardar()" variant="">SUSPENDER</b-button>
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





.tarjeta1 {
    background-color: white;
    
     width: 780px; 
     height: 7em; 
     font-size: 15PX;
}

.img5 {
    border-radius: 90%;
    border: 1px solid;
    width: 75px;
    height: 75px;
}

.preguntas1 {
    width: 25em;
    height: 30em;

    border-radius: 5px;
}
.combo2{
    width: 51em;
    height: 40em;
    border: 1px solid;
    padding: 14px;
}
.butons{
    
}
</style>