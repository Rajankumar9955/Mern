

const express=require("express");
const route=express.Router();
const userControllers=require("../Controllers/userControllers");

route.post("/usercreate", userControllers.Usercreate);
route.post("/userlogin", userControllers.UserLogin);
route.get("/userdisplay", userControllers.UserDataDisplay);
route.post("/assigntask", userControllers.AssignTask);
route.get("/taskstatus", userControllers.TaskStatus);
route.post("/taskShow", userControllers.TaskShow);
route.post("/tasksubmit", userControllers.TaskSubmitByEmployee);

route.post("/resetemppass", userControllers.ResetEmployeePassword);

module.exports=route;