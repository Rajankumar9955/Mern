
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import axios from 'axios'
const Insert=()=>{
    const [input,setInput]=useState({})
    const [myfile,setMyfile]=useState("");

    const onChangeHandler=(e)=>{
        console.log(e.target.files[0]);
        setMyfile(e.target.files[0]);
    }
    const handleInput=(e)=>{
        let name=e.target.name;
        let value=e.target.value
        setInput(values=>({...values, [name]:value}));
        console.log(input);
    }
    const handleSubmit = async()=>{
        const formData=new FormData();
        formData.append('photo', myfile);
        formData.append('rollno', input.rollno);
        formData.append('name', input.name);
        formData.append('city', input.city);
        
        const res=await axios.post('http://localhost:8000/multerexample/uploadfile', formData)
        alert("SuccessFully Upload On Server");
    };
    return(
        <>
             <h1 align="center">Insert Pages</h1>
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

                <FloatingLabel controlId="floatingPassword" label="Upload File" className="mb-1">
                <Form.Control type="file" placeholder="name@example.com" name='file' onChange={onChangeHandler}/>
                </FloatingLabel>
                    
                <Button variant="success" onClick={handleSubmit} style={{marginBottom:"-10px"}}>Submit</Button>
                    
                </div>
             </div>
      </div>
        </>
    )
}
export default Insert