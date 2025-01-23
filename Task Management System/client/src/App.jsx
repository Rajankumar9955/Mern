

import { BrowserRouter,Routes,Route } from "react-router-dom"
import Layout from "./Layout"
import Dashboard from "./Pages/Dashboard"
import UserCreate from "./Pages/CreateUser"
import Login from "./Pages/Login"

const App=()=>{
  return(
    <>
    <BrowserRouter>
                    <Routes>
                           <Route path="/" element={<Layout/>}>
                            <Route index element={<Login/>}/>
                            <Route path="login" element={<Login/>}/>
                            <Route path="dashboard" element={<Dashboard/>}>
                               <Route path="userscreate" element={<UserCreate/>}/>
                            </Route>
                           </Route>
                    </Routes>
    </BrowserRouter>
    
    </>
  )
}
export default App