var React = require('react');
var {connect} = require('react-redux');

var Video = require('Video');
var AddVideo = require('AddVideo');

var VideoList = React.createClass({
  render: function(){
    var {videoLists} = this.props;
    var videoList = videoLists[0];
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
    //     }
    //   ]
    // }
    var renderVideos = () => {
        return videoList.videoArray.map((video) => {
          return (
            <div className="large-4 medium-6 small-6 columns">
              <Video key={video.id} {...video}/>
            </div>
          );
        });
    };
    return (
      <div key={videoList.videoListId} className="videoList">
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

module.exports = connect((state) => {
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
