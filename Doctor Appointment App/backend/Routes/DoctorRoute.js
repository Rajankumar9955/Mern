

const express=require("express");
const route=express.Router();
const DoctorController=require("../Controllers/DoctorControllers")

route.post("/datasave", DoctorController.DataSave);
route.get("/datadisplay", DoctorController.DataDisplay);
route.post("/editdatadisplay", DoctorController.EditDataDisplay);



module.exports=route