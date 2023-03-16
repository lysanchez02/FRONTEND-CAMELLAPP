<template>
    <div class="container">
        <NavBarLogin/>
         
        <div class="row">
            <div class="col-3">

                <b-card no-body style="max-width: 20rem; ;"
                    img-src="https://st3.depositphotos.com/6582994/13117/v/450/depositphotos_131177892-stock-illustration-user-icon-in-trendy-flat.jpg"
                    img-alt="Image" img-top>
                    <template #header>
                        <h4 class="mb-0">Leyder Yesid Sanchez Benachi</h4>
                    </template>
                    <b-card-body>
                        <b-card-title>Ayudante Construccion</b-card-title>
                        <b-card-sub-title class="mb-2">Popayan - Cauca</b-card-sub-title>
                    </b-card-body>
                    <b-list-group flush>
                        <b-list-group-item button @click="show = 'EditarPerfil'">Actualizar Datos
                            Personales</b-list-group-item>
                        <b-list-group-item button @click="show = 'Experiencia'">Mi Experiencia</b-list-group-item>
                        <b-list-group-item button @click="show = 'Ofertas'">Ofertas de Empleo</b-list-group-item>
                        <b-list-group-item>Mis Empleos</b-list-group-item>
                    </b-list-group>

                    <b-card-body>
                        <h6>Contacto:</h6>
                        <a href="#" class="card-link">Facebook</a>
                        <a href="#" class="card-link">Whatsapp</a>
                    </b-card-body>

                   
                </b-card>

            </div>
            <div class="col-8">
                <b-card>
                    <b-card-img src="https://help.fromdoppler.com/wp-content/uploads/2016/12/Alto_y_ancho-1024x531.png" img-top class="w-20"></b-card-img>
                    <br> <br>
                    <div class="row d-flex">
                        <div class="col-2">
                            <label for="">Titulo</label>
                        </div>
                        <div class="col-7">
                            <input class="from_control" placeholder="titulo">
                        </div>
                    </div>
                    <br>
                    <div class="row d-flex">
                        <div class="col-4">
                            <label for="">Descripcion Del Trabajo</label>
                        </div>
                        <div class="col-7">
                            <b-form-textarea placeholder="se permite al menos 500 caracteres" rows="3"> </b-form-textarea>
                        </div>
                    </div>
                    <br>
                    <div class="row d-flex">
                        <div class="col-2">
                            <label for="">Pago</label>
                        </div>
                        <div class="col-7">
                            <input class="from_control" placeholder="$">
                        </div>
                    </div>
                    <br>
                    <div class="row d-flex">
                        <div class="col-2">
                            <label for="">Fecha de Inicio del trabajo</label>
                        </div>
                        <div class="col-4">
                            <b-form-datepicker v-model="value" :min="min" :max="max" locale="es"></b-form-datepicker>
                        </div>
                        <div class="col-2">
                            <label for="">Fecha de Finalizacion</label>
                        </div>
                        <div class="col-4">
                            <b-form-datepicker v-model="value" :min="min" :max="max" locale="es"></b-form-datepicker>
                        </div>
                    </div>
                    <br>

                    <b-button href="#" variant="primary" class="m-1"><b-icon icon="check2"></b-icon> Publicar
                        Oferta</b-button>
                    <b-button href="#" variant="danger" class="m-1"><b-icon icon="x-circle"></b-icon> Cancelar</b-button>
                </b-card>

            </div>


        </div>
    </div>
</template>
  
<script>
import NavBarLogin from "@/components/NavBarLogin.vue";

export default {
    
    name: 'MiPerfilPostulante',
    data() {
        return {

        }
    },
    components: {
     NavBarLogin
    },

}
</script>