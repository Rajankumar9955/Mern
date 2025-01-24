

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { message } from 'antd';

const Users=()=>{
    const navigate=useNavigate();
    const [username,setUserName]=useState("");
    const [useremail,setUserEmail]=useState("");

    useEffect(()=>{
        if(localStorage.getItem("username")==null)
        {
            navigate("/login")
        }
        else
        {
            setUserName(localStorage.getItem("username"));
            setUserEmail(localStorage.getItem("useremail"));
        }
       
    },[])

    const logout=()=>{
        localStorage.clear();
        navigate("/login")
        message.error("Your are Loged-Out : "+username);
    }
    return(
        <>
          <h2 align="center" style={{fontFamily:"cursive"}}>USER DASHBOARD</h2>
         <div style={{marginTop:"20px"}}>
    <Container fluid>
            <Row>
              <Col md="4">
                            <div id='usersection1'>
                                   <div id='usersection2'align="center">
                                        <div id='usersection3'>
                                            <div id='usersection4'>
                                            <h3>Welcome :  {username}</h3>
                                            <h6>Email : {useremail}</h6>
                                            <Button variant="warning" onClick={logout}>Danger</Button>
                                            </div>
                                        </div>
                                        
                                   </div>
                            </div>
              </Col>
              <Col>
                            <div id='usersection11' >
                                <h4 align="center"style={{marginTop:"10px",marginBottom:"10px"}}>Your Task</h4>     
                            </div>
              </Col>
            </Row>
    </Container>
    </div>
        </>
    )
}
export default Users