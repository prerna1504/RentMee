<template>
    <div>
  
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
      };
    },
    mounted(){
        axios.get('http://localhost:4242/user/login', this.user)
        .then((response) =>{
            console.log(response);
        })
        .catch((err) => {
            console.log(err)
        })
    }
  };
  </script>
  