import React from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import Login from './components/login/Login';

export default function Home() {
  const [loggedIn, setIsLoggedIn] = useState(false);
  return (
    <div>
      <h1>Welcome App Please log in</h1>
      {!loggedIn ? <Login /> : <h2>Thank you for logging in</h2>}
    </div>
  );
}
