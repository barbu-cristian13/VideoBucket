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
      store.dispatch(actions.login(user.uid));
      store.dispatch(actions.startAddVideoLists());
      store.dispatch(actions.startGetPublicVideoLists());
      hashHistory.push('/site');

    }else {
      store.dispatch(actions.logout());
      hashHistory.push('/');
    }
});

// store.subscribe(() => {
//   var state = store.getState();
//   //console.log('New state', state);
// });

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
