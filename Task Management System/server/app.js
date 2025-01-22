


const express=require("express");
const app=express();
const cors=require("cors");
const mongoose=require("mongoose");
const bodyparser=require("body-parser");
const TaskRoutes=require("") //-----------------------------------
mongoose.connect("").then((res)=>{
    console.log("Database Connected!!");
})

app.use(cors());

app.use("") //---------------------------------

app.listen(8000, ()=>{
    console.log("Server Run on 8000 Port!");
})