

const express=require("express");
const route=express.Router();
const CarsController=require("../Controllers/CarsControllers")

route.post("/datasave",CarsController.DataSave);
route.get("/datadisplay",CarsController.DataDisplay);

module.exports=route;