<template>
<div id="app">

  <nav class="navbar navbar-dark  pink darken-4 z-depth-3 justify-content-between">
    
      <a class="navbar-brand">
        <router-link to="/"><img src="./assets/logow3.png" style="height:23px"></router-link>
      </a>
     <form class="form-inline my-2 my-lg-0 ml-auto">
        <button class="btn btn-outline-white btn-md my-2 my-sm-0 ml-3" type="submit">About</button>
        <button class="btn btn-outline-white btn-md my-2 my-sm-0 ml-3" type="submit">Contacts</button>
    </form>
      
  </nav>
   

<router-view></router-view>

</div>
</template>

<script>
import store from './store.js'
export default {
 
  data () {
    return {
      store: store
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
 }
</style>
