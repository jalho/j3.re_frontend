import { User } from "../types";

const isString = (value: unknown): value is string => {
  return (value instanceof String || typeof value === "string");
};

const isUser = (value: unknown): value is User => {
  const test = value as User;
  if (test.id === undefined || test.username === undefined) {
    return false;
  }
  if (!isString(test.id) || !isString(test.username)) {
    return false;
  }
  return true;
};

export default {
  isString,
  isUser
};
