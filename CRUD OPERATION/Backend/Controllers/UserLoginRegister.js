

const UserModels=require("../Models/UserModels")
const bcrypt=require("bcrypt");
const Registration=async(req,res)=>{
    const {name,email,password}=req.body;

    const salt=await bcrypt.genSalt(); 
    const passwordHash=await bcrypt.hash(password,salt);

    console.log(req.body);
    const ans=await UserModels.create({
        name:name,
        email:email,
        password:passwordHash
    })
    res.send(ans);
}


const Login=async(req,res)=>{
    const{email,password}=req.body;
    try {
        const User=await UserModels.findOne({email:email})
        // console.log(User)
        if(!User)
        {
             res.status(400).send({msg:"Invalid Email"});
        }
        const checkpass= await bcrypt.compare(password, User.password);
        // console.log(checkpass);
        if(checkpass)
        {
            res.status(200).send(User);
        }
        else
        {
            res.status(400).send({msg:"Invalid Password"});
        }
    } catch (error) {
        res.send("Error in Coding please Check CareFully!!");
    }
}
module.exports={
    Registration,
    Login
}