import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

/* cambio href por link y to */
import { Link } from "react-router-dom";

import CartWidget from "./CartWidget";

function NavScrollExample() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Emporio</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Link className="nav-link" to="/">
              Home
            </Link>

            <Link className="nav-link" to="/category/guatero">
              Guateros
            </Link>

            <Link className="nav-link" to="/category/alimento">
              Alimentos
            </Link>
          </Nav>
          <Form className="d-flex">
            <CartWidget var />
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
