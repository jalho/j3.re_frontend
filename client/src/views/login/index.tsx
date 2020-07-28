import React, { FormEvent, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Login: React.FC = () => {
  const [username, setUsername] = useState<string>();

  const loginHandler = (e: FormEvent) => {
    e.preventDefault();
    // TODO!
  };

  return (
    <>
      <Form onSubmit={loginHandler}>
        <Form.Group>
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="For example email" onChange={e => setUsername(e.target.value)} />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Log in
        </Button>
      </Form>
    </>
  );
};

export default Login;
