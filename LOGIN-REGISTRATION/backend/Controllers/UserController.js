
const UserModel=require("../Models/UserModel")
const bcrypt=require("bcrypt");
const Registration=async(req,res)=>{
      const {name,city,email,password}=req.body;

      const salt=await bcrypt.genSalt(); 
      const passwordHash=await bcrypt.hash(password,salt);

      const save=await UserModel.create({
          name:name,
          city:city,
          email:email,
          password:passwordHash
      })
      res.send(save);
}

module.exports={
    Registration,
    Login
}