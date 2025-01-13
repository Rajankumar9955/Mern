

import {BrowserRouter,Routes,Route} from "react-router-dom"
import Layout from "./Layout";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Registration from "./Pages/Registration";
import Dashboard from "./Pages/Dashboard";
import ResetPassword from "./Pages/ResetPassword";
const App=()=>{
  return(
    <>
    <BrowserRouter>
                  <Routes>
                         <Route path="/" element={<Layout/>}>
                          <Route index element={<Home/>}/>
                          <Route path="home" element={<Home/>}/>
                          <Route path="registration" element={<Registration/>}/>
                          <Route path="login" element={<Login/>}/>
                          <Route path="dashboard" element={<Dashboard/>}>
                                  <Route path="resetpass" element={<ResetPassword/>}/>
                          </Route>
                         </Route>
                  </Routes>
    </BrowserRouter>
    
    </>
  )
}
export default App;