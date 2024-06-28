import { useState, useEffect } from "react";
import "./auth.css";
import { Link, useNavigate } from "react-router-dom";
import { Form, Button, Row, Col, Card } from "react-bootstrap";
import FormContainer from "../../components/form/FormContainer";
import { useDispatch, useSelector } from 'react-redux';
import { useLoginMutation } from "../../Redux/slices/usersApiSlice";
import { setCredentials } from "../../Redux/slices/auth/AuthSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [login,{isLoading}] = useLoginMutation();

  const { userInfo } = useSelector((state) => state.auth);

  useEffect(()=>{
    if(userInfo){
      navigate("/");
    }
  },[navigate,userInfo]);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await login({email,password}).unwrap();
      dispatch(setCredentials({...res}));
      navigate("/")
    } catch (err){
      console.log(err?.data?.message || err?.error)
    }
  };

  return (
    <>
      <div>
        <FormContainer>
          <Card className="auth-card p-5">
            <h1>Sign In</h1>
            <Form onSubmit={submitHandler}>
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
