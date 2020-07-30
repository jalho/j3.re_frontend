import { combineReducers } from "redux";

import { State } from "../types";
import { navbarReducer } from "./reducers/navbarReducer";
import { appModeReducer } from "./reducers/appModeReducer";
import { tokenReducer } from "./reducers/tokenReducer";
import { authenticatedUserReducer } from "./reducers/authenticatedUserReducer";

export const initialState: State = {
  navbarVisible: true,
  appMode: "DEFAULT",
  token: null,
  authenticatedUser: null
};

const rootReducer = combineReducers({
  navbarReducer,
  appModeReducer,
  tokenReducer,
  authenticatedUserReducer
});

export default rootReducer;
