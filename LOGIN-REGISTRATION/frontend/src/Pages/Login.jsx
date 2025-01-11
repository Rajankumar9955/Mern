

import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import axios from "axios";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
const Login=()=>{
    const navigate=useNavigate();
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("")
 
    const handleSubmit=async(e)=>{
        e.preventDefault();
    try {
        let api="http://localhost:8000/users/userlogin";
        const response=await axios.post(api,{email:email,password:password})
        if(response.status==200)
        {
             navigate("/home");
        }

    } catch (error) {
        alert(error.response.data.msg);
    }
}
    return(
        <>
           <div align="center">
                 Log-In
            <div style={{width:"400px"}}>

      <FloatingLabel controlId="floatingPassword" label="Email" className="mb-1">
        <Form.Control type="email" placeholder="Password" name='email'  value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
      </FloatingLabel>

      <FloatingLabel controlId="floatingPassword" label="Password" className="mb-1">
        <Form.Control type="password" placeholder="Password" name='password'  value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
      </FloatingLabel>
      <Button variant="success" onClick={handleSubmit}>Success</Button>
            </div>
            </div> 
        </>
    )
}
export default Login;