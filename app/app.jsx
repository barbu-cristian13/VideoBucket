var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var {hashHistory} = require('react-router');

import firebase, {firebaseRef} from 'firebaseConfig';
import * as actions from 'actions';
var store = require('configureStore').configure();
import router from 'localRouter';

firebase.auth().onAuthStateChanged((user) => {
    if(user) {
      hashHistory.push('/site');
    }else {
      hashHistory.push('/');
    }
});

store.subscribe(() => {
  var state = store.getState();
  console.log('New state', state);
  // console.log('video list 1 id: ', store.getState().videoLists[0].videoListId);
  //VideoAPI.setVideoLists(state.videoLists);
});

store.dispatch(actions.startAddVideoLists());

//Load foundation
$(document).foundation();

//App css
require('style!css!sass!applicationStyles');


ReactDOM.render(
  <Provider store={store}>
    {router}
  </Provider>,
  document.getElementById('app')
);
