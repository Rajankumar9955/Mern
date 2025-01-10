
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

import { Link, useNavigate } from 'react-router-dom';
const TopMenu=()=>{
    return(
        <>
<Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home" >CAR'S MANAGEMENT SYSTEM</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <div>
            Signed in as: <a href="#">Rajan Kumar</a>
            </div>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
          
        </>
    )
}
export default TopMenu;