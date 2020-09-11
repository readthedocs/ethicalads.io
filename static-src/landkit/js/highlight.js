//
// Highlight.js ==================================
//

'use strict';

(function() {

  //
  // Variables
  //

  var toggle = document.querySelectorAll('.highlight');


  //
  // Functions
  //

  function init(el) {
    hljs.highlightBlock(el);
  }


  //
  // Events
  //

  if (typeof hljs !== 'undefined' && toggle) {
    [].forEach.call(toggle, function(el) {
      init(el);
    });
  }

})();
