var redux = require('redux');

var {searchTextReducer, videoListsReducer} = require('reducers');

export var configure = () => {
  var reducer = redux.combineReducers({
    searchText: searchTextReducer,
    videoLists: videoListsReducer
  });

  var store = redux.createStore(reducer, redux.compose(
    window.devToolsExtensions ? window.devToolsExtensions() : f => f
  ));

  return store;
};
