

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link, Outlet, useNavigate} from 'react-router-dom';
import { useEffect } from 'react';

const EmployeeDashboard=()=>{

const navigate=useNavigate()

  useEffect(()=>{
              if(localStorage.getItem("username")==null)
              {
                navigate("/login")
              }
  },[])
     
    return(
        <>
          <h2 align="center" style={{fontFamily:"cursive"}}>USER DASHBOARD</h2>
         <div style={{marginTop:"20px"}}>
    <Container fluid>
            <Row>
              <Col md="5">
              <div id='usercreatemain'>
                        <div id='usercreatesecond' align="center" >
                              <div id='usercreat'>
                               <Link to="empprofile" style={{marginLeft:"5px",textDecoration:"none",color:"black"}} >Profile</Link>
                              </div>
                              <div id='usercreat'>
                               <Link to="taskshow" style={{marginLeft:"5px",textDecoration:"none",color:"black"}} >Task Show</Link>
                              </div>
                        </div>  
              </div>    
              </Col>

              <Col md="7">
                           
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
export default EmployeeDashboard