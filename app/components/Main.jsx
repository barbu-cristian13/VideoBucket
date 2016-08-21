var React = require('react');
var {connect} = require('react-redux');

var Nav = require('Nav');

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

export default connect()(Main);
