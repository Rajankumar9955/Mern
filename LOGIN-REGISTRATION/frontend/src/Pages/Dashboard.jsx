
import {useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import { Outlet,Link } from "react-router-dom";
const Dashboard=()=>{
    const [username,setUserName]=useState("");
    const [useremail,setUserEmail]=useState("");
    const navigate=useNavigate();

    useEffect(()=>{
         if(localStorage.getItem("username")==null)
         {
            navigate("/home");
         }
         else
         {
            setUserName(localStorage.getItem("username"));
            setUserEmail(localStorage.getItem("useremail"));
         }
    },[])

    const Logout=()=>{
        localStorage.clear();
        navigate("/home")
    }

    return(
        <>
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-around"}}>
             <div style={{marginTop:"40px"}}>
                <h1> User Dashboard</h1>
                <h1>Welcome : {username}</h1>
                <h2> Email : {useremail}</h2>
        
                <button onClick={Logout}>Log-Out</button>
               <div style={{marginTop:"25px"}}>
                     <Link to="resetpass">Reset Password</Link>
               </div>
             </div>
{/*============================ =========================================================== */}
       
            <div style={{width:"400px",marginTop:"70px"}}>
                  <Outlet/>
            </div>
       </div>
        </>
    )
}
export default Dashboard