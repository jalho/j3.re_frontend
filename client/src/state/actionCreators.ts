import { Action, AppMode } from "../types";

export const toggleNavbar = (): Action => ({
  type: "TOGGLE_NAVBAR_VISIBILITY"
});

export const switchAppMode = (mode: AppMode): Action => {
  return {
    type: mode
  };
};

export const setToken = (token: string): Action => {
  return {
    type: "ADD_TOKEN",
    data: token
  };
};

export const clearToken = (): Action => {
  return {
    type: "REMOVE_TOKEN"
  };
};
