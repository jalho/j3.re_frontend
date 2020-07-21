import React from "react";
import { Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";

// views
import Home from "./views/home";
import CV from "./views/cv";
import Portfolio from "./views/portfolio";

// components
import NavigationBar from "./components/NavigationBar";

// types
import { StateCombinedFromReducers } from "./types/state";

const App: React.FC = () => {

  const navbarVisible = useSelector((state: StateCombinedFromReducers) => {
    return state.navbarReducer.navbarVisible;
  });

  return (
    <>
      {navbarVisible && <NavigationBar />}
      
      <div className="view">

        {/* TODO: Consider dynamic imports here!
            example: https://reactjs.org/docs/code-splitting.html#route-based-code-splitting */}
        <Switch>

          <Route path="/cv">
            <CV />
          </Route>

          <Route path="/portfolio">
            <Portfolio />
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
