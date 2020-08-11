import React, { useEffect, lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Alert from "react-bootstrap/Alert";

// components
import NavigationBar from "./components/NavigationBar";

// types
import { StateCombinedFromReducers } from "./types";

import { setAuthentication, setAlert, hideAlert } from "./state/actionCreators";

const App: React.FC = () => {
  const dispatch = useDispatch();

  const navbarVisible = useSelector((state: StateCombinedFromReducers) => {
    return state.navbarReducer.navbarVisible;
  });
  const appMode = useSelector((state: StateCombinedFromReducers) => {
    return state.appModeReducer.appMode;
  });
  const alert = useSelector((state: StateCombinedFromReducers) => {
    return state.alertReducer.alert;
  });

  // get authentication from localStorage on render, if there's any
  useEffect(() => {
    const authStringFromStorage = localStorage.getItem("authentication");
    const authentication = authStringFromStorage ? JSON.parse(authStringFromStorage) : null;
    if (authentication) {
      dispatch(setAuthentication(authentication));
      dispatch(setAlert(
        {
          content: `Still logged in as ${authentication.user.username}`,
          variant: "success",
          visible: true
        }
      ));
      setTimeout(() => dispatch(hideAlert()), 3000);
    }
  }, [dispatch]);

  // import views dynamically ("code splitting")
  const Home = lazy(() => import("./views/home"));
  const CV = lazy(() => import("./views/cv"));
  const Portfolio = lazy(() => import("./views/portfolio"));
  const LeaveNote = lazy(() => import("./views/leave_note"));
  const Login = lazy(() => import("./views/login"));

  switch (appMode) {
    default:
    case "DEFAULT":
      return (
        <Suspense fallback={null} /* Prevent flashing the landing view as fallback here. */ >
          {navbarVisible && <NavigationBar />}
          <div className="view">
            {alert &&
              <Alert variant={alert.variant}>
                {alert.content}
              </Alert>
            }
            <Switch>
              <Route path="/cv" component={CV} />
              <Route path="/portfolio" component={Portfolio} />
              <Route path="/leave-note" component={LeaveNote} />
              <Route path="/login" component={Login} />
              <Route path="/" component={Home} />
            </Switch>
          </div>
        </Suspense>
      );
    case "EASTER_EGG":
      return <div>Easter egg!</div>;
  }


};

export default App;
