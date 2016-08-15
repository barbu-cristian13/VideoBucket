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

    // it('should set editVideo', () => {
    //   var action = {
    //     type: 'EDIT_VIDEO',
    //     title: 'some title',
    //     videoId: '1234'
    //   };
    //   var res = reducers.videosReducer(df({}), df(action));
    //
    //   expect(res).toEqual(action.video);
    // });

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
});
