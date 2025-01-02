


const express=require("express");
const route=express.Router();
const StuController=require("../Controllers/StuController")

route.post("/datasave", StuController.DataSave);
route.get("/datadispaly", StuController.DataDisplay);
route.get("/datadelete", StuController.DataDelete);


module.exports=route;