import { useState } from "react";
import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";
import http from "../../lib/http";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [picture, setPicture] = useState("");
  const [address, setAddress] = useState("");
  const [about, setAbout] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  async function register(e) {
    e.preventDefault();
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
      alert("Field Required");
      return;
    }

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
    //    console.log(name, username,picture,email,address,about,email,password,passwordConfirmation)
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
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="RegisterUsername">
                      <Form.Control
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Username"
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="RegisterPicture">
                      <Form.Control
                        type="file"
                        onChange={(e) => setPicture(e.target.files[0])}
                        placeholder="Profile Picture"
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="RegisterAddress">
                      <Form.Control
                        type="text"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder="Street, City, Zipcode"
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="RegisterAbout">
                      <Form.Control
                        type="text"
                        rows="3"
                        value={about}
                        onChange={(e) => setAbout(e.target.value)}
                        placeholder="Tell us about yourself"
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="RegisterEmail">
                      <Form.Control
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter email"
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="RegisterPassword">
                      <Form.Control
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                      />
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
