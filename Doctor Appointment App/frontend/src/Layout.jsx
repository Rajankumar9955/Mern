import Footer from "./Components/Footer"
import TopMenu from "./Components/TopMenu"

import {Outlet} from "react-router-dom"

// import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Menu from "./Components/Menu";


const Layout=()=>{
    return(
        <>
        <div>
        <TopMenu/>
        </div>
        
      <Row>
        <Col  md="2" >
                    <Menu/>
        </Col>

        <Col md="10">
                  <div >
                      <Outlet/>
                  </div>
        </Col>
      </Row>
 
       

        <div>
            <Footer/>
        </div>
        
        </>
    )
}
export default Layout