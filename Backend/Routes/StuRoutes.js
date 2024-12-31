


const express=require("express");
const route=express.Router();
const StuController=require("../Controllers/StuController")

route.post("/datasave", StuController.DataSave);


module.exports=route;