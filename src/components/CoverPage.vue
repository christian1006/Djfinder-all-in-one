<template>
  <div class="lol">


    
    <section class="main">
        <div class="container">
        <h1 class="text-white">DJ's for hire!</h1>
        <p class=" text-white" style="font-size:20px">Considering setting up a party and wondering where to find a DJ? 
            Look no further! DJFinder lists all the available artists in the Benelux area for your party. 
            Talk directy to the DJ's and book them for your party today!</p>
        
         <div> 
          <router-link type="button" class="btn btn-unique btn-lg mx-2 " to="/cards">Search</router-link>

          <router-link type="button" class="btn btn-unique btn-lg mx-2" to="/register">Register</router-link>
         </div>
        
        </div>
    </section>
    

  </div>

</template>

<script>
export default {
    
}
</script>

<style>

.lol {
  background: url('../assets/djd.jpg') no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  background-size: cover;
  -o-background-size: cover;
  height: 40rem;
  width: 100%;
  position: absolute;
}

.main {
    position: relative;
    margin: auto;
    margin-top: 10%;
    vertical-align: middle;
    width: 50%;
    text-align: center
}


</style>
