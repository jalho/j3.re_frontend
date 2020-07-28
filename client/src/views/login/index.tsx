import React, { FormEvent, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import bcrypt from "bcryptjs";
import { useQuery } from '@apollo/client';
import { GET_ALL_USERS } from "../../utils/graphql";
import { useTranslation } from "react-i18next";

const Login: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { error, data } = useQuery(GET_ALL_USERS);
  const { t } = useTranslation();

  /**
   * Clear the login form's input fields.
   */
  const clearFields = (): void => {
    setUsername("");
    setPassword("");
  }

  /**
   * Find the correct username's details from previously fetched users list, and if found,
   * compare the entered password to the username's associated password hash.
   * @param e event emitted from login form
   */
  const loginHandler = (e: FormEvent) => {
    e.preventDefault(); // prevent reloading
    const userLoggingIn = data.users.find((user: { username: string; }) => user.username === username);
    if (!userLoggingIn) {
      console.log("No such user!"); // TODO: Add notification to UI.
      clearFields();
      return;
    }
    bcrypt.compare(password, userLoggingIn.passwordHash, (_error, result) => {
      if (result) {
        console.log("Correct password!"); // TODO: Add notification to UI. Generate a token and use that in requests.
      } else {
        console.log("Incorrect password!"); // TODO: Add notification to UI.
      }
    });
    clearFields();
  };

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

        <Button variant="primary" type="submit" disabled={!data}>
          {t("Log in")}
        </Button>
        {error && (
          <Form.Text>
            {t("Server is not operational.")}
          </Form.Text>)}
      </Form>
    </>
  );
};

export default Login;
