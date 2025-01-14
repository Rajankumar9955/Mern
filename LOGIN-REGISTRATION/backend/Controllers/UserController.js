
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
const Login=async(req,res)=>{
    const {email,password}=req.body;
    
    try {

    const User=await UserModel.findOne({email:email});
    
    if(!User){
        res.status(400).send({msg:"Invalid Email"})
    }
    const checkpass=await bcrypt.compare(password,User.password);
    if(checkpass)
    {
        res.status(200).send(User);
    }
    else
    {
        res.status(400).send({msg:"Invalid Password"});
    }


  } catch (error) {
        res.send("Error In Coding Please Check CareFully!!")
  }

}
const ResetPassword=async(req,res)=>{
    const {userid,oldpassword,newpassword}=req.body;
    try {
        
        const data=await UserModel.findById(userid);
        console.log(data);
        const checkpass=await bcrypt.compare(oldpassword,data.password);
        if(checkpass)
        {
            const salt = await bcrypt.genSalt();
            const passwordHash = await bcrypt.hash(newpassword, salt);
            await UserModel.findByIdAndUpdate(userid,{password:passwordHash})
            res.status(200).send({msg:"SuccessFully Change Password!!"})
        }
        else
        {
            res.status(400).send({msg:"Old Password doesn't match!!"});
        }

    } catch (error) {
        console.log(error);
    }
}
module.exports={
    Registration,
    Login,
    ResetPassword
}