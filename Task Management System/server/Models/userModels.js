


const mongoose=require("mongoose");
const UserSchema=new mongoose.Schema({
    userid:String,
    name:String,
    email:String,
    password:String,
})
module.exports=mongoose.model("user", UserSchema);