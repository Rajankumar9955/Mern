

const express=require("express");
const route=express.Router();
const UserController=require("../Controllers/UserController")

route.post("/registration",UserController.Registeration)


module.exports=route;