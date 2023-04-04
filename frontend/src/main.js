import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import homeDemo from './components/homeDemo.vue'
import loginDemo from './components/loginDemo.vue'
import registerDemo from './components/registerDemo.vue'
// import cartDemo from './components/cartDemo.vue'
import profileDemo from './components/profileDemo.vue'
import productsPage from './components/productsPage.vue'
import productDetails from './components/productDetails.vue'
import cartPage from './components/cartPage.vue'


// npm i bootstrap-vue --save
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import checkOutVue from './components/checkOut.vue'


Vue.use(BootstrapVue);
Vue.use(VueRouter)

const routes =[
  {path:'/',
  component:homeDemo,
  },
  
  {
    path: '/login',
    name: 'loginDemo',
    component: loginDemo,
 
  },
  {
    path: '/register',
    name: 'registerDemo',
    component: registerDemo,
   
  },
  // {
  //   path: '/cart',
  //   name: 'cartDemo',
  //   component: cartDemo,
   
  // },
  {
    path: '/profile',
    name: 'profileDemo',
    component: profileDemo
   
  },
  {
    path: '/products',
    name: 'productsPage',
    component: productsPage,
  },
  {
    path: '/products/:id',
    name: 'productDetails',
    component: productDetails
   
  },
 
  {
    path: '/cart',
    name: 'cartPage',
    component: cartPage
   
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: checkOutVue
   
  },
 
]


const router= new VueRouter({mode:'history',routes,linkExactActiveClass:'active'})
Vue.config.productionTip = false



new Vue({
  router:router,
  mode:'history',
  render: h => h(App),
}).$mount('#app')

