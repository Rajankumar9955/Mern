


const express=require("express");
const app=express();
const cors=require("cors");
const mongoose=require("mongoose");
const bodyparser=require("body-parser");
const AdminRoutes=require("./Routes/adminRoutes") 
mongoose.connect("mongodb://127.0.0.1:27017/Task_Management").then((res)=>{
    console.log("Database Connected!!");
})

app.use(cors());

app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())

app.use("/admin", AdminRoutes) 

app.listen(8080, ()=>{
    console.log("Server Run on 8080 Port!");
})