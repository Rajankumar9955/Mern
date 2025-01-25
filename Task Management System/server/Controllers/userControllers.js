

const UserModels=require("../Models/userModels");
const Usercreate=async(req,res)=>{
    const {name,email,password,designation}=req.body;
    console.log(req.body);
     const data=await UserModels.create({
        name:name,
        email:email,
        password:password,
        designation:designation
     })
    res.send(data);
}

const UserLogin=async(req,res)=>{
    const {email,password}=req.body;
    const User=await UserModels.findOne({email:email});
    if(!User)
    {
        res.status(400).json({msg:"Invalid User ID"});
    }
    if(User.password!=password)
    {
        res.status(400).json({msg:"Invalid Password"});
    }
    res.status(200).json(User);
}
const UserDataDisplay=async(req,res)=>{
    const data=await UserModels.find();
    res.send(data);
}
module.exports={
    Usercreate,
    UserLogin,
    UserDataDisplay
}