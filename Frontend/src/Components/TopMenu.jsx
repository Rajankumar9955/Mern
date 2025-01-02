import { Link } from "react-router-dom";

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const TopMenu=()=>{
    return(
        <>
           <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">EMPLOYEE MNG</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>

            <Nav.Link as={Link}to="home">Home</Nav.Link>
            <Nav.Link as={Link}to="insert">Insert</Nav.Link>
            <Nav.Link as={Link}to="display">Display</Nav.Link>
            <Nav.Link as={Link}to="update">Update</Nav.Link>
            <Nav.Link as={Link}to="contact">Contact</Nav.Link>

          </Nav>
          <Form className="d-flex">
            <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search"/>
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </>
    )
}
export default TopMenu;