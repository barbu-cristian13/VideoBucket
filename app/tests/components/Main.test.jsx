var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jQuery');

var configureStore = require('configureStore');
import VideoBucket from 'VideoBucket';
import {Main} from 'Main';

describe('Main', () => {
  it('should exist', () => {
    expect(Main).toExist();
  });


});
