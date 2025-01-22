
const StuModels=require("../Models/UploadModels")
const UploadFile=async(req,res)=>{
    const {imgname,rollno,name,city}=req.body;
    const data=await StuModels.create({
        rollno:rollno,
        name:name,
        city:city,
        imgname:imgname,
    })
    res.send(data);
}
module.exports={
    UploadFile,
}