import { combineReducers } from "redux";
import { Reducer } from "react";

import { State, Action } from "../types/state";

const initialState: State = {
  navbarVisible: true
};

const navbarReducer: Reducer<State, Action> = (state, action) => {
  if (typeof state === "undefined") return initialState;

  switch (action.type) {
    case "TOGGLE_NAVBAR_VISIBILITY":
      return {
        navbarVisible: !state.navbarVisible
      };
    case "HIDE_NAVBAR": 
      return {
        navbarVisible: false
      };
    case "SHOW_NAVBAR":
      return {
        navbarVisible: true
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  navbarReducer
});

export default rootReducer;
