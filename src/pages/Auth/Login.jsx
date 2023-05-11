import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import React, { useState } from "react";

const Login = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

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
                      />
                      <Form.Control.Feedback type="invalid">
                        Please Enter email.
                      </Form.Control.Feedback>
                      <Form.Control.Feedback></Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="LoginPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        required
                        type="password"
                        placeholder="Password"
                      />
                      <Form.Control.Feedback type="invalid">
                        Please Enter Password.
                      </Form.Control.Feedback>
                      <Form.Control.Feedback></Form.Control.Feedback>
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
