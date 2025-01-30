
import { message } from 'antd';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';

import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

const ResetEmployeePass=()=>{
    const [userid,setUserid]=useState("");
    const [oldpassword,setOldPassword]=useState("");
    const [newpassword, setNewPassword]=useState("");
    const [connewpassword, setConNewPassword]=useState("");
    console.log(oldpassword,newpassword,connewpassword)
    
    useEffect(()=>{
        setUserid(localStorage.getItem("userid"))
    },[])
  
    const handleSubmit=async()=>{
        if(newpassword==connewpassword){
            try {
                let api="http://localhost:8080/users/resetemppass";
                const response=await axios.post(api,{oldpassword:oldpassword, newpassword:newpassword,userid:userid});
                message.success(response.data);
            } catch (error) {
                console.log(error)
            }            
        }else{
            message.error("New Password and OldPassword Does'nt Match")
        }
       
        
          
    }
    return(
        <>
           
         <div>
               <div id='firstdiv1' align="center">
                  <div id='seconddiv' align="center">
                              <div id='modelss'>       
                                 <FloatingLabel id='formsss' style={{marginTop:"40px"}}
                                 controlId="floatingInput" label="Old Password" className="mb-1">
                                 <Form.Control type="password" placeholder="name@example.com"  name='oldpassword' value={oldpassword}  onChange={(e)=>{setOldPassword(e.target.value)}}/>
                                 </FloatingLabel>

                                 <FloatingLabel controlId="floatingPassword" label="New Password" id='formsss'className="mb-1">
                                 <Form.Control type="password" placeholder="Password"  name='newpassword' value={newpassword} onChange={(e)=>{setNewPassword(e.target.value)}}/>
                                 </FloatingLabel>

                                 <FloatingLabel controlId="floatingPassword" label="Confirm New Password" id='formsss'className="mb-1">
                                 <Form.Control type="password" placeholder="Password"  name='connewpassword' value={connewpassword} onChange={(e)=>{setConNewPassword(e.target.value)}}/>
                                 </FloatingLabel>
                                
                                 <Button variant="success" id='btn' onClick={handleSubmit}>Now Change</Button>
                                
                              </div>
                  </div>
               </div>
            </div>
        </>
    )
}
export default ResetEmployeePass