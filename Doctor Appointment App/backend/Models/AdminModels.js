


const mongoose=require("mongoose");
const AdminSchema=new mongoose.Schema({
    useremail:String,
    password:String,
    usertype:String
})
module.exports=mongoose.model("admin", AdminSchema);