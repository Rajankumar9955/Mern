


const express=require("express");
const route=express.Router();

const UserControllers=require("../Controllers/userControllers")

route.post("/usersave", UserControllers.DataSave)
route.get("/userdisplay", UserControllers.UserDisplay)
route.post("/addmorebook", UserControllers.AddMoreBook)


module.exports=route;