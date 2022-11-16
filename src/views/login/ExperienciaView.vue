<template>
    <div class="contenedor3 ">
        <div>
            <div class="title1">
                <h2 class="fw-bold mb-2 text-uppercase"><img class="img3" src="@/assets/logocamellapp.png" alt=""></h2>
                <h5>EXPERIENCIA</h5>
            </div>

            <b-row>
                <b-col sm="6">
                    <label for="input-default">cargo en que te desempeñas</label>
                    <select class="form-control form-control-sl">
                        <option></option>
                        <option>ayudante de construpcion</option>
                        <option>electricista</option>
                        <option>maestro de obras</option>
                        <option>repellador</option>
                    </select>
                </b-col>
                <b-col sm="6">
                    <label for="input-default">lugar de trabajo anteriormente</label>
                    <select class="form-control form-control-sl">
                        <option></option>
                        <option>Popayan</option>
                        <option>Piendamo</option>
                        <option>Rosas</option>
                        <option>Tambo</option>
                    </select>
                </b-col>
            </b-row><br>
            <b-row>
                <b-col>
                    <label>se encuentra trabajando en el momento </label>
                    <b-row>
                        <b-col sm="3">
                            <b-form-radio v-model="option.si">Si</b-form-radio>
                        </b-col>
                        <b-col sm="3">
                            <b-form-radio v-model="option.no">No</b-form-radio>
                        </b-col>
                    </b-row>
                </b-col>
                <b-col>
                    <label>tiempo de experiencia alquirido </label>
                    <b-input></b-input>
                </b-col>
                
                <label>Descripcion</label>
                <b-form-textarea  max-rows="4">
                </b-form-textarea>
            </b-row><br>
            <B-button class="Boton3">GUARDAR</B-button>
        </div>
    </div>
</template>
<script>
export default {
    name: 'ExperienciaView',
    data() {
        return{
            option:{
                
            }
            
        }
    },
    methods: {
        
       
    }
}


</script>

<style>
@import"@/assets/sass/botones/botonesgenerales.scss";
.contenedor3 {
    max-width: 30em;
    max-height: 50em;
    background-color: rgb(255, 255, 255);
    border:10px;
    font-size: 15px;
    color: rgb(0, 0, 0);
    font-family: Arial, Helvetica, sans-serif;
    padding-top: oem;
    line-height: 36px;
    box-shadow: 0px 1px 20px 20px rgba(147, 160, 160, 0.2);
    border-color: rgb(134, 161, 161) 2px;
    text-align: center;
}
.title1 {
    background-color: rgb(255, 255, 255);
    padding: 2em;
}

.Boton3:hover {
    background-color: rgb(21, 255, 0);
    border-radius: 10em;
}
.img3 {
    width: 100px;
    height: 100px;
}

</style>