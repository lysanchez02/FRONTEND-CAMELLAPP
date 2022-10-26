<template>
    <div >
        <div class="title" lg="12">
          <h1>Formulario de Registro</h1>  
        </div>
        <br>
        <div class="container">
            <b-container fluid>
                <b-row class="my-1">
                    <b-col sm="2">
                        <b-dropdown variant="info" right text="Tipo de Persona">
                            <b-dropdown-item>Persona natural</b-dropdown-item>
                            <b-dropdown-item>Cedula extrangera</b-dropdown-item>
                            <b-dropdown-item>Pasaporte</b-dropdown-item>
                        </b-dropdown>
                    </b-col>
                </b-row>
                <br>
                <b-row class="my-1">
                    <b-col sm="2">
                        <label for="input-small">Nombre:</label>
                    </b-col>
                    <b-col sm="10">
                        <b-form-input id="input-small" size="sm" placeholder="digite su nombre"></b-form-input>
                    </b-col>
                </b-row>

                <b-row class="my-1">
                    <b-col sm="2">
                        <label for="input-default">Aprellido:</label>
                    </b-col>
                    <b-col sm="10">
                        <b-form-input id="input-default" placeholder="digite su apellido"></b-form-input>
                    </b-col>
                </b-row>
                <b-row class="my-1">
                    <b-col sm="2">
                        <label for="input-default">Correo Electronico:</label>
                    </b-col>
                    <b-col sm="10">
                        <b-form-input id="input-default" placeholder="digite su correo elctronico"></b-form-input>
                    </b-col>
                </b-row>
                <b-row class="my-1">
                    <b-col xs="2">
                        <label for="input-default">Contraseña:</label>
                    </b-col>
                    <b-col xs="10">
                        <b-form-input id="input-default" placeholder="digite su contraseña"></b-form-input>
                    </b-col>
                    <b-col xs="2">
                        <label for="input-default">Confirmar Contraseña:</label>
                    </b-col>
                    <b-col xs="10">
                        <b-form-input id="input-default" placeholder="confirmar su contraseña"></b-form-input>
                    </b-col>
                </b-row>
                <b-row class="my-1">
                    <b-col xs="2">
                        <b-dropdown variant="info" right text="Tipo de Documento">
                            <b-dropdown-item>Cedula de Ciudadania</b-dropdown-item>
                            <b-dropdown-item>Cedula extrangera</b-dropdown-item>
                            <b-dropdown-item>Pasaporte</b-dropdown-item>
                        </b-dropdown>
                    </b-col>
                    <b-col xs="10">
                        <b-form-input id="input-default"></b-form-input>
                    </b-col>
                    <b-col xs="2">
                        <label for="input-default">Numero de Documento:</label>
                    </b-col>
                    <b-col xs="10">
                        <b-form-input id="input-default"></b-form-input>
                    </b-col>
                </b-row>
                <b-row class="my-1">
                    <b-col xs="2">
                        <label for="input-default">Direccion:</label>
                    </b-col>
                    <b-col xs="10">
                        <b-form-input id="input-default" placeholder=""></b-form-input>
                    </b-col>
                    <b-col xs="2">
                        <b-dropdown variant="info" right text="Sexo">
                            <b-dropdown-item>Masculino</b-dropdown-item>
                            <b-dropdown-item>Femenino</b-dropdown-item>
                        </b-dropdown>
                    </b-col>
                    <b-col xs="10">
                        <b-form-input id="input-default" placeholder=""></b-form-input>
                    </b-col>
                </b-row>
                <b-row class="my-1">
                    <b-col xs="2">
                        <label for="input-default">Fecha de Nacimiento:</label>
                    </b-col>
                    <b-col xs="2">
                        <b-dropdown variant="info" right text="Dia">
                            <b-dropdown-item></b-dropdown-item>
                            <b-dropdown-item></b-dropdown-item>
                        </b-dropdown>
                    </b-col>
                    <b-col xs="10">
                        <b-form-input id="input-default" placeholder=""></b-form-input>
                    </b-col>
                    <b-col xs="2">
                        <b-dropdown variant="info" right text="Mes">
                            <b-dropdown-item></b-dropdown-item>
                            <b-dropdown-item></b-dropdown-item>
                        </b-dropdown>
                    </b-col>
                    <b-col xs="10">
                        <b-form-input id="input-default" placeholder=""></b-form-input>
                    </b-col>
                    <b-col xs="2">
                        <b-dropdown variant="info" right text="Año">
                            <b-dropdown-item></b-dropdown-item>
                            <b-dropdown-item></b-dropdown-item>
                        </b-dropdown>
                    </b-col>
                    <b-col xs="10">
                        <b-form-input id="input-default" placeholder=""></b-form-input>
                    </b-col>
                </b-row>
                <b-row class="my-1">
                    <b-col xs="2">
                        <b-dropdown variant="info" right text="Ciudad/Municipio">
                            <b-dropdown-item>Cedula de Ciudadania</b-dropdown-item>
                            <b-dropdown-item>Cedula extrangera</b-dropdown-item>
                            <b-dropdown-item>Pasaporte</b-dropdown-item>
                        </b-dropdown>
                    </b-col>
                    <b-col xs="10">
                        <b-form-input id="input-default"></b-form-input>
                    </b-col>
                    <b-col xs="2">
                        <label for="input-default">Numero de Celular:</label>
                    </b-col>
                    <b-col xs="10">
                        <b-form-input id="input-default"></b-form-input>
                    </b-col>
                </b-row>



            </b-container>
        </div>
    </div>
</template>
 
 
<script>

</script>
<style>
      .container{
        width:90% ;
        height: 90%;
        
    }
    .title{
        background-color:hsl(0, 0%, 100%);
        font-family: 'Times New Roman', Times, serif;
        text-align: left;
        
    }
   
</style>