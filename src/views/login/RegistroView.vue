<template>
    <div>
        <div class="title" lg="12">
            <b-row class="my-1">
                <b-col sm="5"> <img src="@/assets/logocamellapp.png" alt="">
                    <h1>Formulario de Registro</h1>
                </b-col>
            </b-row>
        </div>
        <div class="container">
            <b-container fluid>
                <b-row class="my-1">
                    <b-col sm="2">
                        <label for="input-small">Tipo de Persona</label>
                    </b-col>
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
                    <b-col sm="6">
                        <label for="input-small">Primer Nombre:</label>
                        <b-form-input  placeholder="digite su primer nombre" id="Nombre" name="P_Nombre"
                            v-model="login.p_Nombre"></b-form-input>
                    </b-col>
                    <b-col sm="6">
                        <label for="input-small">Primer Nombre:</label>
                        <b-form-input  placeholder="digite su segundo nombre" id="S_Nombre" name="S_Nombre"
                            v-model="login.S_Nombre"></b-form-input>
                    </b-col>
                </b-row><br>

                <b-row class="my-1">
                    <b-col sm="6">
                        <label for="input-default">Primer Apellido:</label>
                        <b-form-input id="Apellido" name="Apellido" placeholder="digite su primer apellido"
                            v-model="login.Apellido"></b-form-input>
                    </b-col>
                    <b-col sm="6">
                        <label for="input-default">Segundo Apellido:</label>
                        <b-form-input id="S_Apellido" name="S_Apellido" placeholder="digite su segundo apellido"
                            v-model="login.S_Apellido"></b-form-input>
                    </b-col>
                </b-row><br>
                <b-row class="my-1">
                    <b-col sm="6">
                        <label for="Email1">Correo Electronico :</label>
                        <b-form-input type="email" class="form-control" id="Email1" aria-describedby="emailHelp"
                            placeholder="Enter email"></b-form-input>
                    </b-col>
                    <b-col sm="5">
                        <label for="input-default">Edad:</label>
                        <b-form-input id="edad" name="edad" placeholder="digite su edad" v-model="login.Edad">
                        </b-form-input>

                    </b-col>
                </b-row><br>
                <b-row class="my-1">
                    <b-col xs="2">
                        <label for="input-default">Contraseña:</label>
                        <b-form-input id="input-default" placeholder="digite su contraseña" v-model="text">
                        </b-form-input>
                    </b-col>
                    <b-col xs="2">
                        <label for="input-default">Confirmar Contraseña:</label>
                        <b-form-input id="input-default" placeholder="confirmar su contraseña" v-model="text">
                        </b-form-input>
                    </b-col>
                </b-row><br>
                <b-row class="my-1">
                    <b-col lg="5">
                        <label for="input-default">Tipo de Documento</label>
                        <select class="form-control form-control-sl">
                            <option>Tipo de Documento</option>
                            <option>Cedula de Ciudania</option>
                            <option>numero de pasaporte</option>
                        </select>
                    </b-col>
                    <b-col xs="10">
                    </b-col>
                    <b-col sm="6">
                        <label for="input-default">Numero de Documento:</label>
                        <b-form-input id="input-default" v-model="text"></b-form-input>
                    </b-col>
                </b-row><br>
                <b-row class="my-1">
                    <b-col xs="2">
                        <label for="input-default">Direccion:</label>
                        <b-form-input id="input-default" placeholder="" v-model="text"></b-form-input>
                    </b-col>
                    <b-col sm="6">
                        <label  for="input-default">Sexo:</label>
                        <b-row>
                        <b-col sm="4">
                            <b-form-radio>hombre</b-form-radio>
                        </b-col>
                        <b-col  sm="4">
                            <b-form-radio>mujer</b-form-radio>
                        </b-col>
                        </b-row>
                    </b-col>
                </b-row><br>
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
                        <b-form-input id="input-default" placeholder="" v-model="text"></b-form-input>
                    </b-col>
                    <b-col xs="2">
                        <b-dropdown variant="info" right text="Mes">
                            <b-dropdown-item></b-dropdown-item>
                            <b-dropdown-item></b-dropdown-item>
                        </b-dropdown>
                    </b-col>
                    <b-col xs="10">
                        <b-form-input id="input-default" placeholder="" v-model="text"></b-form-input>
                    </b-col>
                    <b-col xs="2">
                        <b-dropdown variant="info" right text="Año">
                            <b-dropdown-item></b-dropdown-item>
                            <b-dropdown-item></b-dropdown-item>
                        </b-dropdown>
                    </b-col>
                    <b-col xs="10">
                        <b-form-input id="input-default" placeholder="" v-model="text"></b-form-input>
                    </b-col>
                </b-row><br>
                <b-row class="my-1">
                    <b-col xs="2">
                        <label for="input-default">Ciudad/Municipio</label>
                        <select class="form-control form-control-sl">
                            <option>Ciudad/Municipio</option>
                            <option>Popayan</option>
                            <option>Piendamo</option>
                            <option>Rosas</option>

                        </select>
                    </b-col>
                    <b-col xs="2">
                        <label for="input-default">Numero de Celular:</label>
                        <b-form-input id="input-default" v-model="text"></b-form-input>
                    </b-col>
                </b-row><br>
                 
            </b-container>

            <button class="boton1" >CANCELAR</button>
                <button class="boton2" >SIGUIENTE</button>  
        </div>
    </div>
</template>
<script>

export default {
    data() {
        return {
            login: {
                Nombre: null
            }
        }
    }
}
</script>
<style>
.container {
    width: auto;
    height: 100%;
    padding: 50px;
    background-color: rgb(0, 0, 0);
    margin: 1px 30px;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 12px;
    font-size: 20px;
    align-items: 4px;
    box-shadow: 0px 10px 20px 10px rgb(79, 214, 255);
    text-align: left;
    font-family:Arial, Helvetica, sans-serif;
    color: rgb(255, 255, 255);

}

.title {
    padding: 40px;
    background-color: hsl(0, 0%, 100%);
    font-family: 'Times New Roman', Times, serif;
    text-align: left;
}
.boton2:hover {
    background-color: #08f120;
    
    
    
}
.boton1:hover {
    background-color: #ff0000;
    }
</style>




