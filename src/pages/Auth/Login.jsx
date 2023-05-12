import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import http from "../../lib/http";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({
    email: [],
    password: [],
  });
  const [validated, setValidated] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    e.stopPropagation();

    setValidated(true);

    if (!email || !password) {
      return;
    }

    try {
      const body = {
        email,
        password,
      };
      const res = await http.post("/login", body);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      localStorage.setItem("token", res.data.token);
      navigate("/");
      navigate(0);
    } catch (e) {
      if (e.response.data.errors) {
        setErrors({
          email: e.response.data.errors.email,
          password: e.response.data.errors?.password,
        });
      } else {
        alert(e.response.data.message);
      }
    }
  }
  return (
    <div className="LoginPage">
      <Container className="d-flex justify-content-center py-5">
        <div className="LoginContainer d-flex align-items-center">
          <Card style={{ width: "18rem" }} className="LoginCard">
            <Card.Body>
              <Row>
                <Col>
                  <Form
                    noValidate
                    validated={validated}
                    onSubmit={handleSubmit}
                    className="LoginForm align-items-center"
                  >
                    <Form.Group className="mb-3" controlId="LoginEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control
                        required
                        type="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <Form.Control.Feedback type="invalid">
                        Enter email.
                      </Form.Control.Feedback>
                      <Form.Control.Feedback></Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="LoginPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        required
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <Form.Control.Feedback type="invalid">
                        Please enter a valid Password.
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Row className="d-flex align-items-center">
                      <Col>
                        <Button type="submit" className="btn-Login">
                          {" "}
                          Submit
                        </Button>
                      </Col>
                      <Col>
                        <Card.Link href="/Register" className="text-login">
                          Create Account
                        </Card.Link>
                      </Col>
                    </Row>
                  </Form>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </div>
  );
};

export default Login;
