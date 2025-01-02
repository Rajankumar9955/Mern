

import Header from "./Components/Header";
import TopMenu from "./Components/TopMenu";
import Footer from "./Components/Footer";
import { Outlet } from "react-router-dom";

const Layout=()=>{
    return(
        <>
             <Header/>
             <TopMenu/>
             <div id="container">
                  <Outlet/>
             </div>
             <Footer/>
        </>
    )
}
export default Layout;