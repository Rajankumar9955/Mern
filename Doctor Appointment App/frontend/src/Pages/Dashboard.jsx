
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link,Outlet } from 'react-router-dom';

const Dashboard=()=>{
    return(
        <>
            <h1 align="center" style={{marginTop:"15px"}}>Welcome Doctor</h1>
            <Container fluid>
                <Row>
                       <Col md="4">
                                  <div id='dashboard1'>
                                    <div id='dashboard2'>
                                      <Link to="adddoctor">ADD Doctor</Link>
                                    </div>
                                  </div>
                       </Col>



                       <Col md="8">
                                    <div id='dashboard2'>
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