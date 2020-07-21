import { Reducer } from "react";

/**
 * The form in which the state is to be saved to Redux store.
 */
export interface State {
  navbarVisible: boolean;
}

/**
 * All possible options for action type concerning navbar visibility.
 */
export type ActionTypeNavbar = "TOGGLE_NAVBAR_VISIBILITY" | "SHOW_NAVBAR" | "HIDE_NAVBAR";

export interface Action {
  type: ActionTypeNavbar;
  data?: unknown;
}

/**
 * The form in which `useSelector()` sees the Redux state; i. e. as combined from reducers.
 */
export interface StateCombinedFromReducers {
  navbarReducer: Reducer
}