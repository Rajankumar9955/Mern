

const mongoose=require("mongoose");
const AdminSchema=new mongoose.Schema({
    userid:String,
    password:String,
})
module.exports=mongoose.model("admin", AdminSchema)