

import Header from "./Components/Header";
import TopMenu from "./Components/TopMenu";
import Footer from "./Components/Footer";
import { Outlet } from "react-router-dom";

// import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const Layout=()=>{
    return(
        <>
             <Header/>
             <TopMenu/>
{/* <Container> */}
      <Row>
        <Col style={{border:"2px solid black"}}>1 of 2</Col>
      
        <Col>
            <div style={{border:"2px solid black"}}>
                  <Outlet/>
             </div>
        </Col>
      </Row>
    {/* </Container> */}
            
             <Footer/>
        </>
    )
}
export default Layout;