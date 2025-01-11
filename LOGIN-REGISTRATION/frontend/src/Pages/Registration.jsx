import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import axios from "axios";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
const Registration=()=>{
    const [input,setInput]=useState({});

    const handleInput=(e)=>{
        const {name,value}=e.target;
        setInput(values=>({...values, [name]:value}));
        console.log(input)
    }
    const handleSubmit=()=>{
        let api="http://localhost:8000/users/registration";
        axios.post(api,input).then((res)=>{
            alert("Data Inserted!!");
        })
    }
    return(
        <>
          <div align="center">
            <div style={{width:"400px",padding:"10px",marginTop:"50px",border:"2px solid black",borderRadius:"15px"}}>
                  <h4 style={{marginTop:"15px",marginBottom:"15px"}}>Registration</h4>
              <div style={{width:"92%"}}>
                <FloatingLabel controlId="floatingInput" label="Name" className="mb-1">
                  <Form.Control type="text" placeholder="name@example.com" name='name' value={input.name} onChange={handleInput} />
                </FloatingLabel>
                
                <FloatingLabel controlId="floatingPassword" label="City" className="mb-1">
                  <Form.Control type="text" placeholder="Password" name='city' value={input.city} onChange={handleInput}/>
                </FloatingLabel>
          
                <FloatingLabel controlId="floatingPassword" label="Email" className="mb-1">
                  <Form.Control type="email" placeholder="Password" name='email' value={input.email} onChange={handleInput}/>
                </FloatingLabel>
          
                <FloatingLabel controlId="floatingPassword" label="Password" className="mb-1">
                  <Form.Control type="password" placeholder="Password" name='password' value={input.password} onChange={handleInput}/>
                </FloatingLabel>
                <Button variant="success" onClick={handleSubmit}>Success</Button>
              </div>
            </div> 
          </div>
        </>
    )
}
export default Registration;