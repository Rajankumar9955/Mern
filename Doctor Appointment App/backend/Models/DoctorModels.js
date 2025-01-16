


const mongoose=require("mongoose");
const DoctorSchema=new mongoose.Schema({
    doctorname:String,
    department:String,
    age:Number,
    shifttime:String
})
module.exports=mongoose.model("doctor", DoctorSchema)