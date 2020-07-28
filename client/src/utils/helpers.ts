import bcrypt from "bcryptjs";

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
 * Hash a given password using https://www.npmjs.com/package/bcryptjs with 10 "salt".
 * @param password to hash
 * @returns password hash
 */
export const hashPassword = (password: string): string => {
  return bcrypt.hashSync(password, 10);
};
