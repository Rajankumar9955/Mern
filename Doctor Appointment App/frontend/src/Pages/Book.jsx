



import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from 'react';
import axios from "axios";
import {message} from "antd"
import { useParams } from 'react-router-dom';

const Book=()=>{
    const {id}=useParams()
    const [input,setInput]=useState({})

    
   const loadData=()=>{
    let api="http://localhost:8000/doctors/editdata";
    axios.post(api,{id:id}).then((res)=>{
        setInput(res.data);
    })
   }
     useEffect(()=>{
        loadData();
     },[])

    const handleInput=(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        setInput(values=>({...values, [name]:value}));
        console.log(input);
    }

    const handleSubmit=()=>{
        let api="http://localhost:8000/bookings/datasave";
        axios.post(api,input).then((res)=>{
            console.log(input);
            message.success("Doctor Data Added!!")
        })
    }

    return(
        <>
      <div align="center"style={{marginTop:"100px",height:"410px"}}>
        <div style={{width:"400px"}}>
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
        </>
    )
}
export default Book;