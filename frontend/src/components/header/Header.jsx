import "./header.css";
import { Container, Nav, Navbar, NavDropdown, Badge } from "react-bootstrap";
import { LiaCookieBiteSolid } from "react-icons/lia";
import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import { VscSignOut, VscSignIn } from "react-icons/vsc";
import { LinkContainer } from "react-router-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useLogoutMutation } from "../../Redux/slices/auth/usersApiSlice";
import { clearCredentials } from "../../Redux/slices/auth/AuthSlice";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { userInfo } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [logout, { isLoading }] = useLogoutMutation();

  const logoutHandler = async () => {
    try {
      await logout().unwrap();
      dispatch(clearCredentials());
      navigate("/")
    } catch (err) {
      console.log(err.data.message || err.error)
    }
  };
  
  return (
    <>
      <header className="header-section">
        <Navbar bg="dark" variant="dark" expand="lg" className="custom-navbar">
          <Container>
            <LinkContainer to="/">
              <Navbar.Brand className="d-flex align-items-center">
                <span className="me-1" style={{ fontSize: "1.2rem" }}>
                  MERN-AUTH
                </span>
                <LiaCookieBiteSolid style={{ fontSize: "1.5rem" }} />
              </Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                {userInfo ? (
                  <>
                    <NavDropdown title={userInfo.name} id="username">
                      <LinkContainer to="/profile">
                        <NavDropdown.Item>Profile</NavDropdown.Item>
                      </LinkContainer>
                      <NavDropdown.Item onClick={logoutHandler}>
                        Logout
                      </NavDropdown.Item>
                    </NavDropdown>
                  </>
                ) : (
                  <>
                    <LinkContainer to="/login">
                      <Nav.Link className="d-flex align-items-center">
                        <VscSignIn
                          style={{ fontSize: "1.2rem", marginRight: "0.2rem" }}
                        />{" "}
                        <span>Sign In</span>
                      </Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/register">
                      <Nav.Link className="d-flex align-items-center">
                        <VscSignOut
                          style={{ fontSize: "1.2rem", marginRight: "0.2rem" }}
                        />{" "}
                        <span>Sign Up</span>
                      </Nav.Link>
                    </LinkContainer>
                  </>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </>
  );
};

export default Header;
