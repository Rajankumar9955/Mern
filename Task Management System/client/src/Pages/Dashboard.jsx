
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/esm/Button';
import { Outlet } from 'react-router-dom';

const Dashboard=()=>{
    return(
        <>
        <div style={{marginTop:"40px"}}>
    <Container fluid>
            <Row>
              <Col>
                       <div id='usercreatemain'>
                        <div id='usercreatesecond' align="center" >
                              <div id='usercreate'>
                               <Link to="userscreate" style={{marginLeft:"5px",textDecoration:"none",color:"black"}} >New <br />Create</Link>
                              </div>
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