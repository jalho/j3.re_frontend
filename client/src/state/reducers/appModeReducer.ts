import { Reducer } from "react";
import { State, Action } from "../../types";
import { initialState } from "../rootReducer";

export const appModeReducer: Reducer<State, Action> = (state, action) => {
  if (typeof state === "undefined") return initialState;

  switch (action.type) {
    default:
      return state;
  }
};
