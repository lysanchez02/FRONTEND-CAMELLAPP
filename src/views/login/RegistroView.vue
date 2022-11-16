<template>
    <div class="container4">
        <div class="container">
            <b-row class="my-1">
                <b-col sm="8"> <img class="img1" src="@/assets/logocamellapp.png" alt="">
                    <h3>Formulario de Registro</h3>
                </b-col>
            </b-row><br>

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
            <b-row class="my-1">
                <b-col sm="6">
                    <label for="input-small">Primer Nombre:</label>
                    <b-form-input class="form-control" placeholder="digite su primer nombre" id="Nombre" name="P_Nombre"
                        v-model="Registro.p_Nombre"></b-form-input>
                </b-col>
                <b-col sm="6">
                    <label for="input-small">Segundo Nombre:</label>
                    <b-form-input class="form-control" placeholder="digite su segundo nombre" id="S_Nombre"
                        name="S_Nombre" v-model="Registro.S_Nombre"></b-form-input>
                </b-col>
            </b-row><br>

            <b-row class="my-1">
                <b-col sm="6">
                    <label for="input-default">Primer Apellido:</label>
                    <b-form-input class="form-control" id="Apellido" name="Apellido"
                        placeholder="digite su primer apellido" v-model="Registro.P_Apellido"></b-form-input>
                </b-col>
                <b-col sm="6">
                    <label for="input-default">Segundo Apellido:</label>
                    <b-form-input class="form-control" id="S_Apellido" name="S_Apellido"
                        placeholder="digite su segundo apellido" v-model="Registro.S_Apellido"></b-form-input>
                </b-col>
            </b-row><br>
            <b-row class="my-1">
                <b-col sm="6">
                    <label for="Email1">Correo Electronico :</label>
                    <b-form-input class="form-control" type="email" id="Email1" aria-describedby="emailHelp"
                        placeholder="Enter email" v-model="Registro.Correo"></b-form-input>
                </b-col>
                <b-col sm="6">
                    <label for="input-default">Edad:</label>
                    <b-form-input class="form-control" id="edad" name="edad" placeholder="digite su edad"
                        v-model="Registro.Edad">
                    </b-form-input>
                </b-col>
            </b-row><br>
            <b-row class="my-1">
                <b-col xs="2">
                    <label for="input-default">Contraseña:</label>
                    <b-form-input class="form-control" id="input-default" placeholder="digite su contraseña"
                        v-model="Registro.Contraseña">
                    </b-form-input>
                </b-col>
                <b-col xs="2">
                    <label for="input-default">Confirmar Contraseña:</label>
                    <b-form-input class="form-control" id="input-default" placeholder="confirmar su contraseña"
                        v-model="Registro.Confirmar_contrasena">
                    </b-form-input>
                </b-col>
            </b-row><br>
            <b-row class="my-1">
                <b-col lg="4">
                    <label for="input-default">Tipo de Documento</label>
                    <select class="form-control" v-model="Registro.T_Documento">
                        <option>Tipo de Documento</option>
                        <option>Cedula de Ciudania</option>
                        <option>numero de pasaporte</option>
                    </select>
                </b-col>
                <b-col xs="10">
                </b-col>
                <b-col sm="6">
                    <label for="input-default">Numero de Documento:</label>
                    <b-form-input class="form-control" id="input-default" v-model="Registro.N_Documento"></b-form-input>
                </b-col>
            </b-row><br>
            <b-row class="my-1">
                <b-col xs="2">
                    <label for="input-default">Direccion:</label>
                    <b-form-input class="form-control" id="input-default" placeholder="" v-model="Registro.Direccion">
                    </b-form-input>
                </b-col>
                <b-col sm="6">
                    <label for="input-default">Sexo:</label>
                    <b-row>
                        <b-col sm="4">
                            <b-form-radio>Hombre</b-form-radio>
                        </b-col>
                        <b-col sm="4">
                            <b-form-radio>Mujer</b-form-radio>
                        </b-col>
                    </b-row>
                </b-col>
            </b-row><br>
            <b-row class="my-1">
                <b-col sm="10">
                    <label for="input-default">Fecha de Nacimiento:</label>
                    <b-input-group class="mb-6">
                        <b-form-input class="form-control" id="example-input" v-model="Registro.F_Nacimiento"
                            type="text" placeholder="AAAA-MM-DD" autocomplete="off">
                        </b-form-input>
                        <b-input-group-append>
                            <b-form-datepicker v-model="Registro.F_Nacimiento" button-only right locale="en-es"
                                aria-controls="example-input" @context="onContext"></b-form-datepicker>
                        </b-input-group-append>
                    </b-input-group>
                </b-col>
            </b-row><br>
            <b-row class="my-1">
                <b-col xs="2">
                    <label for="input-default">Ciudad/Municipio</label>
                    <select class="form-control ">
                        <option>Ciudad/Municipio</option>
                        <option>Popayan</option>
                        <option>Piendamo</option>
                        <option>Rosas</option>
                    </select>
                </b-col>
                <b-col xs="2">
                    <label for="input-default">Numero de Celular:</label>
                    <b-form-input class="form-control" id="input-default" v-model="Registro.Celular"></b-form-input>
                </b-col>
            </b-row><br>
            <div class="boton2  "  >
                <b-button   @click="Cancelar()">Cancelar</b-button>
                <b-button   @click="Siguiente()">Siguiente</b-button>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    name: 'RegistroView',
    data() {
        return {
            Registro: {
                p_Nombre: null,
                S_Nombre: null,
                P_Apellido: null,
                S_Apellido: "",
                Correo: null,
                Edad: null,
                Contraseña: null,
                Confirmar_contrasena: null,
                T_Documento: null,
                N_Documento: null,
                Direccion: null,
                F_Nacimiento: null,
                Celular: null,
            },
        }
    },

    methods: {
        
        onContext(ctx) {
            // The date formatted in the locale, or the `label-no-date-selected` string
            this.formatted = ctx.selectedFormatted
            // The following will be an empty string until a valid date is entered
            this.selected = ctx.selectedYMD
        },
        Cancelar() {
            this.$router.push("/");
        },
        Siguiente() {
            this.$router.push("/ExperienciaView");
        }
    }
}
</script>
<style>
.container4{
    width: 50em;
}
.container {
    width: 40em;
    background-color: rgb(255, 255, 255);
    border: 2px solid #ccc;
    border-radius: 12px;
    font-size: 15px;
    text-align: left;
    font-family: Arial, Helvetica, sans-serif;
    color: rgb(0, 0, 0);
    background-color: #ffffff;
}

.title {

    font-family: 'Times New Roman', Times, serif;
    text-align: left;
}

.boton2 {
    background-color: rgb(255, 255, 255);
    display: flex;
    justify-content: center;
}

.form-control {
    max-width: 300px;
    height: 40px;
}

.container4 {
    width: 50em;
    height: 80em;
    position: absolute;
    top: 20%;
    left: 20%;
    border: #ffffff;
}
</style>




