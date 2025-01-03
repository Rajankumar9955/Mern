


const mongoose=require("mongoose");
const CarSchema=new mongoose.Schema({
       car_name:{
          type:String,
          require:true
       },
       car_model:{
        type:String,
        require:true
       },
       fuel_type:{
        type:String,
        require:true
       },
       launch_date:{
         type:Date,
         default:Date.now()
       },
       car_mileage:{
         type:Number,
         require:true
       },
       car_price:{
        type:Number,
        min:100000,
        max:864153298465,
        require:true
       }

})
module.exports=mongoose.model("car",CarSchema);