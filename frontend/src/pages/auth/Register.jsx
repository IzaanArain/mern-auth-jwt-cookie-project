import { useState } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Row, Col, Card } from "react-bootstrap";
import FormContainer from "../../components/form/FormContainer";
import "./auth.css";
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log("register submit");
  };
  
  return (
    <>
      <div>
        <FormContainer>
          <Card className="auth-card p-5">
            <h1>Sign Up</h1>
            <Form onSubmit={submitHandler}>
              <Form.Group className="my-2" controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  autoComplete="off"
                />
              </Form.Group>

              <Form.Group className="my-2" controlId="email">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="off"
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

              <Form.Group className="my-2" controlId="confirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter confirm password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </Form.Group>

              <Button type="submit" variant="outline-info" className="mt-3">
                Sign Up
              </Button>
              <Row className="py-3">
                <Col>
                  <span>
                    Already have an account? <Link to="/login">Sign In</Link>
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

export default Register;
