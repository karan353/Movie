import React, { useState } from "react";
import "./Header.css";
import { Navbar, Container, Nav, NavDropdown, Image } from "react-bootstrap";
import kslogo from "../assets/kslogo.svg";
import KSready from "../assets/KSready.png";
import { useTransition, animated } from "react-spring";
import { Link } from "react-router-dom";
import Bounce from "react-reveal/Bounce";

function Header() {
  const [navbarColor, setNavbarColor] = React.useState("nocolor");
  React.useEffect(() => {
    window.addEventListener("scroll", changeNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", changeNavbarColor);
    };
  }, []);
  const changeNavbarColor = () => {
    if (
      document.documentElement.scrollTop > 999 ||
      document.body.scrollTop > 999
    ) {
      setNavbarColor("color-scroll");
    } else if (
      document.documentElement.scrollTop < 1000 ||
      document.body.scrollTop < 1000
    ) {
      setNavbarColor("nocolor");
    }
  };

  return (
    <Navbar
      className={"fixed-top " + navbarColor}
      // className="header-conatiner"
      collapseOnSelect
      expand="md"
      bg="azure"
      variant="dark"
      id="home"
    >
      <Container>
        <Navbar.Brand>
          <img src={KSready} className="logo" alt="logo" />
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          bg="black"
          className="change"
        />
        <Navbar.Collapse id="responsive-navbar-nav" className="collapse">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link href="#home">
              <a className="nav-items" aria-current="page" href="#home">
                Home
              </a>
            </Nav.Link>
            <Nav.Link href="#about">
              <a className="nav-items" aria-current="page" href="#about">
                About
              </a>
            </Nav.Link>
            <Nav.Link href="#projects">
              <a className="nav-items" aria-current="page" href="#projects">
                Projects
              </a>
            </Nav.Link>
            <Nav.Link href="#education">
              <a className="nav-items" aria-current="page" href="#education">
                Education
              </a>
            </Nav.Link>
            <Nav.Link href="#pricrettreing">
              <a className="nav-items" aria-current="page" href="#contact">
                Contact
              </a>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
