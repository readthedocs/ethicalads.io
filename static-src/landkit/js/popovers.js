//
// popovers.js
// Theme module
//

'use strict';

(function() {

  //
  // Variables
  //

  var toggle = document.querySelectorAll('[data-toggle="popover"]');


  //
  // Functions
  //

  function init(toggle) {
    $(toggle).popover({
      template: '<div class="popover" role="tooltip"><div class="arrow"></div><h6 class="popover-header text-uppercase"></h6><div class="popover-body"></div></div>'
    });
  }


  //
  // Events
  //

  if (toggle) {
    init(toggle);
  }

})();
