import { combineReducers } from "redux";

import { State } from "../types";
import { navbarReducer } from "./reducers/navbarReducer";
import { appModeReducer } from "./reducers/appModeReducer";
import { tokenReducer } from "./reducers/tokenReducer";

export const initialState: State = {
  navbarVisible: true,
  appMode: "DEFAULT",
  token: null
};

const rootReducer = combineReducers({
  navbarReducer,
  appModeReducer,
  tokenReducer
});

export default rootReducer;
