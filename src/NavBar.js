import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



function NavBar() {
    return (
      <div>
        <Navbar className="CustomNavBar" bg="light" expand="lg">
        <Container style={{fontSize: 20}}>
            <Navbar.Brand href="/" style={{fontSize: 30}}>Bernard Liebeskind</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="/background">Background</Nav.Link>
                <Nav.Link href="/publications">Publications</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
      </div>
    );
  }
  
  export default NavBar;