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
export var addVideo = (youtubeId, title) => {
  return {
    type: 'ADD_VIDEO',
    youtubeId,
    title
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
export var addVideoList = (title, isPublic=true) => {
  return {
    type: 'ADD_VIDEO_LIST',
    title,
    isPublic
  };
};

export var editVideoList = (videoListId, title, isPublic) => {
  return {
    type: 'EDIT_VIDEO_LIST',
    videoListId,
    title,
    isPublic
  };
};

export var deleteVideoList = (videoListId) => {
  return {
    type: 'DELETE_VIDEO_LIST',
    videoListId
  };
};

export var addVideoToList = (videoListId, youtubeId, title) => {
  return {
    type: 'ADD_VIDEO_TO_LIST',
    videoListId,
    youtubeId,
    title
  };
};

export var deleteVideoFromList = (videoListId, videoId) => {
  return {
    type: 'DELETE_VIDEO_FROM_LIST',
    videoListId,
    videoId
  };
};
