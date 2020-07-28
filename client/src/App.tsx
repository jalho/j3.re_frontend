import React from "react";
import { Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";

// views
import Home from "./views/home";
import CV from "./views/cv";
import Portfolio from "./views/portfolio";
import LeaveNote from "./views/leave_note";
import Login from "./views/login";

// components
import NavigationBar from "./components/NavigationBar";

// types
import { StateCombinedFromReducers } from "./types/state";

const App: React.FC = () => {

  const navbarVisible = useSelector((state: StateCombinedFromReducers) => {
    return state.navbarReducer.navbarVisible;
  });
  const appMode = useSelector((state: StateCombinedFromReducers) => {
    return state.appModeReducer.appMode;
  });

  switch (appMode) {
    default:
    case "DEFAULT":
      return (
        <>
          {navbarVisible && <NavigationBar />}
          
          <div className="view">
    
            <Switch>
    
              <Route path="/cv">
                <CV />
              </Route>
    
              <Route path="/portfolio">
                <Portfolio />
              </Route>

              <Route path="/leave-note">
                <LeaveNote />
              </Route>

              <Route path="/login">
                <Login />
              </Route>
    
              <Route path="/">
                <Home />
              </Route>
    
            </Switch>
          </div>
        </>
      );
    case "EASTER_EGG":
      return <div>Easter egg!</div>;
  }


};

export default App;
