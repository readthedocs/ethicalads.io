//
// dropdown.js
//

'use strict';

(function() {

  //
  // Variables
  //

  // Selectors
  var drops = document.querySelectorAll('.navbar-nav .dropdown, .navbar-nav .dropright');

  // Events
  var showEvents = ['mouseenter'];
  var hideEvents = ['mouseleave', 'click'];

  // Transition
  var transitionDuration = 200;

  // Breakpoint
  var desktopSize = 992;

  //
  // Functions
  //

  // Show drop
  function showDrop(menu) {
    if (window.innerWidth < desktopSize) {
      return;
    }

    menu.classList.add('showing');

    setTimeout(function() {
      menu.classList.remove('showing');
      menu.classList.add('show');
    }, 1);
  }

  // Hide drop
  function hideDrop(e, menu) {
    if (window.innerWidth < desktopSize) {
      return;
    }

    if (!menu.classList.contains('show')) {
      return;
    }

    if (e.type === 'click' && e.target.closest('.dropdown-menu form')) {
      return;
    }

    menu.classList.add('showing');
    menu.classList.remove('show');

    setTimeout(function() {
      menu.classList.remove('showing');
    }, transitionDuration);
  }

  //
  // Listeners
  //

  [].forEach.call(drops, function(dropdown) {
    var menu = dropdown.querySelector('.dropdown-menu');

    // Show drop
    showEvents.forEach(function(event) {
      dropdown.addEventListener(event, function() {
        showDrop(menu);
      });
    });

    // Hide drop
    hideEvents.forEach(function(event) {
      dropdown.addEventListener(event, function(e) {
        hideDrop(e, menu);
      });
    });
  });
})();
