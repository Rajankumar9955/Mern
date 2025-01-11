

import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import axios from "axios";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { message } from 'antd';
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
            localStorage.setItem("username",response.data.name);
            localStorage.setItem("useremail",response.data.email);
            console.log(response.data);

             navigate("/dashboard");
        }

    } catch (error) {
        message.error(error.response.data.msg);
    }
}
    return(
     <>

        <div align="center" >
          <div style={{width:"400px",padding:"10px",marginTop:"80px",border:"2px solid black",borderRadius:"15px"}}>
          <h4 style={{marginTop:"15px",marginBottom:"15px"}}>Login</h4>
            <div style={{width:"85%"}}>

                <FloatingLabel controlId="floatingPassword" label="Email" className="mb-1">
                  <Form.Control type="email" placeholder="Password" name='email'  value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                </FloatingLabel>
          
                <FloatingLabel controlId="floatingPassword" label="Password" className="mb-1">
                  <Form.Control type="password" placeholder="Password" name='password'  value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                </FloatingLabel>
                <Button variant="success" onClick={handleSubmit}>Success</Button>
            </div>
          </div> 
        </div> 
     </>
    )
}
export default Login;