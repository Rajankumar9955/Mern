
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import axios from "axios";
import {message} from "antd"

const Registration=()=>{
    const [input,setInput]=useState({})

    
    const handleInput=(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        setInput(values=>({...values, [name]:value}));
        console.log(input);
    }

    const handleSubmit=()=>{
        let api="http://localhost:8000/doctors/registration";
        axios.post(api,input).then((res)=>{
            console.log(input);
            message.success("Your Registration Has Been Done!!")
        })
    }

    return(
        <>
      <div align="center"style={{marginTop:"60px",height:"410px"}} id='loginone'>
        <h4>Patient's Registration</h4>
        <div id='logintwo'>
        <div style={{width:"400px"}} id='loginthree'>
        <FloatingLabel controlId="floatingInput" label="Name" className="mb-1">
        <Form.Control type="text" placeholder="name@example.com" name='name' value={input.name}  onChange={handleInput} />
      </FloatingLabel>
      <FloatingLabel controlId="floatingInput" label="Email" className="mb-1">
        <Form.Control type="email" placeholder="name@example.com" name='email'  value={input.email} onChange={handleInput} />
      </FloatingLabel>
      <FloatingLabel controlId="floatingInput" label="Password" className="mb-1">
        <Form.Control type="password" placeholder="name@example.com"  name='password' value={input.password}  onChange={handleInput} />
      </FloatingLabel>
      <Button variant="success" onClick={handleSubmit}>Register Here!!</Button>
        </div>
      </div>
      </div>
        </>
    )
}
export default Registration;