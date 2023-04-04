<template>

    <div class="app">
    <link type="stylesheet" href="../assets/css/bootstrap.css">
    <link type="stylesheet" href="../assets/css/style.css">
    <link rel="stylesheet" href="../src/assets/fonts/style.css" />
      <div className="checkout-container">
              <section class="page-header">
              <div class="overly"></div> 	
              <div class="container">
              <div class="row justify-content-center">
                  <div class="col-lg-6">
                  <div class="content text-center">
                      <h1 class="mb-3">Cart</h1>
                      Hath after appear tree great fruitful green dominion moveth sixth abundantly image that midst of god day multiply you’ll which
          
                  <nav aria-label="breadcrumb">
                      <ol class="breadcrumb bg-transparent justify-content-center">
                      <li class="breadcrumb-item"><a href="/">Home</a></li>
                      <li class="breadcrumb-item active" aria-current="page">Cart</li>
                      </ol>
                  </nav>
                  </div>
                  </div>
              </div>
              </div>
          </section>
          
          
          
              <section class="cart shopping page-wrapper">
              <div class="container">
                  <div class="row justify-content-center">
                  <div class="col-lg-12">
                      <div class="product-list">
                          <form class="cart-form">
                              <table class="table shop_table shop_table_responsive cart" cellspacing="0">
                                  <thead>
                                  <tr>
                                      <th class="product-thumbnail"> </th>
                                      <th class="product-name">Product</th>
                                      <th class="product-price">Price</th>
                                      <th class="product-quantity">Months</th>
                                      <th class="product-subtotal">Total</th>
                                      <th class="product-remove"> </th>
                                  </tr>
                                  </thead>
          
                                  <tbody>
                                  <tr class="cart_item" v-for="product in cartItems" :key="product.id">
                                      <td class="product-thumbnail" data-title="Thumbnail">
                                          <a href="/product-single"><img :src="product.imageUrl" class="card-img" alt="Product Image"></a>
                                      </td>
          
                                      <td class="product-name" data-title="Product">
                                          <a href="#">{{ product.name }}</a>
                                      </td>
          
                                      <td class="product-price" data-title="Price">
                                          <span class="amount"><span class="currencySymbol"><pre wp-pre-tag-3=""></pre>
          </span>${{ product.price }}</span>
                                      </td>
                                      <td class="product-quantity" data-title="Quantity">
                                        <!-- <span class="font-weight-bold text-capitalize product-meta-title">Months:</span> -->
                           <select class="form-control">
                               <option value="3">3</option>
                               <option value="6">6</option>
                               <option value="9">9</option>
                               <option value="12">12</option>
                           </select>
                                          <!-- <div class="quantity">
                                              <label class="sr-only" >Quantity</label>
                                              <input type="number" id="qty" class="input-text qty text" step="1" min="0" max="9" title="Qty" size="4"  />
                                          </div> -->
                                      </td>
                                      <td class="product-subtotal" data-title="Total">
                                          <span class="amount">
                                              <span class="currencySymbol">
          <pre wp-pre-tag-3=""></pre>
                                      <!-- </span>${{subtotal }}</span>      -->
                                      </span>${{ product.price }}</span>
                                      </td>
                                      <td class="product-remove" data-title="Remove">
                                          <a href="#" @click="removeFromCart(product)" class="remove" aria-label="Remove this item" data-product_id="30" data-product_sku="">×</a>
                                      </td>
                                  </tr>
                                  </tbody>
                              </table>
                          </form>
                      </div>
                  </div>
                  </div>
                  <div class="row justify-content-end">
                      <div class="col-lg-4">
                      <div class="cart-info card p-4 mt-4">
                          <h4 class="mb-4">Cart totals</h4>
                          <ul class="list-unstyled mb-4">
                              <li class="d-flex justify-content-between pb-2 mb-3">
                              <h5>Subtotal</h5>
                              <span>${{ totalPrice }}</span>
                              </li>
                              <li class="d-flex justify-content-between pb-2 mb-3">
                              <h5>Shipping</h5>
                              <span>Free</span>
                              </li>
                              <li class="d-flex justify-content-between pb-2">
                              <h5>Total</h5>
                              <span>${{ totalPrice }}</span>
                              </li>
                          </ul>
                          <a href="/checkout" class="btn btn-main btn-small">Proceed to checkout</a>
                      </div>
                      </div>
                  </div>
                  </div>
              </section>
          </div>
      <!-- <div class="row">
        <div class="col-md-8 mx-auto">
          <h1>Cart</h1>
          <hr>
          <div v-for="product in cartItems" :key="product.id" class="card mb-3">
            <div class="row no-gutters">
              <div class="col-md-4">
                <img :src="product.imageUrl" class="card-img" alt="Product Image">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h3 class="card-title">{{ product.name }}</h3>
                  <p class="card-text">${{ product.price }}</p>
                  <button class="btn btn-danger" @click="removeFromCart(product)">Remove from cart</button>
                </div>
              </div>
            </div>
          </div>
          <h3 id="total-price" class="text-right">Total: ${{ totalPrice }}</h3>
          <button id="checkout-button" class="btn btn-primary btn-lg btn-block mt-3">Proceed to checkout</button>
        </div>
      </div> -->
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  // import { cartItems } from '@/fake-data';
  export default {
    data() {
      return {
        cartItems: [],
      }
    },
    computed: {
      totalPrice() {
        return this.cartItems.reduce((sum, item) => sum + Number(item.price), 0);
      },
  //     subtotal() {
  //   let sum = 0;
  //   for (const item of this.cartItems) {
  //     sum += Number(item.price) * Number(item.months);
  //   }
  //   return sum;
  // },
    },
    methods: {
      removeFromCart(product) {
        // Remove the product from the cartItems array
        const index = this.cartItems.findIndex((item) => item.id === product.id);
        this.cartItems.splice(index, 1);
      }
    },
    async created(){
      const result = await axios.get('http://localhost:4242/users/12345/cart')
      const cartItems = result.data;
      this.cartItems = cartItems;
    },
    
  }
  </script>
  
  <style scoped>
  h1 {
    border-bottom: 1px solid black;
    margin: 0;
    margin-top: 16px;
    padding: 16px;
  }
  
  #total-price {
    padding: 16px;
  }
  
  #checkout-button {
    width: 100%;
  }
  
  .card-img {
    height: 100%;
    object-fit: cover;
  }
  
  .card {
    margin-bottom: 16px;
  }
  
  .btn-danger {
    color: #fff;
    background-color: #dc3545;
    border-color: #dc3545;
  }
  
  .btn-primary {
    color: #fff;
    background-color: #007bff;
    border-color: #007bff;
  }
  
  .btn-primary:hover {
    color: #fff;
    background-color: #0069d9;
    border-color: #0062cc;
  }
  
  .btn-primary:focus {
    box-shadow: 0 0 0 0.2rem rgba(38, 143, 255, 0.5);
  }
  
  .btn-lg {
    font-size: 1.25rem;
    line-height: 1.5;
    padding: 0.5rem 1rem;
    border-radius: 0.3rem;
  }
  
  .btn-block {
    display: block;
    width: 100%;
  }
  
  .mt-3 {
    margin-top: 1rem !important;
  }
  </style>
  