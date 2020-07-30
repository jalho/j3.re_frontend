import { Reducer } from "react";
import { State, Action } from "../../types";
import { initialState } from "../rootReducer";

export const authenticationReducer: Reducer<State, Action> = (state, action) => {
  if (typeof state === "undefined") return initialState;

  // TODO!
  switch (action.type) {
    case "SET_AUTHENTICATION":
    case "CLEAR_AUTHENTICATION":
    default:
      return state;
  }
};
