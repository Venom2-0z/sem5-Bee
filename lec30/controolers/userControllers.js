const user = require( "../services/userService.js");



module.exports.postUser = async(req,res)=>{
    try{
        await user.adduser(req.body.email,req.body.name);
        res.status(201).send("User added");
    }
    catch(err){
        res.status(500).send(err.message);
    }
}


