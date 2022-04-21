import react from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap';
import './navbar.css'

const NavbarItem = () => {

return (
  <Container fluid>
    <Navbar
      style={{ backgroundColor: "rgb(175, 77, 20)" }}
      fixed="top"
      variant="dark"
    >
      <Container>
        <Nav className="ms-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  </Container>
);
}

export default NavbarItem;
