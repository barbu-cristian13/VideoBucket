var $ = require('jQuery');

module.exports = {
  filterVideoLists: function (videoLists){
    var filteredVideoLists = videoLists;
    if(filteredVideoLists === null){
      return [];
    }
    //filter by deletedAt
    filteredVideoLists = filteredVideoLists.filter((videoList)=>{
      return (!('deletedAt' in videoList) || videoList.deletedAt === null);
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
    if(filteredVideos === null){
      return [];
    }
    //filter by deletedAt
    filteredVideos = filteredVideos.filter((video)=>{
      return (!('deletedAt' in video) || video.deletedAt === null);
    });

    return filteredVideos;
  }

};
