import React from "react";
import { Link, Switch, Route } from "react-router-dom";

import Header from "../../components/Header";

const Home: React.FC = () => {
  return (
    <div className="view">

      {/* TODO: Create some navigation UI thingy with React Bootstrap! */}
      <Link to="/">Home page</Link>
      <Link to="/cv">CV</Link>
      <Link to="/portfolio">Portfolio</Link>
      <Link to="/sandbox">Sandbox</Link>

      <Switch>

        <Route path="/cv">
          <Header text="CV" />
        </Route>

        <Route path="/portfolio">
          <Header text="Portfolio" />
        </Route>

        <Route path="/sandbox">
          <Header text="Sandbox" />
        </Route>

        <Route path="/">
          <Header text="Home page" />
        </Route>

      </Switch>
    </div>
  );
};

export default Home;
