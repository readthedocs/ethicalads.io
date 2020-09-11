//
// navbar.js
// Theme module
//

'use strict';

(function() {
  var navbarTogglable = document.querySelectorAll('.navbar-togglable');
  var navbarCollapse = document.querySelectorAll('.navbar-collapse');
  var windowEvents = ['load', 'scroll'];
  var isLight = false;

  function makeNavbarDark(navbar) {
    navbar.classList.remove('navbar-light');
    navbar.classList.remove('bg-white');
    navbar.classList.add('navbar-dark');

    isLight = false;
  }

  function makeNavbarLight(navbar) {
    navbar.classList.remove('navbar-dark');
    navbar.classList.add('navbar-light');
    navbar.classList.add('bg-white');

    isLight = true;
  }

  function toggleNavbar(navbar) {
    var scrollTop = window.pageYOffset;

    if (scrollTop && !isLight) {
      makeNavbarLight(navbar);
    }

    if (!scrollTop) {
      makeNavbarDark(navbar);
    }
  }

  function overflowHide() {
    var scrollbarWidth = getScrollbarWidth();

    document.documentElement.style.overflow = 'hidden';
    document.body.style.paddingRight = scrollbarWidth + 'px';
  }

  function overflowShow() {
    document.documentElement.style.overflow = '';
    document.body.style.paddingRight = '';
  }

  function getScrollbarWidth() {
    return window.innerWidth - document.documentElement.clientWidth;
  }

  [].forEach.call(navbarTogglable, function(navbar) {
    windowEvents.forEach(function(event) {
      window.addEventListener(event, function() {
        toggleNavbar(navbar);
      });
    });
  });

  [].forEach.call(navbarCollapse, function(collapse) {
    $(collapse).on({
      'show.bs.collapse': function() {
        overflowHide();
      },
      'hidden.bs.collapse': function() {
        overflowShow();
      }
    });
  });

})();
