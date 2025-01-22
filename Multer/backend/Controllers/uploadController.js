
const StuModels=require("../Models/UploadModels")
const UploadFile=async(req,res)=>{
    const {rollno,name,city}=req.body;
    const imgname=req.file.filename;
    const data=await StuModels.create({
        rollno:rollno,
        name:name,
        city:city,
        imgname:imgname,
    })
    console.log(data);
    res.send(data);

}
const DisplayData=async(req,res)=>{
    const data=await StuModels.find();
    res.send(data);
}
module.exports={
    UploadFile,
    DisplayData
}