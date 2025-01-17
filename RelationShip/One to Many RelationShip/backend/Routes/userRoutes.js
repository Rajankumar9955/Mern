


const express=require("express");
const route=express.Router();

const UserControllers=require("../Controllers/userControllers")

route.post("/usersave", UserControllers.DataSave)
route.post("/userdisplay", UserControllers.UserDisplay)


module.exports=route;