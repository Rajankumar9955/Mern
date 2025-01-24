
const express=require("express");
const app=express();
const cors=require("cors");
const mongoose=require("mongoose")
const bodyparser=require("body-parser");

const DoctorRoutes=require("./Routes/DoctorRoute")
const BookindRoutes=require("./Routes/BookingRoute")
const AdminRoutes=require("./Routes/adminRoutes")
const PatientRoutes=require("./Routes/adminRoutes");

mongoose.connect("mongodb://127.0.0.1:27017/doctorappoinment").then((res)=>{
    console.log("DataBase Connected!!!")
})

app.use(cors())

// Body-parser middleware
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())

app.use("/doctors", DoctorRoutes);
app.use("/bookings", BookindRoutes);
app.use("/admin", AdminRoutes)
app.use("/patient", PatientRoutes);

app.listen(8000, ()=>{
    console.log("Server Run on 8000 Port!!")
})