import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Form, Button } from "react-bootstrap";
import { Navbar, Nav } from "react-bootstrap";
import Offcanvas from "react-bootstrap/Offcanvas";
import buy from "../assets/buy.png";

const Navibar = () => {
  const navigate = useNavigate();
  const [isLoggedIn, _] = useState(localStorage.getItem("user"));

  async function logout() {
    await http.post(
      "/logout",
      {},
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    localStorage.removeItem("user", JSON.stringify(res.data.user));
    localStorage.removeItem("token", res.data.token);
    navigate(0);
  }

  return (
    <div>
      {[true && "sm" && "md"].map((expand) => (
        <Navbar className="navibar" key={expand} expand={expand}>
          <Container>
            <Navbar.Brand
              href="/"
              className="text-white d-flex align-items-center"
            >
              <img alt="" src={buy} />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              className="offCan"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title
                  id={`offcanvasNavbarLabel-expand-${expand}`}
                  className="text-white"
                >
                  Menu
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="me-auto flex-grow-1 pe-3 text-white">
                  <Nav.Link href="/" className="text-white fs-5">
                    Home
                  </Nav.Link>
                  <Nav.Link href="/Home" className="text-white fs-5">
                    Categories
                  </Nav.Link>
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="warning">Search</Button>
                </Form>

                <Nav className="mr-auto">
                  {isLoggedIn ? (
                    <>
                      <Nav.Link href="/Profile" className="text-white fs-5">
                        Profile
                      </Nav.Link>
                      <Nav.Link onClick={logout} className="text-white fs-5">
                        Logout
                      </Nav.Link>
                    </>
                  ) : (
                    <>
                      <Nav.Link href="/Register" className="text-white fs-5">
                        Register
                      </Nav.Link>
                      <Nav.Link href="/Login" className="text-white fs-5">
                        Login
                      </Nav.Link>
                    </>
                  )}
                  <Nav.Link href="/Home" className="text-white fs-5">
                    <span>Sell</span>
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </div>
  );
};

export default Navibar;
