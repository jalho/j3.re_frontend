import React, { FormEvent, useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useTranslation } from "react-i18next";
import { useMutation } from "@apollo/client";
import { useDispatch, useSelector } from "react-redux";

// own
import { LOGIN } from "../../utils/graphql";
import { StateCombinedFromReducers } from "../../types";
import {
  setToken,
  setAuthenticatedUser,
  clearToken,
  clearAuthenticatedUser
} from "../../state/actionCreators";

const Login: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { t } = useTranslation();
  const [login, { data }] = useMutation(LOGIN);
  const dispatch = useDispatch();

  const authenticatedUser = useSelector((state: StateCombinedFromReducers) => {
    return state.authenticatedUserReducer.authenticatedUser;
  });

  /**
   * Clear the login form's input fields.
   */
  const clearFields = (): void => {
    setUsername("");
    setPassword("");
  };

  /**
   * Send a token request as mutation to GraphQL backend and clear input fields.
   * @param e event emitted from login form
   */
  const loginHandler = (e: FormEvent): void => {
    e.preventDefault(); // prevent reloading
    login({ variables: { username: username, password: password } });
    clearFields();
  };

  // save received token to local storage
  useEffect(() => {
    if (data && data.login) {
      localStorage.setItem("token", data.login.token);
      /* the two actions below could just as well be one, but for now
      (for historical reasons :D) they are separate */
      dispatch(setToken(data.login.token));
      dispatch(setAuthenticatedUser(data.login.user));
    }
  }, [data, dispatch]);

  /**
   * Clear logged in user information from Redux state, i. e. the token and user details.
   * A similar function was first declared in NavigationBar.tsx; TODO: Remove duplicate.
   */
  const logOut = (): void => {
    dispatch(clearToken());
    dispatch(clearAuthenticatedUser());
    localStorage.removeItem("token");
  };

  if (authenticatedUser) {
    return (
      <>
        <p id="loginInformation">
          <span>{t("Currently logged in as")}</span>
          <span id="loggedInUsername">{authenticatedUser.username}</span>
        </p>
        <Button onClick={(): void => logOut()}>
          {t("Log out")}
        </Button>
      </>
    );
  } else {
    return (
      <>
        <Form onSubmit={loginHandler}>
          <Form.Group>
            <Form.Label>{t("Username")}</Form.Label>
            <Form.Control type="text" onChange={(e): void => setUsername(e.target.value)} value={username} />
          </Form.Group>
  
          <Form.Group controlId="formBasicPassword">
            <Form.Label>{t("Password")}</Form.Label>
            <Form.Control type="password" onChange={(e): void => setPassword(e.target.value)} value={password} />
          </Form.Group>
  
          <Button variant="primary" type="submit">
            {t("Log in")}
          </Button>
        </Form>
      </>
    );
  }
};

export default Login;
