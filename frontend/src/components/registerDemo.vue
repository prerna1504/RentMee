<template>
    <!-- <div class="container">
	<h2 style="color: brown;">User Registration</h2>
	<form @submit.prevent="saveData">
		<div class="form-group">
			<label for="name">First Name:</label>
			<input type="text" v-model="user.firstname" class="form-control" id="name" name="name" placeholder="Enter First name" required>
		</div>
        <div class="form-group">
			<label for="name">Last Name:</label>
			<input type="text" v-model="user.lastname" class="form-control" id="name" name="name" placeholder="Enter Last name" required>
		</div>
        <div class="form-group">
			<label for="name">Email:</label>
			<input type="email" v-model="user.email" class="form-control" id="name" name="name" placeholder="Enter Email" required>
		</div>
        <div class="form-group">
			<label for="name">Password :</label>
			<input type="password" v-model="user.password" class="form-control" id="name" name="name" placeholder="Enter Password" required>
		</div>
        
		<button type="submit" class="btn btn-outline-success ">Register</button>
    <button type="button" class="btn btn-outline-danger" onclick="window.location.href='/home'">Cancel</button>
        <p class="bottom">Already have an account?  <a class="bottom" href="/login"> Login here</a></p>
	</form>
</div> -->
<div className="signUp-container">
                <div class="account section">
                    <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-6">
                        <div class="login-form border p-5">
                            <div class="text-center heading">
                            <h2 class="mb-2">Sign Up</h2>
                            <p class="lead">Already have an account? <a href="/login"> Login now</a></p>
                            </div>
                
                            <form action="#" @submit.prevent="saveData">
                            <div class="form-group mb-4">
                                <label for="#">First Name</label>
                                <input type="text" v-model="user.firstname" class="form-control" placeholder="Enter First Name"/>
                            </div>
                            <div class="form-group mb-4">
                                <label for="#">Last Name</label>
                                <input type="text" v-model="user.lastname" class="form-control" placeholder="Enter Last Name"/> 
                            </div>
                            <div class="form-group mb-4">
                                <label for="#">Email</label>
                                <input type="text" v-model="user.email" class="form-control" placeholder="Enter Email"/> 
                            </div>
                            <div class="form-group">
                                <label for="#">Password</label>
                                <input type="text"  v-model="user.password" class="form-control" placeholder="Enter Password" /> 
                            </div>
                
                            <a href="#"><button class="btn btn-main mt-3 btn-block" type="submit">Sign Up</button></a>
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
    name:'registerDemo',
    data(){
        return{
            result: {},
            user:{
                id:'',
                firstname:'',
                lastname:'',
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
    methods:{
        saveData() {
    axios.post("http://localhost:4242/user/register", this.user)
      .then(() => {
        alert("Registered successfully");
        this.$router.push('/')
        this.user = {
          id: '',
          firstname: '',
          lastname: '',
          email: '',
          password: ''
        };
      })
      .catch((error) => {
        if (error.response.status === 409) {
          alert("Email already exists");
        }
        console.log(error);
      });
}    
    }

}
</script>
<style>
.form-group{
    color: aliceblue;
}
.bottom{
    color: rgb(182, 178, 178);
}
</style>



  