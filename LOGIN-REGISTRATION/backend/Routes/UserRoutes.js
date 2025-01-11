

const express=require("express");
const route=express.Router();
const UserController=require("../Controllers/UserController")

route.post("/registration",UserController.Registration)
route.post("/userlogin", UserController.Login)


module.exports=route;