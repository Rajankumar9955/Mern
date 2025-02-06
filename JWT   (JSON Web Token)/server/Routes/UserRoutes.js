


const express=require("express");
const route=express.Router();
const UserControllers=require("../Controllers/UserControllers")

route.post("/registration", UserControllers.UserRegister);
route.post("/login", UserControllers.UserLogin);
route.post("/UserAuth", UserControllers.UserAuthentication);

module.exports=route