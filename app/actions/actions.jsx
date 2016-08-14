//Search
//..................
export var setSearchText = (searchText) => {
  return {
    type: 'SET_SEARCH_TEXT',
    searchText
  };
};

//Video
//..................
export var addVideo = (videoId) => {
  return {
    type: 'ADD_VIDEO',
    videoId
  };
};

export var editVideo = (video) => {
  return {
    type: 'EDIT_VIDEO',
    ...video
  };
};

export var deleteVideo = (videoId) => {
  return {
    type: 'DELETE_VIDEO',
    videoId
  };
};

export var toggleVideo = (videoId) => {
  return {
    type: 'TOGGLE_VIDEO',
    videoId
  };
};

//Video List
//..................
export var addVideoList = (videoListId) => {
  return {
    type: 'ADD_VIDEO_LIST',
    videoListId
  };
};

export var editVideoList = (videoList) => {
  return {
    type: 'EDIT_VIDEO_LIST',
    ...videoList
  };
};

export var deleteVideoList = (videoListId) => {
  return {
    type: 'DELETE_VIDEO_LIST',
    videoListId
  };
};
