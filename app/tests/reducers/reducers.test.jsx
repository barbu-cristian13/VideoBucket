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

  describe('videoListsReducer', () => {
    it('should set addVideoList', () => {
      var videoList = {
        videoListId: '12345',
        createdAt: 123,
        isPublic: true,
        videoArray: []
      };
      var action = {
        type: 'ADD_VIDEO_LIST',
        videoList
      }
      var res = reducers.videoListsReducer(df([]), df(action));

      expect(res.length).toEqual(1);
      expect(res[0]).toEqual(videoList);
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
    it('should set updateVideoList', () => {
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
        type: 'UPDATE_VIDEO_LIST',
        videoListId: '1233455',
        updates: {
          deletedAt: 12334
        }
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
      var video = {
        videoId: '543234',
        createdAt: 123124,
        youtubeId: 'zxcvcxz',
        title: 'testvideo1',
        score: 0
      };
      var action = {
        type: 'ADD_VIDEO_TO_LIST',
        videoListId: '1233455',
        video
      }
      var res = reducers.videoListsReducer(df(videoLists), df(action));

      expect(res.length).toEqual(1);
      expect(res[0].videoListId).toEqual(action.videoListId);
      expect(res[0].videoArray.length).toEqual(1);
      expect(res[0].videoArray[0]).toEqual(video);
    });

    it('should set updateVideoFromList', () => {
      var videoLists = [{
          title: 'test',
          videoListId: '1233455',
          isPublic: false,
          videoArray: [{
            title: 'testvideo1',
            youtubeId: 'zxcvsza',
            videoId: '12345',
            createdAt: 1234563,
            score: 0
          }]
      }];
      var action = {
        type: 'UPDATE_VIDEO_FROM_LIST',
        videoListId: '1233455',
        videoId: '12345',
        updates: {
          deletedAt: 1234
        }
      }
      var res = reducers.videoListsReducer(df(videoLists), df(action));

      expect(res.length).toEqual(1);
      expect(res[0].videoListId).toEqual(action.videoListId);
      expect(res[0].videoArray.length).toEqual(1);
      expect(res[0].videoArray[0].deletedAt).toExist();
    });
  });
});
