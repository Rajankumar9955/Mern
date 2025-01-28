

const UserModels=require("../Models/userModels");

const transporter=require("../MiddleWare/NodeMailer");
const RandomPass=require("../MiddleWare/RandomPass")

const TaskModels=require("../Models/taskModels");

const Usercreate=async(req,res)=>{
    const {name,email,designation}=req.body;
    const MyPass=RandomPass();

    const mailOptions = {
        from: "krajan92946@gmail.com", // Sender email
        to:email,                          // Recipient email
        subject:"Your Company Work Detail Account",                     // Email subject
        text:`Dear ${name} Your Account created with password : ${MyPass} 
         You can login using with your Email account
        `
      };
      try {
        const info = await transporter.sendMail(mailOptions);
        const data=await UserModels.create({
            name:name,
            email:email,
            password:MyPass,
            designation:designation
         })
         res.status(200).json({ success: true, message: 'Email sent', info });
      } catch (error) {
        console.error('Error to Sending Mail:',error)
        res.status(500).json({ success: false, error: error.message });
      }
     
}

const UserLogin=async(req,res)=>{
    const {email,password}=req.body;
    const User=await UserModels.findOne({email:email});
    if(!User)
    {
        res.status(400).json({msg:"Invalid Email ID"});
    }
    if(User.password!=password)
    {
        res.status(400).json({msg:"Invalid Password"});
    }
    res.status(200).json(User);
}

const UserDataDisplay=async(req,res)=>{
    const data=await UserModels.find();
    res.send(data);
}
const AssignTask=async(req,res)=>{
    const {empid, tasktitle,comdays,taskdescription}=req.body;
    try {
        const Emp= await TaskModels.create({
            tasktitle:tasktitle,
            completiondays:comdays,
            taskdescription:taskdescription,
            empid:empid
        })
        res.status(200).send("Task SuccessFully Assigned")
    } catch (error) {
        console.log(error)
    }
}
const TaskStatus=async(req,res)=>{
    const data=await TaskModels.find().populate('empid')
    res.send(data);
}
const TaskShow=async(req,res)=>{
    const {email}=req.body;
    const user=await UserModels.findOne({email:email});
    const data=await TaskModels.findOne({empid:user._id})
    res.send(data);
   
}
module.exports={
    Usercreate,
    UserLogin,
    UserDataDisplay,
    AssignTask,
    TaskStatus,
    TaskShow
}