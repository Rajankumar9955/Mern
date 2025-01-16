

const express=require("express");
const route=express.Router();
const DoctorController=require("../Controllers/DoctorControllers")

route.post("/datasave", DoctorController.DataSave);
route.get("/datadisplay", DoctorController.DataDisplay);



module.exports=route