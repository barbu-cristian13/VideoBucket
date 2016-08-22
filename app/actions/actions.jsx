import firebase, {firebaseRef} from 'firebaseConfig';
import moment from 'moment';
//Search
//..................
export var setSearchText = (searchText) => {
  return {
    type: 'SET_SEARCH_TEXT',
    searchText
  };
};

//Video List
//..................
export var addVideoList = (videoList) => {
  return {
    type: 'ADD_VIDEO_LIST',
    videoList
  };
};
export var startAddVideoList = (title, isPublic=true) => {
  return (dispatch, getState) => {
    var videoList = {
      title,
      isPublic,
      createdAt: moment().unix(),
      deletedAt: null,
      videoArray: []
    }
    var videoListRef = firebaseRef.child('videoLists').push(videoList);

    return videoListRef.then(() => {
      dispatch(addVideoList({
        ...videoList,
        videoListId: videoListRef.key
      }));
    });
  };
};


export var addVideoLists = (videoLists) => {
  //Used to import saved data
  return {
    type: 'ADD_VIDEO_LISTS',
    videoLists
  }
};

export var startAddTodos = () => {
  return (dispatch, getState) => {
    var videoListsRef = firebaseRef.child('videoLists');

    return videoListsRef.once('value').then((snapshot) => {
      var videoLists = snapshot.val() || {};
      var parseVideoLists = [];

      Object.keys(videoLists).forEach((videoListId) => {
        var parseVideoArray = [];

        Object.keys(videoLists[videoListId].videoArray).forEach((videoId) => {
          parseVideoArray.push({
            videoId,
            ...videoLists[videoListId].videoArray[videoId]
          });
        });
        parseVideoLists.push({
          videoListId,
          ...videoLists[videoListId],
          videoArray: parseVideoArray
        });
      });

      dispatch(addVideoLists(parseVideoLists));
    });
  };
};

// export var editVideoList = (videoListId, title, isPublic) => {
//   return {
//     type: 'EDIT_VIDEO_LIST',
//     videoListId,
//     title,
//     isPublic
//   };
// };

export var updateVideoList = (videoListId, updates) => {
  return {
    type: 'UPDATE_VIDEO_LIST',
    videoListId,
    updates
  };
};

export var startDeleteVideoList = (videoListId) => {
  return (dispatch, getState) => {
    var videoListRef = firebaseRef.child(`videoLists/${videoListId}`);

    var updates = {
        deletedAt: moment().unix()
    }
    return videoListRef.update(updates).then(() => {
      dispatch(updateVideoList(videoListId, updates));
    });
  };
}

export var addVideoToList = (videoListId, video) => {
  return {
    type: 'ADD_VIDEO_TO_LIST',
    videoListId,
    video
  };
};

export var startAddVideoToList = (videoListId, youtubeId, title) => {
  //Start add video to list action and update the datebase
  return (dispatch, getState) => {
    var video = {
      youtubeId,
      title,
      createdAt: moment().unix(),
      deletedAt: null,
      score: 0
    }
    var videoRef = firebaseRef.child('videoLists').child(videoListId).child('videoArray').push(video);

    return videoRef.then(() => {
      dispatch(addVideoToList(videoListId, {
        ...video,
        videoId: videoRef.key
      }));
    });
  };
};

export var updateVideoFromList = (videoListId, videoId, updates) => {
  return {
    type: 'UPDATE_VIDEO_FROM_LIST',
    videoListId,
    videoId,
    updates
  };
};

export var startDeleteVideoFromList = (videoListId, videoId) => {
  return (dispatch, getState) => {
    var videoRef = firebaseRef.child(`videoLists/${videoListId}`).child(`videoArray/${videoId}`);
    var updates = {
        deletedAt: moment().unix()
    }
    return videoRef.update(updates).then(() => {
      dispatch(updateVideoFromList(videoListId, videoId, updates));
    });
  };
}
