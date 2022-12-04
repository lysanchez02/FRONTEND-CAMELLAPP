
  <template>
    
    
    <div>
      <b-navbar class="navbar" type="dark" variant="primary">
      <b-navbar-nav>
        <div class="d-flex justify-content-end">
        </div>
        <div class="d-flex justify-content-end">


        </div>
        <img class="img1" src="@/assets/logocamellapp.png">

        <nav class="d-flex align-items-center">
           
  <form class="container-fluid justify-content-start">
    <b-button variant="danger">Inicio</b-button>
    
  </form>
</nav>
<nav class="d-flex align-items-right">
  
           
           <form class="container-fluid justify-content-start">
             
             <b-button variant="success">Salir</b-button>
             
           </form>
         </nav>
      </b-navbar-nav>
      </b-navbar>
    
    
      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
        <b-form-group
          id="input-group-1"
          label="Nombre:"
          label-for="input-1"
          
        >
          <b-form-input
            id="input-1"
            v-model="form.email"
            type="text"
            placeholder="Digite su nombre"
            required
          ></b-form-input>
        </b-form-group>
        <br>
        <b-form-group
          id="input-group-1"
          label="Apellido:"
          label-for="input-1"
        
        >
          <b-form-input
            id="input-1"
            v-model="form.email"
            type="text"
            placeholder="Digite su apellido"
            required
          ></b-form-input>
        </b-form-group>
         <br>
        <b-form-group id="input-group-2" label="Correo" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="form.correo"
            placeholder="Digite su correo"
            required
          ></b-form-input>
        </b-form-group>
        <br>
        <b-form-group id="input-group-3" label="Contraseña" label-for="input-3">
          <b-form-input
            id="input-3"
            v-model="form.contraseña"
            placeholder="Digite su contraseña"
            required
          ></b-form-input>
          <br>
        </b-form-group>
        <b-form-group id="input-group-4" label="Confirme su contraseña" label-for="input-4">
          <b-form-input
            id="input-4"
            v-model="form.name"
            placeholder="Confirme su contraseña"
            required
          ></b-form-input>
        </b-form-group>
  
        <b-form-group id="input-group-3" label="Edad" label-for="input-3">
          <b-form-select
            id="input-3"
            v-model="form.numbers"
            :options="foods"
            required
          ></b-form-select>
        </b-form-group>
        <br>
         <b-form-group id="input-group-5" label="Tipo de Documento" label-for="input-5">
          <b-form-select
            id="input-5"
            v-model="form.numbers"
            :options="cc"
            required
          ></b-form-select>
        </b-form-group>
        <br>
        <b-form-group id="input-group-6" label="Numero de documento" label-for="input-6">
          <b-form-input
            id="input-6"
            v-model="form.documento"
            placeholder="Digite su numero de documento"
            required
          ></b-form-input>
        </b-form-group>
        <br>
        <b-form-group id="input-group-7" label="Direccion" label-for="input-7">
          <b-form-input
            id="input-7"
            v-model="form.direccion"
            placeholder="Digite su direccion"
            required
          ></b-form-input>
        </b-form-group>
        <br>
        <b-form-group id="input-group-8" label="Sexo" label-for="input-8">
          <b-form-select
            id="input-8"
            v-model="form.sexo"
            :options="sexo"
            required
          ></b-form-select>
        </b-form-group>
        <br>
        <h1>Fecha de Nacimiento</h1>
        <b-form-group id="input-group-8" label="Dia" label-for="input-9">
          <b-form-select
            id="input-9"
            typeof="data"
            v-model="form.dia"
            :options="sexo"
            required
          ></b-form-select>
        </b-form-group>
        

  
        <b-form-group id="input-group-4" v-slot="{ ariaDescribedby }">
          <b-form-checkbox-group
            v-model="form.checked"
            id="checkboxes-4"
            :aria-describedby="ariaDescribedby"
            br

          >
            <!-- <b-form-checkbox value="">Acepto terminos y condiciones</b-form-checkbox> -->
            <br>
            <!-- <b-form-checkbox value="that">Check that out</b-form-checkbox> -->
          </b-form-checkbox-group>
        </b-form-group>
  
        <b-button type="submit" variant="primary">INICIAR</b-button>
        <!-- <b-button type="reset" variant="danger">Reset</b-button> -->
          
      </b-form>
      <b-card class="mt-3" header="Form Data Result">
        <pre class="m-0">{{ form }}</pre>
      </b-card>
    </div>
  </template>
  
  <script>
    export default {
      data() {
        return {
          form: {
            email: '',
            name: '',
            food: null,
            checked: []
          },
          foods: [{ text: 'Select One', value: null }, '18', '19', '20', '21', '22','23','24','25','26','27','28','29','30'],
          show: true,
          cc: [{ text: 'Select One', value: null }, 'CC', 'TI', 'Cedula Extranjera'],
          
          sexo: [{ text: 'Select One', value: null }, 'Masculino', 'Femenino', 'Prefiere no decir'],
        }
      },
      methods: {
        onSubmit(event) {
          event.preventDefault()
          alert(JSON.stringify(this.form))
        },
        onReset(event) {
          event.preventDefault()
          // Reset our form values
          this.form.nombre = ''
          this.form.apellido = ''
          this.form.edad = null
          this.form.iniciar = []
          // Trick to reset/clear native browser form validation state
          this.show = false
          this.$nextTick(() => {
            this.show = true
          })
        }
      }
    }
  </script>
  