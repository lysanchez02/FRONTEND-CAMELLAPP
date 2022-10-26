<template>

    <div>
        <div>
          Logo
        </div>
        <div class="wrapper">
            <div class="formContent">
                <div class="fadein">
                    <h1>INICIAR SESION EN CAMELLAPP</h1>
                </div>
                <br>
                <div>
                    <b-row class="my-1">

                        <label for="input-small">Usuario:</label>

                        <b-col sm="10">
                            <b-form-input id="input-small" size="sm" placeholder="Ingrese su usuario"></b-form-input>
                        </b-col>
                    </b-row>

                    <b-row class="my-1">
                        <label for="input-small">Contraseña:</label>
                        <b-col sm="10">
                            <b-form-input id="input-small" size="sm" placeholder="Ingrese su contraseña"></b-form-input>
                        </b-col>
                    </b-row>
                    <div>
                        <b-link href="#foo"> Olvide mi Contraseña?</b-link>
                    </div>
                    <br>
                     <div class="boton">
                    <b-button pill variant="outline-success">Ingresar</b-button>

                    <b-button pill variant="outline-success">Crear Nueva Cuenta</b-button>
                    </div>
                </div>

            </div>

        </div>
    </div>
</template>
<script>

</script>


<style>
.wrapper {
    width: 580px;
	margin-left: auto;
	margin-right: auto;

    
    min-height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px;
    border: solid 2px;

}

.formContent {

    padding: 30px;
    width: 90%;
    max-width: 480px;
    background: rgb(255, 255, 255);
    text-align: left;
    -webkit-box-shadow: 0 30px 60px 0 rgb(15, 14, 14)(0, 0, 0, 0, 3);
    border-right: 10px 10px 10px 10px;
}

.fadein {
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif, Times, serif;
    text-align: center;
}
.boton{
    justify-content: center;
}
</style>
