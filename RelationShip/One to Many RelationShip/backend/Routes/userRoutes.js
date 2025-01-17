


const express=require("express");
const route=express.Router();

const UserControllers=require("../Controllers/userControllers")

route.post("/usersave", UserControllers.DataSave)


module.exports=route;