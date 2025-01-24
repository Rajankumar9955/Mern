
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import axios from "axios";
import {message} from "antd"
import { useNavigate } from 'react-router-dom';

const Login=()=>{
  const navigate=useNavigate();
    const [useremail,setUserEmail]=useState("");
    const [password, setPassword]=useState("");
    const [usertype,setUserType]=useState("");
     console.log(useremail,password,usertype);
   

    const handleSubmit= async()=>{
        if(usertype=='Doctor')
        {
          try {
            let api="http://localhost:8000/admin/adminlogin";
            let response=await axios.post(api,{useremail:useremail, password:password});
            console.log(response.data);
            if(response.status==200)
            {
                  message.success("Now! You are loged-In");
                  navigate("/dashboard")
            }
          } catch (error) {
            message.error(error.response.data.msg);
          }
        }
        else if(usertype=='Patient')
        {
          try {
             let api="http://localhost:8000/patient/patientlogin";
             const response=await axios.post(api,{useremail:useremail, password:password});
             console.log(response.data);
          } catch (error) {
            message.error(error);
          }
        }
    }

    return(
        <>
      <div align="center"style={{marginTop:"60px",height:"410px"}} id='loginone'>
        <h4>Login Here!</h4>
        <div id='logintwo'>
        <div style={{width:"400px"}} id='loginthree'>
      <FloatingLabel controlId="floatingInput" label="Email" className="mb-1">
        <Form.Control type="email" placeholder="name@example.com" name='email'  value={useremail} onChange={(e)=>{setUserEmail(e.target.value)}} />
      </FloatingLabel>
      <FloatingLabel controlId="floatingInput" label="Password" className="mb-1">
        <Form.Control type="password" placeholder="name@example.com"  name='password' value={password}  onChange={(e)=>{setPassword(e.target.value)}} />
      </FloatingLabel>
      
      <Form.Select aria-label="Default select example" id='options'className="mb-2" name='usertype'  value={usertype}  onChange={(e)=>{setUserType(e.target.value)}}>
                                  <option>Select Option</option>
                                  <option >Doctor</option>
                                  <option >Patient</option>
                                 </Form.Select>
      
      <Button variant="success" onClick={handleSubmit}>Login</Button>
        </div>
      </div>
      </div>
        </>
    )
}
export default Login;