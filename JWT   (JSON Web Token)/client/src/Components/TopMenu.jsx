import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from "react-bootstrap/Button"
import {Link, useNavigate} from "react-router-dom"
const TopMenu=()=>{
  const navigate=useNavigate()
  const logout=()=>{
    localStorage.clear();
     navigate("/home")
  }
    return(
        <>

       {localStorage.getItem("username")?(
        <>
       <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">JWT JSON WEB TOKEN</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="home">Home</Nav.Link>
          </Nav>
          Welcome:{localStorage.getItem("username")}  
          Email:{localStorage.getItem("useremail")}   
          <Button variant='warning' onClick={logout}>Logout</Button>
        </Container>
      </Navbar>
       </>
       ):(
        <>
        <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">JWT JSON WEB TOKEN</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="home">Home</Nav.Link>
            <Nav.Link as={Link} to="login">Login</Nav.Link>
            <Nav.Link as={Link} to="Registration">Registration</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
        </>
       )}

        </>
    )
}
export default TopMenu