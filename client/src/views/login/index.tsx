import React, { FormEvent, useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import bcrypt from "bcryptjs";
import { GET_ONE_USER } from "../../utils/graphql";
import { useTranslation } from "react-i18next";
import { useLazyQuery } from '@apollo/client';

const Login: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { t } = useTranslation();
  const [ getOneUser, { data } ] = useLazyQuery(GET_ONE_USER);

  /**
   * Clear the login form's input fields.
   */
  const clearFields = (): void => {
    setUsername("");
    setPassword("");
  }

  /**
   * TODO: Document.
   * @param e event emitted from login form
   */
  const loginHandler = (e: FormEvent) => {
    e.preventDefault(); // prevent reloading
    getOneUser({ variables: { username: username } }); // goes to `data` -> triggers `useEffect`
    clearFields();
  };

  // TODO: Document.
  useEffect(() => {
    if (data && data.oneUser) {
      console.log("Trying to log in a user...", data);
      // TODO: Compare password to data's hash. Generate token.
    }
  }, [data]);

  return (
    <>
      <Form onSubmit={loginHandler}>
        <Form.Group>
          <Form.Label>{t("Username")}</Form.Label>
          <Form.Control type="text" onChange={e => setUsername(e.target.value)} value={username} />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>{t("Password")}</Form.Label>
          <Form.Control type="password" onChange={e => setPassword(e.target.value)} value={password} />
        </Form.Group>

        <Button variant="primary" type="submit">
          {t("Log in")}
        </Button>
      </Form>
    </>
  );
};

export default Login;
