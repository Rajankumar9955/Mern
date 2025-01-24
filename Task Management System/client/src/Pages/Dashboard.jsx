
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link, useNavigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { message } from 'antd';
const Dashboard=()=>{
    const navigate=useNavigate()

    // useEffect(()=>{
    //     if(localStorage.getItem("userid")==null)
    //     {
    //         navigate("/login");
    //     }
        
    // },[])
    // const logout=()=>{
    //     localStorage.clear();
    //     message.success("You are Loged-out");
    //     navigate("/login")
    // }

    return(
        <>
         <h2 align="center" style={{fontFamily:"cursive"}}>ADMIN DASHBOARD</h2>
        <div style={{marginTop:"20px"}}>
    <Container fluid>
            <Row>
              <Col>
                       <div id='usercreatemain'>
                        <div id='usercreatesecond' align="center" >
                              <div id='usercreate'>
                               <Link to="userscreate" style={{marginLeft:"5px",textDecoration:"none",color:"black"}} >New <br />Create</Link>
                              </div>
                              <div id='usercreate1'>
                               <Link to="userscreate" style={{marginLeft:"5px",textDecoration:"none",color:"black"}} >Assign <br />Task</Link>
                              </div>
                              <div id='usercreate1'>
                               <Link to="userscreate" style={{marginLeft:"5px",textDecoration:"none",color:"black"}} >Task<br />Status</Link>
                              </div>
                              <Button variant="warning"  style={{marginTop:"20px"}}>Log-Out</Button>
                        </div>
                       </div>
              </Col>
              <Col>
                            <div>
                                <Outlet/>
                            </div>
              </Col>
            </Row>
    </Container>
    </div>
        </>
    )
}
export default Dashboard;