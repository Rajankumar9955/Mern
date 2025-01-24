

import { useState } from 'react';
import Button from 'react-bootstrap/Button';

import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import axios from "axios"
import {message} from "antd"
import { useNavigate } from 'react-router-dom';
import LocaleProvider from 'antd/es/locale';

const Login=()=>{
    const navigate=useNavigate();
    const [userid, setUserId]=useState("");
    const [password,setPassword]=useState("");
    const [usertype,setUserType]=useState("");


    const handleSubmit=async()=>{
           if(usertype=='ADMIN'){
                try {
                    let api="http://localhost:8080/admin/adminlogin";
                     let response=await axios.post(api,{userid:userid,password:password});
                     console.log(response.data)
                  if(response.status==200)
                  {
                      // ----------------------------------------login start --
                      localStorage.setItem("userid", response.data.userid);
                      //   ----------------------------------------login end
                        message.success("Login SuccessFully");
                        navigate("/dashboard");
                  }
                } catch (error) {
                     message.error(error.response.data.msg);
                }
           }
           else if(usertype=='EMPLOYEE')
           {
               try {
                  let api="http://localhost:8080/users/userlogin";
                  let response=await axios.post(api,{userid:userid, password:password})
                  console.log(response.data);
                  if(response.status==200)
                  {
                    // ----------------------------------------login start --
                      localStorage.setItem("username", response.data.name);
                      localStorage.setItem("useremail", response.data.email);
                    //   ----------------------------------------login end
                       message.success("Login SuccessFully");
                       navigate("/users")
                  }
               } catch (error) {
                        message.error(error.response.data.msg);
               }
           }
    }
    
    return(
        <>
            <div>
               <div id='firstdiv' align="center">
                  <div id='seconddiv' align="center">
      
                              <div id='modelss'>        
                                 <FloatingLabel id='formss'
                                 controlId="floatingInput" label="Enter Your ID" className="mb-1">
                                 <Form.Control type="email" placeholder="name@example.com" value={userid} onChange={(e)=>{setUserId(e.target.value)}} />
                                 </FloatingLabel>
                                 <FloatingLabel controlId="floatingPassword" label=" Enter Your Password" id='formsss'className="mb-1">
                                 <Form.Control type="password" placeholder="Password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                                 </FloatingLabel>

                                 <Form.Select aria-label="Default select example" id='options'className="mb-2" name='usertype'  value={usertype}  onChange={(e)=>{setUserType(e.target.value)}}>
                                  <option>Login as a</option>
                                  <option value="ADMIN">ADMIN</option>
                                  <option value="EMPLOYEE">EMPLOYEE</option>
                                 </Form.Select>

                                 <Button variant="success" id='btn' onClick={handleSubmit}>Log-in</Button>
                              </div>
                  </div>
               </div>
            </div>
        </>
    )
}
export default Login;