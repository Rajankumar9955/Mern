
const AdminModels=require("../Models/adminModels")

const AdminLogin=async(req,res)=>{
    const {email,password,usertype}=req.body;
    // console.log(req.body);
    const Admin=await AdminModels.findOne({email:email})
    if(!Admin)
    {
        res.status(400).json({msg:"Invalid UserId"});
    }
    if(Admin.password!=password)
    {
        res.status(400).json({msg:"Invalid Password"});
    }

    usertype:usertype
    
    res.status(200).json(Admin);
}

module.exports={
    AdminLogin,
}