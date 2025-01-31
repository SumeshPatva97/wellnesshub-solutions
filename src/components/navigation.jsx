import React from "react";
import  LogoImage  from "../image/logo.jpeg";

import { FaClock ,FaInstagram,FaFacebookF ,FaDribbble   } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

import { Navbar, Nav, Container } from "react-bootstrap";


const Navigation = (props) => {
  return (
    <>
   
 
<Navbar bg="light" expand="lg" fixed="top">
      <Container>
      {/* <div className="topbar navbar-fixed-top">
    <div className="container">
        <div className="row align-items-center">
            <div className="col-lg-6 col-md-9">
                <div className="topbar-contact-info">
                    <ul>
                        <li><a href="#"><FaClock/>&nbsp;<span>Working Hour:</span>08:00am to 09:00pm</a></li>
                        <li><a href="#"><MdEmail />&nbsp; <span>Email:</span>wellnesshubsolutions@gmail.com</a></li>
                    </ul>
                </div>
            </div>

            <div className="col-lg-6 col-md-3">
                <div className="topbar-social-details">
                    <div className="topbar-social-icons">
                        <ul>
                            <li><a href="#"><FaInstagram /></a></li>
                            <li><a href="#"><FaFacebookF /></a></li>
                            <li><a href="#"><FaDribbble  /></a></li>
                        </ul>
                    </div>

                    <div className="topbar-contact-info topbar-contact-details">
                        <ul>
                            <li><a href="#"><span>Contact:</span> +19 80979 25586</a></li>
                        </ul>
                    </div>
                </div>              
            </div>
        </div>
    </div>
</div> */}
        <Navbar.Brand href="#page-top" className="navbarCustom ">
          <img
            src={LogoImage}
            alt="Logo"
            className="d-inline-block align-top"
            style={{ height: "70px" }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbarMenu"/>
        <Navbar.Collapse id="basic-navbar-nav menu.navbar-default" className="" >
          <Nav className="ms-auto">
            <Nav.Link href="#goals">Goals</Nav.Link>
            <Nav.Link href="#about">About Us</Nav.Link>
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#team">Team</Nav.Link>
            <Nav.Link href="#contact">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </>
  );
};


export default Navigation;