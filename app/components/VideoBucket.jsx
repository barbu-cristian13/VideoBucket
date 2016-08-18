import React from 'react';
var {connect} = require('react-redux');

import VideoList from 'VideoList';
import AddVideoList from 'AddVideoList';

export var VideoBucket = React.createClass({
  render: function () {
    var {videoLists} = this.props;

    var renderVideoLists = () => {
        return videoLists.map((videoList) => {
          return (
              <VideoList key={videoList.videoListId} {...videoList}/>
          );
        });
    };

    return(
      <div className="videoBucket">
        {renderVideoLists()}
        <AddVideoList />
      </div>
    );
  }
});

export default connect((state) => {
  return {
    videoLists: state.videoLists
  };
})(VideoBucket);
