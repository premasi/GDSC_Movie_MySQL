import React from 'react';
import { Router, Route } from 'react-router';
import App from '../App';
import { Login } from './Login';

const createRoutes = () => (
    <Router>
      <Route exact path="/" component={App}/>
      <Route exact path="/Login" component={Login}/>
    </Router>
);

export default createRoutes;