import React from 'react';
import * as Redux from 'react-redux';
var {Link, IndexLink} = require('react-router');

import * as actions from 'actions';

export var Nav = React.createClass({
  onLogout: function (e) {
    var {dispatch} = this.props;
    e.preventDefault();

    dispatch(actions.startLogout());
  },
  render: function() {
    return(
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">VideoBucket</li>
            <li>
              <IndexLink to="/site" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>My Collection</IndexLink>
            </li>
            <li>
              <Link to="/site/public" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Public Collections</Link>
            </li>
            <li>
              <Link to="/site/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <ul className="menu">
            <li>
              <Link to="/" onClick={this.onLogout} activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Log out</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
});

export default Redux.connect()(Nav);
