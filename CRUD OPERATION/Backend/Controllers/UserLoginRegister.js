

const UserModels=require("../Models/UserModels")
const Registration=async(req,res)=>{
    const {name,email,password}=req.body;
    console.log(req.body);
    const ans=await UserModels.create({
        name:name,
        email:email,
        password:password
    })
    res.send(ans);
}

module.exports={
    Registration
}