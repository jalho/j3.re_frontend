import { Reducer } from "react";
import { State, Action } from "../../types";
import { initialState } from "../rootReducer";
import { asUser } from "../../utils/helpers";

export const authenticatedUserReducer: Reducer<State, Action> = (state, action) => {
  if (typeof state === "undefined") return initialState;

  switch (action.type) {
    case "SET_AUTHENTICATED_USER":
      if (asUser(action.data)) {
        return {
          ...state,
          authenticatedUser: asUser(action.data)
        };
      } else return state;
    case "CLEAR_AUTHENTICATED_USER":
      return {
        ...state,
        authenticatedUser: null
      };
    default:
      return state;
  }
};
