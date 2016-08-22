var React = require('react');
import * as Redux from 'react-redux';
import * as actions from 'actions';

export var SearchVideoList = React.createClass({
  render: function (){
    var {dispatch, searchText} = this.props;

    return (
        <div>
          <input type="search" ref="searchText" placeholder="Search Video Lists" value={searchText} onChange={() => {
              var searchText = this.refs.searchText.value;
              dispatch(actions.setSearchText(searchText));
            }}/>
        </div>
    )
  }
});

export default Redux.connect()(SearchVideoList);
