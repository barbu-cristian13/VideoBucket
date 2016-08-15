var expect = require('expect');
var actions = require('actions');


describe('Actions', () => {
  describe('Search', () => {
    it('should generate search text action', () => {
      var action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'some text'
      }
      var res = actions.setSearchText(action.searchText);

      expect(res).toEqual(action);
    });
  });

  describe('Video', () => {
    it('should generate add video action', () => {
      var action = {
        type: 'ADD_VIDEO',
        youtubeId: '12345',
        title: 'test1'
      }
      var res = actions.addVideo(action.youtubeId, action.title);

      expect(res).toEqual(action);
    });

    it('should generate edit video action', () => {
      var video = {
        videoId: '12345',
        title: 'Test1',
        createdAt: 123544,
        showVideo: false,
        score: 123
      }
      var action = {
        type: 'EDIT_VIDEO',
        video
      }
      var res = actions.editVideo(action.video);

      expect(res).toEqual(action);
    });

    it('should generate delete video action', () => {
      var action = {
        type: 'DELETE_VIDEO',
        videoId: '12345'
      }
      var res = actions.deleteVideo(action.videoId);

      expect(res).toEqual(action);
    });

    it('should generate toggle video action', () => {
      var action = {
        type: 'TOGGLE_VIDEO',
        videoId: '12345'
      }
      var res = actions.toggleVideo(action.videoId);

      expect(res).toEqual(action);
    });
  });
  describe('Video List', () => {
    it('should generate add video list action', () => {
      var action = {
        type: 'ADD_VIDEO_LIST',
        videoListId: '12345'
      }
      var res = actions.addVideoList(action.videoListId);

      expect(res).toEqual(action);
    });

    it('should generate add video list action', () => {
      var videoList = {
        title: 'some title',
        videoListId: '123345',
        videoArray: []
      }
      var action = {
        type: 'EDIT_VIDEO_LIST',
        videoList
      }
      var res = actions.editVideoList(action.videoList);

      expect(res).toEqual(action);
    });

    it('should generate add video list action', () => {
      var action = {
        type: 'DELETE_VIDEO_LIST',
        videoListId: '12345'
      }
      var res = actions.deleteVideoList(action.videoListId);

      expect(res).toEqual(action);
    });

  });
});
