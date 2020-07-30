import { Reducer } from "react";

/**
 * Different options for how to render the app.
 */
export type AppMode = "DEFAULT" | "EASTER_EGG";

/**
 * The form in which the state is to be saved to Redux store.
 */
export interface State {
  navbarVisible: boolean;
  appMode: AppMode;
  token: string|null;
}

/**
 * All possible options for action type concerning navbar visibility.
 */
export type ActionTypeNavbar = "TOGGLE_NAVBAR_VISIBILITY" | "SHOW_NAVBAR" | "HIDE_NAVBAR";

export type TokenAction = "ADD_TOKEN" | "REMOVE_TOKEN";

export interface Action {
  type: ActionTypeNavbar | AppMode | TokenAction;
  data?: unknown;
}

/**
 * The form in which `useSelector()` sees the Redux state; i. e. as combined from reducers.
 */
export interface StateCombinedFromReducers {
  navbarReducer: Reducer,
  appModeReducer: Reducer,
  tokenReducer: Reducer
}
