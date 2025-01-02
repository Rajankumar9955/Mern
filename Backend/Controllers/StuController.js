

const StuModel=require("../Models/StuModel")
const DataSave=async(req,res)=>{
    const {rollno,name,city,fees}=req.body;
    console.log(req.body)
    // console.log(rollno)
    await StuModel.create({
        rollno:rollno,
        name:name,
        city:city,
        fees:fees
    })
    res.send("OK!!!")
}

const DataDisplay=async(req,res)=>{
    const mydata=await StuModel.find();
    res.send(mydata);

}
const DataDelete=async(req,res)=>{
    const data=await StuModel.findByIdAndDelete();
    res.send(data);
}
module.exports={
    DataSave,
    DataDisplay,
    DataDelete
}