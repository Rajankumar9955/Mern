

const express=require("express");
const route=express.Router();
const UserControllers=require("../Controllers/UserControllers")

route.post("/datasave",UserControllers.DataSave)
route.get("/datadisplay",UserControllers.DataDisplay)

module.exports=route;

