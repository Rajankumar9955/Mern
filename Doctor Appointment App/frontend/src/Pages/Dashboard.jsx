import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link,Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState , useEffect} from 'react';
const Dashboard=()=>{

const navigate=useNavigate();
    const [adminEmail, setAdminEmail]=useState("");
    const [userType, setUserType]= useState("");

    useEffect(()=>{
        setAdminEmail(localStorage.getItem("adminemail"));
        setUserType(localStorage.getItem("usertype"));
    },[])

    const logout=()=>{
        localStorage.clear();
        navigate("/login");
    }
    return(
        <>
            <h1 align="center" style={{marginTop:"15px"}}>Welcome : {userType} </h1>
            <h4 align="center" style={{marginTop:"px"}}>Email : {adminEmail}</h4>
            <Container fluid>
                <Row>
                       <Col md="4">
                                  <div id='dashboard1'>
                                    <div id='dashboard2'>
                                      <Link to="adddoctor" >ADD Doctor</Link>
                                    </div>
                                    <Button variant="warning" onClick={logout} id='btn1121'>Log-Out</Button>

                                  </div>
                       </Col>



                       <Col md="8">
                                    <div id='dashboard21'>
                                        <div id='dashboard3'>
                                                <Outlet/>
                                        </div>
                                    </div>

                       </Col>

                </Row>
            </Container>
            
        </>
    )
}
export default Dashboard;