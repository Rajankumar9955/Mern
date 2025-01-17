

const express=require("express");
const route=express.Router();
const UserControllers=require("../Controllers/UserControllers")


route.post("/usersave", UserControllers.DataSave);
route.post("/userdisplay", UserControllers.DataDisplay);


module.exports = route;