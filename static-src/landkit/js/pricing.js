//
// pricing.js
// Theme module
//

'use strict';

(function() {

  //
  // Variables
  //

  var toggle = document.querySelector('[data-toggle="price"]');
  var DURATION = 1;

  //
  // Functions
  //

  function update(e) {
    var input = e.target;
    var checked = input.checked;

    var target = input.dataset.target;
    var targets = document.querySelectorAll(target);

    [].forEach.call(targets, function(e) {
      var annual = e.dataset.annual;
      var monthly = e.dataset.monthly;
      var decimals = e.dataset.decimals ? e.dataset.decimals : null;
      var duration = e.dataset.duration ? e.dataset.duration : DURATION;
      var options = e.dataset.options ? JSON.parse(e.dataset.options) : null;

      var countUp = (!checked) ? new CountUp(e, monthly, annual, decimals, duration, options) : new CountUp(e, annual, monthly, decimals, duration, options);

      if (!countUp.error) {
        countUp.start();
      } else {
        console.error(countUp.error);
      }
    });
  }

  //
  // Events
  //

  if (typeof CountUp !== 'undefined' && toggle) {
    toggle.addEventListener('change', function(e) {
      update(e);
    });
  }

})();
