import './css/App.css';
import { useEffect } from 'react';
import axios from 'axios';
import { HashRouter } from 'react-router-dom';

import { Header, NavBar } from './component imports/appComponents';
import routes from './routes/routes';

import { connect } from 'react-redux';
import { registerUserData } from './duck/userReducer';

function App(props) {
  let userId = props.user.id;
  useEffect(() => {
    if (!userId) {
      axios
        .get(`/api/users`)
        .then((response) => {
          const {
            phone_number,
            users_email,
            users_first_name,
            users_last_name,
            users_id,
          } = response.data[0];
          if (response.data[0]) {
            const userInfo = {
              phoneNumber: phone_number,
              email: users_email,
              firstName: users_first_name,
              lastName: users_last_name,
              id: users_id,
              isLoggedIn: true,
            };
            props.registerUserData(userInfo);
          }
        })
        .catch((err) => console.log(err));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <HashRouter>
      <div className="App">
        <Header />
        <NavBar />

        {/* <Journal /> */}
        <div className="home">
          {/* Need to add some styles to this div so everything looks the same  */}
          {routes}
        </div>
      </div>
    </HashRouter>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = {
  registerUserData,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
