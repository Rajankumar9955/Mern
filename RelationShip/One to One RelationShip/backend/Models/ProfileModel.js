

const mongoose=require("mongoose");
const ProfileSchema=new mongoose.Schema({
    firstname:String,
    lastname:String,

    userid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",  // UserMedels name
    }
})
module.exports=mongoose.model("profile",ProfileSchema)