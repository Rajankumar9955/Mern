


const express=require("express");
const route=express.Router();

const BookingController=require("../Controllers/BookingCotroller")

route.post("/datasave", BookingController.DataSave);
route.get("/datadisplay", BookingController.DataDisplay);


module.exports=route;