import { combineReducers } from "redux";

import { State } from "../types";
import { navbarReducer } from "./reducers/navbarReducer";
import { appModeReducer } from "./reducers/appModeReducer";
import { authenticationReducer } from "./reducers/authenticationReducer";
import { alertReducer } from "./reducers/alertReducer";

export const initialState: State = {
  navbarVisible: true,
  appMode: "DEFAULT",
  authentication: null,
  alert: null
};

const rootReducer = combineReducers({
  navbarReducer,
  appModeReducer,
  authenticationReducer,
  alertReducer
});

export default rootReducer;
