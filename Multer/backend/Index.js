
const express=require("express");
const App=express();
const multer=require("multer");
const cors=require("cors");
const bodyparser = require("body-parser");
const mongoose  =  require("mongoose");
const path=require("path");
const multerRoutes=require("./Routes/uploadMulterRoutes")

mongoose.connect("mongodb://127.0.0.1:27017/multerupload").then((res)=>{
    console.log("DataBase Connected!!");
})

App.use(cors());

App.use('/uploads', express.static(path.join(__dirname, 'uploads')))

App.use(bodyparser.urlencoded({ extended: true }))
App.use(bodyparser.json())


App.use("/multerexample", multerRoutes)

App.listen(8000, ()=>{
    console.log("Server Run on 8000 Port!");
})