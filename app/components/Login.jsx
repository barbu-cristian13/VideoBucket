import React from 'react';
import * as Redux from 'react-redux';

import * as actions from 'actions';

export var Login = React.createClass({
  onGitHubLogin: function () {
    var {dispatch} = this.props;

    dispatch(actions.startLogin('github'));
  },
  onGoogleLogin: function () {
    var {dispatch} = this.props;

    dispatch(actions.startLogin('google'));
  },
  render: function () {
    return (
      <div>
        <h1 className="page-title">Video Bucket</h1>
        <div className="row">
          <div className="columns small-centered small-10 medium-6 large-4">
            <div className="callout callout-auth">
              <h3>Log in</h3>
              <p>
                Log in with existing account below.
              </p>
              <div className="row">
                <button className="button" onClick={this.onGitHubLogin}>Log in with GitHub</button>
              </div>
              <div className="row">
                <button className="button" onClick={this.onGoogleLogin}>Log in with Google</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

export default Redux.connect()(Login);
