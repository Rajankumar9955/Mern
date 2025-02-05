


const express=require("express");
const app=express();
const cors=require("cors");
const mongoose=require("mongoose")
const bodyparser=require("body-parser");
require('dotenv').config();
const UserRoute=require("./Routes/UserRoutes")

mongoose.connect(process.env.DBCONNECTION).then((res)=>{
    console.log("Database Connected!!");
})

app.use(cors())

app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())

app.use("/user",UserRoute);

app.listen(process.env.PORT, ()=>{
    console.log(`server Run on ${process.env.PORT} port!`)
})