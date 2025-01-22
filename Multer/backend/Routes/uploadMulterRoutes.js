
const express=require("express");
const multer=require("multer");
const route=express.Router();
const UploadControllers=require("../Controllers/uploadController");
const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null, 'uploads/');   // Save files to uploads directory
    },
    filename:(req,file,cb)=>{
        cb(null,Date.now()+file.originalname); // Keep original file name
    }
});
const upload=multer({storage:storage});

route.post("/uploadfile", upload.single("photo"),  UploadControllers.UploadFile)
route.get("/displaydata", UploadControllers.DisplayData);
module.exports=route;