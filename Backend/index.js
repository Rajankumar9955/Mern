const express=require("express");
const app=express();
const cors=require("cors");
const mongoose=require("mongoose");
require("dotenv").config();
const bodyparser=require("body-parser");
const CarRoute=require("./Routes/CarsRoutes")

const BD=process.env.DBCONNECTION;
const port=process.env.PORT;
mongoose.connect(BD).then((res)=>{
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