


const express=require("express");
const route=express.Router();
const UserLoginRegistration=require("../Controllers/UserLoginRegister");

route.post("/registration",UserLoginRegistration.Registration)


module.exports=route;