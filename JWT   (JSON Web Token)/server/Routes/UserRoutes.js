


const express=require("express");
const route=express.Router();
const UserControllers=require("../Controllers/UserControllers")

route.post("/registration", UserControllers.DataSave);

module.exports=route