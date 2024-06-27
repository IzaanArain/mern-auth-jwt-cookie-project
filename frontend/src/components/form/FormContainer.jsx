import { Container, Row, Col } from "react-bootstrap";
import "./form.css"
const FormContainer = ({ children }) => {
  return (
    <Container>
      <Row className="justify-content-md-center mt-5">
        <Col xs={12} md={6}>
          { children }
        </Col>
      </Row>
    </Container>
  );
};

export default FormContainer;
