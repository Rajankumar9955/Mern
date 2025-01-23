

import { message } from 'antd';
import axios from 'axios';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';

import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';


const UserCreate=()=>{
    const [input,setInput]=useState({});
    
    const handleInput=(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        setInput(values=>({...values, [name]:value}));
        console.log(input);
    }
    const handleSubmit=()=>{
            let api="http://localhost:8080/users/usercreate";
             axios.post(api,input);
            message.success("User Created!!");
    }
    return(
        <>
         
         <div>
               <div id='firstdiv1' >
                  <div id='seconddiv' align="center">
      
                              <div id='modelss'>      
                                 <FloatingLabel controlId="floatingPassword" label="Enter User ID" id='formss1'className="mb-1">
                                 <Form.Control type="=text" placeholder="Password" name='userid' value={input.userid} onChange={handleInput}/>
                                 </FloatingLabel>  
                                 <FloatingLabel id='formsss'
                                 controlId="floatingInput" label="Enter Name" className="mb-1">
                                 <Form.Control type="text" placeholder="name@example.com"  name='name' value={input.name} onChange={handleInput}/>
                                 </FloatingLabel>
                                 <FloatingLabel controlId="floatingPassword" label="Enter Email" id='formsss'className="mb-1">
                                 <Form.Control type="email" placeholder="Password"  name='email' value={input.email} onChange={handleInput}/>
                                 </FloatingLabel>
                                 <FloatingLabel controlId="floatingPassword" label="Enter Password" id='formsss'className="mb-1">
                                 <Form.Control type="password" placeholder="Password" name='password' value={input.password} onChange={handleInput}/>
                                 </FloatingLabel>
                                 <Button variant="success" id='btn' onClick={handleSubmit}>CREATE</Button>
                              </div>
                  </div>
               </div>
            </div>
        
        </>
    )
}
export default UserCreate