import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

const NavigationBar: React.FC = () => (
  <Navbar variant="dark">
    <Navbar.Brand as={Link} to="/">j3.re</Navbar.Brand>
    <Nav>
      <Nav.Link as={Link} to="/cv">CV</Nav.Link>
      <Nav.Link as={Link} to="/portfolio">Portfolio</Nav.Link>
      <Nav.Link as={Link} to="/sandbox">Sandbox</Nav.Link>
    </Nav>
  </Navbar>
);

export default NavigationBar;
