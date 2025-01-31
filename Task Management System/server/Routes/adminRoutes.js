

const express=require("express");
const route=express.Router();
const adminController=require("../Controllers/adminControllers")

route.post("/adminlogin", adminController.AdminLogin);
route.post("/resetadminpass", adminController.ResetAdminPass);

module.exports=route