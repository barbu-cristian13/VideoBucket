var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jQuery');

import * as actions from 'actions';
import {Video} from 'Video';


describe('Video', () => {
  it('should exist', () => {
    expect(Video).toExist();
  });

  // it('should dispatch UPDATE_TODO action on click', () => {
  //   var videoData = {
  //     id: 199,
  //     text: 'write video.test.jsx test',
  //     completed: true
  //   }
  //   var action = actions.startToggleVideo(videoData.id, !videoData.completed);
  //
  //   var spy = expect.createSpy();
  //   var video = TestUtils.renderIntoDocument(<Video {...videoData} dispatch={spy}/>)
  //   var $el = $(ReactDOM.findDOMNode(video));
  //
  //   TestUtils.Simulate.click($el[0]);
  //
  //   expect(spy).toHaveBeenCalledWith(action);
  // });
  it('should dispatch DELETE_VIDEO_FROM_LIST action on delete button clikc', () => {
    var videoListId = '123455';
    var videoData = {
      videoId: '1234',
      title: 'Test1',
      youtubeId: 'X3ZqdrXgdFU',
      createdAt: 123543,
      showVideo: true,
      score: 123
    }
    var action = actions.deleteVideoFromList(videoListId, videoData.videoId);

    var spy = expect.createSpy();
    var video = TestUtils.renderIntoDocument(<Video videoListId={videoListId} {...videoData} dispatch={spy}/>)
    var $el = $(ReactDOM.findDOMNode(video));

    TestUtils.Simulate.click($el.find('button')[0]);

    expect(spy).toHaveBeenCalledWith(action);
  });
});
