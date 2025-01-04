
const CarsModule=require("../Models/CarsModels")
const DataSave=async(req,res)=>{
    const {car_name,car_model,fuel_type, 
        launch_date,car_mileage, 
        car_price}=req.body;
    console.log(req.body)
    const mydata=await CarsModule.create({
        car_name:car_name,
        car_model:car_model,
        fuel_type:fuel_type,
        launch_date:launch_date,
        car_mileage:car_mileage,
        car_price:car_price
    })
    res.send(mydata);
}
const DataDisplay=async(req,res)=>{
    const myData=await CarsModule.find();
    res.send(myData);
}
const DataDelete=async(req,res)=>{
    const {id}=req.body;
    const mydata=await CarsModule.findByIdAndDelete(id);
    res.send(mydata);
}
const EditDataDisplay=async(req,res)=>{
    const {id}=req.body;
    const data=await CarsModule.findById(id);
    res.send(data);
}
const EditDataSave=async(req,res)=>{
    const {id}=req.body;
    const saveData=await CarsModule.findByIdAndUpdate(id)
    res.send(saveData);
    console.log(saveData);
}
module.exports={
    DataSave,
    DataDisplay,
    DataDelete,
    EditDataDisplay,
    EditDataSave
}