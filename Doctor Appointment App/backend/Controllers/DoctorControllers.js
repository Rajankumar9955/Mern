
const DoctorModels=require("../Models/DoctorModels")
const DataSave=async(req,res)=>{
    const {doctorname,department,age,shifttime,fees}=req.body;
    const data=await DoctorModels.create({
        doctorname:doctorname,
        department:department,
        age:age,
        shifttime:shifttime,
        fees:fees
    })
    console.log(data);
    res.send(data);
    
}

const DataDisplay=async(req,res)=>{
    const data=await DoctorModels.find();
    res.send(data);
}
const EditDataDisplay=async(req,res)=>{
    const {id}=req.body;
    const data=await DoctorModels.findById(id)
    res.send(data);
}
module.exports={
    DataSave,
    DataDisplay,
    EditDataDisplay
}