import { Reducer } from "react";
import { State, Action } from "../../types";
import { initialState } from "../rootReducer";
import tg from "../../utils/typeguards";

export const tokenReducer: Reducer<State, Action> = (state, action) => {
  if (typeof state === "undefined") return initialState;

  switch (action.type) {
    case "ADD_TOKEN":
      return {
        ...state,
        token: tg.isString(action.data) ? action.data : null
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
