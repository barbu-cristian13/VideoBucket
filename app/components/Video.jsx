var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');
var moment = require('moment');
import YouTube from 'react-youtube';
import $ from 'jQuery';


export var Video = React.createClass({
  onReady(event) {
      console.log(`YouTube Player object for videoId: "${this.props.videoId}" has been saved to state.`); // eslint-disable-line
  },
  handleDelete: function(){
    var {dispatch, videoListId, videoId} = this.props;

    dispatch(actions.deleteVideoFromList(videoListId, videoId));
  },
  render: function(){
    var {title, videoId, createdAt, showVideo, score, dispatch} = this.props;
    var videoClassName = 'video';//score > 50 ? 'video video-liked' : score < -20 ? 'video video-disliked' :
    var renderDate = () => {
      var message = 'Added on ';
      var timestamp = createdAt;

      return message + moment.unix(timestamp).format('MMM Do YYYY');
    };
    var playerClassName = showVideo ? 'flex-video video__player' : 'flex-video video__player__hidden';
    return (

      <div className={videoClassName + ' large-4 medium-6 small-6 columns'} onClick={() => {
          //dispatch(actions.toggleVideoFromList(videoId));
        }}>
          <div className="video__container">
            <h3>{title}</h3>
            <div className={playerClassName}>
              <YouTube videoId={videoId}  onReady={this.onReady} />
            </div>
            <p className="video__subtext">{renderDate()}</p>
          </div>
          <div className="video__controlls">
            <button className="button" ref="deleteVideo" onClick={this.handleDelete}>X</button>
          </div>
      </div>

    );
  }
});
export default connect()(Video);
