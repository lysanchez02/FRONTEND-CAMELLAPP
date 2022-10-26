<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> 
      <br>
      <router-link to="/about">About</router-link>
       <br>
      <router-link to="/CategoriaView">CategoriaView</router-link>
       <br>
      <router-link to="/ObraGrisView">ObraGrisView</router-link>
       <br>
       <router-link to="/ObraBlancaView">ObraBlancaView</router-link>
       <br>
       <router-link to="/ObraNegraView">ObraNegraView</router-link>
       <br>
    </nav>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
