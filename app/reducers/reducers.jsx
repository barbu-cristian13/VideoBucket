var uuid = require('node-uuid');
var moment = require('moment');

//Search
//.............
export var searchTextReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_SEARCH_TEXT':
      return action.searchText;
    default:
      return state;
  };
};

//Video List
//.............

export var videoListsReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_VIDEO_LIST':
      return [
        ...state,
        action.videoList
      ];
    case 'ADD_VIDEO_LISTS':
      return [
        ...state,
        ...action.videoLists
      ];
    case 'UPDATE_VIDEO_LIST':
      return state.map((videoList) => {
        if(videoList.videoListId === action.videoListId){
          return {
            ...videoList,
            ...action.updates
          };
        }
        return videoList;
      });
    case 'ADD_VIDEO_TO_LIST':
      return state.map((videoList) => {
        if(videoList.videoListId === action.videoListId){
          return {
            ...videoList,
            videoArray: [
              ...videoList.videoArray,
              action.video
            ]
          };
        }
        return videoList;
      });
    case 'UPDATE_VIDEO_FROM_LIST':
      return state.map((videoList) => {
        if(videoList.videoListId === action.videoListId){
          return {
            ...videoList,
            videoArray: videoList.videoArray.map((video) => {
                if (video.videoId === action.videoId){
                  return {
                    ...video,
                    ...action.updates
                  };
                }
                return video;
              })
          }
        }
        return videoList;
      });
    default:
      return state;
  }
};

//Auth reducer
//...................
export var authReducer = (state = {}, action) => {
  switch(action.type) {
    case 'LOGIN':
      return {
        uid: action.uid
      };
    case 'LOGOUT':
      return {};
    default:
      return state;
  }
};
