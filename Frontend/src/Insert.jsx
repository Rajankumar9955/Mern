
import { useState } from "react";
import axios from "axios";

import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Insert=()=>{
  const [input,setInput]=useState({});
  const handleInput=(e)=>{
    const name=e.target.name;
    const value=e.target.value;
    setInput(values=>({...values, [name]:value}));
    console.log(input);
  }
  const handleSubmit=()=>{
    let api="http://localhost:8000/students/datasave";
    axios.post(api,input).then((res)=>{
      console.log("Data Save!!")
      alert("Data Saved!!");
    })
    .catch((error)=>{
      console.log("Error Saving Data", error)
    })
  }
  return(
    <>
    <div align="center">
   <h1 >Please Insert Student Data!!!</h1>
        <div style={{width:"400px",marginTop:"40px"}}>
        <FloatingLabel controlId="floatingInput" label="Rollno" className="mb-2">
        <Form.Control type="text"   name="rollno" value={input.rollno} onChange={handleInput}/></FloatingLabel>
        <FloatingLabel controlId="floatingInput" label="Name" className="mb-2">
        <Form.Control type="text"  name="name" value={input.name} onChange={handleInput}/></FloatingLabel>
        <FloatingLabel controlId="floatingInput" label="City" className="mb-2">
        <Form.Control type="text"  value={input.city} onChange={handleInput}/></FloatingLabel>
        <FloatingLabel controlId="floatingInput" label="Fees" className="mb-2">
        <Form.Control type="email"   name="email" value={input.fees} onChange={handleInput}/></FloatingLabel>
        <Button variant="success" onClick={handleSubmit}>Success</Button>
        </div>
      </div>
    </>
  )
}
export default Insert;