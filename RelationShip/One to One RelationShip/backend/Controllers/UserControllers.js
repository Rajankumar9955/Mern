
const UserModels=require("../Models/UserModel");
const ProfileModels=require("../Models/ProfileModel")

const DataSave=async(req,res)=>{
      const {username,email,firstname,lastname}=req.body;
      const User=await UserModels.create({
          username:username,
          email:email,
      })

      const Profile=await ProfileModels.create({
           firstname:firstname,
           lastname:lastname,
           userid:User._id,
      })
      res.status(200).send("Users Created!!");

}
const 
module.exports={
    DataSave,
    DataDisplay
}