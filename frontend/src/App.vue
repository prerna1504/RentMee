<template>
  <div id="app">
    <headerDemo/>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">

    <!-- <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
    <a class="navbar-brand" href="/home">Rent Furniture</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarColor01">
      <ul class="navbar-nav me-auto">
         <li class="nav-item">
          <a class="nav-link btn-outline-success" href="/home">Home
           
          </a>
        </li>
        <li class="nav-item">
         
         <router-link class="nav-link btn-outline-success" to="/login">LOG in</router-link>
       </li>
       <li class="nav-item">
         
         <router-link class="nav-link btn-outline-success" to="/register">Register</router-link>
       </li>
       <li class="nav-item">
         
         <router-link class="nav-link btn-outline-success" to="/products">Products</router-link>
       </li>
      </ul>

      <form class="d-flex ">
      
      <router-link class=" me-sm-2 " to="/cart"><img src="./assets/images/cart.png"></router-link>
      <router-link class="my-2 my-sm-0 " to="/profile"><img src="./assets/images/profile.png"></router-link>
      
      </form>
    </div>
    </div>
    </nav> -->
   <router-view ></router-view>
   <footerDemo/>
  </div>
</template>

<script>
import headerDemo from './components/headerDemo.vue';
import footerDemo from './components/footerDemo.vue';

export default {
  components: { footerDemo, headerDemo },
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
  /* margin-top: 60px; */

}

img {
/* position: absolute; */
right: 0;
top: 0;
height: 30px;
width: 30px;
margin-right: 15px;
margin-top: 8px;
}

.d-flex img{
display: inline-block;
height: 30px;
width: 30px;
background-size: cover;
}

</style>





