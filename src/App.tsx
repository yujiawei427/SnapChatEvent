import React from 'react';
import {
  Redirect,
  Route,
  Switch,
  withRouter
} from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import CreatingEventPage from './pages/CreatingEventPage'

const App = () => (
  <Switch>
    <Route component={LandingPage} exact path="/" />
    <Route sensitive component={CreatingEventPage} exact path="/create" />
  </Switch>
);

export default withRouter(App);
