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

    dispatch(actions.startDeleteVideoFromList(videoListId, videoId));
  },
  render: function(){
    var {title, videoId, youtubeId, createdAt, score, dispatch} = this.props;
    var videoClassName = 'video';//score > 50 ? 'video video-liked' : score < -20 ? 'video video-disliked' :
    var renderDate = () => {
      var message = 'Added on ';
      var timestamp = createdAt;

      return message + moment.unix(timestamp).format('MMM Do YYYY');
    };
    var playerClassName = 'flex-video video__player';
    return (
      <div className="large-4 medium-6 small-6 columns">
        <div className={videoClassName + ''} onClick={() => {
            //dispatch(actions.toggleVideoFromList(videoId));
          }}>
          <div className="video__container">
            <h3>{title}</h3>
            <div className={playerClassName}>
              <YouTube videoId={youtubeId}  onReady={this.onReady} />
            </div>
            <p className="video__subtext">{renderDate()}</p>
          </div>
          <div className="video__controlls">
            <button className="alert button" ref="deleteVideo" onClick={this.handleDelete}>X</button>
          </div>
      </div>
    </div>

    );
  }
});
export default connect()(Video);
