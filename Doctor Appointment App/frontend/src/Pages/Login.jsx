
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import axios from "axios";
import {message} from "antd"

const Login=()=>{
    const [input,setInput]=useState({})

    
    const handleInput=(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        setInput(values=>({...values, [name]:value}));
        console.log(input);
    }

    const handleSubmit=()=>{
        let api="http://localhost:8000/doctors/login";
        axios.post(api,input).then((res)=>{
            console.log(input);
            message.success("Your Registration Has Been Done!!")
        })
    }

    return(
        <>
      <div align="center"style={{marginTop:"100px",height:"410px"}}>
        <div style={{width:"400px"}}>
      <FloatingLabel controlId="floatingInput" label="Email" className="mb-1">
        <Form.Control type="email" placeholder="name@example.com" name='email'  value={input.email} onChange={handleInput} />
      </FloatingLabel>
      <FloatingLabel controlId="floatingInput" label="Password" className="mb-1">
        <Form.Control type="password" placeholder="name@example.com"  name='password' value={input.password}  onChange={handleInput} />
      </FloatingLabel>
      <Button variant="success" onClick={handleSubmit}>Login</Button>
        </div>
      </div>
        </>
    )
}
export default Login;