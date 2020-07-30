import { Reducer } from "react";
import { State, Action } from "../../types";
import { initialState } from "../rootReducer";

export const tokenReducer: Reducer<State, Action> = (state, action) => {
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
