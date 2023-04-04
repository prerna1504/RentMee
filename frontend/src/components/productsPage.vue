<template>
    <div class="app">
      <link type="stylesheet" href="../assets/css/bootstrap.css">
    <link type="stylesheet" href="../assets/css/style.css">
    <link rel="stylesheet" href="../src/assets/fonts/style.css" />
      <h2>Product Page</h2>
      <div class="row">
        <div class="col-md-4" v-for="product in products" v-bind:key="product.id">
          <div class="card" v-for="image in images" v-bind:key="image.id">
            <img class="card-img-top" v-bind:src="image.imageUrl" alt="Product Image" style="width: 312px; height: 400px;align-items: center;">
            <div class="card-body">
              <h3 class="card-title">{{ product.name }}</h3>
              <p class="card-text">${{ product.price }}/month</p>
              <router-link :to="`/products/${product.id}`">
                <button class="btn btn-primary">View Details</button>
              </router-link>
            </div>
          </div>
        </div>
      </div>

      <!-- <div class="row">
                    <div class="col-lg-3 col-12 col-md-6 col-sm-6 mb-5" >
                        <div class="product" v-for="product in products" v-bind:key="product.id">
                        <div class="product-wrap">
                            <a href="/productdetails"><img  v-bind:src="product.imageUrl" class="img-fluid w-100 mb-3" alt="product-img" /></a>
                        </div>
            
                        <span class="onsale">Sale</span>
            
                        <div class="product-info">
                            <h2 class="product-title h5 mb-0"><a href="#">{{ product.name }}</a></h2>
                            <span class="price">
                                ${{ product.price }}
                            </span>
                            <router-link :to="`/products/${product.id}`">
                              <button class="btn btn-primary">View Details</button>
                            </router-link>
                        </div>
                    </div>
                    </div>
      </div> -->
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import {images} from '../imagedata';
  export default {
    data() {
      return {
        products:[],
        images
      };
    },
    async created() {
    try {
      const response = await axios.get('http://localhost:4242/products');
      this.products = response.data;
    } catch (error) {
      console.log(error);
    }
  },
  }
  </script>
  
  <style>
  </style>
  