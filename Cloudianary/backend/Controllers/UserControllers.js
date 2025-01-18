

const StuModel=require("../Models/UserModels")

const DataSave=async(req,res)=>{
   const {imgname,rollno,name,city,fees}=req.body;
   const Data=await StuModel.create({
            rollno:rollno,
            name:name,
            city:city,
            fees:fees,
            imgname:imgname
   })
    res.send("Ok");
}
const DataDisplay=async(req,res)=>{
    const Mydata=await StuModel.find();
    res.send(Mydata)
}
module.exports={
    DataSave,
    DataDisplay
}