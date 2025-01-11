
import {useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";
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
        
        <h1> User Dashboard</h1>
        <h1>Wel-come : {username}</h1>
        <h2> Email : {useremail}</h2>

        <button onClick={Logout}>Log-Out</button>
       


       div

        </>
    )
}
export default Dashboard