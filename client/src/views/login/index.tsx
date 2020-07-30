import React, { FormEvent, useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useTranslation } from "react-i18next";
import { useMutation } from "@apollo/client";
import { useDispatch } from "react-redux";

import { LOGIN } from "../../utils/graphql";
import { setToken, setAuthenticatedUser } from "../../state/actionCreators";

const Login: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { t } = useTranslation();
  const [login, { data }] = useMutation(LOGIN);
  const dispatch = useDispatch();

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
};

export default Login;
