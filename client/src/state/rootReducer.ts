import { combineReducers } from "redux";
import { Reducer } from "react";

import { State, Action } from "../types";

const initialState: State = {
  navbarVisible: true,
  appMode: "DEFAULT",
  token: null
};

const navbarReducer: Reducer<State, Action> = (state, action) => {
  if (typeof state === "undefined") return initialState;

  switch (action.type) {
    case "TOGGLE_NAVBAR_VISIBILITY":
      return {
        ...state,
        navbarVisible: !state.navbarVisible
      };
    case "HIDE_NAVBAR": 
      return {
        ...state,
        navbarVisible: false
      };
    case "SHOW_NAVBAR":
      return {
        ...state,
        navbarVisible: true
      };
    default:
      return state;
  }
};

const appModeReducer: Reducer<State, Action> = (state, action) => {
  if (typeof state === "undefined") return initialState;

  switch (action.type) {
    default:
      return state;
  }
};

const tokenReducer: Reducer<State, Action> = (state, action) => {
  if (typeof state === "undefined") return initialState;

  switch (action.type) {
    case "ADD_TOKEN":
      return {
        ...state,
        token: typeof action.data === "string" ? action.data : null // TODO: Use type guard.
      };
    case "REMOVE_TOKEN":
      return {
        ...state,
        token: null
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  navbarReducer,
  appModeReducer,
  tokenReducer
});

export default rootReducer;
