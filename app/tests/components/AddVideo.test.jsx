var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jQuery');

import * as actions from 'actions';
var {AddVideo} = require('AddVideo');

describe('AddVideo', () => {
  it('should exist', () => {
    expect(AddVideo).toExist();
  });

  it('should call dispatch ADD_VIDEO_TO_LIST when valid input', () => {
    var videoTitle = 'TestVideo';
    var youtubeId = 'testVideo';
    var videoListId = '12343';

    var action = actions.addVideoToList(videoListId, youtubeId, videoTitle);
    var spy = expect.createSpy();
    var addVideo = TestUtils.renderIntoDocument(<AddVideo dispatch={spy} listName={"test"} videoListId={videoListId}/>);
    var $el = $(ReactDOM.findDOMNode(addVideo));

    addVideo.refs.videoTitle.value = videoTitle;
    addVideo.refs.youtubeId.value = youtubeId;

    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toHaveBeenCalledWith(action);
  });
  it('should not dispatch ADD_VIDEO_TO_LIST when invalid input', () => {
    var videoTitle = 'TestVideo';
    var youtubeId = '';
    var videoListId = '12343';

    var spy = expect.createSpy();
    var addVideo = TestUtils.renderIntoDocument(<AddVideo videoListId={videoListId} dispatch={spy}/>);
    var $el = $(ReactDOM.findDOMNode(addVideo));

    addVideo.refs.videoTitle.value = videoTitle;
    addVideo.refs.youtubeId.value = youtubeId;

    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toNotHaveBeenCalled();
  });
});
