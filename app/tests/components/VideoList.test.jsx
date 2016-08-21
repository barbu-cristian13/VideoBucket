var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jQuery');

import {configure} from 'configureStore';
import ConnectedVideoList, {VideoList} from 'VideoList';
import ConnectedVideo, {Video} from 'Video';


describe('VideoList', () => {
  it('should exist', () => {
    expect(VideoList).toExist();
  });

});
