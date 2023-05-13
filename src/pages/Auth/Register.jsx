import { useState } from "react";
import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";
import http from "../../lib/http";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [validated, setValidated] = useState(false);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [about, setAbout] = useState("");
  const [image, setImage] = useState();
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const [err, setError] = useState({
    name: [],
    username: [],
    address: [],
    profile_picture: [],
    about: [],
    email: [],
    password: [],
    passwordConfirmation: [],
  });

  async function register(e) {
    e.preventDefault();
    e.stopPropagation();

    try {
      let imageName = "";
      if (image) {
        const formData = new FormData();
        formData.append("image", image);

        const res = await http.post("/upload", formData);

        imageName = res.data.image_name;
      }

      const body = {
        name: name,
        username: username,
        email,
        adress: address,
        seller_description: about,
        profile_picture: imageName,
        password,
        password_confirmation: passwordConfirmation,
      };
      const res = await http.post("/register", body);

      if (res.status === 200) {
        localStorage.setItem("user", JSON.stringify(res.data.user));
        localStorage.setItem("token", res.data.token);
        navigate("/");
        navigate(0);
      }
    } catch (e) {
      alert(e.response.data.message);
    }
  }

  return (
    <div className="RegisterPage">
      <Container className="d-flex justify-content-center">
        <div className="RegisterContainer d-flex align-items-center">
          <Card style={{ width: "25rem" }} className="RegisterCard">
            <Card.Body>
              <h3 className="text-center mb-4">Register to start shopping!</h3>
              <Row>
                <Col>
                  <Form
                    onSubmit={register}
                    className="RegisterForm align-items-center"
                  >
                    <Form.Group className="mb-4" controlId="RegisterName">
                      <Form.Label>Name</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="Name"
                        vaue={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                      <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-4" controlId="RegisterUsername">
                      <Form.Label>Username</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="Username"
                        vaue={username}
                        onChange={(e) => setUsername(e.target.value)}
                      />
                      <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="RegisterAddress">
                      <Form.Label>Address</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="Street, City, Zipcode"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                      />
                      <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="RegisterPicture">
                      <Form.Control
                        required
                        type="file"
                        placeholder="Profile Picture"
                        onChange={(e) => setImage(e.target.files[0])}
                      />
                      <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="RegisterAbout">
                      <Form.Control
                        required
                        type="text"
                        rows="3"
                        placeholder="Tell us about yourself"
                        vaue={about}
                        onChange={(e) => setAbout(e.target.value)}
                      />
                      <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="RegisterEmail">
                      <Form.Control
                        required
                        type="email"
                        placeholder="Enter email"
                        vaue={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="RegisterPassword">
                      <Form.Control
                        required
                        type="password"
                        placeholder="Password"
                        vaue={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group
                      className="mb-3"
                      controlId="RegisterPasswordConfirm"
                    >
                      <Form.Control
                        required
                        type="password"
                        placeholder="Confirm Password"
                        vaue={passwordConfirmation}
                        onChange={(e) =>
                          setPasswordConfirmation(e.target.value)
                        }
                      />
                      <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                    </Form.Group>
                    <Row className="d-flex align-items-center">
                      <Col>
                        <Button type="submit" className="btn-Register">
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
