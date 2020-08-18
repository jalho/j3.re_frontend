import { Reducer } from "react";

// app state
export interface State {
  navbarVisible: boolean;
  appMode: AppModeAction;
  authentication: AuthPayload|null;
  alert: Alert|null;
  eggClickCounter: number;
}

export interface Alert {
  visible: boolean;
  content: string;
  variant: string;
}

export interface User {
  id: string;
  username: string;
}

export interface AuthPayload {
  token: string;
  user: User;
}

export interface IPLookupPayload {
  ip: string;
  city?: string;
  isp?: string;
  mobile?: boolean;
  proxy?: boolean;
  flagURL?: string;
}

export interface Translations {
  en: string;
  fi: string;
}

export interface Project {
  id: string!;
  name: string!;
  categories?: string[];
  description: Translations;
  technologies?: string[];
  startTime?: string;
  repositories?: string[];
}

// Action types
export type AppModeAction = "DEFAULT" | "EASTER_EGG" | "INCR_COUNTER" | "RESET_COUNTER";
export type AuthenticationAction = "SET_AUTHENTICATION" | "CLEAR_AUTHENTICATION";
export type NavBarAction = "TOGGLE_NAVBAR_VISIBILITY" | "SHOW_NAVBAR" | "HIDE_NAVBAR";
export type AlertAction = "SET_ALERT" | "HIDE_ALERT";

export interface Action {
  type: NavBarAction | AppModeAction | AuthenticationAction | AlertAction;
  data?: unknown;
}

/**
 * The form in which `useSelector()` sees the Redux state; i. e. as combined from reducers.
 */
export interface StateCombinedFromReducers {
  navbarReducer: Reducer,
  appModeReducer: Reducer,
  authenticationReducer: Reducer,
  alertReducer: Reducer
}

export interface Note {
  id: string;
  content: string;
  time: string;
}
