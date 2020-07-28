import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Login: React.FC = () => {
  return (
    <>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control type="email" placeholder="For example email" />
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
