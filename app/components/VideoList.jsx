var React = require('react');
import * as Redux from 'react-redux';

import * as actions from 'actions';
import Video from 'Video';
import AddVideo from 'AddVideo';
var VideoAPI = require('VideoAPI');

export var VideoList = React.createClass({
  handleDelete: function(){
    var {dispatch, videoListId} = this.props;

    dispatch(actions.startDeleteVideoList(videoListId));
  },
  render: function(){
    var {videoArray, videoListId,isPublic, createdAt,deletedAt, title, dispatch} = this.props;

    var renderVideos = () => {
        return VideoAPI.filterVideos(videoArray).map((video) => {
          return (
              <Video key={video.videoId} videoListId={videoListId}  {...video}/>
          );
        });
    };
    return (
        <div className="videoList">
          <div className="row">
            <div className="small-10 columns">
              <h2 >{title}</h2>
              <label>
                <input type="checkbox" checked={isPublic} ref="isPublicList" onChange={() => {
                    dispatch(actions.startToggleVideoList(videoListId, !isPublic));
                }}/>
                Public List
              </label>
            </div>
            <div className="small-2 columns videoList__delete">
              <button className="alert button deleteListButton" ref="deleteVideo" onClick={this.handleDelete}>X</button>
            </div>
          </div>
          <div className="row">
            {renderVideos()}
            <div className="large-4 medium-6 small-6 columns">
              <AddVideo listName={title} videoListId={videoListId}/>
            </div>
          </div>
        </div>

    );
  }
});

export default Redux.connect()(VideoList);
