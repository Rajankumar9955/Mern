

const UserModels=require("../Models/userModels");
const Usercreate=async(req,res)=>{
    const {userid,name,email,password}=req.body;
     const data=await UserModels.create({
        userid:userid,
        name:name,
        email:email,
        password:password
     })
    res.send(data);
}
const UserLogin=async(req,res)=>{
    const {userid,password}=req.body;
    const User=await UserModels.findOne({userid:userid});
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
module.exports={
    Usercreate,
    UserLogin
}