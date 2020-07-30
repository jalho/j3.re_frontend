import { Action, AppModeAction } from "../types";

export const toggleNavbar = (): Action => ({
  type: "TOGGLE_NAVBAR_VISIBILITY"
});

export const switchAppMode = (mode: AppModeAction): Action => {
  return {
    type: mode
  };
};

export const setAuthentication = (auth: unknown): Action => {
  return {
    type: "SET_AUTHENTICATION",
    data: auth
  };
};

export const clearAuthentication = (): Action => {
  return {
    type: "CLEAR_AUTHENTICATION"
  };
};
