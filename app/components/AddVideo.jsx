var React = require('react');
var {connect} = require('react-redux');
import * as actions from 'actions';

export var AddVideo = React.createClass({
  handleSubmit: function(e){
    e.preventDefault();
    var {dispatch, videoListId} = this.props;
    var videoTitle = this.refs.videoTitle.value;
    var youtubeId = this.refs.youtubeId.value;

    if(videoTitle.length > 0){
      //dispatch(actions.startAddTodo(todoText));
      if(youtubeId.length > 0){
        this.refs.videoTitle.value = '';
        this.refs.youtubeId.value = '';
        dispatch(actions.startAddVideoToList(videoListId, youtubeId, videoTitle));
      } else {
        this.refs.youtubeId.focus();
      }
    } else {
      this.refs.videoTitle.focus();
    }
  },
  render: function () {
    return (
      <div className="addVideo">
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref="videoTitle" placeholder="Video Title" />
          <input type="text" ref="youtubeId" placeholder="YouTube video Id" />
          <button className="button expanded">Add New Video</button>
          <span className="listName">Add to: {this.props.listName}</span>
        </form>
      </div>
    );
  }
});

export default connect()(AddVideo);
