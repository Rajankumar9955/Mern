import Footer from "./Components/Footer"
import TopMenu from "./Components/TopMenu"

import {Outlet} from "react-router-dom"


const Layout=()=>{
    return(
        <>
        <div>
        <TopMenu/>
        </div>
        
        <div>
            <Outlet/>
        </div>

        <div>
            <Footer/>
        </div>
        
        </>
    )
}
export default Layout