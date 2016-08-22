import * as redux from 'redux';
import thunk from 'redux-thunk';

var {searchTextReducer, videoListsReducer, authReducer} = require('reducers');

export var configure = () => {
  var reducer = redux.combineReducers({
    searchText: searchTextReducer,
    videoLists: videoListsReducer,
    auth: authReducer
  });

  var store = redux.createStore(reducer, redux.compose(
    redux.applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;
};
