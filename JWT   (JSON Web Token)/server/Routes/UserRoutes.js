


const express=require("express");
const route=express.Router();
const UserControllers=require("../Controllers/UserControllers")

route.post("/registration", UserControllers.UserRegister);
route.post("/login", UserControllers.UserLogin);

module.exports=route