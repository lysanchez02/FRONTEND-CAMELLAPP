<template>

    <div>
        <div class="wrapper">
            
            <div class="formContent">
                <div >

                    <img src="@/assets/logocamellapp.png" >
                    <p>por favor ingrese el correo y la contraseña!</p>
                    
                    <div >
                        <input v-model="Correo" type="email" id="typeEmailX" class="form-control form-control-lg" />
                        <label  for="typeEmailX">Correo Electronico</label>
                    </div><br>

                    <div >
                        <input v-model="Password"  type="password" id="typePasswordX" class="form-control form-control-lg" />
                        <label for="typePasswordX">Contraseña</label>
                    </div>

                    <p class="small mb-5 pb-lg-2"><a  href="#!">olvide mi contraseña?</a></p>
                    <button class="boton" >INGRESAR</button><br><br>
                    <button class="boton" >CREAR NUEVA CUENTA</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            Correo:null,
            Password:null,
        }
    }

}

</script>


<style>
.wrapper {
    background-color: rgb(0, 0, 0); 
    width: 500px;
    margin: auto;
    display: flex;
    justify-content: center;
    padding: 50px;
    border: solid 2px;
    font-family:Arial, Helvetica, sans-serif;
    border-radius: 15px;
    box-shadow: 0px 3px 10px 5px rgb(29, 173, 235);
    font-size: 15px;
}

.formContent {
    height: 600px;
    width: 100%;
    display: flex;
    border: solid 2px;
    justify-content: center;
    padding: 20px;
    max-width: 480px;
    background: rgb(255, 255, 255);
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
    color: black;
    border-radius: 12px;
    box-shadow: 0px 1px 20px 20px rgba(255, 3, 15, 0.2);
}



.boton {
    background-color: rgb(255, 255, 255);
    border: 2px;
    color: rgb(0, 0, 0);
    padding: 8px 25px;
    text-align: center;
    display: inline-block;
    font-size: 13px;
    cursor: pointer;
    border: solid 0.2px;
    border-radius: 8px;
}
.boton:hover {background-color: #1bcb1e;}
</style>
