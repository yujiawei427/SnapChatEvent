import React from 'react';
import {
  Redirect,
  Route,
  Switch,
  withRouter
} from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import CreatingEventPage from './pages/CreatingEventPage'
import EventPage from './pages/EventPage';

const App = () => (
  <Switch>
    <Route component={LandingPage} exact path="/" />
    <Route component={CreatingEventPage} exact path="/create" />
    <Route component={EventPage} exact path="/event" />
  </Switch>
);

export default withRouter(App);
