
const express=require("express");
const app=express();
const mongoose=require("mongoose");
const bodyparser=require("body-parser");
const cors=require("cors");
require("dotenv").config();
const UserReg=require("./Routes/UserRoutes")

const DataBase=process.env.DATABASE;
const Port=process.env.PORT;

mongoose.connect(DataBase).then((res)=>{
    console.log("DataBase Connected!!")
})


app.use(cors())

// Body-parser middleware
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())

app.use("/users",UserReg);

app.listen(Port,()=>{
    console.log(`Server Run On ${Port}!!`)
})




