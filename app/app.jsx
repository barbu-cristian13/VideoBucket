var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var Main = require('Main');
var VideoList = require('VideoList');
var About = require('About');

var actions = require('actions');
var store = require('configureStore').configure();

store.subscribe(() => {
  console.log('New state', store.getState());
  // console.log('video list 1 id: ', store.getState().videoLists[0].videoListId);
});

store.dispatch(actions.addVideoList('My Created list'));
var newId = store.getState().videoLists[0].videoListId;
store.dispatch(actions.addVideoToList(newId, 'zxcvasd', 'test video 1'));


//Load foundation
$(document).foundation();

//App css
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="/about" component={About}/>
      <IndexRoute component={VideoList}/>
    </Route>

  </Router>,
  document.getElementById('app')
);
