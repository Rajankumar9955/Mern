
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
module.exports={
    DataSave,
    DataDisplay,
}