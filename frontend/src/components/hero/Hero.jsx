import "./hero.css";
import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { LiaCookieBiteSolid } from "react-icons/lia";
import { LinkContainer } from "react-router-bootstrap";

const Hero = () => {
  return (
    <>
      <section className="hero-section container-fluid p-5">
        {/* <Container className="h-100" fluid> */}
        <Card
          className="h-100 border rounded-5"
          style={{ backgroundColor: "black", color: "white" }}
        >
          {/* bg-dark text-white */}
          <Card.Body className="container d-flex justify-content-center align-items-center flex-column">
            <Card.Title>
              <span>MERN Authentication</span>
              <LiaCookieBiteSolid className="text-info" />
            </Card.Title>
            <Card.Text className="text-center">
              This is a boilerplate for MERN authentication that stores a JWT in
              an HTTP-Only cookie. It also uses Redux Toolkit and the React
              Bootstrap library.
            </Card.Text>
            <hr style={{ border: "1px solid white", width: "100%" }} />
            <Card.Text className="text-center">
              This is a simple hero unit, a simple jumbotron-style component for
              calling extra attention to featured content or information.
            </Card.Text>
            <div className="d-flex flex-column gap-4 flex-lg-row">
              <LinkContainer to="/login">
                <button className="btn btn-outline-info btn-lg ">
                  Sign In
                </button>
              </LinkContainer>
              <LinkContainer to="/register">
                <button className="btn btn-outline-info btn-lg">
                  Register
                </button>
              </LinkContainer>
            </div>
          </Card.Body>
        </Card>
        {/* </Container> */}
      </section>
    </>
  );
};

export default Hero;
