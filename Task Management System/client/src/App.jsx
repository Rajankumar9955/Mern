

import { BrowserRouter,Routes,Route } from "react-router-dom"
import Layout from "./Layout"
import UserCreate from "./Pages/CreateUser"
import Login from "./Pages/Login"

import AssignTask from "./Pages/AssignTask"
import TaskStatus from "./Pages/TaskStatus"
import EmployeeDashboard from "./Pages/EmployeeDashboard"
import TaskShow from "./Pages/TaskShow"
import EmpProfile from "./Pages/EmpProfile"
import AdminDashboard from "./Pages/AdminDashboard"
import EmployeePassReset from "./Pages/EmployeePassReset"



const App=()=>{
  return(
    <>
    <BrowserRouter>
                    <Routes>
                          <Route path="/" element={<Layout/>}>
                            <Route index element={<Login/>}/>
                            <Route path="login" element={<Login/>}/>                            
                    

                                 <Route path="admindashboard" element={<AdminDashboard/>}>
                                    <Route path="userscreate" element={<UserCreate/>}/>
                                    <Route path="assigntask" element={<AssignTask/>}/>
                                    <Route path="taskstatus" element={<TaskStatus/>}/>
                                 </Route>

                                 <Route path="empdashboard" element={<EmployeeDashboard/>}>
                                          <Route path="empprofile" element={<EmpProfile/>}/>
                                          <Route path="taskshow" element={<TaskShow/>}/>
                                          <Route path="emppassreset" element={<EmployeePassReset/>}/>
                                 </Route>
                            
                          </Route>
                    </Routes>
    </BrowserRouter>
    
    </>
  )
}
export default App