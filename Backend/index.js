
const express=require("express");
const app=express();
const port=8000;
const cors=require("cors");
const mongoose=require("mongoose");
const bodyparser=require("body-parser");
const stuRoutes=require("./Routes/StuRoutes");

mongoose.connect("mongodb://127.0.0.1:27017/merncrud").then((res)=>{
    console.log("DB Connected!!")
})

app.use(cors());

// Body-parser middleware
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())


app.use("/students", stuRoutes);

app.listen(port, ()=>{
    console.log(`server listen on ${port}`);
})