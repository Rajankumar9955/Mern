
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Layout from "./Layout"
import Home from "./Pages/Home"
import BookAppoinment from "./Pages/BookAppoinment"
import AppoinmentData from "./Pages/AppoinmentData"
import Contact from "./Pages/Contact"
import AddDoctor from "./Pages/AddDoctor"

const App=()=>{
  return(
    <>
       <BrowserRouter>
                      <Routes>
                             <Route path="/" element={<Layout/>}>
                                 <Route index element={<Home/>}/>
                                 <Route path="home" element={<Home/>}/>
                                 <Route path="bookappoinment" element={<BookAppoinment/>}/>
                                 <Route path="display" element={<AppoinmentData/>}/>
                                 <Route path="contact" element={<Contact/>}/>
                                 <Route path="adddoctor" element={<AddDoctor/>}/>
                             </Route>
                      </Routes>
       </BrowserRouter>
    </>
  )
}
export default App