
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
module.exports={
    Registration,
    Login
}