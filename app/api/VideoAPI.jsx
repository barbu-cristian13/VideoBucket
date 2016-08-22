var $ = require('jQuery');

module.exports = {
  filterVideoLists: function (videoLists, searchText=""){
    var filteredVideoLists = videoLists;
    if(filteredVideoLists === null){
      return [];
    }
    //filter by deletedAt
    filteredVideoLists = filteredVideoLists.filter((videoList)=>{
      return (!('deletedAt' in videoList) || videoList.deletedAt === null);
    });
    //filter by searchText
    filteredVideoLists = filteredVideoLists.filter((videoList) => {
      if(videoList.title.toLowerCase().includes(searchText.toLowerCase())){
        return videoList;
      }
    });

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
