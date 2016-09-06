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
    var {PublicList, videoArray, videoListId,isPublic, createdAt,deletedAt, title, dispatch} = this.props;
    PublicList = PublicList ? PublicList : false;
    var renderVideos = () => {
        return VideoAPI.filterVideos(videoArray).map((video) => {
          return (
              <Video PublicVideo={PublicList} key={video.videoId} videoListId={videoListId}  {...video}/>
          );
        });
    };
    var renderTitle = () => {
      if(PublicList === undefined || PublicList === false){
        return(
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
            <div className="small-2 columns videoList__delete clearfix">
              <button className="alert button deleteListButton right" ref="deleteVideo" onClick={this.handleDelete}>X</button>
            </div>
          </div>
        );
      }
      return (
        <div className="row">
          <div className="small-centered columns">
            <h2 >{title}</h2>
          </div>
        </div>
      );
    };
    var renderAddVideo = () => {
      if(PublicList === undefined || PublicList === false){
        return (
          <div className="large-4 medium-6 small-6 columns">
            <AddVideo listName={title} videoListId={videoListId}/>
          </div>
        );
      }
      return "";
    }
    return (
        <div className="videoList">
          {renderTitle()}
          <div className="row">
            {renderVideos()}
            {renderAddVideo()}
          </div>
        </div>

    );
  }
});

export default Redux.connect()(VideoList);
