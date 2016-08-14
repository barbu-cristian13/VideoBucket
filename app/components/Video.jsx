var React = require('react');
var moment = require('moment');
import YouTube from 'react-youtube';
import $ from 'jQuery';

var Video = React.createClass({
  onReady(event) {
      console.log(`YouTube Player object for videoId: "${this.props.videoId}" has been saved to state.`); // eslint-disable-line
  },
  render: function(){
    var {id, title, videoId, createdAt, showVideo, score} = this.props;
    var videoClassName = score > 50 ? 'video video-liked' : score < -20 ? 'video video-disliked' : 'video';
    var renderDate = () => {
      var message = 'Added on ';
      var timestamp = createdAt;

      return message + moment.unix(timestamp).format('MMM Do YYYY');
    };
    var playerClassName = showVideo ? 'flex-video video__player' : 'flex-video video__player__hidden';
    return (

      <div className={videoClassName + ' align-center'}>
          <div>
            <h3>{title}</h3>
            <div className={playerClassName}>
              <YouTube videoId={videoId}  onReady={this.onReady} />
            </div>
            <p className="video__subtext">{renderDate()}</p>
          </div>
      </div>

    );
  }
});

// on click
// () =>{
//   dispatch(actions.startToggleTodo(id, !completed));
// }
module.exports = Video;
