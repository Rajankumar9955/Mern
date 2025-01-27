import { useEffect, useState } from "react"

import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
const Patient=()=>{
    const navigate=useNavigate();
    const [adminEmail, setAdminEmail]=useState("");
    const [userType, setUserType]= useState("");

    useEffect(()=>{
        setAdminEmail(localStorage.getItem("usertype"));
        setUserType(localStorage.getItem("adminemail"));
    },[])

    const logout=()=>{
        localStorage.clear();
        navigate("/login");
    }
    return(
        <>
        
        <h1>Welcome to Patient Section!!</h1>
        <h1>Welcome : {userType}</h1>
        <h1>Email : {adminEmail}</h1>
        <Button variant="warning" onClick={logout}>Warning</Button>
          
        </>
    )
}
export default Patient