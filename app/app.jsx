var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var Main = require('Main');
import VideoList from 'VideoList';
var About = require('About');

import * as actions from 'actions';
var store = require('configureStore').configure();

store.subscribe(() => {
  console.log('New state', store.getState());
  // console.log('video list 1 id: ', store.getState().videoLists[0].videoListId);
});

store.dispatch(actions.addVideoList('My Created list'));
var newId = store.getState().videoLists[0].videoListId;
store.dispatch(actions.addVideoToList(newId, 'dQw4w9WgXcQ', 'Best video ever'));


//Load foundation
$(document).foundation();

//App css
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={Main}>
        <Route path="/about" component={About}/>
        <IndexRoute component={VideoList}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
