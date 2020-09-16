//
// fancybox.js
// Theme module
//

'use strict';

(function() {

  //
  // Functions
  //

  function globalOptions() {
    $.fancybox.defaults.image.preload = false;
    $.fancybox.defaults.toolbar = false;
    $.fancybox.defaults.clickContent = false;
  }

  //
  // Events
  //

  if (jQuery().fancybox) {
    globalOptions();
  }

})();
