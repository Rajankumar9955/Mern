


import { message } from 'antd';
import axios from 'axios';
import { useState } from 'react';
import Button from "react-bootstrap/Button"
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
const Login=()=>{
    const navigate=useNavigate()
    const [email,setEmail]=useState("");
    const [password, setPassword]=useState("")
    console.log(email,password)

    const handleSubmit=async()=>{
           let api="http://localhost:8000/user/login";
           try {
                const response=await axios.post(api, {email:email, password:password})
                console.log(response.data);
                localStorage.setItem("token", response.data.token);
                navigate("/home")
           } catch (error) {
            console.log(error)
           }
    }
    return(
        <>
         <h1 align="center">Login</h1>
        <div align="center">
           <div style={{width:"400px",marginTop:"15px", marginBottom:"15px"}} align="center">
             <FloatingLabel controlId="floatingInput" label="Enter Email" className="mb-1">
                <Form.Control type="email" placeholder="name@example.com" name='email' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
             </FloatingLabel>

             <FloatingLabel controlId="floatingPassword" label="Enter Password" className="mb-1">
               <Form.Control type="password" placeholder="Password" name='password' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
             </FloatingLabel>


             <Button variant="success" onClick={handleSubmit}>Login Now!</Button>
           </div>
           </div>
        </>
    )
}
export default Login