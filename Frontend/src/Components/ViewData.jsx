import { Link } from "react-router-dom";

const ViewData=()=>{
    return(
        <>
                  <div id="view">
                            <div id="view2">
                                <Link to="home" id="btn">Home</Link>
                            </div>
                            <div id="view1">
                                <Link to="insert" id="btn">Insert</Link>
                            </div>
                            <div  id="view1">
                                <Link to="display" id="btn">Display</Link>
                            </div>
                            <div id="view1">
                                <Link to="update" id="btn">Update</Link>
                            </div>
                            <div id="view1">
                                <Link to="contact" id="btn">Contact</Link>
                            </div>
                  </div>
                
                  <div id="view3">
                    <div><a href="#" id="btn2">Sign-in</a></div> |
                    <div><a href="#" id="btn2">Sign-out</a></div>
                  </div>
                  <div>
                          <div id="stgs"><a href="#" style={{marginLeft:"10px",textDecoration:"none"}}>Settings</a></div>
                  </div>
        </>
    )
}
export default ViewData;