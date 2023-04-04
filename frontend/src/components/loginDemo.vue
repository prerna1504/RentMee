<template>
<!-- <div class="container">
<div class="container1">
<div class="row justify-content-center">
<aside class="col-sm-4">
<div class="card">
<article class="card-body">
<h4 class="card-title text-center mb-4 mt-1">Log in</h4>
<hr>
<p class="text-success text-center">Hello their</p>
<form  @submit.prevent="saveData">
<div class="form-group">
<div class="input-group">
<div class="input-group-prepend">
<span class="input-group-text"> <i class="fa fa-user"></i> </span>
</div>
<input type="email" v-model="user.email" class="form-control" id="name" name="name" placeholder="Email or login">
</div>
</div>
<div class="form-group">
<div class="input-group">
<div class="input-group-prepend">
<span class="input-group-text"> <i class="fa fa-lock"></i> </span>
</div>
<input type="password" v-model="user.password" class="form-control" id="name" name="name" placeholder="******">
</div> 
</div> 
<div class="form-group">
<button type="submit" class="btn btn-outline-success btn-block" >Login</button>
</div>
<p class="text-center"><a href="#" class="btn">Forgot password?</a></p>
</form>
</article>
</div>
</aside>
</div>
</div>
</div> -->

<div class="login-container">
  <link type="stylesheet" href="../assets/css/bootstrap.css">
  <link type="stylesheet" href="../assets/css/style.css">
                <div class="account section">
                    <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-6">
                        <div class="login-form border p-5">
                            <div class="text-center heading">
                            <h2 class="mb-2">Login</h2>
                            <p class="lead">Don’t have an account?<RouterLink to="/signup">Create a free account</RouterLink></p>
                            </div>
                
                            <form action="#"  @submit.prevent="saveData">
                            <div class="form-group mb-4">
                                <label for="#">Enter username/email</label>
                                <input v-model="user.email" type="text" class="form-control" placeholder="Enter Username" />
                            </div>
                            <div class="form-group">
                                <label for="#">Enter Password</label>
                                <a class="float-right" href="">Forget password?</a>
                                <input v-model="user.password" type="text" class="form-control" placeholder="Enter Password" /> 
                            </div>
                
                            <!-- <a href="/home" class="btn btn-main mt-3 btn-block">Login</a> -->
                            <RouterLink to="/" class="btn btn-main mt-3 btn-block">Login</RouterLink>
                            </form>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
</template>
<script>
import Vue from 'vue';
import axios from 'axios';
Vue.use(axios)
export default {
    name:'loginDemo',
    data(){
        return{
            result: {},
            user:{
                email:'',
                password:''
            }
        }
    },
    created(){

    },
    mounted(){
        console.log("Mounted().....")
    },
    // methods:{
    //     saveData()
    //     {
    //         axios.post("http://localhost:4242/user/login", this.user)
    //         .then(
    //             ({data})=>{
    //                 console.log(data.status);
    //                 try{
    //                     if(data.status === true){
    //                         alert("Login SuccesFully");
    //                         this.$router.push('/home');
    //                     }
    //                     else{
    //                         alert("Login Failed");
    //                         this.$router.push('/register');
    //                     }
    //                 }
    //                 catch(err){
    //                     alert("error")
    //                 }
    //             }
    //         )


    //     }
    // }

// methods: {
//   saveData() {
//     axios.post("http://localhost:4242/user/login", this.user)
//       .then(({ data }) => {
//         console.log(data.status);
//         try {
//           if (data.status === true) {
//             alert("Login SuccesFully");
//             this.$router.push('/profile'); // redirect to profile page
//           } else {
//             alert("Login Failed");
//             this.$router.push('/register');
//           }
//         } catch (err) {
//           alert("error")
//         }
//       })
//   }
// }
methods: {
  saveData() {
    axios.post("http://localhost:4242/user/login", this.user)
      .then(({ data }) => {
        console.log(data.status);
        try {
          if (data.status === true) {
            alert("Login SuccesFully");
            this.$router.push('/')
            // call currentUserDBService to fetch user details
          } else {
            alert("Login Failed");
            this.$router.push('/register');
          }
        } catch (err) {
          alert("error")
        }
      })
  }
}



    


}
</script>
<style scoped>
.container1{
    margin-top: 100px;
}

label {
  color: black;

}
</style>