import "../auth/auth.css";
import "./profile.css";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Form, Button, Row, Col, Card } from "react-bootstrap";
import FormContainer from "../../components/form/FormContainer";
import { toast } from "react-toastify";
import LoadingSpinner from "../../components/loaders/LoadingSpinner";
import { useUpdateUserMutation } from "../../Redux/slices/auth/usersApiSlice";
import { setCredentials } from "../../Redux/slices/auth/AuthSlice";

const Profile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { userInfo } = useSelector((state) => state.auth);

  const [updateUser, { isLoading }] = useUpdateUserMutation();

  useEffect(() => {
    setName(userInfo.name);
    setEmail(userInfo.email);
  }, [userInfo]);
  // userInfo.setName,userInfo.setEmail
  const submitHandler = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
    } else {
      try {
        const res = await updateUser({ 
          // _id: userInfo._id,
          name,
          email,
          password
         }).unwrap();
        const data = res?.data;
        dispatch(setCredentials({ ...data }));
        toast.success("Profile Updated");
      } catch (err) {
        console.error(err?.data?.message || err?.error);
        toast.error(err?.data?.message || err?.error);
      }
    }
  };

  return (
    <>
      <div>
        <FormContainer>
          <Card className="auth-card p-5">
            <h1>Update Profile</h1>
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
                  disabled
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

              {isLoading && <LoadingSpinner />}

              <Button type="submit" variant="outline-info" className="mt-3">
                Update
              </Button>
            </Form>
          </Card>
        </FormContainer>
      </div>
    </>
  );
};

export default Profile;
