

const UsersModel=require("../Models/UserModels")
const bcrypt=require("bcryptjs")
const jwt=require("jsonwebtoken")
const UserRegister=async(req,res)=>{
    const {name,contact,email,password}=req.body;
    const hashedPassword = await bcrypt.hash(password, 8)
    try {
        const Data=await UsersModel.create({
            name:name,
            contact:contact,
            email:email,
            password:hashedPassword,
        })
        res.status(200).send({msg:"Now! You are Registered!"});
    } catch (error) {
        console.log(error)
    }
}
const UserLogin=async(req,res)=>{
    const {email, password}=req.body;

    try {
        
    
    const User=await UsersModel.findOne({email:email});
    if(!User){
        res.status(400).send({msg:"Invalid Email"});
    }
    const isMatch =await bcrypt.compare(password, User.password);
    if(!isMatch){
        res.status(400).send({msg:"Invalid Password"});
    }
    const token= jwt.sign({id:User._id}, process.env.TOKEN_KEY,{
        expiresIn: 3 * 24 * 60 * 60,
    })
    res.status(200).send({token:token});

  } catch (error) {
         console.log(error); 
}

}
module.exports={
    UserRegister,
    UserLogin,
}