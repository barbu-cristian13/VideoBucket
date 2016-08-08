var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
  onSearch: function(e){
    e.preventDefault();

    var location = this.refs.search.value;
    var encodedLocation = encodeURIComponent(location);

    if(location.length > 0){
      this.refs.search.value = '';
      window.location.hash = '#/?location=' + encodedLocation;
    }
  },
  render: function() {
    return(
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">VideoBucket</li>
            <li>
              <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>My Collection</IndexLink>
            </li>
            <li>
              <Link to="/public" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Public Collections</Link>
            </li>
            <li>
              <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <Link to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Logout</Link>
        </div>
      </div>
    );
  }
});

module.exports = Nav;
