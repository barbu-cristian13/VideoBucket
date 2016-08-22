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

  describe('Video List', () => {
    it('should generate add video list action', () => {
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
      var res = actions.addVideoList(action.videoList);

      expect(res).toEqual(action);
    });

    it('should generate add video lists action', () => {
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
      var res = actions.addVideoLists(action.videoLists);

      expect(res).toEqual(action);
    });


    it('should generate update video list action', () => {
      var updates = {
        deletedAt: 12343
      };
      var action = {
        type: 'UPDATE_VIDEO_LIST',
        videoListId: '12345',
        updates
      }
      var res = actions.updateVideoList(action.videoListId, action.updates);

      expect(res).toEqual(action);
    });

  });

  describe('Videos', () => {
    it('should generate add video to list action', () => {
      var video = {
        videoId: '12345',
        youtubeId: 'sdfsdgs',
        createdAt: 123,
        score: 0,
        title: 'test VIdeo'
      };
      var action = {
        type: 'ADD_VIDEO_TO_LIST',
        videoListId: '12345',
        video
      };
      var res = actions.addVideoToList(action.videoListId, action.video);

      expect(res).toEqual(action);
    });


    it('should generate update video from list action', () => {
      var updates = {
        deletedAt: 12343
      };
      var action = {
        type: 'UPDATE_VIDEO_FROM_LIST',
        videoListId: '12345',
        videoId: '54321',
        updates
      };
      var res = actions.updateVideoFromList(action.videoListId, action.videoId, action.updates);

      expect(res).toEqual(action);
    });
  });
});
