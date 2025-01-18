

import {Outlet} from "react-router-dom";
import TopMenu from "./Components/Topmenu";

const Layout=()=>{
    return(
        <>
        <div>
        <TopMenu/>
        </div>
        
        <div>
            <Outlet/>
        </div>
        </>
    )
}
export default Layout;