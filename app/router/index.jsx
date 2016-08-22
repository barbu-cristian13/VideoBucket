import React from 'react';
import {Route, IndexRoute, hashHistory, Router} from 'react-router';

import firebase from 'firebaseConfig';
import Main from 'Main';
import Login from 'Login';
import About from 'About';
import VideoBucket from 'VideoBucket';

var requireLogin = (nextState, replace, next) => {
  if(!firebase.auth().currentUser){
    replace('/');
  }
  next();
};

var redirectIfLogin = (nextState, replace, next) => {
  if(firebase.auth().currentUser){
    replace('/site');
  }
  next();
};

export default (
  <Router history={hashHistory}>
    <Route path="/">
      <Route path="site" component={Main} onEnter={requireLogin}>
        <Route path="about" component={About}/>
        <IndexRoute component={VideoBucket}/>
      </Route>
      <IndexRoute component={Login} onEnter={redirectIfLogin}/>
    </Route>
  </Router>
);
