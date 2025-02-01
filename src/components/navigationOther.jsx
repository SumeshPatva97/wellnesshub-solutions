import React from "react";
import LogoImage from "../image/logo.jpeg";

import { Navbar, Nav, Container } from "react-bootstrap";


const NavigationOther = (props) => {
  return (


    <Navbar bg="light" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="/" className="navbarCustom">
          <img
            src={LogoImage}
            alt="Logo"
            className="d-inline-block align-top"
            style={{ height: "70px" }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbarMenu" />
        <Navbar.Collapse id="basic-navbar-nav menu.navbar-default" className="" >
          <Nav className="ms-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#contact">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};


export default NavigationOther;