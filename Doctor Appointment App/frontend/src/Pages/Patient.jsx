import { message } from "antd";
import { useEffect, useState } from "react"

import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
const Patient=()=>{

    const navigate=useNavigate();

    const [name, setName]=useState("");
    const [email, setEmail]= useState("");

    useEffect(()=>{
        setName(localStorage.getItem("patientname"));
        setEmail(localStorage.getItem("patientemail"));
    },[])

    const logout=()=>{
        localStorage.clear();
        message.success("Your are logged-Out MR : "+name);
        navigate("/login");
    }
    return(
        <>
        
        <h1 align="center" style={{marginTop:"15px"}}>Patient Section</h1>
        <h1>Welcome : {name}</h1>
        <h1>Email : {email}</h1>
        <Button variant="warning" onClick={logout}>Warning</Button>
          
        </>
    )
}
export default Patient