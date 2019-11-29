// third party libraries
import React from 'react';
import {
  BrowserRouter as Router, Switch, Route,
} from 'react-router-dom';

// pages
import Home from '../pages/Home'
import NotFound from '../pages/NotFound'

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);

export default Routes;
