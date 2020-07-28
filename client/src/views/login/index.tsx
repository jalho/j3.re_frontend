import React, { FormEvent, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import bcrypt from "bcryptjs";
import { useQuery } from '@apollo/client';
import { GET_ALL_USERS } from "../../utils/graphql";

const Login: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { error, data } = useQuery(GET_ALL_USERS);

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
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="For example email" onChange={e => setUsername(e.target.value)} value={username} />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} value={password} />
        </Form.Group>

        <Button variant="primary" type="submit" disabled={!data}>
          Log in
        </Button>
        {error && (
          <Form.Text>
            Server is not operational.
          </Form.Text>)}
      </Form>
    </>
  );
};

export default Login;
