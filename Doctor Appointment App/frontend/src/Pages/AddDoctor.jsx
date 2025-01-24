


import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import axios from "axios";
import {message} from "antd"

const AddDoctor=()=>{
    const [input,setInput]=useState({})

    
    const handleInput=(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        setInput(values=>({...values, [name]:value}));
        console.log(input);
    }

    const handleSubmit=()=>{
        let api="http://localhost:8000/doctors/datasave";
        axios.post(api,input).then((res)=>{
            console.log(input);
            message.success("Doctor Data Added!!")
        })
    }

    return(
        <>
      <div align="center"style={{marginTop:"18px",height:"410px"}} id='loginone'>
        <div id='logintwo11'>
        <div style={{width:"400px"}} id='loginthree'>
        <FloatingLabel controlId="floatingInput" label="Doctor Name" className="mb-1">
        <Form.Control type="text" placeholder="name@example.com" name='doctorname' value={input.doctorname}  onChange={handleInput} />
      </FloatingLabel>
      <FloatingLabel controlId="floatingInput" label="Department" className="mb-1">
        <Form.Control type="text" placeholder="name@example.com" name='department'  value={input.department} onChange={handleInput} />
      </FloatingLabel>
      <FloatingLabel controlId="floatingInput" label="Age" className="mb-1">
        <Form.Control type="text" placeholder="name@example.com"  name='age' value={input.age}  onChange={handleInput} />
      </FloatingLabel>
      <FloatingLabel controlId="floatingInput" label="Shift Time" className="mb-1">
        <Form.Control type="text" placeholder="name@example.com" name='shifttime'  value={input.shifttime} onChange={handleInput} />
      </FloatingLabel>
      <FloatingLabel controlId="floatingInput" label="Fees" className="mb-1">
        <Form.Control type="text" placeholder="name@example.com" name='fees'  value={input.fees} onChange={handleInput} />
      </FloatingLabel>
      <Button variant="success" onClick={handleSubmit}>ADD</Button>
        </div>
      </div>
      </div>
        </>
    )
}
export default AddDoctor;