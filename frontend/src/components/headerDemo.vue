<script setup>
// import { RouterLink, RouterView } from 'vue-router'
import "jquery/dist/jquery.slim.min.js";
import "popper.js/dist/umd/popper.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
</script>

<template>
   <nav class="navbar navbar-expand-lg navbar-light bg-white w-100 navigation" id="navbar">
        <div class="container">
            <RouterLink class="navbar-brand font-weight-bold" to="/">RentMee.com</RouterLink>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#main-navbar"
            aria-controls="main-navbar" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse " id="main-navbar">
            <ul class="navbar-nav mx-auto">
                <li class="nav-item active">
                    <RouterLink class="nav-link" to="/">Home</RouterLink>
                </li>
                <!-- <li class="nav-item">
                <a class="nav-link" href="#">About Us</a>
                </li>
               -->
                <li class="nav-item dropdown dropdown-slide">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown4" role="button" data-delay="350"
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    categories
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown4">
                    <li><a href="/products">Furniture</a></li>
                    <!-- <li><a href="#">Kitchen Appliances</a></li>
                    <li><a href="#">Electric Appliances</a></li> -->
                </ul>
                </li>
                <li class="nav-item dropdown dropdown-slide">
                <!-- <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown3" role="button" data-delay="350"
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Shop.
                </a> -->
                <!-- <ul class="dropdown-menu" aria-labelledby="navbarDropdown3">
                    <li><RouterLink class="nav-link" to="/products">Shop Page</RouterLink></li>
                    <li><RouterLink class="nav-link" to="/products/:id">Product Details Page</RouterLink></li>
                    <li><RouterLink class="nav-link" to="/checkout">Checkout Page</RouterLink></li>
                    <li><RouterLink class="nav-link" to="/cart">Cart Page</RouterLink></li>
                </ul> -->
                </li>
              
                <li class="nav-item dropdown dropdown-slide">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown5" role="button" data-delay="350"
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Account.
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown5">
                    <li><RouterLink class="nav-link" to="/login">Login Page</RouterLink></li>
                    <li><RouterLink class="nav-link" to="/register">SignUp Page</RouterLink></li>
                </ul>
                </li>
                <li class="nav-item active">
                    <RouterLink class="nav-link" to="/cart">Cart</RouterLink>
                </li>
            </ul>
            </div>
            
            <!-- <ul class="top-menu list-inline mb-0 d-none d-lg-block" id="top-menu">
            <li class="list-inline-item">
                <a href="#" class="search_toggle" id="search-icon"><i class="tf-ion-android-search"></i></a>
            </li>
            <li class="dropdown cart-nav dropdown-slide list-inline-item">
                <a href="/cart" class="dropdown-toggle cart-icon" data-toggle="dropdown" data-hover="dropdown">
                <RouterLink class="nav-link cart-icon" to="/cart">Cart
                <i class="tf-ion-android-cart"></i>
            </RouterLink>
            </li>
            <li class="list-inline-item"><a href="#"><i class="tf-ion-ios-person mr-3"></i></a></li>
            </ul> -->
        </div>
    </nav>
</template>