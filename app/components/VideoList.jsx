var React = require('react');

var Video = require('Video');

var VideoList = React.createClass({
  render: function(){
    //var {videoList, searchText} = this.props;
    var videoList= {
      title: ' My custom video list',
      videoListId: '12345',
      isPublic: true,
      videoArray: [
        {
          id: '1234',
          title: 'Test1',
          videoId: 'X3ZqdrXgdFU',
          createdAt: 123543,
          showVideo: true,
          score: 123
        },
        {
          id: '1235',
          title: 'Test2',
          videoId: 'X3ZqdrXgdFU',
          createdAt: 123745,
          showVideo: true,
          score: -21
        },
        {
          id: '1236',
          title: 'Test3',
          videoId: 'X3ZqdrXgdFU',
          createdAt: 123864,
          showVideo: true,
          score: 0
        },
        {
          id: '1237',
          title: 'Test4',
          videoId: 'X3ZqdrXgdFU',
          createdAt: 125344,
          showVideo: true,
          score: 6734
        },
        {
          id: '1238',
          title: 'Test5',
          videoId: 'X3ZqdrXgdFU',
          createdAt: 126432,
          showVideo: true,
          score: 15
        }
      ]
    };
    var renderVideos = () => {
      // var filteredTodos = TodoAPI.filterTodos(todoArray, showCompleted, searchText);
      // if (filteredTodos.length === 0){
      //   return (
      //     <p className="container__message">Nothing To Do</p>
      //   );
      // } else {
        // return filteredTodos.map((todo) => {
        return videoList.videoArray.map((video) => {
          return (
            <div className="large-4 medium-6 small-6 columns">
              <Video key={video.id} {...video}/>
            </div>
          );
        });
      // }
    };
    return (
      <div className="videoList">
        <h2>{videoList.title}</h2>
        <div className="row">
          {renderVideos()}
        </div>
      </div>
    );
  }
});

module.exports = VideoList;
