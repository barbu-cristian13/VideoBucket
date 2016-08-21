var expect = require('expect');
var df = require('deep-freeze-strict');

var reducers = require('reducers');

describe('Reducers', () => {
  describe('searchTextReducer', () => {
    it('should set searchText', () => {
      var action = {
        type: 'SET_SEARCH_TEXT',
        text: 'some text'
      };
      var res = reducers.searchTextReducer(df(''), df(action));

      expect(res).toEqual(action.searchText);
    });
  });

  describe('videosReducer', () => {
    it('should set addVideo', () => {
      var action = {
        type: 'ADD_VIDEO',
        youtubeId: '12345',
        title: 'test1'
      }
      var res = reducers.videosReducer(df([]), df(action));

      expect(res.length).toEqual(1);
      expect(res[0].youtubeId).toEqual(action.youtubeId);
      expect(res[0].title).toEqual(action.title);
    });

    it('should set deleteVideo', () => {
      var videoArray = [{
          videoId: '12345',
          title: 'Test1',
          youtubeId: 'X3ZqdrXgdFU',
          createdAt: 123543,
          showVideo: true,
          score: 123
      }];
      var action = {
        type: 'DELETE_VIDEO',
        videoId: '12345'
      };
      var res = reducers.videosReducer(df(videoArray), df(action));

      expect(res.length).toEqual(1);
      expect(res[0].deletedAt).toExist();
    });

    it('should set toggleVideo', () => {
      var videoArray = [{
          videoId: '12345',
          title: 'Test1',
          youtubeId: 'X3ZqdrXgdFU',
          createdAt: 123543,
          showVideo: true,
          score: 123
      }];
      var action = {
        type: 'TOGGLE_VIDEO',
        videoId: '12345'
      }
      var res = reducers.videosReducer(df(videoArray), df(action));

      expect(res[0].videoId).toEqual(action.videoId);
      expect(res[0].showVideo).toEqual(! videoArray[0].showVideo);

    });
  });

  describe('videoListsReducer', () => {
    it('should set addVideoList', () => {
      var action = {
        type: 'ADD_VIDEO_LIST',
        title: 'test1',
        isPublic: false
      }
      var res = reducers.videoListsReducer(df([]), df(action));

      expect(res.length).toEqual(1);
      expect(res[0].title).toEqual(action.title);
      expect(res[0].isPublic).toEqual(action.isPublic);
      expect(res[0].videoArray.length).toEqual(0);
    });

    it('should add existing videos', () => {
      var videoLists = [{
        videoListId: '12345',
        createdAt: 123,
        isPublic: true,
        videoArray: []
      }];
      var action = {
        type: 'ADD_VIDEO_LISTS',
        videoLists
      };
      var res = reducers.videoListsReducer(df([]), df(action));

      expect(res.length).toEqual(1);
      expect(res[0]).toEqual(videoLists[0]);
    });
    it('should set deleteVideoList', () => {
      var videoLists = [
        {
            title: 'test',
            videoListId: '1233455',
            isPublic: false,
            videoArray: [{
              title: 'testvideo1',
              youtubeId: 'zxcvsza',
              videoId: '1234321',
              createdAt: 1234563
            },
            {
              title: 'testvideo2',
              youtubeId: 'zxcvsz2',
              videoId: '1234322',
              createdAt: 1234543
            }]
        }
      ];
      var action = {
        type: 'DELETE_VIDEO_LIST',
        videoListId: '1233455'
      }
      var res = reducers.videoListsReducer(df(videoLists), df(action));

      expect(res.length).toEqual(1);
      expect(res[0].deletedAt).toExist();
    });
    it('should set addVideoToList', () => {
      var videoLists = [{
          title: 'test',
          videoListId: '1233455',
          isPublic: false,
          videoArray: []
      }];
      var action = {
        type: 'ADD_VIDEO_TO_LIST',
        videoListId: '1233455',
        youtubeId: 'zxcvcxz',
        title: 'testvideo1'
      }
      var res = reducers.videoListsReducer(df(videoLists), df(action));

      expect(res.length).toEqual(1);
      expect(res[0].videoListId).toEqual(action.videoListId);
      expect(res[0].videoArray.length).toEqual(1);
      expect(res[0].videoArray[0].youtubeId).toEqual(action.youtubeId);
      expect(res[0].videoArray[0].title).toEqual(action.title);
    });
    it('should set deleteVideoFromList', () => {
      var videoLists = [{
          title: 'test',
          videoListId: '1233455',
          isPublic: false,
          videoArray: [{
            title: 'testvideo1',
            youtubeId: 'zxcvsza',
            videoId: '12345',
            createdAt: 1234563
          }]
      }];
      var action = {
        type: 'DELETE_VIDEO_FROM_LIST',
        videoListId: '1233455',
        videoId: '12345'
      }
      var res = reducers.videoListsReducer(df(videoLists), df(action));

      expect(res.length).toEqual(1);
      expect(res[0].videoListId).toEqual(action.videoListId);
      expect(res[0].videoArray.length).toEqual(1);
      expect(res[0].videoArray[0].videoId).toEqual(action.videoId);
      expect(res[0].videoArray[0].deletedAt).toExist();
    });
  });
});
