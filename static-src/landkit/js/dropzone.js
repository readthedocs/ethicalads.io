//
// dropzone.js
//

'use strict';

(function() {
  var dropzones = document.querySelectorAll('[data-dropzone]');

  function init(dropzone) {
    var currentFile = undefined;
    var elementOptions = dropzone.dataset.dropzone ? JSON.parse(dropzone.dataset.dropzone) : {};

    var defaultOptions = {
      previewsContainer: dropzone.querySelector('.dz-preview'),
      previewTemplate: dropzone.querySelector('.dz-preview').innerHTML,
      init: function() {
        this.on('addedfile', function(file) {
          var maxFiles = elementOptions.maxFiles;

          if (maxFiles == 1 && currentFile) {
            this.removeFile(currentFile);
          }

          currentFile = file;
        });
      }
    }

    var options = Object.assign(defaultOptions, elementOptions);

    // Clear preview
    dropzone.querySelector('.dz-preview').innerHTML = '';

    // Init dropzone
    new Dropzone(dropzone, options);
  }

  if (typeof Dropzone !== 'undefined' && dropzones) {

    // Global options
    Dropzone.autoDiscover = false;
    Dropzone.thumbnailWidth = null;
    Dropzone.thumbnailHeight = null;

    [].forEach.call(dropzones, function(dropzone) {
      init(dropzone);
    });
  }
})();
