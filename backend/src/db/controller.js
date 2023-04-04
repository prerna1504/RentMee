var userService = require('./service');

var registerUserControllerFn = async(req, res) =>
{
    try
    {

        console.log(req.body);
        var status = await userService.registerUserDBService(req.body);
        console.log(status);

        if(status){
            res.send({ "status":true, "message": "User created successfully"});
        }
        else{
            res.send({ "status":true, "message": "Error creating user"});
        }
    }
    catch(err)
    {
        console.log(err);
        
    }
}

var loginUserControllerFn = async (req,res) => {
    var result = null;
    try{
        result = await userService.loginUserDBService(req.body);
        if(result.status){
            res.send({"status":true, "message":result.mgs})
        }
        else{
            res.send({"status":true, "message":result.mgs})
        }
    } catch(err){
        console.log(err);
        res.send({"status":false,"message":err.mgs})

    }
}









module.exports = {registerUserControllerFn, loginUserControllerFn}