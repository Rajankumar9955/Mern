import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";




const Dashboard=()=>{
    const navigate=useNavigate();
    const [username,setUsername]=useState("");
    const [useremail,setUseremail]=useState("");

    useEffect(()=>{
        if(localStorage.getItem("username")==null)
        {
            navigate("/home")
        }
        else
        {
            setUsername(localStorage.getItem("username"))
            setUseremail(localStorage.getItem("useremail"))
        }
    },[])
    return(
        <>
        
        <h1>Dashboard</h1>
        <h1>{username}</h1>
        <h1>{useremail}</h1>
        
        </>
    )
}
export default Dashboard