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
          showVideo: true,
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
          return video;
        }
      });
    default:
      return state;
  }
};

//Video List
//.............

export var videoListsReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_VIDEO_LIST':
      return [
        ...state,
        {
          videoListId: uuid(),
          title: action.title,
          createdAt: moment().unix(),
          isPublic: action.isPublic,
          videoArray: []
        }
      ];
    case 'ADD_VIDEO_LISTS':
      return [
        ...state,
        ...action.videoLists
      ];
    case 'DELETE_VIDEO_LIST':
      return state.map((videoList) => {
        if(videoList.videoListId === action.videoListId){
          return {
            ...videoList,
            deletedAt: moment().unix()
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
              {
                videoId: uuid(),
                youtubeId: action.youtubeId,
                title: action.title,
                createdAt: moment().unix(),
                showVideo: true,
                score: 0
              }
            ]
          };
        }
        return videoList;
      });
    case 'DELETE_VIDEO_FROM_LIST':
      return state.map((videoList) => {
        if(videoList.videoListId === action.videoListId){
          return {
            ...videoList,
            videoArray: videoList.videoArray.map((video) => {
                if (video.videoId === action.videoId){
                  return {
                    ...video,
                    deletedAt: moment().unix()
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
