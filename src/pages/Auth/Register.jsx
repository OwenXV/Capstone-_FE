import { useState } from "react";
import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";
import http from "../../lib/http";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [picture, setPicture] = useState();
  const [address, setAddress] = useState("");
  const [about, setAbout] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [errors, setErrors] = useState({
    name: [],
    username: [],
    address: [],
    about: [],
    email: [],
    picture: [],
    password: [],
    passwordConfirmation: [],
  });
  const [validated, setValidated] = useState(false);

  async function register(e) {
    e.preventDefault();
    e.stopPropagation();

    setValidated(true);

    if (
      !name ||
      !username ||
      !address ||
      !about ||
      !email ||
      !password ||
      !passwordConfirmation ||
      !(password === passwordConfirmation)
    ) {
      return;
    }
    try {
      const body = {
        name,
        username,
        profile_picture: picture,
        adress: address,
        seller_description: about,
        email,
        password,
        password_confirmation: passwordConfirmation,
      };
      const res = await http.post("/register", body);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      localStorage.setItem("token", res.data.token);
      navigate("/");
      navigate(0);
    } catch (e) {
      if (e.response.data.errors) {
        setErrors({
          name: e.response.data.errors.name ? e.response.data.errors.name : [],
          email: e.response.data.errors.email
            ? e.response.data.errors.email
            : [],
          password: e.response.data.errors.password
            ? e.response.data.errors.password
            : [],
          passwordConfirmation: e.response.data.errors.password_confirmation
            ? e.response.data.errors.password_confirmation
            : [],
        });
      } else {
        alert(e.response.data.message);
      }
    }
  }

  return (
    <div className="RegisterPage">
      <Container className="d-flex justify-content-center py-5">
        <div className="RegisterContainer d-flex align-items-center">
          <Card style={{ width: "18rem" }} className="RegisterCard">
            <Card.Body>
              <Row>
                <Col>
                  <Form
                    onSubmit={register}
                    className="RegisterForm align-items-center"
                  >
                    <Form.Group className="mb-3" controlId="RegisterName">
                      <Form.Control
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Name"
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.name.map((error, index) => {
                          return <p key={index}>{error}</p>;
                        })}
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="RegisterUsername">
                      <Form.Control
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Username"
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.username.map((error, index) => {
                          return <p key={index}>{error}</p>;
                        })}
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="RegisterPicture">
                      <Form.Control
                        type="file"
                        onChange={(e) => setPicture(e.target.files[0])}
                        placeholder="Profile Picture"
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.picture.map((error, index) => {
                          return <p key={index}>{error}</p>;
                        })}
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="RegisterAddress">
                      <Form.Control
                        type="text"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder="Street, City, Zipcode"
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.address.map((error, index) => {
                          return <p key={index}>{error}</p>;
                        })}
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="RegisterAbout">
                      <Form.Control
                        type="text"
                        rows="3"
                        value={about}
                        onChange={(e) => setAbout(e.target.value)}
                        placeholder="Tell us about yourself"
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.about.map((error, index) => {
                          return <p key={index}>{error}</p>;
                        })}
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="RegisterEmail">
                      <Form.Control
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter email"
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.email.map((error, index) => {
                          return <p key={index}>{error}</p>;
                        })}
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="RegisterPassword">
                      <Form.Control
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.password.map((error, index) => {
                          return <p key={index}>{error}</p>;
                        })}
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group
                      className="mb-3"
                      controlId="RegisterPasswordConfirm"
                    >
                      <Form.Control
                        type="password"
                        value={passwordConfirmation}
                        onChange={(e) =>
                          setPasswordConfirmation(e.target.value)
                        }
                        placeholder="Confirm Password"
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.passwordConfirmation.map((error, index) => {
                          return <p key={index}>{error}</p>;
                        })}
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Row className="d-flex align-items-center">
                      <Col>
                        <Button
                          type="submit"
                          value="Register"
                          className="btn-Register"
                        >
                          {" "}
                          Sign up
                        </Button>
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
export default Register;
