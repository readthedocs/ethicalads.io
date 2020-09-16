//
// choices.js
//

'use strict';

(function() {
  var choices = document.querySelectorAll('[data-choices]');

  function init(choice) {
    var elementOptions = choice.dataset.choices ? JSON.parse(choice.dataset.choices) : {};

    var defaultOptions = {
      searchEnabled: false,
      classNames: {
        containerInner: choice.className,
        list: 'none',
        listSingle: 'none',
        listDropdown: 'dropdown-menu',
        itemChoice: 'dropdown-item',
        activeState: 'show',
        selectedState: 'active'
      }
    };

    var options = Object.assign(defaultOptions, elementOptions);

    new Choices(choice, options);
  }

  if (typeof Choices !== 'undefined' && choices) {
    [].forEach.call(choices, function(choice) {
      init(choice);
    });
  }
})();
