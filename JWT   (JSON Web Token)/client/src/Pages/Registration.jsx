
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

import Button from "react-bootstrap/Button"
import { useState } from 'react';
import {message} from 'antd'
import axios from 'axios'
const Registration=()=>{

     const [input,setInput]=useState({});

     const handleInput=(e)=>{
         const name=e.target.name;
         const value=e.target.value;
         setInput((values)=>({...values, [name]:value}));
         console.log(input);
     }

    const handleSubmit=async()=>{
            let api="http://localhost:8000/user/registration";
            try {
                   const response= await axios.post(api,input);
                   message.success(response.data.msg);
            } catch (error) {
                console.log(error);
            }
    }
    return(
        <>
        <h1 align="center">Registration</h1>
        <div align="center">
           <div style={{width:"400px",marginTop:"15px", marginBottom:"15px"}} align="center">
             <FloatingLabel controlId="floatingInput" label="Enter Name" className="mb-1">
                <Form.Control type="text" placeholder="name@example.com" name='name' value={input.name} onChange={handleInput}/>
             </FloatingLabel>

             <FloatingLabel controlId="floatingPassword" label="Enter Contact No" className="mb-1">
               <Form.Control type="text" placeholder="Password" name='contact' value={input.contact} onChange={handleInput}/>
             </FloatingLabel>

             <FloatingLabel controlId="floatingPassword" label="Enter Email" className="mb-1">
               <Form.Control type="email" placeholder="Password" name='email' value={input.email} onChange={handleInput}/>
             </FloatingLabel>

             <FloatingLabel controlId="floatingPassword" label="Enter Password" className="mb-1">
               <Form.Control type="password" placeholder="Password" name='password' value={input.password} onChange={handleInput}/>
             </FloatingLabel>

             <Button variant="success" onClick={handleSubmit}>Register Now!</Button>
           </div>
           </div>
        </>
    )
}
export default Registration