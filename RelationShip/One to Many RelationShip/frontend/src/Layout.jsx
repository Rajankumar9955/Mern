
import {Outlet} from "react-router-dom";
import TopMenu from "./Components/TopMenu";

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