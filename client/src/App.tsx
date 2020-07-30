import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

// views
import Home from "./views/home";
import CV from "./views/cv";
import Portfolio from "./views/portfolio";
import LeaveNote from "./views/leave_note";
import Login from "./views/login";

// components
import NavigationBar from "./components/NavigationBar";

// types
import { StateCombinedFromReducers } from "./types";

import { setAuthentication } from "./state/actionCreators";

const App: React.FC = () => {
  const dispatch = useDispatch();

  const navbarVisible = useSelector((state: StateCombinedFromReducers) => {
    return state.navbarReducer.navbarVisible;
  });
  const appMode = useSelector((state: StateCombinedFromReducers) => {
    return state.appModeReducer.appMode;
  });

  // get authentication from localStorage on render, if there's any
  useEffect(() => {
    const authStringFromStorage = localStorage.getItem("authentication");
    const authentication = authStringFromStorage ? JSON.parse(authStringFromStorage) : null;
    if (authentication) dispatch(setAuthentication(authentication));
  }, [dispatch]);

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
