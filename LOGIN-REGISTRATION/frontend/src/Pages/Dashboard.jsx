
import {useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import { Outlet,Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
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
         <h1 align="center" style={{marginTop:"10px"}}>Dashboard</h1>
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-around", height:"450px"}}>
            <div style={{marginTop:"-40px"}}> 
                <h1>Welcome : {username}</h1>
                <h2> Email : {useremail}</h2>
        
                <Button variant="warning" onClick={Logout}>Log-Out</Button>


                 <div style={{marginTop:"25px"}}>
                       <Link to="resetpass" style={{textDecoration:"none"}}>Reset Password</Link>
                 </div>
            </div>
{/*============================ =========================================================== */}
       
            <div style={{width:"400px"}}>
                  <Outlet/>
            </div>
        </div>
        </>
    )
}
export default Dashboard