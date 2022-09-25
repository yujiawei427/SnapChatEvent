import React from 'react';
import {
  Redirect,
  Route,
  Switch,
  withRouter
} from 'react-router-dom';
import LandingPage from './pages/LandingPage';

const App = () => (
  <Switch>
    <Route component={LandingPage} exact path="/" />
  </Switch>
);

export default withRouter(App);
