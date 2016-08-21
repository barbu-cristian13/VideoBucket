var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

import Main from 'Main';
import VideoList from 'VideoList';
import VideoBucket from 'VideoBucket';
var About = require('About');

import * as actions from 'actions';
var store = require('configureStore').configure();
var VideoAPI = require('VideoAPI');
store.subscribe(() => {
  var state = store.getState();
  console.log('New state', state);
  // console.log('video list 1 id: ', store.getState().videoLists[0].videoListId);
  VideoAPI.setVideoLists(state.videoLists);
});

var initialVideos = VideoAPI.getVideoLists();
store.dispatch(actions.addVideoLists(initialVideos));

// store.dispatch(actions.addVideoList('My Created list', false));
// var newId = store.getState().videoLists[0].videoListId;
// store.dispatch(actions.addVideoToList(newId, 'dQw4w9WgXcQ', 'Best video ever'));
// store.dispatch(actions.addVideoList('My Secret list'));
// var newId = store.getState().videoLists[1].videoListId;
// store.dispatch(actions.addVideoToList(newId, 'dQw4w9WgXcQ', 'Worst video ever'));

//Load foundation
$(document).foundation();

//App css
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={Main}>
        <Route path="/about" component={About}/>
        <IndexRoute component={VideoBucket}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
