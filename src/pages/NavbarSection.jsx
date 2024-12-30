import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../assets/images/logo.png";
import vector1 from "../assets/images/Asset 1 (1).png";
import vector2 from "../assets/images/Asset 2.png";

const NavbarSection = () => {
  return (
    <>
      <Navbar expand="md" className="p-0">
        <img src={vector1} className="vector1" alt="" />
        <img src={vector2} className="vector2" alt="" />
        <Container>
          <Navbar.Brand href="/">
            <img className="logo" src={logo} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle id="toggle" aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto text-center">
              <Nav.Link className="text-dark" href="#about">
                About Us
              </Nav.Link>
              <Nav.Link className="text-dark" href="#services">
                Services
              </Nav.Link>
              <Nav.Link className="text-dark" href="#team">
                Team
              </Nav.Link>
              <Nav.Link className="text-dark" href="#client">
                Clients
              </Nav.Link>
              <Nav.Link className="text-dark" href="#contact">
                Contact Us
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarSection;