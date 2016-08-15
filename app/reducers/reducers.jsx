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

//Video
//.............

export var videosReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_VIDEO':
      return [
        ...state,
        {
          videoId: uuid(),
          youtubeId: action.youtubeId,
          title: action.title,
          createdAt: moment().unix(),
          showVideo: false,
          score: 0
        }
      ];
    // case 'EDIT_VIDEO':
    //   return action.video;
    case 'DELETE_VIDEO':
    return state.map((video) => {
      if(video.videoId === action.videoId){
        return {
          ...video,
          deletedAt: moment().unix()
        };
      }
    });
    case 'TOGGLE_VIDEO':
      return state.map((video) => {
        if(video.videoId === action.videoId){
          var newShowVideo = !video.showVideo;
          return {
            ...video,
            showVideo: newShowVideo
          };
        }
      });
    default:
      return state;
  }
};
