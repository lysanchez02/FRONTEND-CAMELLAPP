<template>


    <div class="formContent1"> <br>

        <div class="container1 ">
            <div class="title1">
                <h2 class="fw-bold mb-2 text-uppercase"><img src="@/assets/logocamellapp.png" alt=""></h2>
                <h1>EXPERIENCIA</h1>
            </div>
            <div>
                <b-row>
                    <b-col lg="6">
                        <label for="input-default">cargo en que te desempeñas</label>
                        <select class="form-control form-control-sl">
                            <option></option>
                            <option>ayudante de construpcion</option>
                            <option>electricista</option>
                            <option>maestro de obras</option>
                            <option>repellador</option>
                        </select><br>

                        <label for="input-default">Descripcion</label>
                        <b-form-input id="input-default" placeholder=""></b-form-input><br>
                        <label for="input-default">lugar en donde trabajaste</label>
                        <select class="form-control form-control-sl">
                            <option></option>
                            <option>Popayan</option>
                            <option>Piendamo</option>
                            <option>Rosas</option>
                            <option>Tambo</option>
                        </select><br>
                        <br>
                        <label>se encuentra trabajando en el momento </label>
                        <b-row>
                            <b-col sm="6">
                                <b-form-radio>Si</b-form-radio>
                            </b-col>
                            <b-col sm="6">
                                <b-form-radio>No</b-form-radio>
                            </b-col>
                        </b-row>

                    </b-col>
                    <b-col lg="6">
                        <label>experiecias</label>
                        <b-form-input class="w-100 p-3 " id="input-default"></b-form-input>

                    </b-col>
                </b-row><br>
                
                    <B-button class="Boton1">EDITAR</B-button>
                    <B-button class="Boton2">GUARDAR</B-button>
                
            </div>


        </div>


    </div>

</template>

<style>
.formContent1 {
    max-width: 35em;
    max-height: 80em;
    background-color: black;
    margin: auto;
    font-size: 20px;
    color: rgb(255, 255, 255);
    font-family: Arial, Helvetica, sans-serif;
    padding: 1em;
    line-height: 36px;
    box-shadow: 0px 1px 20px 20px rgba(0, 255, 242, 0.2);
}

.title1 {
    background-color: rgb(0, 0, 0);
    padding: 2em;
}

.Boton2:hover {
    background-color: rgb(21, 255, 0);
    border-radius: 10em;

}
.Boton1:hover{
    background-color: rgb(248, 145, 1);
    border-radius: 10em;

}
</style>