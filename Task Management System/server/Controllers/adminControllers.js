
const AdminModels=require("../Models/adminModels")

const AdminLogin=async(req,res)=>{
    const {email,password,usertype}=req.body;
    // console.log(req.body);
    const Admin=await AdminModels.findOne({email:email})
    try {
        if(!Admin)
            {
                res.status(400).json({msg:"Invalid Email ID"});
            }
            if(Admin.password!=password)
            {
                res.status(400).json({msg:"Invalid Password"});
            }
               res.status(200).json(Admin);
    } catch (error) {
        console.log(error);
    }
    usertype:usertype
}

module.exports={
    AdminLogin,
}