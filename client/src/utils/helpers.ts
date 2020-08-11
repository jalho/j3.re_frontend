import { User, AuthPayload, Alert } from "../types";
import tg from "./typeguards";
import store from "../state/store";
import { clearAuthentication, setAlert, hideAlert } from "../state/actionCreators";

/**
 * Get backend's URI to be used in Apollo Client or elsewhere.
 */
export const getBackendURI = (): string => {
  if (process.env.NODE_ENV === "development") return "http://localhost:4000/";

  const uri = process.env.REACT_APP_BACKEND_URI;
  if (!uri) throw new Error("Environment variable REACT_APP_BACKEND_URI missing!");
  return uri;
};

/**
 * Return object narrowed down to User, or null if it cannot be done.
 * @param value to narrow down to User
 */
export const asUser = (value: unknown): User|null => {
  if (tg.isUser(value)) {
    return {
      id: value.id,
      username: value.username
    };
  } else return null;
};

/**
 * Return object narrowed down to AuthPayload, or null if it cannot be done.
 * @param value to narrow down to AuthPayload
 */
export const asAuthPayload = (value: unknown): AuthPayload|null => {
  if (tg.isAuthPayload(value)) {
    return {
      token: value.token,
      user: value.user
    };
  } else return null;
};

export const asAlert = (value: unknown): Alert|null => {
  if (tg.isAlert(value)) {
    return {
      variant: value.variant,
      content: value.content,
      visible: value.visible
    };
  } else return null;
};

/**
 * Dispatch notification to UI and set a timeout for clearing it.
 * @param content of notification alert
 * @param username that is logged in
 */
export const notify = (content: string, delay?: number): void => {
  // set alert
  store.dispatch(setAlert(
    {
      content,
      variant: "success",
      visible: true
    }
  ));
  // hide alert after delay
  setTimeout(() => store.dispatch(hideAlert()), delay || 3000);
};

/**
 * Remove authentication information from app state and localStorage.
 */
export const clearAuthInformation = (): void => {
  store.dispatch(clearAuthentication());
  localStorage.removeItem("authentication");
};
