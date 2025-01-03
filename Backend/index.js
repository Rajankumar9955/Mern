const express=require("express");
const app=express();
const port=8000;
const cors=require("cors");
const mongoose=require("mongoose");
const bodyparser=require("body-parser");
const CarRoute=require("./Routes/CarsRoutes")

mongoose.connect("mongodb://127.0.0.1:27017/carmanagementsystem").then((res)=>{
    console.log("Cars DataBase Connected!")
})

app.use(cors())

// Body-parser middleware
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())

app.use("/cars", CarRoute);

app.listen(port,()=>{
    console.log(`Server Run on ${port} Port!`)
})