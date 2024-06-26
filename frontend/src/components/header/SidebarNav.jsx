import './header.css'
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { LiaCookieBiteSolid } from "react-icons/lia";
import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import { VscSignOut, VscSignIn } from "react-icons/vsc";
import Offcanvas from "react-bootstrap/Offcanvas";
const SidebarNav = () => {
  return (
    <>
      <header>
        <Navbar
          expand={false}
          variant="dark"
          bg="dark"
          data-bs-theme="dark"
          className="sidebar-nav"
        >
          <Container>
            <Navbar.Brand href="/" className="d-flex align-items-center">
              <span className="me-1">MERN-AUTH</span>
              <LiaCookieBiteSolid />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="offcanvasNavbar" />
            <Navbar.Offcanvas
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbar"
              placement="start"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>
                  <div className="d-flex align-items-center">
                    <span className="me-1">MERN-AUTH</span>
                    <LiaCookieBiteSolid />
                  </div>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav>
                  <Nav.Link href="/login">
                    <VscSignIn /> <span>Sign In</span>
                  </Nav.Link>
                  <Nav.Link href="/register">
                    <VscSignOut /> <span>Sign Up</span>
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      </header>
    </>
  );
};

export default SidebarNav;
