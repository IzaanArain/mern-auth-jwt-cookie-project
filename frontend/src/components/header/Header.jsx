import "./header.css";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { LiaCookieBiteSolid } from "react-icons/lia";
import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import { VscSignOut, VscSignIn } from "react-icons/vsc";
import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
  return (
    <>
      <header className="header-section">
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <LinkContainer to="/">
              <Navbar.Brand className="d-flex align-items-center">
                <span className="me-1">MERN-AUTH</span>
                <LiaCookieBiteSolid />
              </Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <LinkContainer to="/login">
                  <Nav.Link>
                    <VscSignIn /> <span>Sign In</span>
                  </Nav.Link>
                </LinkContainer>
                <LinkContainer>
                  <Nav.Link>
                    <VscSignOut /> <span>Sign Up</span>
                  </Nav.Link>
                </LinkContainer>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </>
  );
};

export default Header;
