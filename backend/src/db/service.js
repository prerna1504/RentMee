var userModel = require('./models');
var key ='Prernavijaylohar1504';
var encryptor = require('simple-encryptor')(key) 
// to secure passwords

module.exports.registerUserDBService = (userDetails) => {

    return new Promise(function myFn(resolve, reject){
        var userModelData = new userModel();

        userModelData.firstname = userDetails.firstname;
        userModelData.lastname = userDetails.lastname;
        userModelData.email = userDetails.email;
        userModelData.password = userDetails.password;
        var encrypted = encryptor.encrypt(userDetails.password);
        userModelData.password = encrypted;
        userModelData.rentedFurniture = [];



        // userModelData.save()
        // .then(result => {
        //     resolve(result);
        // })
        // .catch(error => {
        //     reject(error);
        // });

        userModel.findOne({ email: userDetails.email })
        .then(existingUser => {
          if (existingUser) {
            // If the email already exists, reject the promise with an error
            reject(new Error('Email already exists'));
            alert("email alredy exist");
          } else {
            // If the email doesn't exist, save the user data to the database
            userModelData.save()
              .then(result => {
                resolve(result);
              })
              .catch(error => {
                reject(error);
              });
          }
        })
        .catch(error => {
          reject(error);
        });

        
  });
};


module.exports.loginUserDBService = (userDetails) => {
    return userModel.findOne({ email: userDetails.email })
      .then(result => {
        if (result != undefined && result != null) {
          var decrypted = encryptor.decrypt(result.password);
  
          if (decrypted == userDetails.password) {
            return { status: true, msg: "User Validated Successfully" };
          } else {
            throw { status: true, msg: "User Validated failed" };
          }
        } else {
          throw { status: false, mgs: "Invalid details" };
        }
      })
      .catch(err => {
        throw { status: false, mgs: "Invalid Data" };
      });
  }


 





  
  

  