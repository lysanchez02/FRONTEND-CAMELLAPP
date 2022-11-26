<template>
    <div class="wrapper">
        
        <div class="formContent">
            <div >
                <img class="img1" src="@/assets/logocamellapp.png" >
                <p>por favor ingrese el correo y la contraseña!</p>
                
                <div >
                    <input v-model="Correo" type="email" id="typeEmailX" class="form-control form-control-lg" />
                    <label  for="typeEmailX">Correo Electronico</label>
                </div><br>

                <div >
                    <input v-model="Password"  type="password" id="typePasswordX" class="form-control form-control-lg" />
                    <label for="typePasswordX">Contraseña</label>
                </div>

                <p class="small mb-5 pb-sm-2"><a  href="#!">olvide mi contraseña?</a></p>

                <button class="boton" >INGRESAR</button>
                <p class="small mb-5 pb-lg-2">¿Aun no tienes cuenta?<a  href="#!" @click="crear()">Crea una</a></p>
            </div>
        </div>
    </div>

</template>
<script>
export default {
name: 'LoginView',
data(){
    return{
        Correo:null,
        Password:null,
    }
},
methods: {
    crear(){
        this.$router.push("/RegistroView");
    }
}
}
</script>
<!--<style>
.wrapper {
width: 400px;
height: 500px;
margin: auto;
display: flex;
justify-content: center;
padding: 50px;
font-family:Arial, Helvetica, sans-serif;
border-radius: 15px;
box-shadow: 0px 3px 10px 5px rgb(29, 173, 235);
font-size: 15px;
}
.formContent {
height: 500px;
width: 95%;
display: flex;
justify-content: center;
padding: 10px;
max-width: 480px;
font-family: Arial, Helvetica, sans-serif;
text-align: center;
border-radius: 12px;

}
.boton {
background-color: rgb(255, 255, 255);
padding: 8px 25px;
text-align: center;
display: inline-block;
font-size: 10px;
cursor: pointer;
border-radius: 8px;
width: 100px;
height: 30px;
}
.boton:hover {background-color: #1bcb1e;}
.img{
width: 20px;
height: 20px;
}
</style>
-->