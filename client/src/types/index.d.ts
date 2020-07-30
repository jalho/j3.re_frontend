import { Reducer } from "react";
import { type } from "os";

/**
 * Different options for how to render the app.
 */
export type AppMode = "DEFAULT" | "EASTER_EGG";

export interface User {
  id: string;
  username: string;
}

/**
 * The form in which the state is to be saved to Redux store.
 */
export interface State {
  navbarVisible: boolean;
  appMode: AppMode;
  token: string|null;
  authenticatedUser: User|null;
}

/**
 * All possible options for action type concerning navbar visibility.
 */
export type ActionTypeNavbar = "TOGGLE_NAVBAR_VISIBILITY" | "SHOW_NAVBAR" | "HIDE_NAVBAR";

export type TokenAction = "ADD_TOKEN" | "REMOVE_TOKEN";

export type UserAuthenticationAction = "SET_AUTHENTICATED_USER" | "CLEAR_AUTHENTICATED_USER";

export interface Action {
  type: ActionTypeNavbar | AppMode | TokenAction | UserAuthenticationAction;
  data?: unknown;
}

/**
 * The form in which `useSelector()` sees the Redux state; i. e. as combined from reducers.
 */
export interface StateCombinedFromReducers {
  navbarReducer: Reducer,
  appModeReducer: Reducer,
  tokenReducer: Reducer,
  authenticatedUserReducer: Reducer
}
