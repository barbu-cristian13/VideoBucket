var React = require('react');

var About = React.createClass({
  render: function(){
    return(
      <div>
        <h1> Video Bucket </h1>
        <p>
          The idea of an “online container” where I could find curated lists or collections of videos, podcasts articles, free books, appealed to me during my countless hours of trying to sort and organize my own bookmark collection. Whether I was attempting to gather well made educational videos, trying to manage a list of unappreciated short films, or collecting resources for a class, none of the existing solutions satisfied my needs completely.
        </p>
        <p>
          What I needed was a web application that would allow me to manage my own collections of data; data that I could label with personal tags and then search by said tags, instead of trying to remember where to find it in a poorly organized bookmarks bar. Thus, the “VideoBucket” application came to be.
        </p>
        <p>
          The purpose of the application presented in this thesis is to let users search and manage online collections of videos. In the current state, the application only allows YouTube videos to be added, but ultimately users will be able to add any embedded video.
        </p>
      </div>
    );
  }
});

module.exports = About;
