var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');


var Main = require('Main');
var VideoList = require('VideoList');

//Load foundation
$(document).foundation();

//App css
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={VideoList}/>
    </Route>

  </Router>,
  document.getElementById('app')
);
