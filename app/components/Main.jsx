import React from 'react';
import * as Redux from 'react-redux';

import Nav from 'Nav';

export var Main = (props) => {
  return (
    <div>
      <Nav/>
      <div className="row">
        <div className="columns medium-10 large-8 small-centered">
          {props.children}
        </div>
      </div>
    </div>
  );
}

export default Redux.connect()(Main);
