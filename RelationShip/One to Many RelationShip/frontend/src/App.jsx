

import { BrowserRouter,Routes,Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Pages/Home";
import Insert from "./Pages/Insert";
import Display from "./Pages/Display";
import AddMoreBook from "./Pages/AddMoreBook";

const App=()=>{
  return(
    <>
    
    <BrowserRouter>
                  <Routes>
                         <Route path="/" element={<Layout/>}>
                         <Route index element={<Home/>}/>
                         <Route path="home" element={<Home/>}/>
                         <Route path="insert" element={<Insert/>}/>
                         <Route path="display" element={<Display/>}/>
                         <Route path="addmorebook/:id" element={<AddMoreBook/>}/>
                         </Route>
                  </Routes>
    </BrowserRouter>
    
    </>
  )
}
export default App;