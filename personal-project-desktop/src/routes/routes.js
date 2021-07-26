import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../Home';
import Journal from '../components/journal/Journal';

import NewUser from '../components/login/NewUser';

// import Home from './components/Home/Home';

export default (
  <Switch>
    <Route component={Home} exact path="/" />
    <Route component={Journal} path="/journal" />
    <Route component={NewUser} path="/newuser" />
  </Switch>
);
