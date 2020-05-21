import React, { Component } from "react"
import PropTypes from "prop-types"

class Exit extends Component {
  render() {

  const ExitKey = () => {
    // immediately hops over to a website
    window.open("https://google.com", "_newtab");
    // replaces current site with another site
    window.location.replace('https://google.com'); 
  }
  
  function Esc(props) {
    document.querySelector("#exit a")
  }
  $(function() {
    
     
   // $("#exit").on("click", function(e) {
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
    <button id="exit">Learn how to <a href="https://www.domesticshelters.org/safe-surfing">browse safely</a> Go</button>
  )
  }
}

export default Exit