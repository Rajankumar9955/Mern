

const express=require("express");
const route=express.Router();
const userControllers=require("../Controllers/userControllers");

route.post("/usercreate", userControllers.Usercreate);

module.exports=route;