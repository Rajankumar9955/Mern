

import { BrowserRouter,Routes,Route } from "react-router-dom"
import Layout from "./Layout"
import Home from "./Pages/Home"
import Dashboard from "./Pages/Dashboard"
import UserCreate from "./Pages/CreateUser"

const App=()=>{
  return(
    <>
    <BrowserRouter>
                    <Routes>
                           <Route path="/" element={<Layout/>}>
                            <Route index element={<Home/>}/>
                            <Route path="home" element={<Home/>}/>
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