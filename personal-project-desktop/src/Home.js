import React from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import { useState, useEffect } from 'react';
import Login from './components/login/Login';
import { connect } from 'react-redux';

function Home(props) {
  const isLoggedIn = props.user.isLoggedIn;

  return (
    <div>
      <h1>Welcome App Please log in</h1>
      {!isLoggedIn ? <Login /> : <h2>Thank you for logging in</h2>}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(Home);
