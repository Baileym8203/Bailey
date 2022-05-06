import react from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap';
import './navbar.css'

const NavbarItem = () => {

return (
  <Navbar style={{ backgroundColor: "rgb(175, 77, 20)"}}
  fixed="top"
  variant="dark" expand="lg">
  <Container fluid style={{display: "flex", justifyContent: "flex-end"}}>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse className="collapse --links-centering" id="basic-navbar-nav">
      <Nav className='mx-auto'>
        <Nav.Link href="/Bailey">Intro</Nav.Link>
        <Nav.Link href="#link">Projects</Nav.Link>
        <Nav.Link href="/">Services</Nav.Link>
        <Nav.Link href="#link">About</Nav.Link>
        <Nav.Link href="/">Contact</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
);
}

export default NavbarItem;
