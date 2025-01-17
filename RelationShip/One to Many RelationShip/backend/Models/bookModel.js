


const mongoose=require("mongoose");
const BookSchema=new mongoose.Schema({
    booktitle:String,
    bookprice:Number,
    authorid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"author"
    }
})
module.exports=mongoose.model("book",BookSchema);