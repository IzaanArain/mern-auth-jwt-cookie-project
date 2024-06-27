import { useState } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Row, Col, Card } from "react-bootstrap";
import FormContainer from "../../components/form/FormContainer";
import "./auth.css";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log("login submit");
  };
  return (
    <>
      <div>
        <FormContainer>
          <Card className="auth-card card p-5">
            <h1>Sign In</h1>
            <Form onSubmit={submitHandler}>
              <Form.Group className="my-2" controlId="email">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="my-2" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>

              <Button type="submit" variant="outline-info" className="mt-3">
                Sign In
              </Button>
              <Row className="py-3">
                <Col>
                  <span>
                    New Customer? <Link to="/register">Register</Link>
                  </span>
                </Col>
              </Row>
            </Form>
          </Card>
        </FormContainer>
      </div>
    </>
  );
};

export default Login;
