



import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from "axios"
import { useState } from 'react';
import {message} from "antd"
import {useParams} from "react-router-dom"
const AddMoreBook=()=>{
     const [input,setInput]=useState({})
     const {id} = useParams();

     const handleInput=(e)=>{
         const name=e.target.name;;
         const value=e.target.value;
         setInput(values=>({...values, [name]:value}));
         console.log(input);
     }

     const handleSubmit=()=>{
        let api="http://localhost:8000/user/addmorebook";
        axios.post(api, {id:id, ...input}).then((res)=>{
            message.success("Data Save!!");
        })
     }

    return(
        <>
      <div style={{ marginTop:"80px"}} align="center">
             <div style={{width:"400px", border:"2px solid black",borderRadius:"15px"}}>
                <div style={{width:"380px",padding:"20px"}}>

                <FloatingLabel controlId="floatingPassword" label="Enter Book Title" className="mb-1">
                <Form.Control type="text" placeholder="Password" name='booktitle' value={input.booktitle} onChange={handleInput}/>
                </FloatingLabel>

                <FloatingLabel controlId="floatingPassword" label="Book Price Name" className="mb-1">
                <Form.Control type="text" placeholder="Password"  name='bookprice' value={input.bookprice} onChange={handleInput}/>
                </FloatingLabel>
                    
                <Button variant="success" onClick={handleSubmit} style={{marginBottom:"-10px"}}>Submit</Button>
                    
                </div>
             </div>
      </div>
        </>
    )
}
export default AddMoreBook;