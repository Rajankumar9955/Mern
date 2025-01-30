import { useEffect, useState } from "react"
import Button from "react-bootstrap/esm/Button";
import { useNavigate } from "react-router-dom";

const AdminProfile=()=>{
    const navigate=useNavigate();
    const [usertype,setusertype]=useState("")
    const [adminemail,setadminemail]=useState("");

    useEffect(()=>{
        if(localStorage.getItem("usertype")==null)
        {
            navigate("/login")
        }
        else
        {
            setusertype(localStorage.getItem("usertype"));
            setadminemail(localStorage.getItem("adminemail"));
        }
        
    },[])
    const logoutadmin=()=>{
        localStorage.clear();
       navigate("/login")
    }
    return(
        <>
          <div id='usersection1'>
                                   <div id='usersection2' align="center" style={{marginTop:"15px"}}>
                                        <div id='usersection3' >
                                            <div id='usersection4' align="center" >
                                            <h3 >Welcome :  {usertype}</h3>
                                            <h6 >Email : {adminemail}</h6>
                                            <Button variant="warning"  style={{marginTop:"20px"}} onClick={logoutadmin}>Log-Out</Button><br />
                                            <Button variant="secondary"  style={{marginTop:"20px"}} >Reset Password</Button>

                                             <div>
                                              <div>
                                              </div>
                                             </div>
                                            </div>
                                        </div>
                                   </div>
                            </div>
        </>
    )
}
export default AdminProfile