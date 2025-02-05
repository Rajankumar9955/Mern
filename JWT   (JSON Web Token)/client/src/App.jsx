


import { BrowserRouter,Routes,Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Registration from "./Pages/Registration";
const App=()=>{
  return(
    <>
          <BrowserRouter>
                         <Routes>
                                <Route path="/" element={<Layout/>}>
                                     <Route path="home" element={<Home/>}/>
                                     <Route path="login" element={<Login/>}/>
                                     <Route path="registration" element={<Registration/>}/>
                                </Route>
                         </Routes>
          </BrowserRouter>
    </>
  )
}
export default App;