
const DoctorModels=require("../Models/DoctorModels")
const DataSave=async(req,res)=>{
    const {doctorname,department,age,shifttime}=req.body;
    const data=await DoctorModels.create({
        doctorname:doctorname,
        department:department,
        age:age,
        shifttime:shifttime
    })
    console.log(data);
    res.send(data);
    
}

const DataDisplay=async(req,res)=>{
    const data=await DoctorModels.find();
    res.send(data);
}

module.exports={
    DataSave,
    DataDisplay
}