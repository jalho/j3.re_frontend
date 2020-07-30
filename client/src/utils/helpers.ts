import { User } from "../types";
import tg from "./typeguards";

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
