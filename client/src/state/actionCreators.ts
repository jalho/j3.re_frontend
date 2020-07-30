import { Action, AppModeAction } from "../types";

export const toggleNavbar = (): Action => ({
  type: "TOGGLE_NAVBAR_VISIBILITY"
});

export const switchAppMode = (mode: AppModeAction): Action => {
  return {
    type: mode
  };
};
