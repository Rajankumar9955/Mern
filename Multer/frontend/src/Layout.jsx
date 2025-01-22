

import { Outlet } from "react-router-dom"
import TopMenu from "./Components/TopMenu"
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
            <h4>www.Rajan Kumar Website.com</h4>
        </div>
       
        
        </>
    )
}
export default Layout