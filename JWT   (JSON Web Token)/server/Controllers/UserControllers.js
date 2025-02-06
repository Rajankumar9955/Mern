

const UsersModel=require("../Models/UserModels")

const DataSave=async(req,res)=>{
    const {name,contact,email,password}=req.body;
    try {
        const Data=await UsersModel.create({
            name:name,
            contact:contact,
            email:email,
            password:password
        })
        res.send(200).send({msg:"Now! You are Registered!"});
    } catch (error) {
        console.log(error)
    }
}
module.exports={
    DataSave,
}