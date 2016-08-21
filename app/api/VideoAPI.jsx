var $ = require('jQuery');

module.exports = {
  setVideoLists: function(videoLists) {
    if($.isArray(videoLists)){
      localStorage.setItem('videoLists', JSON.stringify(videoLists));
      return videoLists;
    }
  },
  getVideoLists: function(){
    var stringVideoLists = localStorage.getItem('videoLists');
    var videoLists = [];

    try{
      videoLists = JSON.parse(stringVideoLists);
    } catch(e) {

    }

    return $.isArray(videoLists) ? videoLists : [];
  },
  filterVideoLists: function (videoLists){
    var filteredVideoLists = videoLists;

    //filter by deletedAt
    filteredVideoLists = filteredVideoLists.filter((videoList)=>{
      return !('deletedAt' in videoList);
    });
    // //filter by searchText
    // filteredVideoLists = filteredVideoLists.filter((video) => {
    //   if(video.text.toLowerCase().includes(searchText)){
    //     return video;
    //   }
    // });
    //sort videos with non-completed first
    // filteredVideoLists.sort((a,b) => {
    //   if(!a.completed && b.completed){
    //     return -1;
    //   }else if(a.completed && !b.completed){
    //     return 1;
    //   }else {
    //     return 0;
    //   }
    // });
    return filteredVideoLists;
  },
  filterVideos: function (videoArray){
    var filteredVideos = videoArray;

    //filter by deletedAt
    filteredVideos = filteredVideos.filter((video)=>{
      return !('deletedAt' in video);
    });

    return filteredVideos;
  }

};
