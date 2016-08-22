import * as redux from 'redux';
import thunk from 'redux-thunk';

var {searchTextReducer, videoListsReducer} = require('reducers');

export var configure = () => {
  var reducer = redux.combineReducers({
    searchText: searchTextReducer,
    videoLists: videoListsReducer
  });

  var store = redux.createStore(reducer, redux.compose(
    redux.applyMiddleware(thunk),
    window.devToolsExtensions ? window.devToolsExtensions() : f => f
  ));

  return store;
};
