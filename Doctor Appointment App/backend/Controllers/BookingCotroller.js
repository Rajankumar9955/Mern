
const BookingModels=require("../Models/BookingModels")

const DataSave=async(req,res)=>{
      const {doctorname,department,age,shifttime,fees}=req.body;
      const data=await BookingModels.create({
      doctorname:doctorname,
      department:department,
      age:age,
      shifttime:shifttime,
      fees:fees
    })
    res.send(data);
}
const DataDisplay=async(req,res)=>{
     const data=await BookingModels.find();
     res.send(data);
}
const DataDelete=async(req,res)=>{
    const {id}=req.body;
    const mydata=await BookingModels.findByIdAndDelete(id);
    res.send(mydata);
}
module.exports={
    DataSave,
    DataDisplay,
    DataDelete
}