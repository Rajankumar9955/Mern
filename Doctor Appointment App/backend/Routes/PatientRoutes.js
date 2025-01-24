

const express=require("express");
const route=express.Router();
const PatientControllers=require("../Controllers/PatientControllers")

route.post("/patientlogin", PatientControllers.PatientData);

module.exports=route;