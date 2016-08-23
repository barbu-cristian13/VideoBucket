import React from 'react';
var {connect} = require('react-redux');

import VideoList from 'VideoList';
import AddVideoList from 'AddVideoList';
import SearchVideoList from 'SearchVideoList';
var VideoAPI = require('VideoAPI');

export var PublicBucket = React.createClass({
  render: function () {
    var {publicVideoLists, searchText} = this.props;

    var renderPublicVideoLists = () => {
        return VideoAPI.filterVideoLists(publicVideoLists, searchText).map((videoList) => {
          return (
              <VideoList PublicList={true} key={videoList.videoListId + 'public'} {...videoList}/>
          );
        });
    };

    return(
      <div className="videoBucket">
        <SearchVideoList />
        {renderPublicVideoLists()}
      </div>
    );
  }
});

export default connect((state) => {
  return {
    searchText: state.searchText,
    publicVideoLists: state.publicVideoLists
  };
})(PublicBucket);
