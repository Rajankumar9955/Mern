


const UserModule=require("../Models/UserModel");

const Users=async(req,res)=>{
        const {name,contact,email,password}=req.body;
        console.log(req.body);
        res.send("ok")
}
module.exports= {
    Users
}