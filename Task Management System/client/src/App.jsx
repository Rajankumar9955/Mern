

import { BrowserRouter,Routes,Route } from "react-router-dom"
import Layout from "./Layout"
import Dashboard from "./Pages/Dashboard"
import UserCreate from "./Pages/CreateUser"
import Login from "./Pages/Login"
import Users from "./Pages/Users"
import UserData from "./Pages/UserData"

const App=()=>{
  return(
    <>
    <BrowserRouter>
                    <Routes>
                           <Route path="/" element={<Layout/>}>
                            <Route index element={<Login/>}/>
                            <Route path="login" element={<Login/>}/>                            
                            <Route path="users" element={<Users/>}/>   

                            <Route path="dashboard" element={<Dashboard/>}>
                               <Route path="userscreate" element={<UserCreate/>}/>
                               <Route path="userdata" element={<UserData/>}/>
                            </Route>
                            
                           </Route>
                    </Routes>
    </BrowserRouter>
    
    </>
  )
}
export default App