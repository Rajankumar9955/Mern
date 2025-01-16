
const express=require("express");
const app=express();
const cors=require("cors");
const mongoose=require("mongoose")
const bodyparser=require("body-parser");
const DoctorRoutes=require("./Routes/DoctorRoute")

mongoose.connect("mongodb://127.0.0.1:27017/doctorappoinment").then((res)=>{
    console.log("DataBase Connected!!!")
})

app.use(cors())

// Body-parser middleware
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())

app.use("/doctors", DoctorRoutes);

app.listen(8000, ()=>{
    console.log("Server Run on 8000 Port!!")
})