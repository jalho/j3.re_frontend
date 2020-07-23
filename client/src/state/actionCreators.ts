import { Action, AppMode } from "../types/state";

export const toggleNavbar = (): Action => ({
  type: "TOGGLE_NAVBAR_VISIBILITY"
});

export const switchAppMode = (mode: AppMode): Action => {
  return {
    type: mode
  };
};
