import firebase, {firebaseRef, githubProvider, googleProvider} from 'firebaseConfig';
import moment from 'moment';
//Search
//..................
export var setSearchText = (searchText) => {
  return {
    type: 'SET_SEARCH_TEXT',
    searchText
  };
};
//Public Video Lists
//........
export var getPublicVideoLists = (publicVideoLists) => {
  return {
    type: 'GET_PUBLIC_VIDEO_LISTS',
    publicVideoLists
  }
};

export var startGetPublicVideoLists = () => {
  return (dispatch, getState) => {
    var usersRef = firebaseRef.child('users');

    return usersRef.once('value').then((snapshot) => {
      var users = snapshot.val() || {};
      var parseVideoLists = [];
      Object.keys(users).forEach((userId) => {
        if('videoLists' in users[userId]){
          Object.keys(users[userId].videoLists).forEach((videoListId) => {
            var parseVideoArray = [];
            if(users[userId].videoLists[videoListId].isPublic === true){
              if('videoArray' in users[userId].videoLists[videoListId]){
                Object.keys(users[userId].videoLists[videoListId].videoArray).forEach((videoId) => {
                  parseVideoArray.push({
                    videoId,
                    ...users[userId].videoLists[videoListId].videoArray[videoId]
                  });
                });
              }
              parseVideoLists.push({
                videoListId,
                ...users[userId].videoLists[videoListId],
                videoArray: parseVideoArray
              });
            }
          });
        }
      });

      dispatch(getPublicVideoLists(parseVideoLists));
    });
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
    var uid = getState().auth.uid;
    var videoListRef = firebaseRef.child(`users/${uid}/videoLists`).push(videoList);

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

export var startAddVideoLists = () => {
  return (dispatch, getState) => {
    var uid = getState().auth.uid;
    var videoListsRef = firebaseRef.child(`users/${uid}/videoLists`);

    return videoListsRef.once('value').then((snapshot) => {
      var videoLists = snapshot.val() || {};
      var parseVideoLists = [];
      Object.keys(videoLists).forEach((videoListId) => {
        var parseVideoArray = [];
        if('videoArray' in videoLists[videoListId]){
          Object.keys(videoLists[videoListId].videoArray).forEach((videoId) => {
            parseVideoArray.push({
              videoId,
              ...videoLists[videoListId].videoArray[videoId]
            });
          });
        }
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



export var updateVideoList = (videoListId, updates) => {
  return {
    type: 'UPDATE_VIDEO_LIST',
    videoListId,
    updates
  };
};

export var startDeleteVideoList = (videoListId) => {
  return (dispatch, getState) => {
    var uid = getState().auth.uid;
    var videoListRef = firebaseRef.child(`users/${uid}/videoLists/${videoListId}`);

    var updates = {
        deletedAt: moment().unix()
    }
    return videoListRef.update(updates).then(() => {
      dispatch(updateVideoList(videoListId, updates));
    });
  };
};

export var startToggleVideoList = (videoListId, isPublic) => {
  return (dispatch, getState) => {
    var uid = getState().auth.uid;
    var videoListRef = firebaseRef.child(`users/${uid}/videoLists/${videoListId}`);

    var updates = {
        isPublic
    }
    return videoListRef.update(updates).then(() => {
      dispatch(updateVideoList(videoListId, updates));
    });
  };
};


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
    var uid = getState().auth.uid;
    var videoRef = firebaseRef.child(`users/${uid}/videoLists`).child(videoListId).child('videoArray').push(video);

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
    var uid = getState().auth.uid;
    var videoRef = firebaseRef.child(`users/${uid}/videoLists/${videoListId}`).child(`videoArray/${videoId}`);
    var updates = {
        deletedAt: moment().unix()
    }
    return videoRef.update(updates).then(() => {
      dispatch(updateVideoFromList(videoListId, videoId, updates));
    });
  };
};


//Auth
//.........................
export var login = (uid) => {
  return {
    type: 'LOGIN',
    uid: uid
  }
};

export var startLogin = (provider) => {
  return (dispatch, getState) => {
    var myProvider = googleProvider;
    switch(provider){
      case 'google':
        myProvider = googleProvider;
        break;
      case 'github':
        myProvider = githubProvider;
        break;
    }

    firebase.auth().signInWithPopup(myProvider).then((result) => {
      console.log('Auth worked!');
      dispatch(login(result.user.uid));
    }, (error) => {
      console.log('Unable to auth', error);
      //dispatch(loginFail(error));
    });
  };
};


export var logout = () => {
  return {
    type: 'LOGOUT'
  }
};

export var startLogout = () => {
  return (dispatch, getState) => {
    firebase.auth().signOut().then(() => {
      console.log('Logged out!');
      dispatch(logout());
    });
  };
};
