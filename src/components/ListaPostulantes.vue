<template>
    <div>
        <div class="container">
        <div class="row">
            <h2>CAMELLAPP</h2>
  <div class="col-1"></div>
    <div class="col-8">
        <div>
            <b-input-group>
              <template #append>
                <b-button><b-icon icon="search"></b-icon></b-button>                   
                </template>
              <b-form-input></b-form-input>
              <template #prepend>
                <b-dropdown text="Categorias">
                  <b-dropdown-item>Ayudante General</b-dropdown-item>
                  <b-dropdown-item>Oficial de construccion</b-dropdown-item>
                  <b-dropdown-item>Soldadura</b-dropdown-item>
                  <b-dropdown-item>Pintado en general</b-dropdown-item>
                  <b-dropdown-item>Plomeria</b-dropdown-item>
                  <b-dropdown-item>Jardineria</b-dropdown-item>
                  <b-dropdown-item>Otros Servicios</b-dropdown-item>
                </b-dropdown>
              </template>
            </b-input-group>
          </div>
          <br>
          <!--aqui termina la barra de busqueda--> 
    </div>
    <div class="col-3">
        <b-button variant="outline-success">Nueva Oferta<b-icon icon="plus"></b-icon></b-button>
    </div>
        </div><br>
        <div class="row d-flex justify-content-evenly">  
<!--start card-->
            <b-card
            title="Ayudante General"
            img-src="https://st3.depositphotos.com/6582994/13117/v/450/depositphotos_131177892-stock-illustration-user-icon-in-trendy-flat.jpg"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 22rem;"
            class="mb-2 m-1"
            >
            <b-card-text>Se requiere ayudante de construccion por 6 meses</b-card-text>
            <b-card-text>Pago: $1'000.000</b-card-text>
            <b-button href="#" variant="outline-primary" class="m-1">Contratar</b-button>
            <b-button href="PerfilPostulanteView" variant="primary" class="m-1">Ver Perfil</b-button>
            </b-card>
<!--end card-->
<!--start card-->
            <b-card
            title="Pintor"
            img-src="https://st3.depositphotos.com/6582994/13117/v/450/depositphotos_131177892-stock-illustration-user-icon-in-trendy-flat.jpg"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 22rem;"
            class="mb-2 m-1"
            >
            <b-card-text>Empresa requiere personal para el area de pintura por tiempo indefinido</b-card-text>
            <b-card-text>Pago: $1'000.000</b-card-text>
            <b-button href="#" variant="outline-primary" class="m-1">Contratar</b-button>
            <b-button href="#" variant="primary" class="m-1">Ver Perfil</b-button>
          </b-card>
<!--end card-->
<!--start card-->
          <b-card
          title="Electricista"
          img-src="https://st3.depositphotos.com/6582994/13117/v/450/depositphotos_131177892-stock-illustration-user-icon-in-trendy-flat.jpg"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 22rem;"
          class="mb-2 m-1"
          >
          <b-card-text>Se requiere electricista para obra de construccion por 8 meses</b-card-text>
          <b-card-text>Pago: $2'000.000</b-card-text>
                      <b-button href="#" variant="outline-primary" class="m-1">Contratar</b-button>
            <b-button href="#" variant="primary" class="m-1">Ver Perfil</b-button>
          </b-card>
<!--end card-->
<!--start card-->
          <b-card
          title="Soldador"
          img-src="https://st3.depositphotos.com/6582994/13117/v/450/depositphotos_131177892-stock-illustration-user-icon-in-trendy-flat.jpg"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 22rem;"
          class="mb-2 m-1"
          >
          <b-card-text>Busco soldador para instalar puertas metalicas</b-card-text>
          <b-card-text>Pago: $80.000 x dia</b-card-text>
          <b-button href="#" variant="outline-primary" class="m-1">Contratar</b-button>
          <b-button href="#" variant="primary" class="m-1">Ver Perfil</b-button>          
          </b-card>
<!--end card-->
<!--start card-->
          <b-card
          title="Plomero"
          img-src="https://st3.depositphotos.com/6582994/13117/v/450/depositphotos_131177892-stock-illustration-user-icon-in-trendy-flat.jpg"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 22rem;"
          class="mb-2 m-1"
          >
          <b-card-text>solicito a una persona para instalar dos baños</b-card-text>
          <b-card-text>Pago: a convenir</b-card-text>
                      <b-button href="#" variant="outline-primary" class="m-1">Contratar</b-button>
            <b-button href="#" variant="primary" class="m-1">Ver Perfil</b-button>
          </b-card>
<!--end card-->
<!--start card-->
            <b-card
            title="Soldador"
            img-src="https://st3.depositphotos.com/6582994/13117/v/450/depositphotos_131177892-stock-illustration-user-icon-in-trendy-flat.jpg"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 22rem;"
            class="mb-2 m-1"
            >
            <b-card-text>Se requiere soldador por tiempo indefinido</b-card-text>
            <b-card-text>Pago: $1'000.000</b-card-text>
                        <b-button href="#" variant="outline-primary" class="m-1">Contratar</b-button>
            <b-button href="#" variant="primary" class="m-1">Ver Perfil</b-button>
            </b-card>
<!--end card-->
<!--start card-->
            <b-card
            title="Jardinero"
            img-src="https://st3.depositphotos.com/6582994/13117/v/450/depositphotos_131177892-stock-illustration-user-icon-in-trendy-flat.jpg"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 22rem;"
            class="mb-2 m-1"
            >
            <b-card-text>Necesito un jardinero para cortar el pasto en un lote de 100m2</b-card-text>
            <b-card-text>Pago: $a convenir</b-card-text>
                        <b-button href="#" variant="outline-primary" class="m-1">Contratar</b-button>
            <b-button href="#" variant="primary" class="m-1">Ver Perfil</b-button>
            </b-card>
<!--end card-->
<!--start card-->
            <b-card
            title="Ayudante General "
            img-src="https://st3.depositphotos.com/6582994/13117/v/450/depositphotos_131177892-stock-illustration-user-icon-in-trendy-flat.jpg"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 22rem;"
            class="mb-2 m-1"
            >
            <b-card-text>Se requieren 5 ayudantes de construccion por 4 meses</b-card-text>
            <b-card-text>Pago: $1'000.000</b-card-text>
                        <b-button href="#" variant="outline-primary" class="m-1">Contratar</b-button>
            <b-button href="#" variant="primary" class="m-1">Ver Perfil</b-button>
            </b-card>
<!--end card--></div>
</div>
    </div>
</template>
<script>
export default{
  name:'ListaPostulantes',
  data(){
    return{
    }
  },
  components:{
  },
}
</script>