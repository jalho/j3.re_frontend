import { Reducer } from "react";

// app state
export interface State {
  navbarVisible: boolean;
  appMode: AppModeAction;
  authentication: AuthPayload|null;
}

export interface User {
  id: string;
  username: string;
}

export interface AuthPayload {
  token: string;
  user: User;
}

// Action types
export type AppModeAction = "DEFAULT" | "EASTER_EGG";
export type AuthenticationAction = "SET_AUTHENTICATION" | "CLEAR_AUTHENTICATION";
export type NavBarAction = "TOGGLE_NAVBAR_VISIBILITY" | "SHOW_NAVBAR" | "HIDE_NAVBAR";
export type TokenAction = "ADD_TOKEN" | "REMOVE_TOKEN";

export interface Action {
  type: NavBarAction | AppModeAction | TokenAction | AuthenticationAction;
  data?: unknown;
}

/**
 * The form in which `useSelector()` sees the Redux state; i. e. as combined from reducers.
 */
export interface StateCombinedFromReducers {
  navbarReducer: Reducer,
  appModeReducer: Reducer,
  tokenReducer: Reducer,
  authenticationReducer: Reducer
}
