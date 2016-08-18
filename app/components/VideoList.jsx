var React = require('react');
var {connect} = require('react-redux');

import * as actions from 'actions';
import Video from 'Video';
import AddVideo from 'AddVideo';

export var VideoList = React.createClass({
  render: function(){
    var {videoLists} = this.props;
    var videoList = videoLists[0];

    var renderVideos = () => {
        return videoList.videoArray.map((video) => {
          return (
              <Video key={video.videoId} videoListId={videoList.videoListId}  {...video}/>
          );
        });
    };
    return (
      <div className="videoList">
        <h2>{videoList.title}</h2>
        <div className="row">
          {renderVideos()}
          <div className="large-4 medium-6 small-6 columns">
            <AddVideo listName={videoList.title} videoListId={videoList.videoListId}/>
          </div>
        </div>
      </div>
    );
  }
});

export default connect((state) => {
  return {
    videoLists: state.videoLists
  };
})(VideoList);

// var videoList= {
//   title: 'My custom video list',
//   videoListId: '123451',
//   isPublic: true,
//   videoArray: [
//     {
//       id: '1234',
//       title: 'Test1',
//       videoId: 'X3ZqdrXgdFU',
//       createdAt: 123543,
//       showVideo: true,
//       score: 123
//     },
//     {
//       id: '1235',
//       title: 'Test2',
//       videoId: 'X3ZqdrXgdFU',
//       createdAt: 123745,
//       showVideo: true,
//       score: -21
//     },
//     {
//       id: '1236',
//       title: 'Test3',
//       videoId: 'X3ZqdrXgdFU',
//       createdAt: 123864,
//       showVideo: true,
//       score: 0
//     },
//     {
//       id: '1237',
//       title: 'Test4',
//       videoId: 'X3ZqdrXgdFU',
//       createdAt: 125344,
//       showVideo: true,
//       score: 6734
//     },
//     {
//       id: '1238',
//       title: 'Test5',
//       videoId: 'X3ZqdrXgdFU',
//       createdAt: 126432,
//       showVideo: true,
//       score: 15
//     },
//     {
//       id: '1239',
//       title: 'Test6',
//       videoId: 'X3ZqdrXgdFU',
//       createdAt: 125344,
//       showVideo: true,
//       score: 6734
//     },
//     {
//       id: '1242',
//       title: 'Test7',
//       videoId: 'X3ZqdrXgdFU',
//       createdAt: 126432,
//       showVideo: true,
//       score: 15
//     }
//   ]
