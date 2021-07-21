import React from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

function logInUser(email, password) {
  axios
    .post('api/users/login', { email, password })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
}

function test() {
  axios
    .get('api/test')
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
}

export default function Login() {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  console.log(userEmail, userPassword);
  return (
    <>
      <button onClick={test}>Test</button>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => setUserEmail(e.target.value)}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group
          className="mb-3"
          controlId="formBasicPassword"
          onChange={(e) => setUserPassword(e.target.value)}
        >
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button
          variant="primary"
          type="submit"
          onClick={() => logInUser(userEmail, userPassword)}
        >
          Submit
        </Button>
      </Form>
    </>
  );
}
