//
// quill.js
//

'use strict';

(function() {
  var quills = document.querySelectorAll('[data-quill]');

  function init(quill) {
    var elementOptions = quill.dataset.quill ? JSON.parse(quill.dataset.quill) : {};

    var defaultOptions = {
      modules: {
        toolbar: [
          ['bold', 'italic'],
          ['link', 'blockquote', 'code', 'image'],
          [{
            'list': 'ordered'
          }, {
            'list': 'bullet'
          }]
        ]
      },
      theme: 'snow'
    };

    var options = Object.assign(defaultOptions, elementOptions);

    new Quill(quill, options);
  }

  if (typeof Quill !== 'undefined' && quills) {
    [].forEach.call(quills, function(quill) {
      init(quill);
    });
  }
})();
