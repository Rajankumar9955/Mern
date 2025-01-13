

import {Outlet} from "react-router-dom";
import TopMenu from "./Components/TopMenu";
const Layout=()=>{
    return(
        <>
              <TopMenu/>
              <div>
                <Outlet/>
              </div>
        </>
    )
}
export default Layout