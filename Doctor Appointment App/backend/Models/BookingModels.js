


const mongoose=require("mongoose");
const BookSchema=new mongoose.Schema({
    doctorname:String,
    department:String,
    age:Number,
    shifttime:String,
    fees:Number
})
module.exports=mongoose.model("booking", BookSchema)