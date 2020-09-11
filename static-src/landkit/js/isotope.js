//
// isotope.js
//

'use strict';

(function() {
  var $isotope = $('[data-isotope]');
  var $filter = $('[data-filter]');

  $filter.on('click', function() {
    var $this = $(this);
    var filter = $this.data('filter');
    var target = $this.data('target');

    $(target).isotope({
      filter: filter
    });
  });

  $isotope.imagesLoaded().progress(function() {
    $isotope.isotope('layout');
  });
})();
