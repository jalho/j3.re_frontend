import { Action, AppMode } from "../types";

export const toggleNavbar = (): Action => ({
  type: "TOGGLE_NAVBAR_VISIBILITY"
});

export const switchAppMode = (mode: AppMode): Action => {
  return {
    type: mode
  };
};
