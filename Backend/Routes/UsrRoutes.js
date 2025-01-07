
const express=require("express");
const route=express.Router();

const UserContlr=require("../Controllers/UserController")

route.post("/datasave", UserContlr.Users);


module.exports=route;