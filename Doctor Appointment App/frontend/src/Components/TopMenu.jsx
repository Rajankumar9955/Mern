
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const TopMenu=()=>{
    return(
        <>
        <div>
        <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand as={Link} to="home">Doctor Appoinment Booking System</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="home">Home</Nav.Link>
            <Nav.Link as={Link} to="bookappoinment">Appoinment</Nav.Link>
            <Nav.Link as={Link} to="display">Your_Booking</Nav.Link>
            <Nav.Link as={Link} to="contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
        </div>
        </>
    )
}
export default TopMenu