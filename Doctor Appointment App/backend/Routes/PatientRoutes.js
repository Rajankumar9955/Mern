

const express=require("express");
const route=express.Router();
const PatientControllers=require("../Controllers/PatientControllers")

route.post("/patientRegistration", PatientControllers.PatientRegistration);
route.post("/patientlogin", PatientControllers.PatientLogin);

module.exports=route;