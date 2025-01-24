


const express=require("express");
const route=express.Router();
const AdminControllers=require("../Controllers/AdminControllers");

route.post("/adminlogin", AdminControllers.AdminLogin);

module.exports=route