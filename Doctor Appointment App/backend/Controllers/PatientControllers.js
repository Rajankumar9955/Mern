

const PatientModel=require("../Models/PatientModel");
const PatientRegistration=async(req,res)=>{
    const {name,email,password} = req.body;
    const data=await PatientModel.create({
        name:name,
        email:email,
        password,
    })
    res.send(data);
}

const PatientLogin=async(req,res)=>{
    const {useremail, password} =req.body;
    const Patient=await PatientModel.findOne({email:useremail});
    if(!Patient)
    {
        res.status(400).json({msg:"Invalid Email"})
    }
    if(Patient.password!=password){
        res.status(400).json({msg:"Invalid Password"});
    }
    res.status(200).json(Patient);
}
module.exports={
    PatientRegistration,
    PatientLogin
}