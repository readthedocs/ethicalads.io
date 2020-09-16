//
// polyfills.js
// Theme module
//

'use strict';

// SVG
// Polyfill to solve shortcomings of SVG scaling in IE. Inspired by http://nicolasgallagher.com/canvas-fix-svg-scaling-in-internet-explorer/.

(function() {

  //
  // Variables
  //

  var svg = document.querySelectorAll('.svg-shim > svg');

  //
  // Methods
  //

  function init(elem) {
    // Get element's fill value
    var color = window.getComputedStyle(elem, null).getPropertyValue('color');

    // Get SVG's outerHTML and prepare to use it in image
    var content = new XMLSerializer().serializeToString(elem);
    content = content.replace(/currentColor/g, color);
    content = content.replace(/\s\s+/g, ' ');
    content = content.replace(/</g, '%3C');
    content = content.replace(/>/g, '%3E');
    content = content.replace(/#/g, '%23');
    content = content.replace(/"/g, "'");
    content = 'data:image/svg+xml,' + content;

    // Create a replacer image
    var img = document.createElement('img');
    img.src = content;
    img.alt = '...';

    // Replace SVG with image
    var parent = elem.parentNode;
    parent.appendChild(img);
    parent.removeChild(elem);
  }

  //
  // Events
  //

  // Only has affect in IE
  if (/MSIE \d|Trident.*rv:/.test(navigator.userAgent)) {
    [].forEach.call(svg, function(elem) {
      init(elem);
    });
  }
})();
