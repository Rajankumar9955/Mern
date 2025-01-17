


const mongoose=require("mongoose");
const AuthorSchema=new mongoose.Schema({
    authorname:String,
    books:[{type:mongoose.Schema.Types.ObjectId, ref:"book"}]
})
module.exports=mongoose.model("author", AuthorSchema)