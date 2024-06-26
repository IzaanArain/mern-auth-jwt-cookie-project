import "./hero.css";
import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
const Hero = () => {
  return (
    <>
      <section className="hero-section container-fluid p-5">
        {/* <Container className="h-100" fluid> */}
          <Card className="hero-card h-100 bg-dark text-white border rounded-5">
            <Card.Body className="container d-flex justify-content-center align-items-center flex-column">
              <Card.Title><span>Hello World!</span></Card.Title>
              <Card.Text className="text-center">
              This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.
              </Card.Text>
              <hr style={{ border: '1px solid white', width: '100%'}} />
              <Card.Text className="text-center">
              It uses utility classes for typography and spacing to space content out within the larger container.
              </Card.Text>
              <button className="btn btn-primary">Learn more</button>
            </Card.Body>
          </Card>
        {/* </Container> */}
      </section>
    </>
  );
};

export default Hero;
