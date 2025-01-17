

import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from "axios"
import { useState } from 'react';
import {message} from "antd"
const Insert=()=>{
     const [input,setInput]=useState({})

     const handleInput=(e)=>{
         const name=e.target.name;;
         const value=e.target.value;
         setInput(values=>({...values, [name]:value}));
         console.log(input);
     }

     const handleSubmit=()=>{
        let api="http://localhost:8000/user/usersave";
        axios.post(api,input).then((res)=>{
            message.success("Data Save!!");
        })
     }

    return(
        <>
      <div style={{ marginTop:"80px"}} align="center">
             <div style={{width:"400px", border:"2px solid black",borderRadius:"15px"}}>
                <div style={{width:"380px",padding:"20px"}}>
                <FloatingLabel controlId="floatingInput" label="Enter UserName" className="mb-1">
                <Form.Control type="text" placeholder="name@example.com" name='username' value={input.username} onChange={handleInput} />
                </FloatingLabel>

                <FloatingLabel controlId="floatingPassword" label="Enter Email" className="mb-1">
                <Form.Control type="email" placeholder="Password" name='email' value={input.email} onChange={handleInput}/>
                </FloatingLabel>

                <FloatingLabel controlId="floatingPassword" label="First Name" className="mb-1">
                <Form.Control type="email" placeholder="Password"  name='firstname' value={input.firstname} onChange={handleInput}/>
                </FloatingLabel>

                <FloatingLabel controlId="floatingPassword" label="Last Name" className="mb-1">
                <Form.Control type="email" placeholder="Password" name='lastname' value={input.lastname} onChange={handleInput}/>
                </FloatingLabel>
                    
                <Button variant="success" onClick={handleSubmit} style={{marginBottom:"-10px"}}>Submit</Button>
                    
                </div>
             </div>
      </div>
        </>
    )
}
export default Insert;