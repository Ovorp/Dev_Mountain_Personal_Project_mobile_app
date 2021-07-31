import React, { useEffect } from 'react';
import axios from 'axios';
import Login from './components/login/Login';
import { connect } from 'react-redux';

function Home(props) {
  const isLoggedIn = props.user.isLoggedIn;

  return (
    <div>
      <h1>
        {!isLoggedIn
          ? 'Welcome App Please log in'
          : `${props.user.firstName} ${props.user.lastName}`}
      </h1>
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
