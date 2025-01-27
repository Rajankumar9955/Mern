
const AdminModel=require("../Models/AdminModels")

const AdminLogin=async(req,res)=>{
    const {useremail,password,usertype}=req.body;
    const Admin=await AdminModel.findOne({useremail:useremail});
    if(!Admin)
    {
        res.status(400).json({msg:"Invalid User Email"})
    }
    if(Admin.password!=password)
    {
        res.status(400).json({msg:"Invalid Password"})
    }
    usertype:usertype
    res.status(200).json(Admin);
}
module.exports={
    AdminLogin,
}