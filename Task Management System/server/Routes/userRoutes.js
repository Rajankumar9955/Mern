

const express=require("express");
const route=express.Router();
const userControllers=require("../Controllers/userControllers");

route.post("/usercreate", userControllers.Usercreate);
route.post("/userlogin", userControllers.UserLogin);
route.get("/userdisplay", userControllers.UserDataDisplay);
route.post("/assigntask", userControllers.AssignTask);

module.exports=route;