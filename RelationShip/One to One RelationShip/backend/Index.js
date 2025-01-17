



const express=require("express");
const app=express();
const cors=require("cors");
const mongoose=require("mongoose");
const bodyparser=require("body-parser");
const UserRoutes=require("./Routes/UserRoutes")

mongoose.connect("mongodb://127.0.0.1:27017/onetoonerelationship").then((res)=>{
    console.log("DataBase Connected!!");
})

app.use(cors());
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())

app.use("/user", UserRoutes);

app.listen(8000,()=>{
    console.log("Server Run on 800 Port!!");
})