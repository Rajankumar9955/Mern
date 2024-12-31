

const mongoose=require("mongoose");
const StuSchema=new mongoose.Schema({
    rollno:Number,
    name:String,
    city:String,
    fees:String
})
module.exports=mongoose.model("student", StuSchema);