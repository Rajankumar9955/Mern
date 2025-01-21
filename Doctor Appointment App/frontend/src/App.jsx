
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Layout from "./Layout"
import Home from "./Pages/Home"
import BookAppoinment from "./Pages/BookAppoinment"
import Display from "./Pages/Display"
import Contact from "./Pages/Contact"
import AddDoctor from "./Pages/AddDoctor"
import Book from "./Pages/Book"

const App=()=>{
  return(
    <>
       <BrowserRouter>
                      <Routes>
                             <Route path="/" element={<Layout/>}>
                                 <Route index element={<Home/>}/>
                                 <Route path="home" element={<Home/>}/>
                                 <Route path="bookappoinment" element={<BookAppoinment/>}/>
                                 <Route path="display" element={<Display/>}/>
                                 <Route path="contact" element={<Contact/>}/>
                                 <Route path="adddoctor" element={<AddDoctor/>}/>
                                 <Route path="book/:id" element={<Book/>}/>
                                 <Route path="registration" element={<Book/>}/>
                                 <Route path="login" element={<Book/>}/>
                             </Route>
                      </Routes>
       </BrowserRouter>
    </>
  )
}
export default App