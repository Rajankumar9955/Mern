

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link, Outlet, useNavigate} from 'react-router-dom';
import { useEffect } from 'react';
import img from "../Images/Coding.Avif"
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
          <h4 align="center" style={{fontFamily:"cursive"}}>EMPLOYEE DASHBOARD</h4>
         <div style={{marginTop:"20px"}}>
    <Container fluid>
            <Row>
              <Col md="5" >
              <div id='bgpic1'>
              <div id='usercreatemain11' align="center">
                        <div id='usercreatesecond' align="center" >
                          <div id='img1'>
                            <img src={img} alt="Logo"  id='img2'/>
                          </div>
                              <div id='usercreat'>
                               <Link to="empprofile" style={{marginLeft:"5px",textDecoration:"none",color:"black"}} >Profile</Link>
                              </div>
                              <div id='usercreat'>
                               <Link to="taskshow" style={{marginLeft:"5px",textDecoration:"none",color:"black"}} >Task Show</Link>
                              </div>
                              <div id='usercreat'>
                               <Link to="taskshow" style={{marginLeft:"5px",textDecoration:"none",color:"black"}} >Task Show</Link>
                              </div>
                        </div>  
              </div>    
              
              </div>
              </Col>

              <Col md="7">
                           
                            <div id='outlett'>
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