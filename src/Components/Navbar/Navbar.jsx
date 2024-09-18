import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";

const NavbarComponents = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-blur">
        <Container fluid>
          <Navbar.Brand href="/">Shop</Navbar.Brand>

          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Products</Nav.Link>
          </Nav>




          <Navbar.Toggle />


          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <Nav.Link as={Link} to="/cart">My Bag 0</Nav.Link>
            </Navbar.Text>
          </Navbar.Collapse>

        </Container>
      </Navbar>

    </>
  );
};

export default NavbarComponents;
