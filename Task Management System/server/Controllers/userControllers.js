

const UserModels=require("../Models/userModels");
const Usercreate=async(req,res)=>{
    const {name,email,designation,password}=req.body;
     const data=await UserModels.create({
        name:name,
        email:email,
        designation:designation,
        password:password
     })
    res.send(data);
}
module.exports={
    Usercreate,
}