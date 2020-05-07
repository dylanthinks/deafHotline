import React, { Component } from "react"

class Exit extends Component {
  render() {

  const ExitKey = () => {
    // immediately hops over to a website
    window.open("https://google.com", "_newtab");
    // replaces current site with another site
    window.location.replace('https://google.com'); 
  }
  
  
  $(function() {
    
    $("#exit").on("click", function(e) {
      ExitKey();
    });
  
    $("#exit a").on("click", function(e) {
      // allow the (?) link to work
      e.stopPropagation();
    });
  
    $(document).keyup(function(e) {
      if (e.keycode === 27) { // escape key 
        ExitKey();
      }
    });
  
  });
  return (
    <p id="exit">Learn how to <a href="https://www.domesticshelters.org/safe-surfing">browse safely</a>Go</p>
  )
  }
}

export default Exit