

import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from "axios"
import { useState } from 'react';
import {message} from "antd"
const Insert=()=>{
     const [input,setInput]=useState({})
     const [uploadImage,setUploadImage]=useState("");

     const handleInput=(e)=>{
         const name=e.target.name;;
         const value=e.target.value;
         setInput(values=>({...values, [name]:value}));
         console.log(input);
        }

        const handleImage=(e)=>{
           console.log(e.target.files[0]);
           setUploadImage(e.target.files[0]);
        }


     const handleSubmit=async()=>{
          
        const formData= new FormData();
        formData.append("file", uploadImage);  
        formData.append("upload_preset", "MyPhotos"); //upload Reset 
        formData.append("cloud_name",'dvaamwh6h'); //cload name  dvaamwh6h

        const response = await axios.post('https://api.cloudinary.com/v1_1/dvaamwh6h/image/upload', formData); 
        console.log(response.data.url); 


        let api="http://localhost:8000/user/datasave";
        const resp1=await axios.post(api,{imgname:response.data.url, ...input})
        message.success("Data Inserted!!");
     }

    return(
        <>
      <div style={{ marginTop:"80px"}} align="center">
             <div style={{width:"400px", border:"2px solid black",borderRadius:"15px"}}>
                <div style={{width:"380px",padding:"20px"}}>
                <FloatingLabel controlId="floatingInput" label="Roll No" className="mb-1">
                <Form.Control type="text" placeholder="name@example.com" name='rollno' value={input.rollno} onChange={handleInput} />
                </FloatingLabel>

                <FloatingLabel controlId="floatingPassword" label="Enter Name" className="mb-1">
                <Form.Control type="text" placeholder="name@example.com" name='name' value={input.name} onChange={handleInput}/>
                </FloatingLabel>

                <FloatingLabel controlId="floatingPassword" label="Enter City" className="mb-1">
                <Form.Control type="text" placeholder="name@example.com"  name='city' value={input.city} onChange={handleInput}/>
                </FloatingLabel>

                <FloatingLabel controlId="floatingPassword" label="Fees" className="mb-1">
                <Form.Control type="number" placeholder="name@example.com" name='fees' value={input.fees} onChange={handleInput}/>
                </FloatingLabel>

                <FloatingLabel controlId="floatingPassword" label="Upload File" className="mb-1">
                <Form.Control type="file" placeholder="name@example.com" name='file'onChange={handleImage}/>
                </FloatingLabel>
                    
                <Button variant="success" onClick={handleSubmit} style={{marginBottom:"-10px"}}>Submit</Button>
                    
                </div>
             </div>
      </div>
        </>
    )
}
export default Insert;