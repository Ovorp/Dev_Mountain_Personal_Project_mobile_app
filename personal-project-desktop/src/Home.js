import React, { useEffect } from 'react';
import axios from 'axios';
import Login from './components/login/Login';
import { connect } from 'react-redux';
import { loadDataToStore } from './duck/tripReducer';

function Home(props) {
  const isLoggedIn = props.user.isLoggedIn;
  useEffect(() => {
    async function getInfo() {
      if (isLoggedIn) {
        const userInfoForStore = await axios
          .get(`/api/all/${props.user.id}`)
          .catch((err) => console.log(err));
        console.log(userInfoForStore.data);
        props.loadDataToStore(userInfoForStore.data);
      }
    }
    getInfo();
  });

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

const mapDispatchToProps = {
  loadDataToStore,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
