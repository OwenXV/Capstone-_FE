import React from 'react'
import { Button } from 'bootstrap'
import { Container, Form } from 'react-bootstrap'
import { Navbar, Nav } from 'react-bootstrap'
import Offcanvas from 'react-bootstrap/Offcanvas';
import buy from '../assets/buy.png'


const Navibar = () => {
  return (
    <div>
        {[true && 'sm' && 'md'].map((expand) => (
          <Navbar className="navibar" key={expand} expand={expand}>
            <Container>
              <Navbar.Brand href="/" className="text-white d-flex align-items-center">
                <img
                  alt=""
                  src={buy}
                  />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
                className="offCan"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`} className="text-white">
                    Menu
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-end flex-grow-1 pe-3 text-white">
                    <Nav.Link href="/"className="text-white fs-5">Home</Nav.Link>
                    <Nav.Link href="/Home" className="text-white fs-5">Categories</Nav.Link>
                    <Nav.Link href="/Register" className="text-white fs-5">Register</Nav.Link>
                    <Nav.Link href="/Login" className="text-white fs-5">Login</Nav.Link>
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
  )
}

export default Navibar