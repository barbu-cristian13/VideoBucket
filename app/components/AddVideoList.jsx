var React = require('react');
var {connect} = require('react-redux');
import * as actions from 'actions';

export var AddVideoList = React.createClass({
  handleSubmit: function(e){
    e.preventDefault();
    var {dispatch} = this.props;
    var videoListTitle = this.refs.videoListTitle.value;
    var isPublic = this.refs.isPublic.checked;

    if(videoListTitle.length > 0){
      this.refs.videoListTitle.value = '';
      this.refs.isPublic.checked = false;
      dispatch(actions.startAddVideoList(videoListTitle, isPublic));

    } else {
      this.refs.videoListTitle.focus();
    }
  },
  render: function () {
    return (
      <div className="addVideoList">
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref="videoListTitle" placeholder="Name of the list" />
          <label>
            <input type="checkbox" ref="isPublic" />
            Public list
          </label>
          <button className="button expanded">Add New Video List</button>
        </form>
      </div>
    );
  }
});

export default connect()(AddVideoList);
