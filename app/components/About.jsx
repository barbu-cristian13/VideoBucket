var React = require('react');

var About = React.createClass({
  render: function(){
    return(
      <div>
        <h1> Video Bucket </h1>
        <p> The <strong>aim</strong> of this application is to proide a
          clean and usefull way to organize Youtube vieos.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
          dolor in reprehenderit in voluptate velit esse cillum dolore eu
          fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </p>
      </div>
    );
  }
});

module.exports = About;
