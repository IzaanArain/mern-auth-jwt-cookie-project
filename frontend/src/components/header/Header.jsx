import './header.css'
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { LiaCookieBiteSolid } from "react-icons/lia";
import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import { VscSignOut, VscSignIn } from "react-icons/vsc";

const Header = () => {
  return (
    <>
      <header>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand href="/" className="d-flex align-items-center">
              <span className="me-1">MERN-AUTH</span>
              <LiaCookieBiteSolid />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link href="/login">
                  <VscSignIn /> <span>Sign In</span>
                </Nav.Link>
                <Nav.Link href="/register">
                  <VscSignOut /> <span>Sign Up</span>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </>
  );
};

export default Header;
