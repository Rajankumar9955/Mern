

const mongoose=require("mongoose");
const TaskSchema=new mongoose.Schema({
    tasktitle:String,
    completiondays:Number,
    taskdescription:String,
    empid:{type: mongoose.Schema.Types.ObjectId, ref: "user"}
})
module.exports=mongoose.model("emptask", TaskSchema)