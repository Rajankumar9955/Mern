import { Link } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const TopMenu=()=>{
    return(
        <>
<Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home" >CAR'S MANAGEMENT SYSTEM</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">Rajan Kumar</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
          
        </>
    )
}
export default TopMenu;