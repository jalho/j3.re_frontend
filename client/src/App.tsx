import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import Home from "./views/home";
import CV from "./views/cv";
import Portfolio from "./views/portfolio";
import Sandbox from "./views/sandbox";

const App: React.FC = () => {
  return (
    <>
      <Navbar variant="dark">
        <Navbar.Brand as={Link} to="/">j3.re</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/cv">CV</Nav.Link>
          <Nav.Link as={Link} to="/portfolio">Portfolio</Nav.Link>
          <Nav.Link as={Link} to="/sandbox">Sandbox</Nav.Link>
        </Nav>
      </Navbar>
      
      <div className="view">

        {/* TODO: Consider dynamic imports here! */}
        <Switch>

          <Route path="/cv">
            <CV />
          </Route>

          <Route path="/portfolio">
            <Portfolio />
          </Route>

          <Route path="/sandbox">
            <Sandbox />
          </Route>

          <Route path="/">
            <Home />
          </Route>

        </Switch>
      </div>
    </>
  );
};

export default App;
