import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../assets/svg/logo.svg";
import linkedin from "../assets/svg/linkedin.svg";
import twitter from "../assets/svg/twitter.svg";
import github from "../assets/svg/github.svg";
import { HashLink } from "react-router-hash-link";
import { BrowserRouter as Router } from "react-router-dom";
import React from "react";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("HOME");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Router>
      <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                href="#home"
                className={
                  activeLink === "HOME" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("HOME")}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="#skills"
                className={
                  activeLink === "SKILLS" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("SKILLS")}
              >
                Skills
              </Nav.Link>
              <Nav.Link
                href="#project"
                className={
                  activeLink === "PROJECTS"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("PROJECTS")}
              >
                Projects
              </Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a
                  target="_blank"
                  href="https://linkedin.com/in/atakan-ayyildiz"
                  rel="noreferrer"
                >
                  <img src={linkedin} alt="" />
                </a>
                <a
                  target="_blank"
                  href="https://twitter.com/atakanayyildiz0"
                  rel="noreferrer"
                >
                  <img src={twitter} alt="" />
                </a>
                <a
                  target="_blank"
                  href="https://github.com/atamust123"
                  rel="noreferrer"
                >
                  <img src={github} alt="" />
                </a>
              </div>
              <HashLink to="#connect">
                <button className="vvd">
                  <span>Let's Connect</span>
                </button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  );
};
