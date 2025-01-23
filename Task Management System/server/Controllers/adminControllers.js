
const AdminModels=require("../Models/adminModels")

const AdminLogin=async(req,res)=>{
    const {userid,password}=req.body;
    const Admin=await AdminModels.findOne({userid:userid})
    if(!Admin)
    {
        res.status(400).json({msg:"Invalid UserId"});
    }
    if(Admin.password!=password)
    {
        res.status(400).json({msg:"Invalid Password"});
    }

    res.status(200).json(Admin);
}

module.exports={
    AdminLogin,
}