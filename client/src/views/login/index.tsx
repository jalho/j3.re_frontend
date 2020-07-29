import React, { FormEvent, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useTranslation } from "react-i18next";

const Login: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { t } = useTranslation();

  /**
   * Clear the login form's input fields.
   */
  const clearFields = (): void => {
    setUsername("");
    setPassword("");
  };

  // TODO: Implement token fetching with `useMutation`.
  // TODO: Get token from localStorage in an auth link. Example: https://www.apollographql.com/docs/react/networking/authentication/#header.
  /**
   * TODO: Document.
   * @param e event emitted from login form
   */
  const loginHandler = (e: FormEvent): void => {
    e.preventDefault(); // prevent reloading
    clearFields();
  };

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
